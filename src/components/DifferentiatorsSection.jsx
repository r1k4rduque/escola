import { motion } from 'framer-motion'
import {QrCode, Smartphone, Sparkles, Users } from 'lucide-react'
import SectionWrapper from './SectionWrapper'
import { fadeUp, staggerContainer } from './motion'

const items = [
  {
    title: 'Turmas pequenas',
    description:
      'Atenção próxima ao aluno, com estrutura pensada para acompanhar de perto cada etapa.',
    icon: Users,
    soon: false,
  },
  {
    title: 'Planos premium',
    description:
      'Atendimento individualizado e reposições ampliadas para quem precisa de mais flexibilidade.',
    icon: Sparkles,
    soon: false,
  },
  
  {
    title: 'App de lembretes diários',
    description:
      'Dicas e comandos do dia no bolso, reforço contínuo fora da sala.',
    icon: Smartphone,
    soon: true,
  },
  {
    title: 'Cartão com QR code',
    description:
      'Acesso a materiais extras personalizados por aluno, em um toque.',
    icon: QrCode,
    soon: true,
  },
]

export default function DifferentiatorsSection() {
  return (
    <SectionWrapper
      id="diferenciais"
      className="bg-gradient-to-b from-deep-navy to-dark-blue"
      stagger
    >
      <motion.div variants={fadeUp} className="mb-10 max-w-2xl">
        <p className="mb-3 font-heading text-sm font-semibold tracking-wide text-cyber-cyan">
          Diferenciais
        </p>
        <h2 className="font-heading text-2xl font-bold text-ice-white sm:text-3xl">
          O que torna a experiência diferente
        </h2>
        <p className="mt-3 text-ice-white/75">
          Prática, proximidade e progressão clara com novidades a caminho.
        </p>
      </motion.div>

      <motion.div
        className="grid gap-5 sm:grid-cols-2 lg:grid-cols-2"
        variants={staggerContainer}
      >
        {items.map(({ title, description, icon: Icon, soon }) => (
          <motion.div
            key={title}
            variants={fadeUp}
            className="relative rounded-2xl border border-electric-blue/25 bg-dark-blue p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyber-cyan/45 hover:shadow-[0_0_24px_rgba(0,207,255,0.16)]"
          >
            {soon && (
              <span className="absolute top-4 right-4 rounded-md border border-cyber-cyan/40 bg-deep-navy px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide text-cyber-cyan">
                Em breve
              </span>
            )}
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
