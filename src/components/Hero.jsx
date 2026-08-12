import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { BarChart3, Gamepad2, Monitor } from 'lucide-react'
import { getWhatsAppUrl, siteConfig } from '../config/siteConfig'
import { fadeUp, scaleIn, staggerContainer } from './motion'

const pillars = [
  { label: 'Essencial', icon: Monitor, href: '#curso-essencial' },
  { label: 'Gamer', icon: Gamepad2, href: '#curso-gamer' },
  { label: 'Negócios', icon: BarChart3, href: '#curso-negocios' },
]

export default function Hero() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 80])
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 0.94])
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 40])

  return (
    <section
      ref={sectionRef}
      id="topo"
      className="relative overflow-hidden bg-gradient-to-b from-deep-navy via-dark-blue to-deep-navy pt-28 pb-12 md:pt-32 md:pb-16"
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-25"
        style={{
          y: bgY,
          backgroundImage: `url(${siteConfig.assets.heroArt})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-deep-navy via-deep-navy/90 to-deep-navy/70"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-cyber-cyan/20 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            variants={fadeUp}
            className="mb-3 font-heading text-sm font-semibold tracking-wide text-cyber-cyan"
          >
            {siteConfig.schoolName}
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="font-heading text-3xl font-bold leading-tight text-ice-white sm:text-4xl lg:text-5xl"
          >
            Uma escola de tecnologia. Três caminhos para o seu futuro.
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-5 max-w-xl text-base leading-relaxed text-ice-white/75 sm:text-lg"
          >
            Do primeiro contato com o computador até programação, jogos e Excel
            avançado, aprendizado progressivo, prático e por fases, no seu
            ritmo.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-5 py-3 text-sm"
            >
              Falar no WhatsApp
            </a>
            <a href="#cursos" className="btn-outline px-5 py-3 text-sm">
              Ver os cursos
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative mx-auto w-full max-w-md lg:max-w-none"
          variants={scaleIn}
          initial="hidden"
          animate="visible"
        >
          <motion.div style={{ y: imageY, scale: imageScale }}>
            <div
              className="absolute -inset-6 rounded-full bg-cyber-cyan/15 blur-3xl"
              aria-hidden="true"
            />
            <img
              src={siteConfig.assets.centralImage}
              alt=""
              className="relative w-full rounded-2xl border border-cyber-cyan/20 object-contain shadow-[0_0_50px_rgba(1,93,221,0.35)]"
              loading="eager"
            />
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="relative mx-auto mt-12 flex max-w-6xl flex-wrap items-center justify-center gap-3 px-4 sm:gap-4 sm:px-6 lg:px-8"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {pillars.map(({ label, icon: Icon, href }) => (
          <motion.a
            key={label}
            href={href}
            variants={fadeUp}
            className="pillar-chip"
            aria-label={`Ir para a trilha ${label}`}
          >
            <Icon className="h-4 w-4 text-cyber-cyan" aria-hidden="true" />
            <span>{label}</span>
          </motion.a>
        ))}
      </motion.div>
    </section>
  )
}
