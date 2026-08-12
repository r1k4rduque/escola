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
          Formação modular, progressiva e feita para o seu perfil
        </h2>
        <div className="mt-6 space-y-4 text-base leading-relaxed text-ice-white/75">
          <p>
            A {siteConfig.schoolName} é uma escola de informática modular: todo
            aluno começa pela base comumInformática Essencial e, com o
            avanço, escolhe a trilha que faz mais sentido para o seu objetivo.
          </p>
          <p>
            São três caminhos claros: a base para o dia a dia e o trabalho, a
            trilha Gamer com programação e jogos, e a trilha de Negócios com
            Excel avançado, Power BI e automação.
          </p>
          <p>
            Turmas pequenas e atenção próxima ao aluno uma estrutura pensada
            para acompanhar de perto, do primeiro clique ao certificado de cada
            fase.
          </p>
        </div>
      </div>
    </SectionWrapper>
  )
}
