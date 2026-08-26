import type { Locale } from "./locales";

type Dict = Record<Locale, string>;

function tr(en: string, pt: string, es: string): Dict {
  return { en, pt, es };
}

export const nav = {
  about: tr("About", "Sobre", "Sobre"),
  architecture: tr("Architecture", "Arquitetura", "Arquitectura"),
  skills: tr("Skills", "Competências", "Habilidades"),
  work: tr("Work", "Trabalho", "Trabajo"),
  contact: tr("Contact", "Contacto", "Contacto"),
  experience: tr("Experience", "Experiência", "Experiencia"),
  openMenu: tr("Open menu", "Abrir menu", "Abrir menú"),
  closeMenu: tr("Close menu", "Fechar menu", "Cerrar menú"),
};

export const footer = {
  tagline: tr(
    "Full Stack Marketeer - Brand, Product & Growth.",
    "Full Stack Marketeer - Marca, Produto & Crescimento.",
    "Full Stack Marketeer - Marca, Producto y Crecimiento.",
  ),
  linkedin: tr(
    "Connect on LinkedIn",
    "Liga-te no LinkedIn",
    "Conecta en LinkedIn",
  ),
  rights: tr(
    "All rights reserved.",
    "Todos os direitos reservados.",
    "Todos los derechos reservados.",
  ),
  privacy: tr(
    "Privacy & Cookies Policy",
    "Política de Privacidade & Cookies",
    "Política de Privacidad y Cookies",
  ),
};

export const hero = {
  h1Prefix: tr("The", "O", "El"),
  h1Highlight: tr("Full Stack", "Full Stack", "Full Stack"),
  h1Suffix: tr("Marketeer.", "Marketeer.", "Marketeer."),
  subtitle: tr(
    "Brand strategy, product design, and the growth systems that sell them - under one roof. 13 years turning ideas into shipped, selling products.",
    "Estratégia de marca, design de produto, e os sistemas de crescimento que os vendem - tudo sob o mesmo teto. 13 anos a transformar ideias em produtos lançados e vendidos.",
    "Estrategia de marca, diseño de producto, y los sistemas de crecimiento que los venden - todo bajo un mismo techo. 13 años convirtiendo ideas en productos lanzados y vendidos.",
  ),
  ctaWork: tr(
    "View Selected Work",
    "Ver Trabalho Selecionado",
    "Ver Trabajo Seleccionado",
  ),
  ctaResume: tr("Download Resume", "Descarregar Currículo", "Descargar Currículum"),
  ctaContact: tr("Get in Touch", "Entrar em Contacto", "Ponte en Contacto"),
  statYears: tr(
    "Years of Experience",
    "Anos de Experiência",
    "Años de Experiencia",
  ),
  statProjects: tr(
    "Projects Delivered",
    "Projetos Entregues",
    "Proyectos Entregados",
  ),
  statIndustries: tr("Industries", "Indústrias", "Industrias"),
  statSaved: tr(
    "Saved via In-House AI Tools",
    "Poupados com Ferramentas de IA Internas",
    "Ahorrados con Herramientas de IA Internas",
  ),
};

