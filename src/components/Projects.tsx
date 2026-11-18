import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, Briefcase, Building2, CalendarDays, CheckCircle2, ChevronLeft, ChevronRight, Info, MapPin, Smartphone, X } from 'lucide-react'
import { companies, portfolioIntro, portfolioStats, type AppProject, type CompanyGroup } from '../data/profile'
import Reveal, { ease } from './Reveal'

/* ---------------- images with graceful fallback ---------------- */

function AppIcon({ app, size = 64, className = '' }: { app: AppProject; size?: number; className?: string }) {
  const [failed, setFailed] = useState(false)
  const style = { width: size, height: size, borderRadius: size * 0.225 }
  if (failed)
    return (
      <div className={`grid shrink-0 place-items-center font-semibold text-white shadow-lg ${className}`} style={{ ...style, background: `linear-gradient(145deg, ${app.accent[0]}, ${app.accent[1]})`, fontSize: size * 0.32 }} aria-hidden>
        {app.name.replace(/[^A-Za-z]/g, '').slice(0, 2).toUpperCase()}
      </div>
    )
  return (
    <img
      src={app.icon}
      alt={`${app.name} app icon`}
      width={size}
      height={size}
      loading="lazy"
      decoding="async"
      referrerPolicy="no-referrer"
      onError={() => setFailed(true)}
      className={`shrink-0 object-cover shadow-lg ring-1 ring-black/10 dark:ring-white/10 ${className}`}
      style={style}
    />
  )
}

function Shot({ src, app, i, className = '', eager = false }: { src: string; app: AppProject; i: number; className?: string; eager?: boolean }) {
  const [failed, setFailed] = useState(false)
  return (
    <div className={`relative overflow-hidden rounded-[18px] bg-zinc-900 shadow-2xl shadow-black/40 ring-1 ring-white/10 ${className}`}>
      {failed ? (
        <div className="grid h-full w-full place-items-center" style={{ background: `linear-gradient(160deg, ${app.accent[0]}55, ${app.accent[1]}33)` }} aria-hidden>
          <Smartphone className="text-white/50" size={22} />
        </div>
      ) : (
        <img
          src={src}
          alt={`${app.name} screenshot ${i + 1} from the App Store`}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          referrerPolicy="no-referrer"
          onError={() => setFailed(true)}
          className="h-full w-full object-cover object-top"
        />
      )}
    </div>
  )
}

/* ---------------- card ---------------- */

function ScreenFan({ app }: { app: AppProject }) {
  const s = app.screenshots.slice(0, 3)
  return (
    <div className="relative h-full w-full" aria-hidden>
      {s[1] && (
        <div className="absolute left-1/2 top-8 w-[34%] -translate-x-[125%] rotate-[-8deg] transition-all duration-700 ease-out group-hover:-translate-x-[140%] group-hover:rotate-[-12deg]">
          <Shot src={s[1]} app={app} i={1} className="aspect-[9/16] opacity-90" />
        </div>
      )}
      {s[2] && (
        <div className="absolute left-1/2 top-8 w-[34%] translate-x-[25%] rotate-[8deg] transition-all duration-700 ease-out group-hover:translate-x-[40%] group-hover:rotate-[12deg]">
          <Shot src={s[2]} app={app} i={2} className="aspect-[9/16] opacity-90" />
        </div>
      )}
      <div className="absolute left-1/2 top-4 z-10 w-[38%] -translate-x-1/2 transition-transform duration-700 ease-out group-hover:-translate-y-2 group-hover:scale-[1.03]">
        <Shot src={s[0]} app={app} i={0} className="aspect-[9/16]" />
      </div>
    </div>
  )
}

