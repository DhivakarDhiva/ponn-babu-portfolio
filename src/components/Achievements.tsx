import { Award, GraduationCap, Languages } from 'lucide-react'
import { awards, education, profile } from '../data/profile'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Achievements() {
  const award = awards[0]
  return (
    <section id="achievements" className="relative py-28 sm:py-36">
      <div className="container-x">
        <SectionHeading eyebrow="Achievements & education" title="Recognition & roots." />
        <div className="mt-16 grid gap-5 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <article className="group relative h-full overflow-hidden rounded-[32px] p-8 text-white sm:p-10" style={{ background: 'linear-gradient(135deg, #3d9bff 0%, #0a84ff 40%, #5e5ce6 100%)' }}>
              <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/15 blur-2xl transition-transform duration-700 group-hover:scale-125" aria-hidden />
              <div className="absolute -bottom-24 -left-10 h-64 w-64 rounded-full bg-black/10 blur-2xl" aria-hidden />
              <div className="relative">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-white/20 backdrop-blur">
                  <Award size={28} />
                </div>
                <p className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-white/80">Award · {award.period}</p>
                <h3 className="mt-2 text-4xl font-semibold tracking-tightest sm:text-5xl">{award.title}</h3>
                <p className="mt-4 max-w-lg text-lg leading-relaxed text-white/90">{award.text}</p>
              </div>
            </article>
          </Reveal>

          <div className="grid gap-5 lg:col-span-2">
            <Reveal delay={0.05}>
              <article className="surface h-full rounded-[32px] p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-card">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-sky-400/20 to-indigo-500/20 text-sky-500">
                  <GraduationCap size={24} />
                </div>
                <p className="mt-6 text-sm font-medium text-muted">{education.period}</p>
                <h3 className="mt-1 text-xl font-semibold tracking-tight">{education.degree}</h3>
                <p className="mt-1 text-muted">{education.school}</p>
              </article>
            </Reveal>
            <Reveal delay={0.1}>
              <article className="surface h-full rounded-[32px] p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-card">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-emerald-400/20 to-sky-500/20 text-emerald-500">
                  <Languages size={24} />
                </div>
                <h3 className="mt-6 text-xl font-semibold tracking-tight">Languages</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {profile.languages.map((l) => (
                    <span key={l} className="chip !text-sm">{l}</span>
                  ))}
                </div>
              </article>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