export const about = {
  heading: tr("About", "Sobre", "Sobre"),
  leadBefore: tr(
    "Since 2013, I've worked the",
    "Desde 2013, trabalho todo o",
    "Desde 2013, trabajo toda la",
  ),
  leadHighlight: tr(
    "full stack of marketing",
    "full stack do marketing",
    "full stack del marketing",
  ),
  leadAfter: tr(
    "- from hand-built brand identities to injection-molded product design to the campaigns that move them off the shelf. I approach every brand as one system: the object, the packaging, the page, and the campaign all have to agree with each other.",
    "- desde identidades de marca feitas à mão até design de produto por injeção, até às campanhas que os tiram da prateleira. Abordo cada marca como um único sistema: o objeto, a embalagem, a página, e a campanha têm todos de concordar entre si.",
    "- desde identidades de marca hechas a mano hasta diseño de producto por inyección, hasta las campañas que los sacan de la estantería. Abordo cada marca como un único sistema: el objeto, el envase, la página, y la campaña tienen que estar todos alineados entre sí.",
  ),
  secondary: tr(
    "I plan the strategy and execute the campaign - the two rarely sit in different hands.",
    "Eu planeio a estratégia e executo a campanha - as duas raramente estão em mãos diferentes.",
    "Yo planifico la estrategia y ejecuto la campaña - las dos raramente están en manos diferentes.",
  ),
  pillar1Label: tr(
    "Brand & Creative",
    "Marca & Criatividade",
    "Marca y Creatividad",
  ),
  pillar1Desc: tr(
    "Creative direction, positioning, and identity systems - the full creative function, from first concept to signed guidelines.",
    "Direção criativa, posicionamento, e sistemas de identidade - a função criativa completa, do primeiro conceito até às guidelines finais aprovadas.",
    "Dirección creativa, posicionamiento, y sistemas de identidad - la función creativa completa, desde el primer concepto hasta las guías finales aprobadas.",
  ),
  pillar2Label: tr(
    "Growth & Ecommerce",
    "Crescimento & Ecommerce",
    "Crecimiento y Ecommerce",
  ),
  pillar2Desc: tr(
    "Technical SEO, landing pages, conversion funnels, and the lifecycle email that turn attention into revenue.",
    "SEO técnico, landing pages, funis de conversão, e o email de lifecycle que transforma atenção em receita.",
    "SEO técnico, landing pages, embudos de conversión, y el email de lifecycle que convierte atención en ingresos.",
  ),
  pillar3Label: tr(
    "AI-Native Architecture",
    "Arquitetura Nativa em IA",
    "Arquitectura Nativa en IA",
  ),
  pillar3Desc: tr(
    "Software built and shipped in-house with Claude and AI coding agents - scoped to the job, not licensed off the shelf.",
    "Software construído e lançado internamente com Claude e agentes de IA - feito à medida da necessidade, não licenciado de prateleira.",
    "Software construido y lanzado internamente con Claude y agentes de IA - hecho a medida de la necesidad, no licenciado de estantería.",
  ),
  quote: tr(
    "“Never surrender. Every problem has a solution - you just haven't found the right angle yet.”",
    "“Nunca desistir. Todo o problema tem uma solução - só ainda não encontraste o ângulo certo.”",
    "“Nunca rendirse. Todo problema tiene una solución - solo que aún no has encontrado el ángulo correcto.”",
  ),
  quoteAuthor: tr("— Marcos Leite", "— Marcos Leite", "— Marcos Leite"),
  languages: tr(
    "Languages: Portuguese · English · Spanish",
    "Idiomas: Português · Inglês · Espanhol",
    "Idiomas: Portugués · Inglés · Español",
  ),
  experienceLabel: tr("Experience", "Experiência", "Experiencia"),
  educationLabel: tr("Education", "Formação", "Formación"),
};

export const architecture = {
  heading: tr(
    "Full Stack Architecture",
    "Arquitetura Full Stack",
    "Arquitectura Full Stack",
  ),
  subtitle: tr(
    "Everything I'm able to cover, mapped like a codebase - one system, not five separate hires.",
    "Tudo o que sou capaz de cobrir, mapeado como uma codebase - um sistema, não cinco contratações separadas.",
    "Todo lo que soy capaz de cubrir, mapeado como una codebase - un sistema, no cinco contrataciones separadas.",
  ),
  readmeComment: tr(
    "// marcos-leite/full-stack-marketer/README.md",
    "// marcos-leite/full-stack-marketer/README.md",
    "// marcos-leite/full-stack-marketer/README.md",
  ),
  readmeText: tr(
    "Brand, product, and growth usually sit in three separate hires who don't talk to each other. I run all three as one system - so nothing gets lost in the handoff, and you're not paying the coordination tax between departments.",
    "Marca, produto, e crescimento costumam estar em três contratações separadas que não comunicam entre si. Eu corro os três como um único sistema - para que nada se perca na transição, e não pagues a taxa de coordenação entre departamentos.",
    "Marca, producto, y crecimiento suelen estar en tres contrataciones separadas que no se comunican entre sí. Yo llevo los tres como un único sistema - para que nada se pierda en la transición, y no pagues la tasa de coordinación entre departamentos.",
  ),
};

export const skillHub = {
  strategy: tr("Strategy", "Estratégia", "Estrategia"),
  marketing: tr("Marketing", "Marketing", "Marketing"),
  ecommerce: tr("Ecommerce", "Ecommerce", "Ecommerce"),
  aiSystems: tr("AI Systems", "Sistemas de IA", "Sistemas de IA"),
  automation: tr("Automation", "Automação", "Automatización"),
  brandDesign: tr("Brand & Design", "Marca & Design", "Marca y Diseño"),
  product3d: tr("3D & Render", "3D & Render", "3D & Render"),
};

