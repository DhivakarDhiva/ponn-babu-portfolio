import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion'
import { Download, Menu, Moon, Sun, X } from 'lucide-react'
import { nav, profile } from '../data/profile'
import { useTheme } from '../hooks/useTheme'
import { useActiveSection } from '../hooks/useActiveSection'

const ids = nav.map((n) => n.id)

export default function Navbar() {
  const { theme, toggle } = useTheme()
  const active = useActiveSection(ids)
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.div className="absolute inset-x-0 top-0 h-[2px] origin-left bg-gradient-to-r from-swift-400 via-swift-500 to-indigo-500" style={{ scaleX: progress }} aria-hidden />
      <div className={`transition-all duration-500 ${scrolled ? 'glass border-x-0 border-t-0' : 'border-b border-transparent'}`}>
        <nav className="container-x flex h-16 items-center justify-between" aria-label="Primary">
          <a href="#top" className="group flex items-center gap-2.5" aria-label={`${profile.name} — back to top`}>
            <span className="grid h-8 w-8 place-items-center rounded-[10px] bg-gradient-to-br from-swift-400 via-swift-500 to-indigo-500 text-[13px] font-bold text-white shadow-lg shadow-swift-500/30 transition-transform group-hover:scale-105">
              PB
            </span>
            <span className="hidden text-[15px] font-semibold tracking-tight sm:block">{profile.name}</span>
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {nav.map((n) => (
              <li key={n.id}>
                <a
                  href={`#${n.id}`}
                  className={`relative rounded-full px-3.5 py-2 text-[13px] font-medium transition-colors ${active === n.id ? 'text-fg' : 'text-muted hover:text-fg'}`}
                  aria-current={active === n.id ? 'true' : undefined}
                >
                  {active === n.id && (
                    <motion.span layoutId="nav-pill" className="absolute inset-0 -z-10 rounded-full bg-fg/[0.07]" transition={{ type: 'spring', stiffness: 380, damping: 32 }} />
                  )}
                  {n.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <button
              onClick={toggle}
              className="grid h-9 w-9 place-items-center rounded-full text-muted transition hover:bg-fg/[0.07] hover:text-fg"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span key={theme} initial={{ rotate: -90, opacity: 0, scale: 0.6 }} animate={{ rotate: 0, opacity: 1, scale: 1 }} exit={{ rotate: 90, opacity: 0, scale: 0.6 }} transition={{ duration: 0.25 }}>
                  {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
                </motion.span>
              </AnimatePresence>
            </button>
            <a href={profile.resume} download className="btn-primary hidden !px-4 !py-2 text-[13px] sm:inline-flex">
              <Download size={15} /> Résumé
            </a>
            <button onClick={() => setOpen(true)} className="grid h-9 w-9 place-items-center rounded-full text-fg transition hover:bg-fg/[0.07] md:hidden" aria-label="Open menu" aria-expanded={open}>
              <Menu size={19} />
            </button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div className="fixed inset-0 z-[60] bg-bg/95 backdrop-blur-2xl md:hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} role="dialog" aria-modal="true" aria-label="Menu">
            <div className="container-x flex h-16 items-center justify-end">
              <button onClick={() => setOpen(false)} className="grid h-10 w-10 place-items-center rounded-full hover:bg-fg/[0.07]" aria-label="Close menu">
                <X size={20} />
              </button>
            </div>
            <ul className="container-x mt-6 space-y-1">
              {nav.map((n, i) => (
                <motion.li key={n.id} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 * i + 0.05 }}>
                  <a href={`#${n.id}`} onClick={() => setOpen(false)} className="block border-b hairline py-4 text-3xl font-semibold tracking-tight">
                    {n.label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <div className="container-x mt-8">
              <a href={profile.resume} download className="btn-primary w-full">
                <Download size={16} /> Download Résumé
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
