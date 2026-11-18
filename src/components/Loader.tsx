import { motion } from 'framer-motion'

export default function Loader() {
  return (
    <motion.div
      className="fixed inset-0 z-[200] grid place-items-center bg-bg"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }}
      role="status"
      aria-label="Loading portfolio"
    >
      <div className="relative grid place-items-center">
        <motion.svg width="96" height="96" viewBox="0 0 96 96" className="absolute" initial={{ rotate: 0 }} animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1.4, ease: 'linear' }}>
          <defs>
            <linearGradient id="lg" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0" stopColor="#64d2ff" />
              <stop offset="1" stopColor="#7d7aff" />
            </linearGradient>
          </defs>
          <circle cx="48" cy="48" r="44" fill="none" stroke="rgb(var(--line) / 0.08)" strokeWidth="3" />
          <motion.circle cx="48" cy="48" r="44" fill="none" stroke="url(#lg)" strokeWidth="3" strokeLinecap="round" strokeDasharray="276" initial={{ strokeDashoffset: 276 }} animate={{ strokeDashoffset: 80 }} transition={{ duration: 1, ease: 'easeOut' }} />
        </motion.svg>
        <motion.span
          className="text-gradient text-2xl font-bold tracking-tight"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          PB
        </motion.span>
      </div>
    </motion.div>
  )
}
