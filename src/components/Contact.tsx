import { useState, type FormEvent } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Check, Copy, Download, Mail, MapPin, Phone, Send } from 'lucide-react'
import { Github, Linkedin } from './BrandIcons'
import { profile } from '../data/profile'
import Reveal from './Reveal'

type Fields = { name: string; email: string; subject: string; message: string }
const empty: Fields = { name: '', email: '', subject: '', message: '' }

function validate(f: Fields) {
  const e: Partial<Record<keyof Fields, string>> = {}
  if (f.name.trim().length < 2) e.name = 'Please enter your name.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(f.email.trim())) e.email = 'Please enter a valid email address.'
  if (f.subject.trim().length < 3) e.subject = 'Please add a short subject.'
  if (f.message.trim().length < 10) e.message = 'Your message should be at least 10 characters.'
  return e
}

export default function Contact() {
  const [fields, setFields] = useState<Fields>(empty)
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({})
  const [sent, setSent] = useState(false)
  const [copied, setCopied] = useState(false)

  const set = (k: keyof Fields) => (e: { target: { value: string } }) => {
    setFields((f) => ({ ...f, [k]: e.target.value }))
    if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined }))
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    const errs = validate(fields)
    setErrors(errs)
    if (Object.keys(errs).length) {
      document.getElementById(`cf-${Object.keys(errs)[0]}`)?.focus()
      return
    }
    const body = `${fields.message.trim()}\n\n— ${fields.name.trim()}\n${fields.email.trim()}`
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(fields.subject.trim())}&body=${encodeURIComponent(body)}`
    setSent(true)
    setFields(empty)
  }

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }

  const socials = [
    profile.social.linkedin && { href: profile.social.linkedin, label: 'LinkedIn', icon: Linkedin },
    profile.social.github && { href: profile.social.github, label: 'GitHub', icon: Github },
  ].filter(Boolean) as { href: string; label: string; icon: typeof Github }[]

  const field = (k: keyof Fields, label: string, type = 'text', auto?: string) => (
    <div>
      <label htmlFor={`cf-${k}`} className="mb-2 block text-sm font-medium">
        {label}
      </label>
      <input id={`cf-${k}`} type={type} autoComplete={auto} value={fields[k]} onChange={set(k)} className="input" aria-invalid={!!errors[k]} aria-describedby={errors[k] ? `cf-${k}-err` : undefined} />
      {errors[k] && (
        <p id={`cf-${k}-err`} className="mt-1.5 text-xs text-red-500">
          {errors[k]}
        </p>
      )}
    </div>
  )

  return (
    <section id="contact" className="relative overflow-hidden py-28 sm:py-36">
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
        <div className="absolute left-1/2 top-1/3 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-gradient-to-r from-swift-500/20 via-sky-500/10 to-indigo-500/20 blur-[120px]" />
      </div>
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="eyebrow">Contact</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-3 text-5xl font-semibold tracking-tightest sm:text-6xl md:text-7xl">
              <span className="text-chrome">Let’s work </span>
              <span className="text-gradient">together.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-lg leading-relaxed text-muted">Have an iOS role, a product idea or an app that needs care? I’d love to hear about it.</p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="space-y-4">
            <div className="surface flex items-center gap-4 rounded-3xl p-5">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-swift-500/10 text-swift-500"><Mail size={20} /></span>
              <div className="min-w-0 flex-1">
                <p className="text-xs text-muted">Email</p>
                <a href={`mailto:${profile.email}`} className="block truncate font-medium hover:text-swift-500">{profile.email}</a>
              </div>
              <button onClick={copyEmail} className="grid h-10 w-10 place-items-center rounded-full text-muted transition hover:bg-fg/[0.07] hover:text-fg" aria-label="Copy email address">
                {copied ? <Check size={17} className="text-emerald-500" /> : <Copy size={17} />}
              </button>
            </div>
            <a href={profile.phoneHref} className="surface flex items-center gap-4 rounded-3xl p-5 transition hover:-translate-y-0.5">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-emerald-500/10 text-emerald-500"><Phone size={20} /></span>
              <div>
                <p className="text-xs text-muted">Phone</p>
                <p className="font-medium">{profile.phone}</p>
              </div>
            </a>
            <div className="surface flex items-center gap-4 rounded-3xl p-5">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-sky-500/10 text-sky-500"><MapPin size={20} /></span>
              <div>
                <p className="text-xs text-muted">Location</p>
                <p className="font-medium">{profile.location}</p>
              </div>
            </div>
            <a href={profile.resume} download className="surface flex items-center gap-4 rounded-3xl p-5 transition hover:-translate-y-0.5">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-indigo-500/10 text-indigo-500"><Download size={20} /></span>
              <div>
                <p className="text-xs text-muted">Résumé</p>
                <p className="font-medium">Download PDF</p>
              </div>
            </a>
            {socials.length > 0 && (
              <div className="flex gap-3 pt-1">
                {socials.map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="btn-secondary" aria-label={s.label}>
                    <s.icon size={16} /> {s.label}
                  </a>
                ))}
              </div>
            )}
          </Reveal>

          <Reveal delay={0.08}>
            <form onSubmit={onSubmit} noValidate className="surface relative rounded-[32px] p-6 sm:p-8" aria-label="Contact form">
              <div className="grid gap-5 sm:grid-cols-2">
                {field('name', 'Name', 'text', 'name')}
                {field('email', 'Email', 'email', 'email')}
              </div>
              <div className="mt-5">{field('subject', 'Subject')}</div>
              <div className="mt-5">
                <label htmlFor="cf-message" className="mb-2 block text-sm font-medium">
                  Message
                </label>
                <textarea id="cf-message" rows={6} value={fields.message} onChange={set('message')} className="input resize-none" aria-invalid={!!errors.message} aria-describedby={errors.message ? 'cf-message-err' : undefined} />
                {errors.message && <p id="cf-message-err" className="mt-1.5 text-xs text-red-500">{errors.message}</p>}
              </div>
              <div className="mt-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs text-muted">Opens your email app with the message ready to send.</p>
                <button type="submit" className="btn-primary group w-full sm:w-auto">
                  Send message <Send size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
              <AnimatePresence>
                {sent && (
                  <motion.div role="status" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="mt-5 flex items-center gap-2 rounded-2xl bg-emerald-500/10 px-4 py-3 text-sm text-emerald-600 dark:text-emerald-400">
                    <Check size={16} /> Thanks! Your email app should open with your message — just hit send.
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
