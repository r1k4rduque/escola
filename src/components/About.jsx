import SectionWrapper from './SectionWrapper'
import { siteConfig } from '../config/siteConfig'

export default function About() {
  return (
    <SectionWrapper
      id="sobre"
      className="bg-gradient-to-b from-deep-navy to-dark-blue"
    >
      <div className="max-w-3xl">
        <p className="mb-3 font-heading text-sm font-semibold tracking-wide text-cyber-cyan">
          Sobre a escola
        </p>
        <h2 className="font-heading text-2xl font-bold text-ice-white sm:text-3xl">
          Aulas diretas para o seu perfil e necessidade!
        </h2>
        <div className="mt-6 space-y-4 text-base leading-relaxed text-ice-white/75">
          <p>
            A {siteConfig.schoolName} oferece aulas particulares de informática, adaptadas ao ritmo, conhecimento e objetivos de cada aluno. Para quem está começando, oferecemos uma base completa de informática e, a partir dela, três trilhas de especialização: Tecnologia Gamer, Informática para Negócios e outras áreas da tecnologia.
          </p>
          <p>
            Cada trilha foi pensada para desenvolver conhecimentos específicos e preparar o aluno para diferentes possibilidades dentro da tecnologia. E, caso nenhuma delas atenda completamente às suas necessidades, também oferecemos a opção de criar uma trilha personalizada, combinando conteúdos de diferentes áreas para montar o caminho ideal para você.
          </p>
        </div>
      </div>
    </SectionWrapper>
  )
}