export const impact = {
  heading: tr("Impact", "Impacto", "Impacto"),
  subtitle: tr(
    "The measurable side of building brand, product, and internal tools in-house.",
    "O lado mensurável de construir marca, produto, e ferramentas internas em casa.",
    "El lado medible de construir marca, producto, y herramientas internas en casa.",
  ),
  stat1Label: tr(
    "Communication & sales output growth from the right platforms and AI agents",
    "Crescimento de comunicação e vendas com as plataformas certas e agentes de IA",
    "Crecimiento de comunicación y ventas con las plataformas correctas y agentes de IA",
  ),
  stat2Label: tr(
    "Less repetitive work across 6 automated department workflows",
    "Menos trabalho repetitivo em 6 workflows de departamento automatizados",
    "Menos trabajo repetitivo en 6 workflows de departamento automatizados",
  ),
  stat3Label: tr(
    "Saved in setup cost across the PIM, DAM, Ticketing, SAT & SRM suite",
    "Poupados em custo de implementação no conjunto PIM, DAM, Ticketing, SAT & SRM",
    "Ahorrados en costo de implementación en el conjunto PIM, DAM, Ticketing, SAT y SRM",
  ),
  stat4Label: tr(
    "Saved every year versus buying a SaaS equivalent",
    "Poupados todos os anos face a comprar um equivalente em SaaS",
    "Ahorrados cada año frente a comprar un equivalente en SaaS",
  ),
};

export const aiToolkitSection = {
  heading: tr("AI Toolkit", "Kit de Ferramentas de IA", "Kit de Herramientas de IA"),
  subtitle: tr(
    "Full-stack marketing now means full-stack AI fluency - the models and tools built into how I work. The real shift isn't which platform I use, it's that I build my own: Claude and AI coding agents as the engineering team, instead of a SaaS vendor.",
    "Full-stack marketing hoje significa fluência full-stack em IA - os modelos e ferramentas que fazem parte do meu método de trabalho. A verdadeira mudança não é qual plataforma uso, é que construo a minha própria: Claude e agentes de IA como equipa de engenharia, em vez de um fornecedor de SaaS.",
    "Full-stack marketing hoy significa fluidez full-stack en IA - los modelos y herramientas que forman parte de mi método de trabajo. El verdadero cambio no es qué plataforma uso, es que construyo la mía propia: Claude y agentes de IA como equipo de ingeniería, en vez de un proveedor de SaaS.",
  ),
};

export const softwareSection = {
  heading: tr("Software & Tools", "Software & Ferramentas", "Software y Herramientas"),
  subtitle: tr(
    "The rest of the stack - design, 3D, data, and paid media.",
    "O resto do stack - design, 3D, dados, e paid media.",
    "El resto del stack - diseño, 3D, datos, y paid media.",
  ),
};

export const workSection = {
  heading: tr("Selected Work", "Trabalho Selecionado", "Trabajo Seleccionado"),
  subtitle: tr(
    "A first pass on real projects - full case studies in progress.",
    "Uma primeira mostra de projetos reais - case studies completos a caminho.",
    "Una primera muestra de proyectos reales - casos de estudio completos en camino.",
  ),
};

export const brandsSection = {
  heading: tr(
    "Some Brands I Worked With",
    "Algumas Marcas com Quem Trabalhei",
    "Algunas Marcas con las que Trabajé",
  ),
};

export const contact = {
  heading: tr("Contact", "Contacto", "Contacto"),
  pitch: tr(
    "Open to Head of Marketing, Head of Growth, and CMO conversations.",
    "Aberto a conversas para Head of Marketing, Head of Growth, e CMO.",
    "Abierto a conversaciones para Head of Marketing, Head of Growth, y CMO.",
  ),
  linkedin: tr(
    "Connect on LinkedIn",
    "Liga-te no LinkedIn",
    "Conecta en LinkedIn",
  ),
};

export const contactForm = {
  name: tr("Name", "Nome", "Nombre"),
  namePlaceholder: tr("Your name", "O teu nome", "Tu nombre"),
  email: tr("Email", "Email", "Email"),
  emailPlaceholder: tr(
    "you@company.com",
    "tu@empresa.com",
    "tu@empresa.com",
  ),
  message: tr("Message", "Mensagem", "Mensaje"),
  messagePlaceholder: tr(
    "What are you looking to build?",
    "O que estás a pensar construir?",
    "¿Qué estás pensando construir?",
  ),
  consentPrefix: tr(
    "By submitting this form, you agree to the",
    "Ao submeteres este formulário, concordas com a",
    "Al enviar este formulario, aceptas la",
  ),
  send: tr("Send Message", "Enviar Mensagem", "Enviar Mensaje"),
  sending: tr("Sending...", "A enviar...", "Enviando..."),
  sent: tr(
    "Message sent - I'll get back to you soon.",
    "Mensagem enviada - respondo em breve.",
    "Mensaje enviado - responderé pronto.",
  ),
  errorGeneric: tr(
    "Something went wrong.",
    "Algo correu mal.",
    "Algo salió mal.",
  ),
  errorEmailDirect: tr(
    "Email me directly at",
    "Envia-me um email diretamente para",
    "Envíame un email directamente a",
  ),
};

