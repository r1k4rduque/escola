# PRP — Site institucional da Escola de Tecnologia Digital

> **Como usar este documento:** este é um PRP (Product Requirement Prompt) completo, feito para ser colado no Cursor (ou lido por ele a partir deste arquivo no repositório) como fonte única de verdade do projeto. Ele contém contexto de negócio, identidade visual, arquitetura da página, conteúdo/copy sugerido, especificações técnicas e um plano de implementação passo a passo. A IA deve seguir este documento na íntegra antes de gerar código, e pode perguntar ao usuário apenas se algo aqui estiver genuinamente ambíguo.

---

## 1. Visão geral do produto

Criar um **site institucional em página única (landing page com âncoras)**, em React + JavaScript + Tailwind CSS, para apresentar a **Escola de Tecnologia Digital**: uma escola de informática modular, com uma base comum (Informática Essencial) e duas trilhas de especialização (Tecnologia Gamer e Informática para Negócios).

O site é uma **vitrine institucional**, não uma plataforma de aluno (não precisa de login, área do aluno, pagamento ou EAD nesta fase). Objetivo principal: **gerar contato via WhatsApp** de pais/alunos/profissionais interessados em se matricular.

---

## 2. Contexto de negócio (resumo do projeto pedagógico)

Use este resumo para escrever a copy do site com precisão. Não invente informações que não estejam aqui.

### 2.1 Estrutura da escola

A escola é dividida em **3 áreas/cursos**:

| Curso | Público | Foco |
|---|---|---|
| **Informática Essencial** | Iniciantes de todas as idades | Windows, arquivos, internet, Word, Excel, PowerPoint, Outlook — uso geral do computador para o dia a dia e o trabalho |
| **Tecnologia Gamer** | Jovens interessados em tecnologia | Lógica de programação, Python, Pygame (criação de jogos), Inteligência Artificial |
| **Informática para Negócios** | Adultos e profissionais | Excel avançado, Power BI, VBA/Macros, automação e produtividade empresarial |

### 2.2 Jornada do aluno (3 fases)

1. **Fase 1 — Base comum (≈3 meses):** Informática Essencial — todo aluno passa por aqui, independente da trilha futura.
2. **Fase 2 — Escolha da trilha (3 a 6 meses):** a partir de um certo ponto do curso, o aluno escolhe entre continuar em Informática Essencial (módulos mais avançados de Word/Excel/PowerPoint/Outlook) ou migrar para uma especialização (Tecnologia Gamer ou Informática para Negócios). Uma avaliação de performance pode adiantar ou reavaliar o aluno nesse ponto.
3. **Fase 3 — Aprofundamento (opcional):** projetos práticos e consolidação na área escolhida.

### 2.3 Metodologia de ensino

- Explicação teórica na lousa + prática guiada nos computadores.
- Apostila como material de apoio (complementa o professor, não o substitui).
- Atividades práticas e projetos ao longo do curso.
- Plantões de dúvidas semanais para reforço.
- Limite de faltas com reposição controlada.

### 2.4 Avaliação e certificação

- Provas práticas e teóricas ao final de cada módulo.
- Certificado ao concluir cada fase (sujeito a presença/desempenho mínimos).
- Certificados segmentados por nível, permitindo progressão dentro da escola.

### 2.5 Diferenciais / propostas de valor

- Turmas pequenas, estrutura pensada para atenção próxima ao aluno (início com ~4 computadores, crescimento gradual).
- Planos premium com atendimento individualizado e reposições ampliadas.
- Certificação por fase, mostrando evolução real do aluno.
- **Roadmap futuro (mencionar como "em breve", não implementar agora):** aplicativo de lembretes diários de comandos/dicas; cartão com QR code dando acesso a uma pasta no Notion com materiais extras por aluno.

### 2.6 Nome e posicionamento

