import type { Locale } from "./locales";

type Dict = Record<Locale, string>;

function tr(en: string, pt: string, es: string): Dict {
  return { en, pt, es };
}

// Architecture tree: folder/file/subitem NAMES stay in English (they're
// styled as code identifiers, like a real file tree) - only the "// note"
// comments are translated, since those are the actual readable content.
export const architectureNotes = {
  folders: {
    "strategy/": tr(
      "brand & go-to-market thinking",
      "pensamento de marca & go-to-market",
      "pensamiento de marca y go-to-market",
    ),
    "brand-design/": tr(
      "identity, product, and motion",
      "identidade, produto, e motion",
      "identidad, producto, y motion",
    ),
    "marketing/": tr(
      "campaigns that move product",
      "campanhas que vendem produto",
      "campañas que venden producto",
    ),
    "ecommerce/": tr(
      "the mechanics that convert",
      "a mecânica que converte",
      "la mecánica que convierte",
    ),
    "ai-ops/": tr(
      "building instead of licensing",
      "construir em vez de licenciar",
      "construir en vez de licenciar",
    ),
  },
  files: {
    "brand-positioning.ts": tr(
      "defining who the brand is for and why it wins",
      "definir para quem é a marca e porque é que vence",
      "definir para quién es la marca y por qué gana",
    ),
    "go-to-market.ts": tr(
      "launch plans from concept to shelf",
      "planos de lançamento do conceito à prateleira",
      "planes de lanzamiento del concepto a la estantería",
    ),
    "budget-planning.ts": tr(
      "allocating spend across channels for ROI",
      "alocar investimento entre canais para ROI",
      "asignar inversión entre canales para ROI",
    ),
    "market-research.ts": tr(
      "reading the category, competitors, and audience",
      "ler a categoria, concorrência, e audiência",
      "leer la categoría, competencia, y audiencia",
    ),
    "identity-systems.ts": tr(
      "logos, guidelines, and visual language",
      "logótipos, guidelines, e linguagem visual",
      "logotipos, guidelines, y lenguaje visual",
    ),
    "packaging-design.ts": tr(
      "structural and graphic packaging design",
      "design estrutural e gráfico de embalagem",
      "diseño estructural y gráfico de packaging",
    ),
    "product-design.ts": tr(
      "concept, prototyping, and 3D renders",
      "conceito, prototipagem, e renders 3D",
      "concepto, prototipado, y renders 3D",
    ),
    "motion-graphics.ts": tr(
      "video and animated brand assets",
      "vídeo e assets de marca animados",
      "vídeo y assets de marca animados",
    ),
    "campaign-strategy.ts": tr(
      "360-degree campaigns across digital, social, and retail",
      "campanhas 360º entre digital, social, e retalho",
      "campañas 360º entre digital, social, y retail",
    ),
    "content-marketing.ts": tr(
      "organic content built to grow visibility",
      "conteúdo orgânico construído para crescer visibilidade",
      "contenido orgánico construido para crecer visibilidad",
    ),
    "technical-seo.ts": tr(
      "on-site SEO and search performance",
      "SEO on-site e performance de pesquisa",
      "SEO on-site y rendimiento de búsqueda",
    ),
    "paid-media.ts": tr(
      "search, social, and shopping campaigns",
      "campanhas de search, social, e shopping",
      "campañas de search, social, y shopping",
    ),
    "lifecycle-email.ts": tr(
      "retention and CRM automation",
      "retenção e automação de CRM",
      "retención y automatización de CRM",
    ),
    "platform-ops.ts": tr(
      "managing the storefront and product catalog",
      "gerir a loja online e o catálogo de produtos",
      "gestionar la tienda online y el catálogo de productos",
    ),
    "conversion-funnels.ts": tr(
      "landing pages and checkout optimization",
      "landing pages e otimização de checkout",
      "landing pages y optimización de checkout",
    ),
    "analytics-reporting.ts": tr(
      "dashboards and performance tracking",
      "dashboards e acompanhamento de performance",
      "dashboards y seguimiento de rendimiento",
    ),
    "workflow-automation.ts": tr(
      "automating repetitive work across departments",
      "automatizar trabalho repetitivo entre departamentos",
      "automatizar trabajo repetitivo entre departamentos",
    ),
    "pim.ts": tr(
      "in-house Product Information Management platform",
      "plataforma interna de Product Information Management",
      "plataforma interna de Product Information Management",
    ),
    "dam.ts": tr(
      "in-house Digital Asset Management platform",
      "plataforma interna de Digital Asset Management",
      "plataforma interna de Digital Asset Management",
    ),
    "srm.ts": tr(
      "in-house Supplier Relationship Management tool",
      "ferramenta interna de Supplier Relationship Management",
      "herramienta interna de Supplier Relationship Management",
    ),
    "ai-assisted-dev.ts": tr(
      "shipping internal tools with Claude, React, and Node.js",
      "a lançar ferramentas internas com Claude, React, e Node.js",
      "lanzando herramientas internas con Claude, React, y Node.js",
    ),
  },
  subitems: {
    "competitive-mapping": tr(
      "sizing up category leaders and finding white space",
      "avaliar os líderes da categoria e encontrar espaço livre",
      "evaluar a los líderes de la categoría y encontrar espacio libre",
    ),
    "value-proposition": tr(
      "translating research into a message that sticks",
      "traduzir a investigação numa mensagem que fica",
      "traducir la investigación en un mensaje que perdura",
    ),
    "launch-sequencing": tr(
      "timing channels, retail, and press around one date",
      "sincronizar canais, retalho, e imprensa numa data",
      "sincronizar canales, retail, y prensa en una fecha",
    ),
    "stakeholder-alignment": tr(
      "briefing sales, ops, and partners before day one",
      "alinhar vendas, operações, e parceiros antes do dia um",
      "alinear ventas, operaciones, y socios antes del día uno",
    ),
    "channel-mix": tr(
      "splitting spend across paid, organic, and retail",
      "dividir investimento entre paid, orgânico, e retalho",
      "dividir inversión entre paid, orgánico, y retail",
    ),
    "forecast-tracking": tr(
      "reconciling planned spend against actual return",
      "confrontar o investimento planeado com o retorno real",
      "confrontar la inversión planificada con el retorno real",
    ),
    "trend-scanning": tr(
      "tracking category shifts before they hit mainstream",
      "detetar mudanças na categoria antes de se tornarem mainstream",
      "detectar cambios en la categoría antes de volverse mainstream",
    ),
    "audience-interviews": tr(
      "validating assumptions directly with real buyers",
      "validar hipóteses diretamente com compradores reais",
      "validar hipótesis directamente con compradores reales",
    ),
    "logo-systems": tr(
      "building marks that scale from favicon to billboard",
      "construir marcas que escalam do favicon ao outdoor",
      "construir marcas que escalan del favicon al cartel",
    ),
    "brand-guidelines": tr(
      "documenting rules so the identity survives without me",
      "documentar regras para a identidade sobreviver sem mim",
      "documentar reglas para que la identidad sobreviva sin mí",
    ),
    "structural-design": tr(
      "engineering the physical pack, not just the label",
      "engenharia da embalagem física, não só o rótulo",
      "ingeniería del envase físico, no solo la etiqueta",
    ),
    "shelf-impact": tr(
      "designing for standout at actual point of sale",
      "desenhar para destacar no ponto de venda real",
      "diseñar para destacar en el punto de venta real",
    ),
    "concept-sketching": tr(
      "moving from brief to first viable form",
      "passar do briefing à primeira forma viável",
      "pasar del brief a la primera forma viable",
    ),
    "3d-prototyping": tr(
      "CAD models and renders before a unit is tooled",
      "modelos CAD e renders antes de haver ferramenta",
      "modelos CAD y renders antes de haber herramienta",
    ),
    "social-cuts": tr(
      "short-form video edited for feed and story formats",
      "vídeo curto editado para formatos de feed e stories",
      "vídeo corto editado para formatos de feed y stories",
    ),
    "product-animation": tr(
      "3D product spins and feature explainers",
      "rotações 3D de produto e vídeos explicativos",
      "rotaciones 3D de producto y vídeos explicativos",
    ),
    "creative-briefs": tr(
      "turning strategy into a brief a team can execute",
      "transformar estratégia num briefing executável pela equipa",
      "transformar estrategia en un brief ejecutable por el equipo",
    ),
    "channel-orchestration": tr(
      "sequencing digital, social, and retail around one idea",
      "sincronizar digital, social, e retalho à volta de uma ideia",
      "sincronizar digital, social, y retail alrededor de una idea",
    ),
    "editorial-calendar": tr(
      "planning content around real search and social demand",
      "planear conteúdo com base na procura real de pesquisa e social",
      "planificar contenido según la demanda real de búsqueda y social",
    ),
    copywriting: tr(
      "writing for the channel, not just the brand",
      "escrever para o canal, não só para a marca",
      "escribir para el canal, no solo para la marca",
    ),
    "site-audits": tr(
      "finding and fixing what's actually blocking rankings",
      "encontrar e corrigir o que realmente bloqueia o ranking",
      "encontrar y corregir lo que realmente bloquea el ranking",
    ),
    "keyword-mapping": tr(
      "matching pages to the terms buyers actually search",
      "associar páginas aos termos que os compradores pesquisam",
      "asociar páginas a los términos que los compradores buscan",
    ),
    "campaign-setup": tr(
      "structuring accounts for clean, attributable data",
      "estruturar contas para dados limpos e atribuíveis",
      "estructurar cuentas para datos limpios y atribuibles",
    ),
    "budget-optimization": tr(
      "reallocating spend toward what's actually converting",
      "realocar investimento para o que realmente converte",
      "reasignar inversión hacia lo que realmente convierte",
    ),
    "flow-design": tr(
      "building the automated sequences that run without me",
      "construir as sequências automáticas que correm sem mim",
      "construir las secuencias automáticas que funcionan sin mí",
    ),
    segmentation: tr(
      "targeting messages by real behavior, not guesswork",
      "direcionar mensagens por comportamento real, não achismo",
      "dirigir mensajes por comportamiento real, no suposiciones",
    ),
    "catalog-management": tr(
      "keeping product data clean across every listing",
      "manter os dados de produto limpos em todos os anúncios",
      "mantener los datos de producto limpios en todos los anuncios",
    ),
    "platform-admin": tr(
      "running the storefront day to day",
      "gerir a loja online no dia a dia",
      "gestionar la tienda online en el día a día",
    ),
    "landing-page-design": tr(
      "building pages built to convert, not just look good",
      "construir páginas feitas para converter, não só para parecer bem",
      "construir páginas hechas para convertir, no solo para verse bien",
    ),
    "checkout-optimization": tr(
      "removing friction between cart and paid order",
      "remover fricção entre o carrinho e a encomenda paga",
      "eliminar fricción entre el carrito y el pedido pagado",
    ),
    dashboarding: tr(
      "turning raw data into a report leadership actually reads",
      "transformar dados em bruto num relatório que a liderança lê",
      "transformar datos en bruto en un informe que la dirección lee",
    ),
    "performance-reviews": tr(
      "tying results back to what actually moved them",
      "ligar os resultados ao que realmente os moveu",
      "vincular los resultados a lo que realmente los movió",
    ),
    "process-mapping": tr(
      "finding the repetitive work worth automating",
      "encontrar o trabalho repetitivo que vale a pena automatizar",
      "encontrar el trabajo repetitivo que vale la pena automatizar",
    ),
    "automation-builds": tr(
      "shipping the automation, not just the plan",
      "entregar a automação, não só o plano",
      "entregar la automatización, no solo el plan",
    ),
    "data-modeling": tr(
      "structuring product data so every channel pulls from one source",
      "estruturar dados de produto para todos os canais partirem da mesma fonte",
      "estructurar datos de producto para que todos los canales partan de la misma fuente",
    ),
    "catalog-sync": tr(
      "keeping listings consistent across every sales channel",
      "manter os anúncios consistentes em todos os canais de venda",
      "mantener los anuncios consistentes en todos los canales de venta",
    ),
    "asset-pipelines": tr(
      "organizing and versioning creative at scale",
      "organizar e versionar criativos em escala",
      "organizar y versionar creativos a escala",
    ),
    "access-control": tr(
      "making the right asset findable by the right team",
      "tornar o asset certo encontrável pela equipa certa",
      "hacer que el asset correcto sea encontrable por el equipo correcto",
    ),
    "vendor-tracking": tr(
      "centralizing supplier data and communication",
      "centralizar dados e comunicação com fornecedores",
      "centralizar datos y comunicación con proveedores",
    ),
    "order-visibility": tr(
      "tracking POs and lead times without a spreadsheet",
      "acompanhar encomendas e prazos sem uma folha de cálculo",
      "hacer seguimiento de pedidos y plazos sin una hoja de cálculo",
    ),
    "prompt-engineering": tr(
      "directing AI tools to ship production-ready code",
      "dirigir ferramentas de IA para entregar código pronto a produção",
      "dirigir herramientas de IA para entregar código listo para producción",
    ),
    "full-stack-shipping": tr(
      "React front end, Node back end, shipped end to end",
      "front end em React, back end em Node, entregue de ponta a ponta",
      "front end en React, back end en Node, entregado de punta a punta",
    ),
  },
} as const;

