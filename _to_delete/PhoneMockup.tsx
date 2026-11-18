import type { Project } from '../data/profile'

/**
 * Abstract, illustrative device art. It deliberately contains no real UI,
 * text or data, so it never pretends to be an actual app screenshot.
 */
function Bar({ w, o = 0.18 }: { w: string; o?: number }) {
  return <div className="h-1.5 rounded-full bg-white" style={{ width: w, opacity: o }} />
}

function ServiceDesk({ a }: { a: [string, string] }) {
  const tones = [a[0], '#34c759', a[1], '#ff9f0a', a[0]]
  return (
    <div className="space-y-2.5 p-3 pt-8">
      <div className="mb-3 space-y-1.5 px-1">
        <Bar w="45%" o={0.55} />
        <Bar w="70%" />
      </div>
      {tones.map((c, i) => (
        <div key={i} className="flex items-center gap-2.5 rounded-xl bg-white/[0.06] p-2.5">
          <div className="h-6 w-6 shrink-0 rounded-lg" style={{ background: c, opacity: 0.85 }} />
          <div className="flex-1 space-y-1.5">
            <Bar w={`${80 - i * 8}%`} o={0.4} />
            <Bar w={`${50 + i * 6}%`} o={0.15} />
          </div>
          <div className="h-3 w-8 rounded-full" style={{ background: c, opacity: 0.35 }} />
        </div>
      ))}
    </div>
  )
}

function Exchange({ a }: { a: [string, string] }) {
  return (
    <div className="p-3 pt-8">
      <div className="space-y-1.5 px-1">
        <Bar w="35%" />
        <div className="h-3 w-3/5 rounded-full bg-white/60" />
      </div>
      <svg viewBox="0 0 200 90" className="mt-4 w-full" aria-hidden>
        <defs>
          <linearGradient id="exf" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stopColor={a[0]} stopOpacity="0.5" />
            <stop offset="1" stopColor={a[0]} stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M0 70 L20 62 L40 66 L60 48 L80 54 L100 36 L120 42 L140 24 L160 30 L180 14 L200 18 L200 90 L0 90Z" fill="url(#exf)" />
        <path d="M0 70 L20 62 L40 66 L60 48 L80 54 L100 36 L120 42 L140 24 L160 30 L180 14 L200 18" fill="none" stroke={a[0]} strokeWidth="2.5" strokeLinejoin="round" />
      </svg>
      <div className="mt-3 grid grid-cols-2 gap-2">
        <div className="h-8 rounded-xl" style={{ background: '#34c759', opacity: 0.8 }} />
        <div className="h-8 rounded-xl" style={{ background: a[1], opacity: 0.8 }} />
      </div>
      <div className="mt-3 space-y-2">
        {[0, 1, 2].map((i) => (
          <div key={i} className="flex items-center gap-2 rounded-xl bg-white/[0.06] p-2">
            <div className="h-5 w-5 rounded-full" style={{ background: i === 1 ? a[1] : a[0], opacity: 0.75 }} />
            <div className="flex-1">
              <Bar w="55%" o={0.35} />
            </div>
            <Bar w="18%" o={0.3} />
          </div>
        ))}
      </div>
    </div>
  )
}

function Apps({ a }: { a: [string, string] }) {
  const palette = [a[0], a[1], '#7c5cff', '#ff9f0a', '#f05138', a[0], '#38bdf8', a[1], '#ff375f']
  return (
    <div className="p-4 pt-10">
      <div className="grid grid-cols-3 gap-3">
        {palette.map((c, i) => (
          <div key={i} className="aspect-square rounded-[22%]" style={{ background: `linear-gradient(145deg, ${c}, ${c}99)` }} />
        ))}
      </div>
      <div className="mt-5 rounded-2xl bg-white/[0.07] p-3">
        <div className="space-y-1.5">
          <Bar w="50%" o={0.45} />
          <Bar w="80%" />
          <Bar w="65%" />
        </div>
      </div>
    </div>
  )
}

export default function PhoneMockup({ project, className = '' }: { project: Project; className?: string }) {
  const a = project.accent
  return (
    <div className={`relative ${className}`} aria-hidden>
      <div className="relative mx-auto aspect-[9/19] w-full rounded-[2.4rem] bg-gradient-to-b from-zinc-700 to-zinc-900 p-[6px] shadow-2xl shadow-black/50">
        <div className="relative h-full w-full overflow-hidden rounded-[2rem] bg-[#0b0b10]">
          <div className="absolute inset-0 opacity-40" style={{ background: `radial-gradient(120% 70% at 50% 0%, ${a[0]}55, transparent 60%)` }} />
          <div className="absolute left-1/2 top-2 z-10 h-[18px] w-[34%] -translate-x-1/2 rounded-full bg-black" />
          <div className="relative">
            {project.visual === 'servicedesk' && <ServiceDesk a={a} />}
            {project.visual === 'exchange' && <Exchange a={a} />}
            {project.visual === 'apps' && <Apps a={a} />}
          </div>
          <div className="absolute bottom-1.5 left-1/2 h-1 w-1/3 -translate-x-1/2 rounded-full bg-white/40" />
        </div>
      </div>
    </div>
  )
}
