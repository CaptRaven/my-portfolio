export type ProjectLink = {
  label: string;
  href: string;
};

export type CaseStudySection = {
  title: string;
  content: string;
};

export type Project = {
  slug: string;
  title: string;
  summary: string;
  category: "AI Systems" | "Mobile" | "Backend / APIs";
  problem: string;
  solution: string;
  architecture: string;
  features: string[];
  impact?: string[];
  demoUrl: string;
  githubUrl: string;
  stack: string[];
  role: string;
  timeline: string;
  approach: string[];
  architectureDetails: string[];
  tradeoffs: string[];
  productionScale: string[];
  links: ProjectLink[];
};

export const projects: Project[] = [
  {
    slug: "talentscout-ai",
    title: "TalentScout AI",
    summary:
      "An AI recruiting platform where employers publish roles, candidates apply, and interviews are screened with model-assisted evaluation before submission.",
    category: "AI Systems",
    problem:
      "Hiring teams needed a faster way to screen applicants without relying on repetitive manual review or losing structure in the interview process.",
    solution:
      "I built a recruiting workflow that combines job management, candidate applications, and AI-assisted interview grading so teams can evaluate applicants in a more consistent way.",
    architecture:
      "React and Vite on the frontend, Supabase for auth and data, and AI interview evaluation handled through a server-side model integration with protected secrets.",
    features: [
      "Employer job-post management",
      "Candidate application workflow",
      "AI-assisted interview evaluation",
      "Sensitive hiring data handled behind Supabase policies",
    ],
    demoUrl: "https://talent-scout-ai-ten.vercel.app",
    githubUrl: "https://github.com/CaptRaven/TalentScout-AI",
    stack: ["React", "Vite", "Supabase", "TypeScript", "Mistral AI"],
    role: "Product engineer across frontend flow, AI evaluation workflow, and backend integration",
    timeline: "Production prototype",
    approach: [
      "I structured the product around the full hiring loop instead of treating AI screening as a standalone feature.",
      "The interview flow was designed to keep employers in control while still removing repeated manual scoring work.",
      "I treated resume and interview content as sensitive data from the start, which shaped the architecture and access model.",
    ],
    architectureDetails: [
      "Supabase handles authentication, application records, and access control for employers and candidates.",
      "The AI interview scoring logic runs through a secured server-side integration so model keys are never exposed in the client.",
      "Frontend state is structured around separate employer and candidate workflows so the product stays understandable as features grow.",
    ],
    tradeoffs: [
      "AI scoring can improve speed and consistency, but it still needs human review paths to avoid over-automation in hiring decisions.",
      "A unified platform is easier for users, but it increases the need for strict role separation and careful data permissions.",
    ],
    productionScale: [
      "Add structured evaluation datasets for interview scoring quality and bias checks before expanding usage.",
      "Split employer and candidate analytics into dedicated reporting views for hiring funnel visibility.",
      "Extend the backend with audit logs, reviewer workflows, and more granular tenant isolation for enterprise hiring teams.",
    ],
    links: [
      { label: "Live demo", href: "https://talent-scout-ai-ten.vercel.app" },
      { label: "GitHub", href: "https://github.com/CaptRaven/TalentScout-AI" },
    ],
  },
  {
    slug: "smart-orchestrate",
    title: "SmartOrchestrate",
    summary:
      "An operations dashboard that brings AI assistance, maintenance tracking, optimization, sustainability, and notifications into one planning surface.",
    category: "Backend / APIs",
    problem:
      "Operational tools are often fragmented across dashboards, spreadsheets, and alerts, which makes planning, monitoring, and follow-up slower than it should be.",
    solution:
      "I built a modular orchestration dashboard with separate product areas for AI assistance, maintenance, optimization, sustainability, and notification workflows.",
    architecture:
      "A React + Vite application using React Router for feature segmentation, Supabase for data services, and Recharts for operational visibility and trend reporting.",
    features: [
      "Dedicated modules for major operational workflows",
      "AI assistant surface inside the product",
      "Chart-driven optimization and reporting views",
      "Notification and monitoring flows in one interface",
    ],
    demoUrl: "https://smart-orchestrate.vercel.app",
    githubUrl: "https://github.com/CaptRaven/SmartOrchestrate",
    stack: ["React", "Vite", "React Router", "Supabase", "Recharts"],
    role: "Product engineer across dashboard architecture, workflow design, and data visualization",
    timeline: "Shipped web product",
    approach: [
      "I structured the app as a set of focused workflow areas so teams could navigate directly to the decisions they needed to make.",
      "The architecture favors modular routing and reusable data patterns, which makes it easier to add new operational capabilities without rewriting the whole dashboard.",
      "I treated reporting as part of the product itself, not an afterthought, because visibility is what makes orchestration tools useful in practice.",
    ],
    architectureDetails: [
      "React Router separates each functional area into its own route while keeping shared shell navigation stable.",
      "Supabase supports persistent product data and makes it easier to wire dashboard modules to a common backend.",
      "Recharts is used for trend visibility so optimization and sustainability decisions are grounded in operational data rather than static screens.",
    ],
    tradeoffs: [
      "Combining several workflows into one product improves visibility, but it requires tighter information architecture to avoid turning the app into a generic control panel.",
      "A modular route structure adds some upfront complexity, but it pays off when the product grows beyond a single dashboard view.",
    ],
    productionScale: [
      "Introduce role-based dashboards so each user type sees only the workflows and metrics relevant to them.",
      "Add event history, auditability, and alert resolution flows for more mature operational teams.",
      "Break the product into more explicit service boundaries as forecasting, optimization, and notification logic become deeper backend systems.",
    ],
    links: [
      { label: "Live demo", href: "https://smart-orchestrate.vercel.app" },
      { label: "GitHub", href: "https://github.com/CaptRaven/SmartOrchestrate" },
    ],
  },
  {
    slug: "prompt-coach",
    title: "Prompt Coach",
    summary:
      "A gamified prompt-improvement product that helps users iterate on prompts, get structured feedback, and build better prompting habits.",
    category: "AI Systems",
    problem:
      "Prompt engineering tools often optimize for experimentation speed but do very little to help users learn why a prompt works, where it fails, or how to improve it consistently.",
    solution:
      "I built an interactive prompt-coaching experience that turns prompt iteration into a guided product flow rather than a blank text box and an opaque model response.",
    architecture:
      "A React + Vite frontend with TypeScript and Framer Motion, shaped around interactive prompt review flows and a product experience designed to make AI feedback feel actionable.",
    features: [
      "Guided prompt refinement experience",
      "Gamified coaching interaction",
      "Structured feedback loop instead of raw output only",
      "Product-focused UI built for iteration and clarity",
    ],
    demoUrl: "https://pendo-prompt-gamified-assistant.vercel.app",
    githubUrl: "https://github.com/CaptRaven/pendo-prompt-gamified-assistant",
    stack: ["React", "Vite", "TypeScript", "Framer Motion"],
    role: "Frontend and product engineer focused on AI workflow UX and iteration design",
    timeline: "Shipped product experiment",
    approach: [
      "I treated prompt improvement as a learning workflow, which led to a guided experience instead of a generic AI playground.",
      "The product flow was designed to reduce ambiguity by showing users where to iterate next rather than leaving them to guess.",
      "I used interaction design deliberately here because clear motion and progression can make AI feedback feel easier to interpret.",
    ],
    architectureDetails: [
      "The application is a lightweight frontend focused on making prompt coaching interactions feel immediate and understandable.",
      "Framer Motion is used to support step transitions and coaching-state feedback without overwhelming the user.",
      "The product architecture keeps the feedback and coaching interface decoupled enough to support future evaluator or model integrations.",
    ],
    tradeoffs: [
      "A more guided interface improves learning, but it also requires more careful product structure than a simple free-form prompt box.",
      "Gamification can increase engagement, but it has to stay subordinate to actual prompt quality and not turn into decoration.",
    ],
    productionScale: [
      "Add persistent history, user accounts, and prompt version tracking so coaching becomes longitudinal instead of session-based.",
      "Introduce evaluator analytics to compare prompt revisions and identify which coaching patterns produce better outcomes.",
      "Expand from single-user prompting into team workflows with shared prompt libraries and review loops.",
    ],
    links: [
      { label: "Live demo", href: "https://pendo-prompt-gamified-assistant.vercel.app" },
      { label: "GitHub", href: "https://github.com/CaptRaven/pendo-prompt-gamified-assistant" },
    ],
  },
];

export function getAllProjects() {
  return projects;
}

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