interface WorkTranslation {
  name: Dict;
  tag: Dict;
  blurb: Dict;
}

export const workTranslations: Record<string, WorkTranslation> = {
  "/work/pim-dam.png": {
    name: tr(
      "In-House PIM + DAM Platform",
      "Plataforma Interna PIM + DAM",
      "Plataforma Interna PIM + DAM",
    ),
    tag: tr(
      "Internal AI Platform",
      "Plataforma de IA Interna",
      "Plataforma de IA Interna",
    ),
    blurb: tr(
      "In-house Product Information Management and Digital Asset Management platform, built via AI-assisted development - flagship of a broader initiative automating repetitive work across departments. Numbers below.",
      "Plataforma interna de Product Information Management e Digital Asset Management, construída com desenvolvimento assistido por IA - a plataforma-bandeira de uma iniciativa mais alargada de automação de trabalho repetitivo entre departamentos. Números abaixo.",
      "Plataforma interna de Product Information Management y Digital Asset Management, construida con desarrollo asistido por IA - la plataforma insignia de una iniciativa más amplia de automatización de trabajo repetitivo entre departamentos. Números abajo.",
    ),
  },
  "/work/sat.png": {
    name: tr(
      "SAT Repair Platform",
      "Plataforma de Reparações SAT",
      "Plataforma de Reparaciones SAT",
    ),
    tag: tr(
      "Internal AI Platform",
      "Plataforma de IA Interna",
      "Plataforma de IA Interna",
    ),
    blurb: tr(
      "In-house repair service (SAT) platform, built via AI-assisted development - manages the full repair lifecycle from request to ready-to-ship, with technician workload, parts inventory, and turnaround-time tracking built in.",
      "Plataforma interna de assistência técnica (SAT), construída com desenvolvimento assistido por IA - gere todo o ciclo de reparação, do pedido ao envio, com carga de trabalho de técnicos, inventário de peças, e acompanhamento de tempos incluídos.",
      "Plataforma interna de servicio técnico (SAT), construida con desarrollo asistido por IA - gestiona todo el ciclo de reparación, desde la solicitud hasta el envío, con carga de trabajo de técnicos, inventario de piezas, y seguimiento de tiempos incluidos.",
    ),
  },
  "/work/srm.png": {
    name: tr(
      "In-House SRM Platform",
      "Plataforma Interna SRM",
      "Plataforma Interna SRM",
    ),
    tag: tr(
      "Internal AI Platform",
      "Plataforma de IA Interna",
      "Plataforma de IA Interna",
    ),
    blurb: tr(
      "In-house Supplier Relationship Management (SRM) platform, built via AI-assisted development - centralizes supplier onboarding, contracts, purchase orders, and risk scoring in one system instead of scattered spreadsheets.",
      "Plataforma interna de Supplier Relationship Management (SRM), construída com desenvolvimento assistido por IA - centraliza a integração de fornecedores, contratos, encomendas, e avaliação de risco num só sistema em vez de folhas de cálculo dispersas.",
      "Plataforma interna de Supplier Relationship Management (SRM), construida con desarrollo asistido por IA - centraliza la incorporación de proveedores, contratos, pedidos de compra, y evaluación de riesgo en un solo sistema en vez de hojas de cálculo dispersas.",
    ),
  },
  "/work/ecommerce-cro.png": {
    name: tr(
      "Conversion Growth Engine",
      "Motor de Crescimento de Conversão",
      "Motor de Crecimiento de Conversión",
    ),
    tag: tr("Ecommerce & CRO", "Ecommerce & CRO", "Ecommerce y CRO"),
    blurb: tr(
      "End-to-end e-commerce optimization platform tracking funnels, on-site conversion, and paid campaign performance in one dashboard - real-time visibility from visit to purchase.",
      "Plataforma de otimização de ecommerce de ponta a ponta, a acompanhar funis, conversão on-site, e performance de campanhas pagas num só dashboard - visibilidade em tempo real da visita até à compra.",
      "Plataforma de optimización de ecommerce de punta a punta, con seguimiento de embudos, conversión on-site, y rendimiento de campañas pagadas en un solo dashboard - visibilidad en tiempo real desde la visita hasta la compra.",
    ),
  },
  "/work/tradeshow-stand.png": {
    name: tr(
      "Trade-Show Stand System",
      "Sistema de Stand para Feiras",
      "Sistema de Stand para Ferias",
    ),
    tag: tr("Exhibition Design", "Design de Exposição", "Diseño de Exposición"),
    blurb: tr(
      "Modular exhibition stand design for industry trade fairs - structure, branded graphics, product display, and lighting planned as one system, built to be reused show after show.",
      "Design modular de stand para feiras da indústria - estrutura, gráficos de marca, exposição de produto, e iluminação planeados como um sistema, feito para ser reutilizado feira após feira.",
      "Diseño modular de stand para ferias de la industria - estructura, gráficos de marca, exhibición de producto, e iluminación planificados como un sistema, hecho para reutilizarse feria tras feria.",
    ),
  },
  "/work/point-of-sale.png": {
    name: tr(
      "Point-of-Sale Display System",
      "Sistema de Display para Ponto de Venda",
      "Sistema de Display para Punto de Venta",
    ),
    tag: tr("Retail Design", "Design de Retalho", "Diseño de Retail"),
    blurb: tr(
      "In-store display system for retail rollout - shelf units, counter displays, and wayfinding designed to keep the brand consistent from stand to shelf.",
      "Sistema de displays para lançamento em loja - unidades de prateleira, displays de balcão, e sinalética desenhados para manter a marca consistente do stand à prateleira.",
      "Sistema de displays para lanzamiento en tienda - unidades de estantería, displays de mostrador, y señalética diseñados para mantener la marca consistente del stand a la estantería.",
    ),
  },
  "/work/polivouga.png": {
    name: tr("Polivouga", "Polivouga", "Polivouga"),
    tag: tr(
      "Marketing Ecosystem",
      "Ecossistema de Marketing",
      "Ecosistema de Marketing",
    ),
    blurb: tr(
      "End-to-end brand refresh for a 5-factory industrial packaging manufacturer: identity, packaging, web, social, and trade-show presence.",
      "Renovação de marca de ponta a ponta para um fabricante industrial de embalagens com 5 fábricas: identidade, embalagem, web, social, e presença em feiras.",
      "Renovación de marca de punta a punta para un fabricante industrial de envases con 5 fábricas: identidad, packaging, web, social, y presencia en ferias.",
    ),
  },
  "/work/yamaha.png": {
    name: tr(
      "Yamaha Racing Sports Bottles",
      "Garrafas Desportivas Yamaha Racing",
      "Botellas Deportivas Yamaha Racing",
    ),
    tag: tr("Product Design", "Design de Produto", "Diseño de Producto"),
    blurb: tr(
      "Licensed sports-bottle line (550ml / 750ml) for Yamaha Racing, including an engineered nozzle redesign for improved water flow.",
      "Linha licenciada de garrafas desportivas (550ml / 750ml) para a Yamaha Racing, incluindo o redesenho de engenharia do bico para melhorar o fluxo de água.",
      "Línea licenciada de botellas deportivas (550ml / 750ml) para Yamaha Racing, incluyendo el rediseño de ingeniería de la boquilla para mejorar el flujo de agua.",
    ),
  },
  "/work/universal-support.png": {
    name: tr(
      "Universal Support",
      "Universal Support",
      "Universal Support",
    ),
    tag: tr("Product Design", "Design de Produto", "Diseño de Producto"),
    blurb: tr(
      "Concept-to-pitch design for a modular bike-mount accessory system, iterated from an isolated hardware render into a full lifestyle deck.",
      "Design de conceito a pitch para um sistema modular de suporte de bicicleta, iterado desde um render isolado até um deck de lifestyle completo.",
      "Diseño de concepto a pitch para un sistema modular de soporte de bicicleta, iterado desde un render aislado hasta un deck de lifestyle completo.",
    ),
  },
};