export const introChooser = {
  shortOnTime: tr("Short on time?", "Pouco tempo?", "¿Poco tiempo?"),
  quickSummary: tr("Quick Summary", "Resumo Rápido", "Resumen Rápido"),
  quickSummaryDesc: tr(
    "The 30-second version - who I am, what I do, and the numbers that matter.",
    "A versão de 30 segundos - quem sou, o que faço, e os números que importam.",
    "La versión de 30 segundos - quién soy, qué hago, y los números que importan.",
  ),
  openQuickSummary: tr(
    "Open Quick Summary →",
    "Abrir Resumo Rápido →",
    "Abrir Resumen Rápido →",
  ),
  fewMinutes: tr(
    "Got a few minutes?",
    "Tens uns minutos?",
    "¿Tienes unos minutos?",
  ),
  fullPortfolio: tr("Full Portfolio", "Portfolio Completo", "Portafolio Completo"),
  fullPortfolioDesc: tr(
    "The complete story - work samples, the AI-native systems I've built, and the full architecture behind it.",
    "A história completa - amostras de trabalho, os sistemas nativos em IA que construí, e toda a arquitetura por trás.",
    "La historia completa - muestras de trabajo, los sistemas nativos en IA que he construido, y toda la arquitectura detrás.",
  ),
  enterFullPortfolio: tr(
    "Enter Full Portfolio →",
    "Entrar no Portfolio Completo →",
    "Entrar al Portafolio Completo →",
  ),
};

export const cookieConsent = {
  text: tr(
    "This site doesn't use tracking cookies today, but may use basic ones for essential functionality in the future. Read the",
    "Este site não usa cookies de rastreio hoje, mas pode vir a usar cookies básicos para funcionalidade essencial no futuro. Lê a",
    "Este sitio no usa cookies de rastreo hoy, pero puede llegar a usar cookies básicas para funcionalidad esencial en el futuro. Lee la",
  ),
  policyLink: tr(
    "Privacy & Cookies Policy",
    "Política de Privacidade & Cookies",
    "Política de Privacidad y Cookies",
  ),
  forDetails: tr("for details.", "para mais detalhes.", "para más detalles."),
  decline: tr("Decline", "Recusar", "Rechazar"),
  accept: tr("Accept", "Aceitar", "Aceptar"),
};

export const scrollTop = {
  label: tr("Scroll to top", "Voltar ao topo", "Volver arriba"),
};