function AppCard({ app, onOpen, wide }: { app: AppProject; onOpen: () => void; wide?: boolean }) {
  return (
    <motion.article
      id={`app-${app.id}`}
      layoutId={`app-card-${app.id}`}
      className={`surface group relative flex h-full overflow-hidden rounded-[32px] transition-shadow duration-500 hover:shadow-card ${wide ? 'flex-col lg:flex-row' : 'flex-col'}`}
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 260, damping: 24 }}
    >
      <button
        type="button"
        onClick={onOpen}
        className={`relative block shrink-0 overflow-hidden text-left ${wide ? 'h-80 lg:h-auto lg:min-h-[420px] lg:w-[46%]' : 'h-80'}`}
        style={{ background: `linear-gradient(150deg, ${app.accent[0]}38, ${app.accent[1]}22 60%, transparent)` }}
        aria-label={`Open details for ${app.name}`}
      >
        <div className="absolute inset-0 opacity-80" style={{ background: `radial-gradient(70% 70% at 50% 110%, ${app.accent[0]}66, transparent 70%)` }} />
        <ScreenFan app={app} />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-card to-transparent" />
        <span className="glass absolute left-4 top-4 z-20 rounded-full px-3 py-1 text-[11px] font-medium text-fg/90">{app.category}</span>
      </button>

      <div className={`relative flex flex-1 flex-col p-6 sm:p-7 ${wide ? 'lg:justify-center lg:p-12' : ''}`}>
        <div className={`flex items-end gap-4 ${wide ? '-mt-14 lg:mt-2' : '-mt-14'}`}>
          <AppIcon app={app} size={72} className="relative z-20" />
        </div>
        <button type="button" onClick={onOpen} className="mt-4 text-left">
          <h4 className="text-2xl font-semibold tracking-tight transition-colors group-hover:text-swift-500">{app.name}</h4>
          {app.fullName && <p className="text-sm text-muted">{app.fullName}</p>}
        </button>
        <p className="mt-3 leading-relaxed text-muted">{app.description}</p>

        <div className="mt-5 rounded-2xl border hairline bg-fg/[0.03] p-4">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-swift-500">My contribution</p>
          <p className="mt-1 text-sm leading-relaxed">{app.highlight}</p>
        </div>

        <div className="mt-auto flex flex-wrap items-center gap-3 pt-6">
          <a href={app.appStoreUrl} target="_blank" rel="noopener noreferrer" className="btn-primary !px-4 !py-2.5 text-[13px]" aria-label={`${app.linkLabel}: ${app.name} (opens in a new tab)`}>
            {app.linkLabel} <ArrowUpRight size={14} />
          </a>
          <button type="button" onClick={onOpen} className="btn-secondary !px-4 !py-2.5 text-[13px]">
            Details <ArrowUpRight size={14} />
          </button>
        </div>
      </div>
    </motion.article>
  )
}

/* ---------------- detail modal ---------------- */

