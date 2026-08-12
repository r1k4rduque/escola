import { motion } from 'framer-motion'
import { BarChart3, Gamepad2, Monitor } from 'lucide-react'
import TechBadge from './TechBadge'
import { getWhatsAppUrl } from '../config/siteConfig'
import { fadeUp } from './motion'

const icons = {
  Monitor,
  Gamepad2,
  BarChart3,
}

export default function CourseCard({ course }) {
  const Icon = icons[course.icon] || Monitor

  return (
    <motion.article
      id={`curso-${course.id}`}
      variants={fadeUp}
      className="group scroll-mt-28 flex h-full flex-col rounded-2xl border border-electric-blue/25 bg-dark-blue p-6 transition-all duration-300 hover:-translate-y-2 hover:border-cyber-cyan/60 hover:shadow-[0_0_36px_rgba(0,207,255,0.28)]"
    >
      <div className="mb-5 flex items-start justify-between gap-3">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-cyber-cyan/30 bg-deep-navy text-cyber-cyan transition-all duration-300 group-hover:scale-110 group-hover:border-cyber-cyan/70 group-hover:shadow-[0_0_18px_rgba(0,207,255,0.35)]">
          <Icon className="h-6 w-6" aria-hidden="true" />
        </span>
        <TechBadge src={course.techLogo} alt={course.techLogoAlt} />
      </div>

      <span className="mb-3 inline-flex w-fit rounded-md border border-cyber-cyan/25 bg-deep-navy/60 px-2.5 py-1 font-mono text-xs text-cyber-cyan">
        {course.audience}
      </span>

      <h3 className="font-heading text-xl font-bold text-ice-white">
        {course.name}
      </h3>
      <p className="mt-2 text-sm italic text-ice-white/70">{course.tagline}</p>

      <ul className="mt-5 flex-1 space-y-2">
        {course.topics.map((topic) => (
          <li
            key={topic}
            className="flex items-start gap-2 text-sm text-ice-white/80"
          >
            <span
              className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyber-cyan"
              aria-hidden="true"
            />
            {topic}
          </li>
        ))}
      </ul>

      <a
        href={getWhatsAppUrl(course.whatsappMessage)}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-primary mt-6 px-4 py-2.5 text-sm"
      >
        Quero saber mais
      </a>
    </motion.article>
  )
}