- Nome oficial a usar no site: **Escola de Tecnologia Digital**. Deixe o nome como uma constante fácil de editar (ex: `siteConfig.schoolName`), pois pode ser ajustado depois.
- Posicionamento: escola local, prática e acessível, mas com identidade visual **tech/gamer moderna** — não deve parecer curso "de idosos" datado, e sim uma escola de tecnologia contemporânea que também serve como porta de entrada para quem nunca usou um computador.

---

## 3. Público-alvo

Três personas que o site precisa convencer ao mesmo tempo:

1. **Iniciante/leigo** (qualquer idade) buscando aprender informática básica para o dia a dia/emprego.
2. **Jovem/adolescente** interessado em jogos, programação e tecnologia.
3. **Adulto/profissional** que quer Excel avançado, Power BI e produtividade para o trabalho.

A copy e a navegação devem deixar claro, logo no Hero, que existem **3 caminhos diferentes** para 3 perfis diferentes — isso é o principal argumento de vendas da escola.

---

## 4. Stack técnica

- **Framework:** React (Create React App ou Vite — prefira **Vite**, mais rápido para o Cursor rodar em dev).
- **Linguagem:** JavaScript (não TypeScript).
- **Estilização:** Tailwind CSS.
- **Ícones:** `lucide-react`.
- **Animações leves:** `framer-motion` (opcional, usar com moderação — fade/slide ao entrar na viewport, glow em hover).
- **Fontes:** Google Fonts (ver seção 5.2).
- **Deploy alvo:** estático (Vercel/Netlify) — não há backend nesta fase.
- **Sem** CMS, sem banco de dados, sem autenticação, sem formulário de matrícula — o único ponto de conversão é o **botão flutuante de WhatsApp**.

---

## 5. Identidade visual

### 5.1 Paleta de cores

Usar exatamente estas cores, como variáveis Tailwind (`tailwind.config.js`) — não usar tons genéricos de azul do Tailwind padrão:

| Cor | Hex | Função |
|---|---|---|
| Deep Navy | `#000914` | Fundo principal |
| Dark Blue | `#001741` | Cards, menus e seções |
| Electric Blue | `#015DDD` | Botões, links e elementos principais |
| Neon Blue | `#008CFF` | Hover, destaques e elementos interativos |
| Cyber Cyan | `#00CFFF` | Ícones, detalhes e efeitos neon |
| Ice White | `#EAFBFF` | Textos principais e elementos claros |

Configuração sugerida em `tailwind.config.js`:

```js
theme: {
  extend: {
    colors: {
      "deep-navy": "#000914",
      "dark-blue": "#001741",
      "electric-blue": "#015DDD",
      "neon-blue": "#008CFF",
      "cyber-cyan": "#00CFFF",
      "ice-white": "#EAFBFF",
    },
  },
},
```

**Regras de uso:**
- Fundo geral da página: `deep-navy`, com seções alternadas usando um gradiente sutil `deep-navy → dark-blue` para dar profundidade (evitar blocos 100% chapados).
- Cards e menus: fundo `dark-blue`, com borda fina (`1px`) em `electric-blue` ou `cyber-cyan` a 20–30% de opacidade.
- CTAs primários (botões): fundo `electric-blue`, texto `ice-white`, hover para `neon-blue` com leve `box-shadow` neon (glow) usando `cyber-cyan`.
- Textos principais/títulos: `ice-white`. Textos secundários: `ice-white` a 70–80% de opacidade (não usar cinza puro, quebra a paleta).
- Ícones e detalhes decorativos (linhas, bordas, badges): `cyber-cyan`.
- Efeito de assinatura visual: leves "glows" neon (blur em `cyber-cyan`/`neon-blue`) atrás de elementos-chave (hero, cards ao hover) — reforça a estética tech/gamer sem exagerar.

### 5.2 Tipografia

- **Títulos/headings:** fonte geométrica e tech — `Sora` ou `Space Grotesk` (Google Fonts), peso 600–700.
- **Corpo de texto:** `Inter`, peso 400–500, boa legibilidade.
- **Detalhes pontuais (badges de módulo, números de aula, elementos "código"):** `JetBrains Mono`, usada com moderação (ex: só na seção de Tecnologia Gamer/Python) para reforçar o tema tech sem virar poluição visual.

