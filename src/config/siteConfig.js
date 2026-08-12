import logoIcon from '../assets/icone.png'
import heroArt from '../assets/arte_escola.png'
import centralImage from '../assets/imagem_central.jpg'
import winLogo from '../assets/win.png'
import pythonLogo from '../assets/python.png'
import powerbiLogo from '../assets/powerbi.png'

export const siteConfig = {
  schoolName: 'Escola de Tecnologia Digital',
  tagline: 'Informática, Programação e Excel Avançado',
  whatsappNumber: '55XXXXXXXXXXX',
  whatsappDefaultMessage:
    'Olá! Quero saber mais sobre os cursos da Escola de Tecnologia Digital.',
  social: {
    instagram: '#',
    whatsapp: null,
  },
  assets: {
    logoIcon,
    heroArt,
    centralImage,
  },
  courses: [
    {
      id: 'essencial',
      name: 'Informática Essencial',
      tagline: 'O ponto de partida de todo aluno.',
      audience: 'Para todas as idades',
      topics: ['Windows', 'Internet', 'Word', 'Excel', 'PowerPoint', 'Outlook'],
      techLogo: winLogo,
      techLogoAlt: 'Windows',
      icon: 'Monitor',
      whatsappMessage:
        'Olá! Quero saber mais sobre o curso de Informática Essencial.',
    },
    {
      id: 'gamer',
      name: 'Tecnologia Gamer',
      tagline: 'Para quem quer criar, não só jogar.',
      audience: 'Para jovens',
      topics: [
        'Lógica de programação',
        'Python',
        'Criação de jogos (Pygame)',
        'Inteligência Artificial',
      ],
      techLogo: pythonLogo,
      techLogoAlt: 'Python',
      icon: 'Gamepad2',
      whatsappMessage:
        'Olá! Quero saber mais sobre o curso de Tecnologia Gamer.',
    },
    {
      id: 'negocios',
      name: 'Informática para Negócios',
      tagline: 'Domine dados, impulsione resultados.',
      audience: 'Para profissionais',
      topics: ['Excel avançado', 'Power BI', 'VBA e Macros', 'Automação'],
      techLogo: powerbiLogo,
      techLogoAlt: 'Power BI',
      icon: 'BarChart3',
      whatsappMessage:
        'Olá! Quero saber mais sobre o curso de Informática para Negócios.',
    },
  ],
  navLinks: [
    { label: 'Sobre', href: '#sobre' },
    { label: 'Cursos', href: '#cursos' },
    { label: 'Jornada', href: '#jornada' },
    { label: 'Metodologia', href: '#metodologia' },
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contato', href: '#contato' },
  ],
}

export function getWhatsAppUrl(message = siteConfig.whatsappDefaultMessage) {
  const encoded = encodeURIComponent(message)
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encoded}`
}
