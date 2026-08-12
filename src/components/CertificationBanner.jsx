import { BadgeCheck } from 'lucide-react'
import SectionWrapper from './SectionWrapper'

export default function CertificationBanner() {
  return (
    <SectionWrapper
      id="certificacao"
      className="bg-gradient-to-b from-dark-blue to-deep-navy py-12 md:py-16"
    >
      <div className="relative overflow-hidden rounded-2xl border border-cyber-cyan/30 bg-gradient-to-r from-dark-blue to-deep-navy p-8 md:p-10">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cyber-cyan/20 blur-3xl"
        />
        <div className="relative flex flex-col gap-4 md:flex-row md:items-center md:gap-6">
          <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-cyber-cyan/40 bg-deep-navy text-cyber-cyan">
            <BadgeCheck className="h-7 w-7" aria-hidden="true" />
          </span>
          <div>
            <h2 className="font-heading text-2xl font-bold text-ice-white">
              Certificação por fase
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-ice-white/75 md:text-base">
              Ao concluir cada fase com presença e desempenho mínimos, você
              recebe um certificado próprio. Progressão visível, nível a nível,
              dentro da escola.
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
