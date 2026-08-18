import { motion } from 'framer-motion'
import { BookOpen, ClipboardList, HelpCircle, MonitorPlay } from 'lucide-react'
import SectionWrapper from './SectionWrapper'
import { fadeUp, staggerContainer } from './motion'

const items = [
  {
    title: 'Teoria + prática guiada',
    description:
      'Explicação na lousa e prática imediata nos computadores, passo a passo.',
    icon: MonitorPlay,
  },
  {
    title: 'Apostila de apoio',
    description:
      'Material que complementar personalizado para cada aula de cada aluno',
    icon: BookOpen,
  },
  {
    title: 'Projetos práticos',
    description:
      'Atividades e projetos ao longo do curso para consolidar o que foi aprendido.',
    icon: ClipboardList,
  },
  {
    title: 'Plantões semanais',
    description:
      'Horários de dúvidas para reforço e acompanhamento contínuo do aluno.',
    icon: HelpCircle,
  },
]

export default function MethodologySection() {
  return (
    <SectionWrapper
      id="metodologia"
      className="bg-gradient-to-b from-dark-blue to-deep-navy"
      stagger
    >
      <motion.div variants={fadeUp} className="mb-10 max-w-2xl">
        <p className="mb-3 font-heading text-sm font-semibold tracking-wide text-cyber-cyan">
          Metodologia
        </p>
        <h2 className="font-heading text-2xl font-bold text-ice-white sm:text-3xl">
          Aprender fazendo, com suporte de verdade
        </h2>
        <p className="mt-3 text-ice-white/75">
          Uma rotina clara entre aula, prática e reforço, pensada para quem está
          começando e para quem quer ir além.
        </p>
      </motion.div>

      <motion.div
        className="grid gap-5 sm:grid-cols-2"
        variants={staggerContainer}
      >
        {items.map(({ title, description, icon: Icon }) => (
          <motion.div
            key={title}
            variants={fadeUp}
            className="rounded-2xl border border-electric-blue/25 bg-dark-blue/80 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyber-cyan/50 hover:shadow-[0_0_24px_rgba(0,207,255,0.18)]"
          >
            <Icon className="mb-3 h-6 w-6 text-cyber-cyan" aria-hidden="true" />
            <h3 className="font-heading text-lg font-semibold text-ice-white">
              {title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ice-white/75">
              {description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  )
}