export const aiToolBlurbs: Record<string, { category: Dict; blurb: Dict }> = {
  ChatGPT: {
    category: tr("Strategy & Copy", "Estratégia & Copy", "Estrategia y Copy"),
    blurb: tr(
      "Campaign strategy drafts, copy variants, and rapid ideation.",
      "Rascunhos de estratégia de campanha, variantes de copy, e ideação rápida.",
      "Borradores de estrategia de campaña, variantes de copy, e ideación rápida.",
    ),
  },
  Claude: {
    category: tr("Writing & Code", "Escrita & Código", "Escritura y Código"),
    blurb: tr(
      "Long-form writing, reasoning, and this site's own build.",
      "Escrita longa, raciocínio, e a construção deste próprio site.",
      "Escritura larga, razonamiento, y la construcción de este propio sitio.",
    ),
  },
  Perplexity: {
    category: tr("Research", "Pesquisa", "Investigación"),
    blurb: tr(
      "Real-time market research and competitive intelligence.",
      "Pesquisa de mercado em tempo real e inteligência competitiva.",
      "Investigación de mercado en tiempo real e inteligencia competitiva.",
    ),
  },
  "Nano Banana": {
    category: tr(
      "Image Generation",
      "Geração de Imagem",
      "Generación de Imagen",
    ),
    blurb: tr(
      "Fast, on-brand image generation and edits (Gemini).",
      "Geração e edição de imagem rápida e alinhada com a marca (Gemini).",
      "Generación y edición de imagen rápida y alineada con la marca (Gemini).",
    ),
  },
  Midjourney: {
    category: tr("Concept Art", "Arte Conceptual", "Arte Conceptual"),
    blurb: tr(
      "Moodboards and concept visuals for creative direction.",
      "Moodboards e visuais de conceito para direção criativa.",
      "Moodboards y visuales de concepto para dirección creativa.",
    ),
  },
  Runway: {
    category: tr("Video", "Vídeo", "Vídeo"),
    blurb: tr(
      "AI video generation and editing for campaign content.",
      "Geração e edição de vídeo com IA para conteúdo de campanhas.",
      "Generación y edición de vídeo con IA para contenido de campañas.",
    ),
  },
  ElevenLabs: {
    category: tr("Voice & Audio", "Voz & Áudio", "Voz y Audio"),
    blurb: tr(
      "Voiceover and sound for video and social content.",
      "Voz-off e som para vídeo e conteúdo social.",
      "Locución y sonido para vídeo y contenido social.",
    ),
  },
  Cursor: {
    category: tr("Development", "Desenvolvimento", "Desarrollo"),
    blurb: tr(
      "AI-assisted development across this portfolio and beyond.",
      "Desenvolvimento assistido por IA neste portfolio e além.",
      "Desarrollo asistido por IA en este portafolio y más allá.",
    ),
  },
  Suno: {
    category: tr("Music", "Música", "Música"),
    blurb: tr(
      "Original audio scoring for brand and social work.",
      "Composição de áudio original para trabalho de marca e social.",
      "Composición de audio original para trabajo de marca y social.",
    ),
  },
  n8n: {
    category: tr("Automation", "Automação", "Automatización"),
    blurb: tr(
      "Wiring AI models into real marketing automation workflows.",
      "A ligar modelos de IA a workflows reais de automação de marketing.",
      "Conectando modelos de IA a workflows reales de automatización de marketing.",
    ),
  },
};

