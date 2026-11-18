import { BookOpen, Gauge, Layers, Users } from 'lucide-react'
import { profile } from '../data/profile'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const journey = [
  { year: '2017', text: 'Started B.Tech in Information Technology at Adithya Institute of Technology.' },
  { year: '2021', text: 'Graduated with a B.Tech in Information Technology.' },
  { year: '2022', text: 'Joined Osiz Technologies — worked on the Koinpark and KPK Park iOS apps with Swift & UIKit.' },
  { year: '2024', text: 'Moved to AppStation — worked on the QSFA, Qatar Cancer Society and Q Weather apps with SwiftUI and UIKit.' },
  { year: '2025', text: 'Joined Zoho Corporation to work on the ServiceDesk Plus on-premises iOS app.' },
]

const principles = [
  { icon: Layers, title: 'Architecture first', text: 'MVVM, MVC and Clean Architecture to keep features scalable and maintainable.' },
  { icon: Gauge, title: 'Performance matters', text: 'Optimizing apps and chasing down crashes with Xcode and Instruments.' },
  { icon: Users, title: 'Built together', text: 'Working closely with design, backend and product teams to ship reliable apps.' },
  { icon: BookOpen, title: 'Always learning', text: 'Committed to continuous learning and writing quality code.' },
]

export default function About() {
  return (
    <section id="about" className="relative py-28 sm:py-36">
      <div className="container-x">
        <SectionHeading eyebrow="About me" title="Native iOS, done thoughtfully." />

        <div className="mt-16 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <Reveal>
              <p className="text-2xl font-medium leading-snug tracking-tight sm:text-[28px]">
                I’m an iOS Developer with <span className="text-gradient">4+ years</span> of experience building and maintaining mobile applications using Swift, UIKit and SwiftUI.
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="mt-6 text-lg leading-relaxed text-muted">
                Currently at <span className="text-fg">Zoho Corporation</span>, I work on the ServiceDesk Plus on-premises iOS application. Before that I contributed to apps for sports, healthcare and weather at AppStation, and to the Koinpark and KPK Park crypto apps at Osiz Technologies — six App Store apps across the three teams.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-4 text-lg leading-relaxed text-muted">
                My strengths are API integration, application optimization and debugging — and collaborating with cross-functional teams to deliver reliable, user-friendly mobile solutions. I enjoy turning requirements into apps that are fast, intuitive and built to scale.
              </p>
            </Reveal>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {principles.map((p, i) => (
                <Reveal key={p.title} delay={0.05 * i}>
                  <div className="surface group h-full rounded-3xl p-5 transition-all duration-500 hover:-translate-y-1 hover:shadow-card">
                    <div className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-swift-400/20 to-indigo-500/20 text-swift-500 transition-transform duration-500 group-hover:scale-110">
                      <p.icon size={19} />
                    </div>
                    <h3 className="mt-4 font-semibold tracking-tight">{p.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">{p.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.1}>
            <div className="surface rounded-[32px] p-7 sm:p-9">
              <p className="eyebrow">My journey</p>
              <ol className="relative mt-6 space-y-7 border-l hairline pl-6">
                {journey.map((j) => (
                  <li key={j.year} className="relative">
                    <span className="absolute -left-[31px] top-1.5 h-2.5 w-2.5 rounded-full bg-gradient-to-br from-swift-400 to-indigo-500 ring-4 ring-bg" />
                    <p className="font-mono text-sm font-semibold text-swift-500">{j.year}</p>
                    <p className="mt-1 leading-relaxed text-muted">{j.text}</p>
                  </li>
                ))}
              </ol>
              <div className="mt-8 flex flex-wrap gap-2 border-t hairline pt-6">
                <span className="chip">Based in {profile.location.split(',')[0]}</span>
                {profile.languages.map((l) => (
                  <span key={l} className="chip">
                    Speaks {l}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