export const chat = {
  assistantName: tr(
    "Marcos's Assistant",
    "Assistente do Marcos",
    "Asistente de Marcos",
  ),
  repliesInstantly: tr(
    "Usually replies instantly",
    "Normalmente responde na hora",
    "Normalmente responde al instante",
  ),
  closeChat: tr("Close chat", "Fechar chat", "Cerrar chat"),
  openChat: tr("Open chat", "Abrir chat", "Abrir chat"),
  askQuestion: tr(
    "Ask a question...",
    "Faz uma pergunta...",
    "Haz una pregunta...",
  ),
  askQuestionCursor: tr(
    "Ask a question",
    "Faz uma pergunta",
    "Haz una pregunta",
  ),
  send: tr("Send", "Enviar", "Enviar"),
  tldrButton: tr(
    "TL;DR - too lazy to read?",
    "Resumo - sem paciência para ler?",
    "Resumen - ¿sin ganas de leer?",
  ),
  greeting: tr(
    "Hi, I'm Marcos's assistant. Ask me about his work, skills, or how to get in touch.",
    "Olá, sou o assistente do Marcos. Pergunta-me sobre o trabalho dele, competências, ou como entrar em contacto.",
    "Hola, soy el asistente de Marcos. Pregúntame sobre su trabajo, habilidades, o cómo ponerte en contacto.",
  ),
  tldrAnswer: tr(
    "13+ years running brand, product, and growth as one system - not three separate hires. Most recently: built an in-house AI platform suite (PIM, DAM, SRM, repairs, ticketing) with Claude and AI agents instead of buying SaaS, saving an estimated €370k in setup and €67k/year. Hire him if you want someone who can set the strategy, design the brand, and ship the software behind it - without three handoffs in between.",
    "13+ anos a gerir marca, produto, e crescimento como um único sistema - não três contratações separadas. Mais recentemente: construiu um conjunto de plataformas de IA internas (PIM, DAM, SRM, reparações, ticketing) com Claude e agentes de IA em vez de comprar SaaS, poupando um estimado de €370k em implementação e €67k/ano. Contrata-o se quiseres alguém que defina a estratégia, desenhe a marca, e construa o software por trás - sem três transições pelo meio.",
    "13+ años gestionando marca, producto, y crecimiento como un único sistema - no tres contrataciones separadas. Más recientemente: construyó un conjunto de plataformas de IA internas (PIM, DAM, SRM, reparaciones, ticketing) con Claude y agentes de IA en vez de comprar SaaS, ahorrando un estimado de €370k en implementación y €67k/año. Contrátalo si quieres a alguien que defina la estrategia, diseñe la marca, y construya el software detrás - sin tres transiciones por el medio.",
  ),
  faqGreeting: tr(
    "Hey! Ask me about Marcos's work, skills, experience, or how to get in touch.",
    "Olá! Pergunta-me sobre o trabalho, competências, experiência do Marcos, ou como entrar em contacto.",
    "¡Hola! Pregúntame sobre el trabajo, habilidades, experiencia de Marcos, o cómo ponerte en contacto.",
  ),
  faqWho: tr(
    "Marcos Leite is a Full Stack Marketeer - he runs brand, product, and growth as one system instead of three separate hires. 13+ years across brand identity, product design, and AI-driven growth. Check the About section above for the full story.",
    "Marcos Leite é um Full Stack Marketeer - gere marca, produto, e crescimento como um único sistema em vez de três contratações separadas. 13+ anos entre identidade de marca, design de produto, e crescimento orientado por IA. Vê a secção About acima para a história completa.",
    "Marcos Leite es un Full Stack Marketeer - gestiona marca, producto, y crecimiento como un único sistema en vez de tres contrataciones separadas. 13+ años entre identidad de marca, diseño de producto, y crecimiento impulsado por IA. Mira la sección About arriba para la historia completa.",
  ),
  faqServices: tr(
    "He covers brand strategy & creative direction, product design, ecommerce & CRO, technical SEO, lifecycle email, and AI-native internal tooling - building software with Claude and AI agents instead of buying SaaS. See the Full Stack Architecture section for the full breakdown.",
    "Ele cobre estratégia de marca & direção criativa, design de produto, ecommerce & CRO, SEO técnico, email de lifecycle, e ferramentas internas nativas em IA - construindo software com Claude e agentes de IA em vez de comprar SaaS. Vê a secção Full Stack Architecture para o detalhe completo.",
    "Él cubre estrategia de marca y dirección creativa, diseño de producto, ecommerce y CRO, SEO técnico, email de lifecycle, y herramientas internas nativas en IA - construyendo software con Claude y agentes de IA en vez de comprar SaaS. Mira la sección Full Stack Architecture para el detalle completo.",
  ),
  faqContact: tr(
    "You can reach Marcos directly at {email}, via LinkedIn, or the contact form at the bottom of this page.",
    "Podes contactar o Marcos diretamente em {email}, via LinkedIn, ou pelo formulário de contacto no fundo desta página.",
    "Puedes contactar a Marcos directamente en {email}, vía LinkedIn, o por el formulario de contacto al final de esta página.",
  ),
  faqResume: tr(
    "You can download his resume as a PDF from the \"Download Resume\" button at the top of the page, or via /api/resume.",
    "Podes descarregar o currículo dele em PDF através do botão \"Download Resume\" no topo da página, ou via /api/resume.",
    "Puedes descargar su currículum en PDF a través del botón \"Download Resume\" en la parte superior de la página, o vía /api/resume.",
  ),
  faqExperience: tr(
    "13+ years of experience - from hands-on graphic and editorial design to leading brand, marketing, and product functions end-to-end.",
    "13+ anos de experiência - desde design gráfico e editorial prático até liderar funções de marca, marketing, e produto de ponta a ponta.",
    "13+ años de experiencia - desde diseño gráfico y editorial práctico hasta liderar funciones de marca, marketing, y producto de punta a punta.",
  ),
  faqWork: tr(
    "Scroll down to Selected Work for real projects - from an in-house AI platform suite to trade-show stands and product design for Yamaha Racing.",
    "Faz scroll até Selected Work para veres projetos reais - desde um conjunto de plataformas de IA internas até stands de feiras e design de produto para a Yamaha Racing.",
    "Haz scroll hasta Selected Work para ver proyectos reales - desde un conjunto de plataformas de IA internas hasta stands de ferias y diseño de producto para Yamaha Racing.",
  ),
  faqAi: tr(
    "He builds AI-native internal tooling using Claude and AI coding agents - PIM, DAM, SRM, ticketing, and repair systems built in-house instead of licensed SaaS. See the AI Toolkit section.",
    "Ele constrói ferramentas internas nativas em IA usando Claude e agentes de IA - sistemas de PIM, DAM, SRM, ticketing, e reparações construídos internamente em vez de SaaS licenciado. Vê a secção AI Toolkit.",
    "Él construye herramientas internas nativas en IA usando Claude y agentes de IA - sistemas de PIM, DAM, SRM, ticketing, y reparaciones construidos internamente en vez de SaaS licenciado. Mira la sección AI Toolkit.",
  ),
  faqPrice: tr(
    "Rates depend on scope - the fastest way to get a real answer is to reach out directly at {email}.",
    "Os valores dependem do âmbito - a forma mais rápida de teres uma resposta real é contactares diretamente em {email}.",
    "Las tarifas dependen del alcance - la forma más rápida de obtener una respuesta real es contactar directamente en {email}.",
  ),
  faqLanguage: tr(
    "He speaks {languages}.",
    "Ele fala {languages}.",
    "Él habla {languages}.",
  ),
  faqCompany: tr(
    "He's currently Brand & Creative Manager at FLAMA S.A., leading brand, product, and the AI-native growth engine behind it.",
    "Atualmente é Brand & Creative Manager na FLAMA S.A., a liderar a marca, o produto, e o motor de crescimento nativo em IA por trás.",
    "Actualmente es Brand & Creative Manager en FLAMA S.A., liderando la marca, el producto, y el motor de crecimiento nativo en IA detrás.",
  ),
  fallback: tr(
    "I don't have a canned answer for that - the fastest way to get a real answer is to email Marcos directly at {email} or use the contact form below.",
    "Não tenho uma resposta pronta para isso - a forma mais rápida de teres uma resposta real é enviares um email diretamente ao Marcos para {email} ou usares o formulário de contacto abaixo.",
    "No tengo una respuesta preparada para eso - la forma más rápida de obtener una respuesta real es enviar un email directamente a Marcos a {email} o usar el formulario de contacto abajo.",
  ),
};

