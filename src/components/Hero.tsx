import { motion, useMotionValue, useScroll, useSpring, useTransform } from 'framer-motion'
import { ArrowRight, Download, Layers, Mail, MapPin, Smartphone, Sparkles, Zap } from 'lucide-react'
import type { MouseEvent } from 'react'
import { profile, stats } from '../data/profile'
import { ease } from './Reveal'

function Orbs() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden>
      <div className="bg-grid absolute inset-0" />
      <motion.div
        className="absolute -left-40 top-[-10%] h-[520px] w-[520px] rounded-full bg-swift-500/25 blur-[120px] dark:bg-swift-500/20"
        animate={{ x: [0, 60, -20, 0], y: [0, 40, 80, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute right-[-10%] top-[10%] h-[560px] w-[560px] rounded-full bg-indigo-500/20 blur-[130px]"
        animate={{ x: [0, -50, 30, 0], y: [0, 60, -30, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-[-20%] left-[30%] h-[420px] w-[420px] rounded-full bg-sky-500/15 blur-[120px]"
        animate={{ x: [0, 40, -40, 0], y: [0, -30, 10, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-bg" />
    </div>
  )
}

const chips = [
  { icon: Smartphone, label: 'UIKit', cls: '-left-6 top-10 sm:-left-14', d: 0 },
  { icon: Sparkles, label: 'SwiftUI', cls: '-right-4 top-1/3 sm:-right-12', d: 1.2 },
  { icon: Layers, label: 'MVVM', cls: '-left-2 bottom-16 sm:-left-10', d: 2.4 },
  { icon: Zap, label: 'Performance', cls: 'right-2 -bottom-4 sm:-right-4', d: 0.6 },
]

function Portrait({ ready }: { ready: boolean }) {
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), { stiffness: 150, damping: 18 })
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]), { stiffness: 150, damping: 18 })

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect()
    mx.set((e.clientX - r.left) / r.width - 0.5)
    my.set((e.clientY - r.top) / r.height - 0.5)
  }

  return (
    <motion.div
      className="relative mx-auto w-[260px] sm:w-[320px] lg:w-[360px]"
      initial={{ opacity: 0, scale: 0.92, y: 20 }}
      animate={ready ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{ duration: 1, ease, delay: 0.25 }}
      style={{ perspective: 1000 }}
    >
      <motion.div onMouseMove={onMove} onMouseLeave={() => { mx.set(0); my.set(0) }} style={{ rotateX: rx, rotateY: ry, transformStyle: 'preserve-3d' }} className="relative">
        {/* rotating gradient ring */}
        <div className="absolute -inset-[3px] overflow-hidden rounded-[30%]" aria-hidden>
          <motion.div
            className="absolute inset-[-50%]"
            style={{ background: 'conic-gradient(from 0deg, #64d2ff, #0a84ff, #5e5ce6, #7d7aff, #38bdf8, #64d2ff)' }}
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
          />
        </div>
        <div className="absolute -inset-10 -z-10 rounded-full bg-gradient-to-br from-swift-500/40 to-indigo-500/40 opacity-60 blur-3xl" aria-hidden />
        <div className="relative overflow-hidden rounded-[30%] bg-black">
          <picture>
            <source srcSet={profile.photo} type="image/webp" />
            <img src={profile.photoFallback} alt={`Portrait of ${profile.name}`} width={800} height={800} className="aspect-square w-full object-cover" fetchPriority="high" decoding="async" />
          </picture>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-white/10" />
        </div>

        {chips.map(({ icon: Icon, label, cls, d }) => (
          <motion.div
            key={label}
            className={`glass absolute ${cls} flex items-center gap-1.5 rounded-2xl px-3 py-2 text-xs font-medium shadow-glow`}
            style={{ transform: 'translateZ(40px)' }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={ready ? { opacity: 1, scale: 1, y: [0, -8, 0] } : {}}
            transition={{ opacity: { delay: 0.8 + d * 0.15 }, scale: { delay: 0.8 + d * 0.15 }, y: { duration: 5, repeat: Infinity, ease: 'easeInOut', delay: d } }}
          >
            <Icon size={14} className="text-swift-500" /> {label}
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default function Hero({ ready }: { ready: boolean }) {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 600], [0, 120])
  const opacity = useTransform(scrollY, [0, 500], [1, 0])

  const item = (i: number) => ({
    initial: { opacity: 0, y: 24, filter: 'blur(8px)' },
    animate: ready ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {},
    transition: { duration: 0.9, ease, delay: 0.15 + i * 0.08 },
  })

  return (
    <section id="top" className="relative isolate flex min-h-[100svh] items-center overflow-hidden pb-16 pt-28 sm:pt-32">
      <Orbs />
      <motion.div style={{ y, opacity }} className="container-x grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
        <div className="order-2 text-center lg:order-1 lg:text-left">
          <motion.div {...item(0)} className="inline-flex items-center gap-2 rounded-full glass px-3.5 py-1.5 text-xs font-medium text-muted">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            {profile.currentRole}
          </motion.div>

          <motion.p {...item(1)} className="mt-7 text-lg font-medium text-muted">
            Hi, I’m {profile.name}.
          </motion.p>
          <motion.h1 {...item(2)} className="mt-2 text-[44px] font-semibold leading-[1.02] tracking-tightest sm:text-6xl lg:text-7xl">
            <span className="text-chrome">iOS Developer</span>
            <br />
            <span className="text-gradient">crafting apps that feel native.</span>
          </motion.h1>
          <motion.p {...item(3)} className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted lg:mx-0">
            4+ years building and maintaining iOS applications with <strong className="font-semibold text-fg">Swift, SwiftUI and UIKit</strong> — from a crypto exchange to enterprise service management. I care about clean architecture, smooth performance and reliable, user-friendly experiences.
          </motion.p>

          <motion.div {...item(4)} className="mt-9 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <a href="#work" className="btn-primary group">
              View My Work <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a href={profile.resume} download className="btn-secondary">
              <Download size={16} /> Download Résumé
            </a>
            <a href="#contact" className="btn-secondary">
              <Mail size={16} /> Contact Me
            </a>
          </motion.div>

          <motion.p {...item(5)} className="mt-6 flex items-center justify-center gap-1.5 text-sm text-muted lg:justify-start">
            <MapPin size={14} /> {profile.location}
          </motion.p>
        </div>

        <div className="order-1 lg:order-2">
          <Portrait ready={ready} />
        </div>
        <motion.dl
          className="glass col-span-full order-3 mx-auto mt-4 grid w-full max-w-4xl grid-cols-2 overflow-hidden rounded-3xl sm:grid-cols-4"
          initial={{ opacity: 0, y: 30 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease, delay: 0.7 }}
        >
          {stats.map((s, i) => (
            <div key={s.label} className={`hairline px-4 py-4 text-center sm:py-5 ${i % 2 === 1 ? 'border-l' : ''} ${i > 1 ? 'border-t sm:border-t-0' : ''} ${i === 2 ? 'sm:border-l' : ''}`}>
              <dt className="sr-only">{s.label}</dt>
              <dd className="text-gradient text-2xl font-semibold tracking-tight sm:text-3xl">{s.value}</dd>
              <dd className="mt-1 text-[11px] leading-snug text-muted sm:text-xs">{s.label}</dd>
            </div>
          ))}
        </motion.dl>
      </motion.div>

    </section>
  )
}