### 5.3 Tom de voz

Direto, acolhedor e confiante — sem soar infantil nem excessivamente corporativo. Fala com quem nunca usou o computador com a mesma naturalidade que fala com quem quer aprender Python. Evitar jargão técnico não explicado nas seções voltadas ao público leigo.

### 5.4 Assets visuais já criados (fornecidos pelo usuário)

Estes arquivos **já existem no repositório do site** (não devem ser recriados do zero). A IA/Cursor deve localizá-los na pasta de assets já usada no projeto (ex: `src/assets/`) e ajustar os caminhos de import conforme a estrutura real — os caminhos usados neste PRP são placeholders.

| Arquivo | O que é | Onde usar |
|---|---|---|
| `icone.png` | Logo/ícone oficial da escola: rounded-square estilo ícone de app, fundo `deep-navy`, trilhas de circuito em azul e um símbolo `</>` neon em `cyber-cyan` no centro com anel circular ao redor. Confirma e valida a estética "circuito neon" já definida na paleta. | Logo na `Navbar`, favicon do site, `apple-touch-icon` e `og:image` |
| `arte_escola.png` | Arte horizontal (formato banner), fundo `deep-navy` com trilhas de circuito, e os ícones de laptop, código `</>` e lâmpada, todos em contorno/glow azul-ciano — mesmo estilo visual do `icone.png`. | Imagem/background do `Hero` (substitui a composição gráfica genérica descrita na seção 7.2 — já está pronta) |
| `win.png` | Logo oficial do Windows (janela em 4 partes, azul). | Badge de tecnologia no card do curso **Informática Essencial** |
| `python.png` | Logo oficial do Python (duas "cobras" entrelaçadas azul/amarelo). | Badge de tecnologia no card do curso **Tecnologia Gamer** |
| `powerbi.png` | Logo oficial do Power BI (círculo laranja/amarelo com gráfico de barras). | Badge de tecnologia no card do curso **Informática para Negócios** |

**Regra de integração para `win.png`, `python.png` e `powerbi.png`:** são logos oficiais de terceiros, com cores próprias que não seguem a paleta do site — **não recolorir**. Para não conflitarem visualmente com o fundo escuro/neon, exibir cada logo dentro de um pequeno chip/badge circular ou rounded-square com fundo neutro claro (ex: `ice-white` ou branco) e padding curto, funcionando como um "selo de tecnologia ensinada" dentro do card do curso — mantendo o logo com suas cores originais e legível.

---

## 6. Arquitetura da página (sitemap de seções)

Página única, com scroll suave (`scroll-behavior: smooth`) entre âncoras. Ordem das seções:

1. **Navbar** (fixa/sticky)
2. **Hero**
3. **Sobre a escola**
4. **Cursos / Trilhas** (`#cursos`)
5. **Jornada do aluno** (`#jornada`)
6. **Metodologia** (`#metodologia`)
7. **Diferenciais** (`#diferenciais`)
8. **Certificação** (`#certificacao`)
9. **FAQ** (`#faq`)
10. **CTA final / Contato** (`#contato`)
11. **Footer**
12. **Botão flutuante de WhatsApp** (global, fixo, todas as seções)

---

## 7. Especificação detalhada de cada seção

Para cada seção: objetivo, conteúdo/copy sugerido (pode ser levemente ajustado pela IA, mas mantendo os fatos da seção 2) e comportamento/UI.

### 7.1 Navbar

- Logo à esquerda: usar o arquivo `icone.png` (logo oficial já criado — ver seção 5.4) ao lado do texto "Escola de Tecnologia Digital". Não gerar um logo novo nem substituir por ícone genérico do `lucide-react`.
- Links: Sobre, Cursos, Jornada, Metodologia, Diferenciais, FAQ, Contato.
- Botão CTA à direita: "Falar no WhatsApp" (mesmo destino do botão flutuante).
- Fundo transparente no topo da página, ganhando fundo `dark-blue` com leve blur (`backdrop-blur`) ao rolar a página.
- Menu hambúrguer em telas mobile, abrindo um drawer/overlay com fundo `deep-navy`.

