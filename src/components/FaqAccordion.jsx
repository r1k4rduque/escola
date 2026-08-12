import { useId, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import SectionWrapper from './SectionWrapper'
import { getWhatsAppUrl } from '../config/siteConfig'

const faqs = [
  {
    question: 'Preciso saber alguma coisa de informática para começar?',
    answer:
      'Não. A Informática Essencial é pensada para iniciantes de todas as idades, do primeiro contato com o computador até o uso no dia a dia e no trabalho.',
  },
  {
    question: 'Quanto tempo dura o curso completo?',
    answer:
      'A base comum dura cerca de 3 meses. Depois, a escolha da trilha leva de 3 a 6 meses, com aprofundamento opcional em projetos. O ritmo depende da trilha e do plano escolhido.',
  },
  {
    question:
      'Posso escolher a trilha (Gamer ou Negócios) depois de já ter começado?',
    answer:
      'Sim. Todo aluno começa pela base comum. A partir de um certo ponto, você escolhe continuar em Informática Essencial avançado ou migrar para Tecnologia Gamer ou Informática para Negócios. Uma avaliação de performance pode adiantar ou reavaliar esse momento.',
  },
  {
    question: 'Como funciona a reposição de aulas?',
    answer:
      'Há limite de faltas com reposição controlada. Planos premium oferecem reposições ampliadas. Para detalhes do seu caso, fale conosco no WhatsApp.',
  },
  {
    question: 'Eu recebo certificado?',
    answer:
      'Sim. Cada fase concluída gera um certificado próprio, sujeito a presença e desempenho mínimos, assim você mostra evolução real a cada etapa.',
  },
  {
    question: 'Vocês atendem crianças e adolescentes?',
    answer:
      'Sim. A Informática Essencial atende todas as idades, e a trilha Tecnologia Gamer é especialmente pensada para jovens interessados em programação, jogos e tecnologia.',
  },
  {
    question: 'Quanto custa o curso?',
    answer:
      'Os valores variam conforme a trilha e o plano. Fale com a gente no WhatsApp para saber os valores atualizados.',
    cta: true,
  },
]

function FaqItem({ item, open, onToggle }) {
  const panelId = useId()
  const buttonId = useId()

  return (
    <div className="border-b border-electric-blue/20 last:border-b-0">
      <h3>
        <button
          type="button"
          id={buttonId}
          aria-expanded={open}
          aria-controls={panelId}
          onClick={onToggle}
          className="flex w-full items-center justify-between gap-4 py-4 text-left font-heading text-base font-semibold text-ice-white transition-colors hover:text-cyber-cyan"
        >
          {item.question}
          <ChevronDown
            className={`h-5 w-5 shrink-0 text-cyber-cyan transition-transform ${
              open ? 'rotate-180' : ''
            }`}
            aria-hidden="true"
          />
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        hidden={!open}
        className="pb-4 text-sm leading-relaxed text-ice-white/75"
      >
        <p>{item.answer}</p>
        {item.cta && (
          <a
            href={getWhatsAppUrl(
              'Olá! Gostaria de saber os valores atualizados dos cursos.'
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex text-cyber-cyan underline-offset-2 hover:underline"
          >
            Falar no WhatsApp
          </a>
        )}
      </div>
    </div>
  )
}

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <SectionWrapper
      id="faq"
      className="bg-gradient-to-b from-deep-navy to-dark-blue"
    >
      <div className="mb-8 max-w-2xl">
        <p className="mb-3 font-heading text-sm font-semibold tracking-wide text-cyber-cyan">
          FAQ
        </p>
        <h2 className="font-heading text-2xl font-bold text-ice-white sm:text-3xl">
          Perguntas frequentes
        </h2>
      </div>

      <div className="rounded-2xl border border-electric-blue/25 bg-dark-blue/80 px-5 md:px-6">
        {faqs.map((item, index) => (
          <FaqItem
            key={item.question}
            item={item}
            open={openIndex === index}
            onToggle={() =>
              setOpenIndex((current) => (current === index ? -1 : index))
            }
          />
        ))}
      </div>
    </SectionWrapper>
  )
}
