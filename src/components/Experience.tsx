import { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Briefcase, Calendar, CheckCircle2, MapPin } from 'lucide-react'
import { companies, experience } from '../data/profile'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 70%', 'end 60%'] })
  const height = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <section id="experience" className="relative py-28 sm:py-36">
      <div className="container-x">
        <SectionHeading eyebrow="Professional experience" title="Where I’ve built." subtitle="Three teams, one focus: reliable, high-quality iOS applications. Tap an app icon to jump to it." />

        <div ref={ref} className="relative mt-16">
          <div className="absolute bottom-0 left-[15px] top-0 w-px bg-fg/10 sm:left-[19px]" aria-hidden />
          <motion.div style={{ height }} className="absolute left-[15px] top-0 w-px bg-gradient-to-b from-swift-400 via-swift-500 to-indigo-500 sm:left-[19px]" aria-hidden />

          <ol className="space-y-8">
            {experience.map((job, i) => (
              <Reveal as="li" key={job.company} delay={0.05 * i} className="relative scroll-mt-24 pl-12 sm:pl-16">
                <span id={`exp-${job.id}`} className="absolute -top-24" aria-hidden />
                <span className="absolute left-0 top-7 grid h-8 w-8 place-items-center rounded-full border hairline bg-bg sm:h-10 sm:w-10">
                  <span className={`h-2.5 w-2.5 rounded-full ${job.current ? 'bg-emerald-500 shadow-[0_0_0_6px_rgba(16,185,129,0.18)]' : 'bg-gradient-to-br from-swift-400 to-indigo-500'}`} />
                </span>

                <article className="surface group rounded-[28px] p-6 transition-all duration-500 hover:shadow-card sm:p-8">
                  <header className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-2xl font-semibold tracking-tight">{job.company}</h3>
                        {job.current && <span className="rounded-full bg-emerald-500/15 px-2.5 py-0.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400">Current</span>}
                      </div>
                      <p className="mt-1 flex items-center gap-1.5 font-medium text-swift-500">
                        <Briefcase size={15} /> {job.role}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-x-5 gap-y-1.5 text-sm text-muted md:flex-col md:items-end md:text-right">
                      <span className="flex items-center gap-1.5">
                        <Calendar size={14} /> {job.start} – {job.end}
                        <span className="chip ml-1 !py-0.5">{job.duration}</span>
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin size={14} /> {job.location}
                      </span>
                    </div>
                  </header>

                  <p className="mt-5 text-lg font-medium tracking-tight">{job.summary}</p>
                  <ul className="mt-4 space-y-2.5">
                    {job.points.map((p) => (
                      <li key={p} className="flex gap-3 leading-relaxed text-muted">
                        <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-swift-500/80" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-col gap-4 border-t hairline pt-5 lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex flex-wrap gap-2">
                      {job.tech.map((t) => (
                        <span key={t} className="chip">
                          {t}
                        </span>
                      ))}
                    </div>
                    <AppsRow id={job.id} />
                  </div>
                </article>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

function AppsRow({ id }: { id: string }) {
  const apps = companies.find((c) => c.id === id)?.apps ?? []
  if (!apps.length) return null
  return (
    <div className="flex items-center gap-3">
      <span className="text-xs font-medium text-muted">Apps</span>
      <div className="flex items-center gap-2">
        {apps.map((a) => (
          <a key={a.id} href={`#app-${a.id}`} className="group/app relative" aria-label={`See ${a.name} in Applications`}>
            <AppThumb src={a.icon} name={a.name} accent={a.accent} />
            <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-fg px-2 py-1 text-[11px] font-medium text-bg opacity-0 transition group-hover/app:opacity-100">
              {a.name}
            </span>
          </a>
        ))}
      </div>
    </div>
  )
}

function AppThumb({ src, name, accent }: { src: string; name: string; accent: [string, string] }) {
  const [failed, setFailed] = useState(false)
  const cls = 'h-9 w-9 rounded-[10px] ring-1 ring-black/10 transition-transform duration-300 group-hover/app:-translate-y-0.5 group-hover/app:scale-110 dark:ring-white/10'
  if (failed)
    return (
      <span className={`grid place-items-center text-[11px] font-semibold text-white ${cls}`} style={{ background: `linear-gradient(145deg, ${accent[0]}, ${accent[1]})` }}>
        {name.replace(/[^A-Za-z]/g, '').slice(0, 2).toUpperCase()}
      </span>
    )
  return <img src={src} alt="" width={36} height={36} loading="lazy" referrerPolicy="no-referrer" onError={() => setFailed(true)} className={`object-cover ${cls}`} />
}
