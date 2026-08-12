import { getWhatsAppUrl } from '../config/siteConfig'
import SectionWrapper from './SectionWrapper'

export default function FinalCta() {
  return (
    <SectionWrapper
      id="contato"
      className="bg-gradient-to-b from-dark-blue via-deep-navy to-deep-navy"
    >
      <div className="relative overflow-hidden rounded-3xl border border-cyber-cyan/25 bg-gradient-to-br from-dark-blue to-deep-navy px-6 py-14 text-center md:px-12 md:py-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyber-cyan/20 blur-3xl"
        />
        <div className="relative mx-auto max-w-2xl">
          <h2 className="font-heading text-2xl font-bold text-ice-white sm:text-3xl md:text-4xl">
            Pronto para dar o próximo passo em tecnologia?
          </h2>
          <p className="mt-4 text-ice-white/75">
            Fale com a gente no WhatsApp e descubra qual trilha combina com você
            ou com quem você quer matricular.
          </p>
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-8 rounded-xl px-8 py-4 text-base"
          >
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </SectionWrapper>
  )
}