### 7.2 Hero

- Headline forte comunicando os 3 caminhos, por exemplo: **"Uma escola de tecnologia. Três caminhos para o seu futuro."**
- Subheadline explicando em 1–2 frases: do primeiro contato com o computador até programação, jogos e Excel avançado — aprendizado progressivo, prático e por fases.
- Dois CTAs: primário "Falar no WhatsApp" (`electric-blue`), secundário "Ver os cursos" (rola até `#cursos`, estilo outline em `cyber-cyan`).
- Elemento visual: usar o arquivo `arte_escola.png` (ver seção 5.4) como imagem de fundo do Hero ou como composição ao lado do texto — já traz a estética de circuito neon desejada, pronta para uso. Não usar fotos de banco de imagens genéricas de "pessoas sorrindo no computador" nem gerar uma arte nova do zero.
- Pequeno indicador dos 3 pilares logo abaixo do Hero (3 ícones + label curto: "Essencial", "Gamer", "Negócios") como prévia da seção de cursos.

### 7.3 Sobre a escola

- Texto curto (2–3 parágrafos) baseado na visão geral do projeto (seção 2.1): escola modular, formação progressiva, base comum + trilhas especializadas.
- Reforçar o diferencial de turmas pequenas e atenção próxima ao aluno, sem soar como desculpa por ser pequena — enquadrar como "boutique"/personalizado.

### 7.4 Cursos / Trilhas (`#cursos`)

- Grid de **3 cards** (empilhados em mobile, lado a lado em desktop), um por curso, todos com a mesma estrutura visual:
  - Ícone de topo do card (`lucide-react`: ex. `Monitor` para Essencial, `Gamepad2` para Gamer, `BarChart3`/`Briefcase` para Negócios).
  - Badge com o logo oficial da tecnologia-âncora do curso (componente `TechBadge`, ver seções 5.4 e 8): `win.png` no card Essencial, `python.png` no card Gamer, `powerbi.png` no card Negócios — em chip claro, sem recolorir.
  - Nome do curso.
  - Frase de posicionamento curta (ver sugestões abaixo).
  - 4–6 bullets com os principais temas (extraídos da seção 2.1 — não usar nomes internos de aula, usar os temas gerais: Windows, Internet, Word, Excel, PowerPoint, Outlook / Lógica, Python, Pygame, IA / Excel avançado, Power BI, VBA, Automação).
  - Badge indicando o público (ex: "Para todas as idades", "Para jovens", "Para profissionais").
  - Botão "Quero saber mais" → WhatsApp com mensagem pré-preenchida específica do curso (ver seção 9).
- Copy sugerida por card:
  - **Informática Essencial** — *"O ponto de partida de todo aluno."* Windows, internet, Word, Excel, PowerPoint e Outlook — a base para o dia a dia e o mercado de trabalho.
  - **Tecnologia Gamer** — *"Para quem quer criar, não só jogar."* Lógica de programação, Python, criação de jogos com Pygame e Inteligência Artificial.
  - **Informática para Negócios** — *"Domine dados, impulsione resultados."* Excel avançado, Power BI, VBA, macros e produtividade para o mercado de trabalho.
- Cards com hover elevado + borda `cyber-cyan` acesa (glow) ao passar o mouse.

### 7.5 Jornada do aluno (`#jornada`)

- Timeline horizontal em desktop (vertical em mobile) com 3 etapas, baseada na seção 2.2:
  1. **Base comum** (≈3 meses) — Informática Essencial.
  2. **Escolha da trilha** (3 a 6 meses) — continuar em Informática Essencial avançado, ou migrar para Gamer/Negócios.
  3. **Aprofundamento** (opcional) — projetos práticos e consolidação.
- Cada etapa com número/ícone, título curto e 1 frase de descrição. Linha conectando as etapas em `electric-blue`/`cyber-cyan`.

