export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  highlights: string[];
  accent: string;
}

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: "FLAMA S.A.",
    role: "Brand & Creative Manager",
    period: "Oct 2024 - Present",
    highlights: [
      "Lead brand digital presence, creative strategy, and product innovation across FLAMA's small home appliance line, from concept to market launch.",
      "Manage the e-commerce platform and digital sales strategy, increasing conversions and optimizing user experience.",
      "Own the full product creation cycle for small home appliances - trend research, design, prototyping, packaging, and launch - producing 3D models and renders for marketing.",
      "Plan 360-degree integrated campaigns across digital, social, retail, and brand activations, coordinating multidisciplinary teams and external partners (manufacturers, agencies, studios).",
      "Identified and automated 6 repetitive workflows across departments by building internal platforms with AI-assisted development (Claude, React, Node.js, Python) - including a PIM + DAM system saving an estimated €124k in setup and €12k/year versus a SaaS alternative, plus a companion SRM tool - cutting repetitive work 80%.",
    ],
    accent: "from-emerald-500/25 via-emerald-500/5 to-transparent",
  },
  {
    company: "FLAMA S.A.",
    role: "Marketing Specialist & Communication Designer",
    period: "Jan 2023 - Sep 2025",
    highlights: [
      "Built and executed data-driven B2B and B2C marketing campaigns, optimizing conversion rates across channels.",
      "Produced SEO-optimized content and led content marketing to grow organic visibility.",
      "Designed marketing collateral, packaging, and motion graphics while keeping brand messaging consistent across channels.",
      "Led responsive web design and e-commerce growth initiatives, from paid advertising to on-site conversion.",
    ],
    accent: "from-teal-500/25 via-teal-500/5 to-transparent",
  },
  {
    company: "Catlike",
    role: "Marketing Manager",
    period: "Oct 2022 - Feb 2023",
    highlights: [
      "Set brand positioning, target audiences, and channel-specific marketing plans, leading execution from strategy through launch.",
      "Built creative briefs and directed multichannel campaigns across print, digital, and video, partnering with email, performance, and web teams on lead-nurturing.",
      "Ran analytics and reporting across platforms to inform go-to-market strategy and budget decisions, presenting results to senior leadership.",
    ],
    accent: "from-sky-500/25 via-sky-500/5 to-transparent",
  },
  {
    company: "Polipromotion",
    role: "Marketing & Design Manager",
    period: "Jun 2019 - Oct 2022",
    highlights: [
      "Product design and marketing management for licensed sports-bottle and accessory lines, including Yamaha Racing and Science in Sport, within the Polisport Group.",
    ],
    accent: "from-amber-500/25 via-amber-500/5 to-transparent",
  },
  {
    company: "Jornal N",
    role: "Editorial Design / Communication Design",
    period: "2018",
    highlights: [
      "Designed the newspaper's editorial layout on a recurring publishing schedule, balancing typography, imagery, and grid structure issue to issue.",
      "Adapted long-form written content into clear, readable page compositions under tight print deadlines.",
      "Produced supporting communication design assets - section headers, ads, and promotional inserts - aligned with the publication's visual identity.",
    ],
    accent: "from-zinc-400/20 via-zinc-400/5 to-transparent",
  },
  {
    company: "FairmealsMx",
    role: "Design / Branding / UI/UX",
    period: "2018",
    highlights: [
      "Designed the brand identity and visual language for a food-tech concept brand, from logo and color system to core brand guidelines.",
      "Designed and prototyped the product's UI/UX across key user flows, translating early concept requirements into usable screen designs.",
      "Produced supporting branding assets - packaging, marketing materials, and digital touchpoints - keeping the brand consistent across channels.",
    ],
    accent: "from-rose-400/20 via-rose-400/5 to-transparent",
  },
  {
    company: "barpa",
    role: "Graphic Design / Editorial Design / Communication Design",
    period: "2016 - 2017",
    highlights: [
      "Produced print and digital layouts across editorial, promotional, and brand collateral for a range of clients.",
      "Handled the design process end-to-end - typesetting, image treatment, and pre-press preparation - keeping visual consistency across each brand's materials.",
      "Collaborated directly with clients to translate briefs into finished creative, balancing brand guidelines with print production constraints.",
    ],
    accent: "from-indigo-400/20 via-indigo-400/5 to-transparent",
  },
];

export const PROFILE = {
  name: "Marcos Leite",
  title: "Full Stack Marketeer",
  tagline: "Brand, Product & AI-Driven Growth",
  email: "marcoslte10@gmail.com",
  linkedin: "https://www.linkedin.com/in/marcos-leite-153bba194/",
  languages: "Portuguese, English, Spanish",
  education:
    "Product & Industrial Design, Universidade Lusíada - work shown at Experimenta Design Lisbon and the Biennale Internationale Design de Saint-Étienne",
};

export const SUMMARY =
  "Full-stack marketer running brand, product, and growth as one system rather than three separate hires. Since 2013, I've moved from hands-on graphic and editorial design into leading brand, marketing, and product functions end-to-end - most recently building AI-native internal tooling (a PIM, DAM, and SRM platform) in place of licensed SaaS.";

export const RESUME_SKILLS: { category: string; items: string[] }[] = [
  {
    category: "Strategy",
    items: [
      "Brand positioning",
      "Go-to-market planning",
      "Budget planning",
      "Market & competitor research",
    ],
  },
  {
    category: "Brand & Product Design",
    items: [
      "Identity systems",
      "Packaging design",
      "Product design & 3D",
      "Motion graphics",
    ],
  },
  {
    category: "Marketing",
    items: [
      "Campaign strategy",
      "Content marketing",
      "Technical SEO",
      "Paid media",
      "Lifecycle & CRM email",
    ],
  },
  {
    category: "Ecommerce",
    items: ["Platform ops", "Conversion funnels", "Analytics & reporting"],
  },
  {
    category: "AI Systems",
    items: [
      "Claude, ChatGPT, Cursor",
      "AI-assisted development",
      "AI-native internal tooling (PIM/DAM/SRM)",
    ],
  },
];