function AppModal({ app, group, onClose }: { app: AppProject; group: CompanyGroup; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null)
  const railRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const prev = document.activeElement as HTMLElement | null
    closeRef.current?.focus()
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
      prev?.focus()
    }
  }, [onClose])

  const scroll = (dir: number) => railRef.current?.scrollBy({ left: dir * 240, behavior: 'smooth' })

  return (
    <motion.div className="fixed inset-0 z-[70] flex items-end justify-center sm:items-center sm:p-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <div className="absolute inset-0 bg-black/65 backdrop-blur-md" onClick={onClose} aria-hidden />
      <motion.div
        layoutId={`app-card-${app.id}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby={`${app.id}-title`}
        className="surface relative max-h-[92svh] w-full max-w-5xl overflow-y-auto rounded-t-[32px] !bg-bg2 sm:rounded-[32px]"
        transition={{ type: 'spring', stiffness: 260, damping: 30 }}
      >
        <button ref={closeRef} onClick={onClose} className="glass absolute right-4 top-4 z-20 grid h-10 w-10 place-items-center rounded-full" aria-label="Close app details">
          <X size={18} />
        </button>

        {/* header */}
        <div className="relative overflow-hidden px-6 pb-8 pt-10 sm:px-10" style={{ background: `linear-gradient(160deg, ${app.accent[0]}40, ${app.accent[1]}1f 55%, transparent)` }}>
          <motion.div className="flex flex-col gap-5 sm:flex-row sm:items-center" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6, ease }}>
            <AppIcon app={app} size={96} />
            <div className="min-w-0 flex-1">
              <p className="eyebrow">{app.category}</p>
              <h3 id={`${app.id}-title`} className="mt-1 text-3xl font-semibold tracking-tight sm:text-4xl">
                {app.fullName ?? app.name}
              </h3>
              <p className="mt-1 text-sm text-muted">Published by {app.publisher} · App Store category: {app.storeGenre}</p>
            </div>
            <a href={app.appStoreUrl} target="_blank" rel="noopener noreferrer" className="btn-primary self-start sm:self-center">
              {app.linkLabel} <ArrowUpRight size={15} />
            </a>
          </motion.div>
        </div>

        {/* gallery */}
        <div className="relative border-y hairline py-6">
          <div ref={railRef} className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-2 sm:px-10 [scrollbar-width:thin]">
            {app.screenshots.map((s, i) => (
              <motion.div key={s} className="w-[170px] shrink-0 snap-start sm:w-[200px]" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 + i * 0.05, duration: 0.5, ease }}>
                <Shot src={s} app={app} i={i} className="aspect-[9/16]" eager={i < 3} />
              </motion.div>
            ))}
          </div>
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-16 bg-gradient-to-l from-bg2 to-transparent sm:block" />
          <div className="mt-3 flex items-center justify-between px-6 sm:px-10">
            <p className="flex items-center gap-1.5 text-[11px] text-muted">
              <Info size={12} /> Icon &amp; screenshots from the public App Store listing · © {app.publisher}
            </p>
            <div className="hidden gap-2 sm:flex">
              <button onClick={() => scroll(-1)} className="grid h-8 w-8 place-items-center rounded-full bg-fg/[0.07] hover:bg-fg/[0.12]" aria-label="Previous screenshots"><ChevronLeft size={16} /></button>
              <button onClick={() => scroll(1)} className="grid h-8 w-8 place-items-center rounded-full bg-fg/[0.07] hover:bg-fg/[0.12]" aria-label="Next screenshots"><ChevronRight size={16} /></button>
            </div>
          </div>
        </div>

        {/* body */}
        <div className="grid gap-10 p-6 sm:p-10 md:grid-cols-2">
          <div>
            <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted">
              <span className="flex items-center gap-1.5"><Building2 size={14} /> {group.company}</span>
              <span className="flex items-center gap-1.5"><Briefcase size={14} /> {group.role}</span>
              <span className="flex items-center gap-1.5"><CalendarDays size={14} /> {group.period}</span>
            </div>
            <p className="mt-5 text-lg leading-relaxed">{app.description}</p>

            <h4 className="mt-8 text-sm font-semibold uppercase tracking-wider text-muted">My contribution</h4>
            <ul className="mt-3 space-y-2.5">
              {app.contribution.map((c) => (
                <li key={c} className="flex gap-3 leading-relaxed text-muted">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-swift-500" />
                  {c}
                </li>
              ))}
            </ul>

            <h4 className="mt-8 text-sm font-semibold uppercase tracking-wider text-muted">Technologies</h4>
            <div className="mt-3 flex flex-wrap gap-2">
              {app.tech.map((t) => (
                <span key={t} className="chip">{t}</span>
              ))}
            </div>
            <p className="mt-2 text-xs text-muted/80">Stack reflects my work at {group.shortName}, per my résumé.</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-muted">About the app</h4>
            <p className="mt-1 text-xs text-muted/80">Summarized from the public App Store listing</p>
            <ul className="mt-4 grid gap-3">
              {app.features.map((f) => (
                <li key={f} className="flex items-start gap-3 rounded-2xl border hairline bg-fg/[0.03] p-4 text-sm leading-relaxed">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full" style={{ background: app.accent[0] }} />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

/* ---------------- company block ---------------- */

const cols: Record<number, string> = { 1: '', 2: 'md:grid-cols-2', 3: 'md:grid-cols-2 lg:grid-cols-3' }

function CompanyBlock({ group, index, onOpen }: { group: CompanyGroup; index: number; onOpen: (id: string) => void }) {
  return (
    <div className="relative">
      <Reveal>
        <header className="flex flex-col gap-5 border-t hairline pt-10 md:flex-row md:items-end md:justify-between">
          <div className="flex items-start gap-5">
            <span className="text-gradient font-mono text-5xl font-semibold leading-none tracking-tighter sm:text-6xl">0{index + 1}</span>
            <div>
              <h3 className="text-3xl font-semibold tracking-tight sm:text-4xl">{group.company}</h3>
              <p className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted">
                <span className="flex items-center gap-1.5 font-medium text-swift-500"><Briefcase size={14} /> {group.role}</span>
                <span className="flex items-center gap-1.5"><CalendarDays size={14} /> {group.period}</span>
                <span className="flex items-center gap-1.5"><MapPin size={14} /> {group.location}</span>
              </p>
              <p className="mt-3 max-w-2xl leading-relaxed text-muted">{group.intro}</p>
            </div>
          </div>
          <a href={`#exp-${group.id}`} className="inline-flex shrink-0 items-center gap-1 text-sm font-medium text-muted transition hover:text-fg">
            Role at {group.shortName} <ArrowUpRight size={14} />
          </a>
        </header>
      </Reveal>

      <div className={`mt-8 grid gap-5 ${cols[group.apps.length] ?? cols[3]}`}>
        {group.apps.map((app, i) => (
          <Reveal key={app.id} delay={0.06 * i} className="h-full">
            <AppCard app={app} onOpen={() => onOpen(app.id)} wide={group.apps.length === 1} />
          </Reveal>
        ))}
      </div>
    </div>
  )
}