### 7.6 Metodologia (`#metodologia`)

- 3–4 cards curtos ou lista com ícones, baseados na seção 2.3:
  - Teoria na lousa + prática guiada no computador.
  - Apostila de apoio (não substitui o professor).
  - Projetos e atividades práticas.
  - Plantões de dúvidas semanais.

### 7.7 Diferenciais (`#diferenciais`)

- Grid de destaques (baseado na seção 2.5):
  - Turmas pequenas e atenção próxima.
  - Planos premium com atendimento individualizado.
  - Certificação por fase.
  - **Em breve:** app de lembretes diários e cartão com QR code de materiais extras — marcar visualmente como "Em breve" (badge discreto em `cyber-cyan`), para não prometer algo que ainda não existe.

### 7.8 Certificação (`#certificacao`)

- Seção curta e visual (pode ser uma faixa/banner, não precisa ser tão grande quanto as anteriores): explica que cada fase concluída gera um certificado próprio, com requisitos mínimos de presença/desempenho, permitindo mostrar evolução real.

### 7.9 FAQ (`#faq`)

- Componente accordion (expande/colapsa), com perguntas prováveis de pais/alunos. A IA pode gerar 5–6 perguntas plausíveis com base no conteúdo acima, por exemplo:
  - Preciso saber alguma coisa de informática para começar?
  - Quanto tempo dura o curso completo?
  - Posso escolher a trilha (Gamer ou Negócios) depois de já ter começado?
  - Como funciona a reposição de aulas?
  - Eu recebo certificado?
  - Vocês atendem crianças/adolescentes?
- **Não inventar informações de preço/valores** — se perguntado sobre isso na FAQ, a resposta deve direcionar para o WhatsApp ("Fale com a gente no WhatsApp para saber os valores atualizados").

### 7.10 CTA final / Contato (`#contato`)

- Seção de fechamento, fundo em destaque (gradiente `dark-blue → deep-navy` com glow central).
- Chamada forte, ex: **"Pronto para dar o próximo passo em tecnologia?"**
- Botão grande "Falar no WhatsApp".
- Não incluir formulário de contato/matrícula — apenas o botão de WhatsApp, conforme decisão do cliente.

### 7.11 Footer

- Nome da escola, curto texto institucional (1 linha), links de âncora repetidos, ícones de redes sociais (deixar como placeholders/props fáceis de editar, ex: Instagram/WhatsApp), copyright com ano dinâmico (`new Date().getFullYear()`).

### 7.12 Botão flutuante de WhatsApp

- Fixo no canto inferior direito, visível em todas as seções, com o ícone de WhatsApp (`lucide-react` `MessageCircle` ou ícone dedicado), fundo `electric-blue`, leve animação de pulso/glow em `cyber-cyan` para chamar atenção sem ser irritante.
- Mensagem padrão pré-preenchida (ex: "Olá! Quero saber mais sobre os cursos da Escola de Tecnologia Digital.").
- Número de WhatsApp e mensagens por curso devem ficar centralizados em um arquivo de configuração (ver seção 9), fáceis de editar depois.

---

## 8. Componentes sugeridos (estrutura de código)

Componentes React reutilizáveis a criar:

- `Navbar`
- `Hero`
- `About` (Sobre a escola)
- `CourseCard` + `CoursesSection`
- `TechBadge` (chip reutilizável que exibe um logo de tecnologia — `win.png` / `python.png` / `powerbi.png` — sobre fundo claro, usado dentro do `CourseCard`; ver seção 5.4)
- `JourneyTimeline`
- `MethodologySection`
- `DifferentiatorsSection`
- `CertificationBanner`
- `FaqAccordion`
- `FinalCta`
- `Footer`
- `WhatsAppFloatButton`
- `SectionWrapper` (componente utilitário para padronizar padding/max-width/animação de entrada entre seções)

---

## 9. Configuração central (dados editáveis)

Criar um arquivo único, ex: `src/config/siteConfig.js`, contendo tudo que o dono da escola vai querer editar sem mexer em componentes:

```js
export const siteConfig = {
  schoolName: "Escola de Tecnologia Digital",
  whatsappNumber: "55XXXXXXXXXXX", // placeholder, ajustar depois
  whatsappDefaultMessage: "Olá! Quero saber mais sobre os cursos da Escola de Tecnologia Digital.",
  assets: {
    logoIcon: "/src/assets/icone.png", // ajustar caminho conforme estrutura real já existente no projeto
    heroArt: "/src/assets/arte_escola.png",
  },
  courses: [
    {
      id: "essencial",
      name: "Informática Essencial",
      tagline: "O ponto de partida de todo aluno.",
      audience: "Para todas as idades",
      topics: ["Windows", "Internet", "Word", "Excel", "PowerPoint", "Outlook"],
      techLogo: "/src/assets/win.png",
      whatsappMessage: "Olá! Quero saber mais sobre o curso de Informática Essencial.",
    },
    {
      id: "gamer",
      name: "Tecnologia Gamer",
      tagline: "Para quem quer criar, não só jogar.",
      audience: "Para jovens",
      topics: ["Lógica de programação", "Python", "Criação de jogos (Pygame)", "Inteligência Artificial"],
      techLogo: "/src/assets/python.png",
      whatsappMessage: "Olá! Quero saber mais sobre o curso de Tecnologia Gamer.",
    },
    {
      id: "negocios",
      name: "Informática para Negócios",
      tagline: "Domine dados, impulsione resultados.",
      audience: "Para profissionais",
      topics: ["Excel avançado", "Power BI", "VBA e Macros", "Automação"],
      techLogo: "/src/assets/powerbi.png",
      whatsappMessage: "Olá! Quero saber mais sobre o curso de Informática para Negócios.",
    },
  ],
};
```

Todos os componentes que usam número de WhatsApp, nome da escola, lista de cursos ou assets visuais devem **ler deste arquivo**, nunca hardcode espalhado. Os caminhos em `assets` e `techLogo` são placeholders — a IA deve ajustá-los para o local real onde `icone.png`, `arte_escola.png`, `win.png`, `python.png` e `powerbi.png` já estão salvos no repositório.

---

## 10. Responsividade e acessibilidade

- Mobile-first. Breakpoints padrão do Tailwind (`sm`, `md`, `lg`, `xl`).
- Botão de WhatsApp e Navbar não podem se sobrepor em telas pequenas — validar visualmente.
- Contraste mínimo AA entre texto (`ice-white`) e fundos (`deep-navy`/`dark-blue`) — já respeitado pela paleta, mas evitar texto em `electric-blue` sobre `deep-navy` (contraste baixo) para blocos de texto longos; reservar `electric-blue`/`neon-blue` para botões e destaques pontuais.
- Todos os botões e links com estados de `focus-visible` (contorno em `cyber-cyan`) para navegação por teclado.
- Imagens/ícones decorativos com `alt=""`; ícones informativos com `aria-label`.
- Accordion do FAQ acessível (uso de `aria-expanded`, navegação por teclado).

---

## 11. SEO e performance

- Meta title/description institucionais (ex: "Escola de Tecnologia Digital — Informática, Programação e Excel Avançado").
- Estrutura semântica (`<header>`, `<main>`, `<section>`, `<footer>`), um único `<h1>` no Hero, `<h2>` para cada título de seção.
- Lazy loading de imagens (se houver imagens além de ícones/SVGs).
- Favicon, `apple-touch-icon` e `og:image` usando `icone.png` (seção 5.4).
- Evitar bibliotecas pesadas além das listadas na seção 4 — o site precisa carregar rápido em conexões móveis.

---

## 12. Estrutura de pastas sugerida

