import { ArrowUp, Mail, Phone } from 'lucide-react'
import { Github, Linkedin } from './BrandIcons'
import { nav, profile } from '../data/profile'

export default function Footer() {
  const links = [
    { href: `mailto:${profile.email}`, label: 'Email', icon: Mail, ext: false },
    { href: profile.phoneHref, label: 'Phone', icon: Phone, ext: false },
    ...(profile.social.linkedin ? [{ href: profile.social.linkedin, label: 'LinkedIn', icon: Linkedin, ext: true }] : []),
    ...(profile.social.github ? [{ href: profile.social.github, label: 'GitHub', icon: Github, ext: true }] : []),
  ]
  return (
    <footer className="border-t hairline">
      <div className="container-x flex flex-col items-center justify-between gap-6 py-10 md:flex-row">
        <div className="text-center md:text-left">
          <p className="font-semibold tracking-tight">{profile.name}</p>
          <p className="mt-1 text-sm text-muted">
            {profile.title} · {profile.tagline}
          </p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-muted">
          {nav.map((n) => (
            <a key={n.id} href={`#${n.id}`} className="hover:text-fg">
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          {links.map((l) => (
            <a key={l.label} href={l.href} {...(l.ext ? { target: '_blank', rel: 'noopener noreferrer' } : {})} aria-label={l.label} className="grid h-10 w-10 place-items-center rounded-full text-muted transition hover:bg-fg/[0.07] hover:text-fg">
              <l.icon size={17} />
            </a>
          ))}
          <a href="#top" aria-label="Back to top" className="ml-1 grid h-10 w-10 place-items-center rounded-full bg-fg/[0.07] text-fg transition hover:-translate-y-0.5">
            <ArrowUp size={17} />
          </a>
        </div>
      </div>
      <p className="pb-8 text-center text-xs text-muted/70">© {new Date().getFullYear()} {profile.name}. Designed &amp; built with React, TypeScript, Tailwind CSS and Framer Motion.</p>
    </footer>
  )
}
