import { useState, type MouseEvent } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Code2, Gauge, Layers, Plug, Wrench } from 'lucide-react'
import { skills, type SkillGroup } from '../data/profile'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const icons = { code: Code2, layers: Layers, wrench: Wrench, plug: Plug, gauge: Gauge }

const spans: Record<string, string> = {
  lang: 'md:col-span-3',
  arch: 'md:col-span-3',
  tools: 'md:col-span-2',
  frameworks: 'md:col-span-2',
  practices: 'md:col-span-2',
}

function SkillCard({ group }: { group: SkillGroup }) {
  const Icon = icons[group.icon]
  const [hover, setHover] = useState<string | null>(null)
  const [pos, setPos] = useState({ x: 50, y: 50 })
  const note = group.items.find((i) => i.name === hover)?.note

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect()
    setPos({ x: ((e.clientX - r.left) / r.width) * 100, y: ((e.clientY - r.top) / r.height) * 100 })
  }

  return (
    <div onMouseMove={onMove} className="surface group relative flex h-full flex-col overflow-hidden rounded-[28px] p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-card sm:p-7">
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: `radial-gradient(420px circle at ${pos.x}% ${pos.y}%, rgba(10,132,255,0.12), transparent 45%)` }}
        aria-hidden
      />
      <div className="relative flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold tracking-tight">{group.title}</h3>
          <p className="mt-1 text-sm text-muted">{group.blurb}</p>
        </div>
        <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-swift-400 to-indigo-500 text-white shadow-lg shadow-swift-500/20 transition-transform duration-500 group-hover:rotate-[-8deg] group-hover:scale-110">
          <Icon size={20} />
        </div>
      </div>

      <ul className="relative mt-6 flex flex-wrap gap-2">
        {group.items.map((s) => (
          <li key={s.name}>
            <button
              type="button"
              onMouseEnter={() => setHover(s.name)}
              onMouseLeave={() => setHover(null)}
              onFocus={() => setHover(s.name)}
              onBlur={() => setHover(null)}
              onClick={() => setHover((h) => (h === s.name ? null : s.name))}
              className={`rounded-full border px-3.5 py-1.5 text-sm font-medium transition-all duration-300 ${
                hover === s.name ? 'border-swift-500/60 bg-swift-500/10 text-fg' : 'hairline bg-fg/[0.03] text-fg/85 hover:bg-fg/[0.06]'
              }`}
              aria-describedby={`${group.id}-note`}
            >
              {s.name}
            </button>
          </li>
        ))}
      </ul>

      <div id={`${group.id}-note`} className="relative mt-auto min-h-[20px] pt-5 text-xs text-muted" aria-live="polite">
        <AnimatePresence mode="wait">
          <motion.span key={note ?? 'default'} initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }} transition={{ duration: 0.2 }} className="block">
            {note ?? `${group.items.length} skills · hover or tap one`}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 sm:py-36">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-bg2/60 to-transparent" aria-hidden />
      <div className="container-x">
        <SectionHeading eyebrow="Technical skills" title="The toolkit." subtitle="The languages, frameworks and practices I use to take iOS apps from idea to the App Store." />
        <div className="mt-16 grid gap-4 md:grid-cols-6">
          {skills.map((g, i) => (
            <Reveal key={g.id} delay={0.05 * i} className={spans[g.id]}>
              <SkillCard group={g} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