```
src/
  assets/
    icone.png          (já existe no projeto — logo/favicon)
    arte_escola.png     (já existe no projeto — arte do Hero)
    win.png              (já existe no projeto — badge curso Essencial)
    python.png           (já existe no projeto — badge curso Gamer)
    powerbi.png          (já existe no projeto — badge curso Negócios)
  components/
    Navbar.jsx
    Hero.jsx
    About.jsx
    CourseCard.jsx
    CoursesSection.jsx
    TechBadge.jsx
    JourneyTimeline.jsx
    MethodologySection.jsx
    DifferentiatorsSection.jsx
    CertificationBanner.jsx
    FaqAccordion.jsx
    FinalCta.jsx
    Footer.jsx
    WhatsAppFloatButton.jsx
    SectionWrapper.jsx
  config/
    siteConfig.js
  App.jsx
  main.jsx
  index.css
tailwind.config.js
```

> A pasta `assets/` acima é uma sugestão — como o projeto já foi iniciado no Cursor, a IA deve primeiro **confirmar o local real** onde `icone.png`, `arte_escola.png`, `win.png`, `python.png` e `powerbi.png` já estão salvos no repositório, em vez de assumir este caminho ou duplicar os arquivos.

---

## 13. Plano de implementação (ordem sugerida para o Cursor)

1. Inicializar projeto Vite + React + Tailwind CSS.
2. Configurar `tailwind.config.js` com a paleta de cores da seção 5.1 e fontes da seção 5.2 (via Google Fonts no `index.css` ou `index.html`).
3. Criar `src/config/siteConfig.js` com os dados da seção 9.
4. Criar `SectionWrapper` (padding/max-width/animação padrão) para reuso.
5. Construir `Navbar` + `WhatsAppFloatButton` (globais, presentes em toda a página).
6. Construir `Hero`.
7. Construir `About`.
8. Construir `CourseCard` + `CoursesSection`, consumindo `siteConfig.courses`.
9. Construir `JourneyTimeline`.
10. Construir `MethodologySection`.
11. Construir `DifferentiatorsSection`.
12. Construir `CertificationBanner`.
13. Construir `FaqAccordion`.
14. Construir `FinalCta`.
15. Construir `Footer`.
16. Montar tudo em `App.jsx` na ordem da seção 6, com âncoras (`id`) correspondendo aos links da Navbar.
17. Revisar responsividade em mobile/tablet/desktop.
18. Revisar acessibilidade (contraste, foco, aria labels) conforme seção 10.
19. Revisar performance/SEO conforme seção 11.

---

## 14. Checklist de aceite (Definition of Done)

- [ ] Todas as 6 cores da paleta usadas exatamente como especificado (sem azuis genéricos do Tailwind).
- [ ] As 12 seções da seção 6 estão presentes, na ordem correta, com âncoras funcionando.
- [ ] Os 3 cursos aparecem com nomes, taglines e tópicos corretos (seção 7.4 / 9).
- [ ] Botão de WhatsApp flutuante funciona em todas as seções e usa `siteConfig`.
- [ ] Nenhum valor/preço de mensalidade foi inventado em nenhum lugar do site.
- [ ] Layout responsivo (mobile, tablet, desktop) sem sobreposição de elementos.
- [ ] Nome da escola, número de WhatsApp e textos de cursos centralizados em `siteConfig.js`.
- [ ] Sem login, formulário de matrícula, pagamento ou área do aluno (fora de escopo).
- [ ] `icone.png` usado como logo (Navbar) e favicon; `arte_escola.png` usado no Hero; `win.png`, `python.png` e `powerbi.png` usados como badges nos cards de curso corretos — nenhum logo oficial foi recolorido.

---

## 15. Fora de escopo (não implementar agora)

- Aplicativo mobile de lembretes diários.
- Geração/exibição de QR codes e integração com Notion.
- Área do aluno, login, matrícula online, pagamento.
- Formulário de contato (decisão do cliente: apenas WhatsApp nesta fase).
- Conteúdo/página detalhando aula por aula (o site apresenta os cursos em nível de tópico, não a grade completa de aulas).

Esses itens podem ser mencionados na seção "Diferenciais" como "em breve", mas não devem ser construídos como funcionalidade real nesta versão do site.