export const softwareToolBlurbs: Record<
  string,
  { category: Dict; blurb: Dict }
> = {
  SolidWorks: {
    category: tr("3D CAD", "CAD 3D", "CAD 3D"),
    blurb: tr(
      "Parametric modeling for product design and engineering.",
      "Modelação paramétrica para design de produto e engenharia.",
      "Modelado paramétrico para diseño de producto e ingeniería.",
    ),
  },
  KeyShot: {
    category: tr("3D Rendering", "Renderização 3D", "Renderizado 3D"),
    blurb: tr(
      "Photorealistic rendering for product visualization.",
      "Renderização fotorrealista para visualização de produto.",
      "Renderizado fotorrealista para visualización de producto.",
    ),
  },
  "Adobe Creative Cloud": {
    category: tr("Design Suite", "Suite de Design", "Suite de Diseño"),
    blurb: tr(
      "Photoshop, Illustrator, InDesign, After Effects, and Premiere for design and motion.",
      "Photoshop, Illustrator, InDesign, After Effects, e Premiere para design e motion.",
      "Photoshop, Illustrator, InDesign, After Effects, y Premiere para diseño y motion.",
    ),
  },
  Office: {
    category: tr("Productivity", "Produtividade", "Productividad"),
    blurb: tr(
      "Word, Excel, and PowerPoint for reporting and documentation.",
      "Word, Excel, e PowerPoint para relatórios e documentação.",
      "Word, Excel, y PowerPoint para informes y documentación.",
    ),
  },
  "Power BI": {
    category: tr("Data & Analytics", "Dados & Analytics", "Datos y Analytics"),
    blurb: tr(
      "Dashboards and reporting for marketing and business data.",
      "Dashboards e relatórios para dados de marketing e negócio.",
      "Dashboards e informes para datos de marketing y negocio.",
    ),
  },
  Semrush: {
    category: tr("SEO & Research", "SEO & Pesquisa", "SEO e Investigación"),
    blurb: tr(
      "Keyword research, technical SEO, and competitor tracking.",
      "Pesquisa de keywords, SEO técnico, e acompanhamento da concorrência.",
      "Investigación de keywords, SEO técnico, y seguimiento de la competencia.",
    ),
  },
  "Google Ads": {
    category: tr("Paid Search", "Paid Search", "Paid Search"),
    blurb: tr(
      "Search and shopping campaigns across the funnel.",
      "Campanhas de search e shopping ao longo do funil.",
      "Campañas de search y shopping a lo largo del embudo.",
    ),
  },
  "Meta Ads": {
    category: tr("Paid Social", "Paid Social", "Paid Social"),
    blurb: tr(
      "Paid social campaigns across Facebook and Instagram.",
      "Campanhas de paid social no Facebook e Instagram.",
      "Campañas de paid social en Facebook e Instagram.",
    ),
  },
  Higgsfield: {
    category: tr("AI Video", "Vídeo com IA", "Vídeo con IA"),
    blurb: tr(
      "AI-generated video for campaigns and social content.",
      "Vídeo gerado por IA para campanhas e conteúdo social.",
      "Vídeo generado por IA para campañas y contenido social.",
    ),
  },
  Blender: {
    category: tr("3D & Motion", "3D & Motion", "3D y Motion"),
    blurb: tr(
      "3D modeling, rendering, and motion graphics.",
      "Modelação 3D, renderização, e motion graphics.",
      "Modelado 3D, renderizado, y motion graphics.",
    ),
  },
  "Power Query": {
    category: tr(
      "Data Transformation",
      "Transformação de Dados",
      "Transformación de Datos",
    ),
    blurb: tr(
      "Data transformation and ETL for reporting pipelines.",
      "Transformação de dados e ETL para pipelines de relatórios.",
      "Transformación de datos y ETL para pipelines de informes.",
    ),
  },
  "Power Automate": {
    category: tr("Automation", "Automação", "Automatización"),
    blurb: tr(
      "Automating workflows across Microsoft 365 and beyond.",
      "Automação de workflows no Microsoft 365 e além.",
      "Automatización de workflows en Microsoft 365 y más allá.",
    ),
  },
};

export const roleTranslations: Record<string, Dict> = {
  "Brand & Creative Manager": tr(
    "Brand & Creative Manager",
    "Brand & Creative Manager",
    "Brand & Creative Manager",
  ),
  "Marketing Manager": tr(
    "Marketing Manager",
    "Marketing Manager",
    "Marketing Manager",
  ),
  "Communication & Design Manager": tr(
    "Communication & Design Manager",
    "Communication & Design Manager",
    "Communication & Design Manager",
  ),
  "Communication Designer": tr(
    "Communication Designer",
    "Communication Designer",
    "Communication Designer",
  ),
  "Freelancer Designer": tr(
    "Freelancer Designer",
    "Designer Freelancer",
    "Diseñador Freelance",
  ),
};