export const summaryPage = {
  metaTitle: tr(
    "Quick Summary - Marcos Leite",
    "Resumo Rápido - Marcos Leite",
    "Resumen Rápido - Marcos Leite",
  ),
  pitch: tr(
    "I run brand, product, and growth as one system instead of three separate hires. Most recently: I built an in-house AI platform suite - PIM, DAM, SRM, ticketing, and repairs - with Claude and AI coding agents instead of buying SaaS.",
    "Gero marca, produto, e crescimento como um único sistema em vez de três contratações separadas. Mais recentemente: construí um conjunto de plataformas de IA internas - PIM, DAM, SRM, ticketing, e reparações - com Claude e agentes de IA em vez de comprar SaaS.",
    "Gestiono marca, producto, y crecimiento como un único sistema en vez de tres contrataciones separadas. Más recientemente: construí un conjunto de plataformas de IA internas - PIM, DAM, SRM, ticketing, y reparaciones - con Claude y agentes de IA en vez de comprar SaaS.",
  ),
  statYears: tr("Years", "Anos", "Años"),
  statGrowth: tr("Growth Driven", "Crescimento Gerado", "Crecimiento Generado"),
  statProjects: tr("Projects", "Projetos", "Proyectos"),
  statSaved: tr(
    "Saved via AI Tools",
    "Poupados com IA",
    "Ahorrados con IA",
  ),
  downloadResume: tr(
    "Download Resume",
    "Descarregar Currículo",
    "Descargar Currículum",
  ),
  getInTouch: tr("Get in Touch", "Entrar em Contacto", "Ponte en Contacto"),
  viewFullPortfolio: tr(
    "View Full Portfolio",
    "Ver Portfolio Completo",
    "Ver Portafolio Completo",
  ),
};

