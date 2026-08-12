import { motion } from 'framer-motion'
import { Flag, Layers, Route } from 'lucide-react'
import SectionWrapper from './SectionWrapper'
import { fadeUp, staggerContainer } from './motion'

const stages = [
  {
    number: '01',
    title: 'Base comum',
    duration: '≈ 3 meses',
    description:
      'Informática Essencial, todo aluno passa por aqui, independente da trilha futura.',
    icon: Layers,
  },
  {
    number: '02',
    title: 'Escolha da trilha',
    duration: '3 a 6 meses',
    description:
      'Continue em Informática Essencial avançado ou migre para Tecnologia Gamer ou Informática para Negócios.',
    icon: Route,
  },
  {
    number: '03',
    title: 'Aprofundamento',
    duration: 'Opcional',
    description:
      'Projetos práticos e consolidação na área escolhida, com evolução real e certificada.',
    icon: Flag,
  },
]

export default function JourneyTimeline() {
  return (
    <SectionWrapper
      id="jornada"
      className="bg-gradient-to-b from-deep-navy to-dark-blue"
      stagger
    >
      <motion.div variants={fadeUp} className="mb-12 max-w-2xl">
        <p className="mb-3 font-heading text-sm font-semibold tracking-wide text-cyber-cyan">
          Jornada
        </p>
        <h2 className="font-heading text-2xl font-bold text-ice-white sm:text-3xl">
          Do primeiro clique ao projeto final
        </h2>
        <p className="mt-3 text-ice-white/75">
          Uma jornada em fases claras, com base sólida e especialização no
          momento certo.
        </p>
      </motion.div>

      <motion.ol
        className="relative grid gap-8 lg:grid-cols-3 lg:gap-6"
        variants={staggerContainer}
      >
        <div
          aria-hidden="true"
          className="absolute top-10 right-0 left-0 hidden h-px bg-gradient-to-r from-electric-blue via-cyber-cyan to-electric-blue lg:block"
        />
        {stages.map((stage) => {
          const Icon = stage.icon
          return (
            <motion.li
              key={stage.number}
              variants={fadeUp}
              className="relative flex flex-col border-l-2 border-cyber-cyan/40 pl-5 lg:border-l-0 lg:pl-0 lg:pt-2"
            >
              <div className="mb-4 flex items-center gap-3 lg:flex-col lg:items-start">
                <span className="relative z-10 inline-flex h-12 w-12 items-center justify-center rounded-full border border-cyber-cyan/50 bg-dark-blue text-cyber-cyan shadow-[0_0_20px_rgba(0,207,255,0.25)] transition-transform duration-300 hover:scale-110">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="font-mono text-xs text-cyber-cyan lg:mt-3">
                  {stage.number} · {stage.duration}
                </span>
              </div>
              <h3 className="font-heading text-lg font-bold text-ice-white">
                {stage.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ice-white/75">
                {stage.description}
              </p>
            </motion.li>
          )
        })}
      </motion.ol>
    </SectionWrapper>
  )
}