/* ---------------- section ---------------- */

export default function Projects() {
  const [openId, setOpenId] = useState<string | null>(null)
  const close = useCallback(() => setOpenId(null), [])
  const group = companies.find((c) => c.apps.some((a) => a.id === openId))
  const open = group?.apps.find((a) => a.id === openId)
  const industries = companies.flatMap((c) => c.apps.map((a) => a.category.split(' · ')[0]))

  return (
    <section id="work" className="relative py-28 sm:py-36">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden>
        <div className="absolute left-[-10%] top-40 h-[480px] w-[480px] rounded-full bg-swift-500/10 blur-[120px]" />
        <div className="absolute right-[-10%] top-[40%] h-[520px] w-[520px] rounded-full bg-indigo-500/10 blur-[130px]" />
      </div>
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <Reveal><p className="eyebrow">Featured iOS projects</p></Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-3 text-5xl font-semibold tracking-tightest sm:text-6xl md:text-7xl">
                <span className="text-chrome">Applications </span>
                <span className="text-gradient">I’ve built.</span>
              </h2>
            </Reveal>
            {portfolioIntro.map((p, i) => (
              <Reveal key={i} delay={0.1 + i * 0.05}>
                <p className={`max-w-2xl leading-relaxed ${i === 0 ? 'mt-6 text-lg text-fg/90' : 'mt-3 text-muted'}`}>{p}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <dl className="grid grid-cols-2 gap-3">
              {portfolioStats.map((s) => (
                <div key={s.label} className="surface rounded-3xl p-5">
                  <dd className={`text-gradient font-semibold tracking-tight ${s.value.length > 3 ? 'text-2xl sm:text-[26px]' : 'text-4xl'}`}>{s.value}</dd>
                  <dt className="mt-1 text-sm text-muted">{s.label}</dt>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <ul className="mt-10 flex flex-wrap gap-2" aria-label="Industries">
            {industries.map((d) => (
              <li key={d} className="chip !px-3.5 !py-1.5 !text-[13px]">{d}</li>
            ))}
          </ul>
        </Reveal>

        <div className="mt-16 space-y-20">
          {companies.map((g, i) => (
            <CompanyBlock key={g.id} group={g} index={i} onOpen={setOpenId} />
          ))}
        </div>

        <Reveal>
          <p className="mt-16 text-center text-xs leading-relaxed text-muted/80">
            These are team products: I contributed as an iOS Developer within each company’s development team. App names, icons and screenshots belong to their respective publishers.
          </p>
        </Reveal>
      </div>

      <AnimatePresence>{open && group && <AppModal key={open.id} app={open} group={group} onClose={close} />}</AnimatePresence>
    </section>
  )
}