export const privacyPage = {
  metaTitle: tr(
    "Privacy Policy - Marcos Leite",
    "Política de Privacidade - Marcos Leite",
    "Política de Privacidad - Marcos Leite",
  ),
  backToSite: tr("← Back to site", "← Voltar ao site", "← Volver al sitio"),
  title: tr(
    "Privacy & Cookies Policy",
    "Política de Privacidade & Cookies",
    "Política de Privacidad y Cookies",
  ),
  lastUpdated: tr("Last updated:", "Última atualização:", "Última actualización:"),
  s1Title: tr(
    "1. Who is responsible for your data",
    "1. Quem é responsável pelos teus dados",
    "1. Quién es responsable de tus datos",
  ),
  s1Body: tr(
    "This site (the “Site”) is operated by {name}, acting as the data controller for the personal data described below. For any privacy-related question or request, use the {contactForm}.",
    "Este site (o “Site”) é operado por {name}, que atua como responsável pelo tratamento dos dados pessoais descritos abaixo. Para qualquer questão ou pedido relacionado com privacidade, usa o {contactForm}.",
    "Este sitio (el “Sitio”) es operado por {name}, actuando como responsable del tratamiento de los datos personales descritos abajo. Para cualquier pregunta o solicitud relacionada con privacidad, usa el {contactForm}.",
  ),
  contactFormLink: tr("contact form", "formulário de contacto", "formulario de contacto"),
  s2Title: tr(
    "2. What data is collected",
    "2. Que dados são recolhidos",
    "2. Qué datos se recopilan",
  ),
  s2Item1Label: tr("Contact form:", "Formulário de contacto:", "Formulario de contacto:"),
  s2Item1: tr(
    "the name, email address, and message you choose to submit through the Contact section.",
    "o nome, endereço de email, e mensagem que decides submeter através da secção Contact.",
    "el nombre, dirección de email, y mensaje que decides enviar a través de la sección Contact.",
  ),
  s2Item2Label: tr(
    "Technical/server data:",
    "Dados técnicos/de servidor:",
    "Datos técnicos/de servidor:",
  ),
  s2Item2: tr(
    "basic request logs (such as IP address and timestamp) collected automatically by the hosting provider as part of normal web server operation.",
    "registos básicos de pedidos (como endereço IP e data/hora) recolhidos automaticamente pelo fornecedor de alojamento como parte do funcionamento normal do servidor web.",
    "registros básicos de solicitudes (como dirección IP y fecha/hora) recopilados automáticamente por el proveedor de alojamiento como parte del funcionamiento normal del servidor web.",
  ),
  s2Body: tr(
    "The Site does not use analytics scripts, advertising pixels, or login/account systems, so no other personal data is collected beyond what is listed above.",
    "O Site não usa scripts de analytics, pixels publicitários, ou sistemas de login/conta, pelo que não é recolhido nenhum outro dado pessoal além do listado acima.",
    "El Sitio no usa scripts de analytics, píxeles publicitarios, o sistemas de login/cuenta, por lo que no se recopila ningún otro dato personal más allá de lo listado arriba.",
  ),
  s3Title: tr(
    "3. Why this data is processed",
    "3. Porque é que estes dados são processados",
    "3. Por qué se procesan estos datos",
  ),
  s3Body: tr(
    "Contact form data is processed solely to respond to your message. Server logs are processed for security, abuse prevention, and to keep the Site running reliably. The legal basis is your consent (submitting the form) and legitimate interest (operating and securing the Site).",
    "Os dados do formulário de contacto são processados apenas para responder à tua mensagem. Os registos do servidor são processados para segurança, prevenção de abuso, e para manter o Site a funcionar de forma fiável. A base legal é o teu consentimento (ao submeter o formulário) e o interesse legítimo (operar e proteger o Site).",
    "Los datos del formulario de contacto se procesan únicamente para responder a tu mensaje. Los registros del servidor se procesan por seguridad, prevención de abuso, y para mantener el Sitio funcionando de forma fiable. La base legal es tu consentimiento (al enviar el formulario) y el interés legítimo (operar y proteger el Sitio).",
  ),
  s4Title: tr(
    "4. Who this data is shared with",
    "4. Com quem estes dados são partilhados",
    "4. Con quién se comparten estos datos",
  ),
  s4Body: tr(
    "Contact form submissions are delivered using a third-party email-delivery service, solely to transmit your message to {name}. The Site is hosted on a cloud hosting provider, which processes server logs as part of providing hosting infrastructure. Both providers act as data processors, are bound by their own privacy and data-protection terms, and are named in full on request. Your data is never sold or used for advertising.",
    "As submissões do formulário de contacto são entregues através de um serviço de envio de email de terceiros, apenas para transmitir a tua mensagem a {name}. O Site está alojado num fornecedor de alojamento na cloud, que processa os registos do servidor como parte da infraestrutura de alojamento. Ambos os fornecedores atuam como subcontratantes, estão vinculados aos seus próprios termos de privacidade e proteção de dados, e são identificados na íntegra a pedido. Os teus dados nunca são vendidos ou usados para publicidade.",
    "Los envíos del formulario de contacto se entregan usando un servicio de envío de email de terceros, únicamente para transmitir tu mensaje a {name}. El Sitio está alojado en un proveedor de alojamiento en la nube, que procesa los registros del servidor como parte de la infraestructura de alojamiento. Ambos proveedores actúan como encargados del tratamiento, están vinculados a sus propios términos de privacidad y protección de datos, y se identifican en su totalidad a petición. Tus datos nunca se venden ni se usan para publicidad.",
  ),
  s5Title: tr(
    "5. How long data is kept",
    "5. Durante quanto tempo os dados são guardados",
    "5. Durante cuánto tiempo se conservan los datos",
  ),
  s5Body: tr(
    "Contact form messages are kept only as long as needed to handle your inquiry, and are deleted on request. Server logs are retained by the hosting provider for a limited period for security purposes, per their own retention policy.",
    "As mensagens do formulário de contacto são guardadas apenas o tempo necessário para tratar do teu pedido, e são eliminadas a pedido. Os registos do servidor são retidos pelo fornecedor de alojamento durante um período limitado para fins de segurança, de acordo com a sua própria política de retenção.",
    "Los mensajes del formulario de contacto se conservan solo el tiempo necesario para atender tu solicitud, y se eliminan a petición. Los registros del servidor son retenidos por el proveedor de alojamiento durante un período limitado por motivos de seguridad, según su propia política de retención.",
  ),
  s6Title: tr("6. Cookies", "6. Cookies", "6. Cookies"),
  s6Body: tr(
    "This Site does not use cookies, local storage, or any similar tracking technology to identify or track visitors. If that ever changes (for example, if analytics are added in the future), this page will be updated and, where required, a consent banner will be added.",
    "Este Site não usa cookies, local storage, ou qualquer tecnologia de rastreio semelhante para identificar ou rastrear visitantes. Se isso alguma vez mudar (por exemplo, se forem adicionados analytics no futuro), esta página será atualizada e, quando exigido, será adicionado um banner de consentimento.",
    "Este Sitio no usa cookies, local storage, o cualquier tecnología de rastreo similar para identificar o rastrear visitantes. Si eso alguna vez cambia (por ejemplo, si se añaden analytics en el futuro), esta página será actualizada y, cuando se requiera, se añadirá un banner de consentimiento.",
  ),
  s7Title: tr(
    "7. Your rights",
    "7. Os teus direitos",
    "7. Tus derechos",
  ),
  s7Body: tr(
    "Under the GDPR, you have the right to access, correct, delete, restrict, or object to the processing of your personal data, and to request a copy of it in a portable format. To exercise any of these rights, use the {contactForm}. You also have the right to lodge a complaint with your local data protection authority (in Portugal, the {cnpd}).",
    "Ao abrigo do RGPD, tens o direito de aceder, corrigir, eliminar, restringir, ou opor-te ao processamento dos teus dados pessoais, e de pedir uma cópia dos mesmos num formato portátil. Para exercer qualquer um destes direitos, usa o {contactForm}. Também tens o direito de apresentar reclamação junto da autoridade de proteção de dados local (em Portugal, a {cnpd}).",
    "Bajo el RGPD, tienes derecho a acceder, corregir, eliminar, restringir, u oponerte al tratamiento de tus datos personales, y a solicitar una copia de los mismos en un formato portátil. Para ejercer cualquiera de estos derechos, usa el {contactForm}. También tienes derecho a presentar una reclamación ante la autoridad de protección de datos local (en Portugal, la {cnpd}).",
  ),
  s8Title: tr(
    "8. Changes to this policy",
    "8. Alterações a esta política",
    "8. Cambios a esta política",
  ),
  s8Body: tr(
    "This policy may be updated from time to time to reflect changes to the Site. The “Last updated” date at the top of this page will always reflect the latest version.",
    "Esta política pode ser atualizada periodicamente para refletir alterações ao Site. A data “Última atualização” no topo desta página refletirá sempre a versão mais recente.",
    "Esta política puede actualizarse periódicamente para reflejar cambios en el Sitio. La fecha “Última actualización” en la parte superior de esta página siempre reflejará la versión más reciente.",
  ),
};

export const langSwitcher = {
  label: tr("Language", "Idioma", "Idioma"),
};
