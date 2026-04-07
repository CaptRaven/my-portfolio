export type Service = {
  id: string;
  title: string;
  description: string;
  process: string[];
  pricing: {
    tier: "Starter" | "Growth" | "Enterprise";
    price: string;
    features: string[];
  }[];
};

export const services: Service[] = [
  {
    id: "ai-chatbots",
    title: "AI Chatbots & Assistants",
    description:
      "Custom assistants that automate support, onboarding, and internal workflows using RAG and function calling.",
    process: ["Discovery", "Data prep", "Prototype", "Fine-tune", "Deployment"],
    pricing: [
      { tier: "Starter", price: "$", features: ["Basic Q&A", "FAQ ingestion"] },
      { tier: "Growth", price: "$$", features: ["RAG", "Analytics", "Multi-channel"] },
      { tier: "Enterprise", price: "$$$", features: ["SLA", "SSO", "Customization"] }
    ]
  },
  {
    id: "automation",
    title: "AI Automation & Workflow Systems",
    description:
      "Reliable automation pipelines with human-in-the-loop, approvals, and auditability.",
    process: ["Process mapping", "Implementation", "Testing", "Rollout"],
    pricing: [
      { tier: "Starter", price: "$", features: ["Basic automations"] },
      { tier: "Growth", price: "$$", features: ["Integrations", "Observability"] },
      { tier: "Enterprise", price: "$$$", features: ["Custom workflows", "Compliance"] }
    ]
  },
  {
    id: "mobile",
    title: "Mobile App Development (Flutter / React Native)",
    description:
      "High-quality cross-platform mobile apps with modern architecture and CI/CD.",
    process: ["Architecture", "UI/UX", "Development", "Testing", "Launch"],
    pricing: [
      { tier: "Starter", price: "$", features: ["MVP app"] },
      { tier: "Growth", price: "$$", features: ["Scalable features", "Analytics"] },
      { tier: "Enterprise", price: "$$$", features: ["Performance", "Security"] }
    ]
  },
  {
    id: "web",
    title: "Web App Development",
    description:
      "Robust web applications with clean architecture, performance, and accessibility built-in.",
    process: ["Architecture", "Design", "Build", "QA", "Launch"],
    pricing: [
      { tier: "Starter", price: "$", features: ["MVP web app"] },
      { tier: "Growth", price: "$$", features: ["Scalable web app"] },
      { tier: "Enterprise", price: "$$$", features: ["Global scale", "Security"] }
    ]
  },
  {
    id: "integration",
    title: "AI Integration (OpenAI, Gemini, LangChain, RAG)",
    description:
      "Integrate AI capabilities into existing platforms with reliability and guardrails.",
    process: ["Use-cases", "POC", "Integration", "Launch"],
    pricing: [
      { tier: "Starter", price: "$", features: ["Single use-case"] },
      { tier: "Growth", price: "$$", features: ["Multiple use-cases"] },
      { tier: "Enterprise", price: "$$$", features: ["Custom models", "MLOps"] }
    ]
  },
  {
    id: "design",
    title: "UI/UX Product Design",
    description:
      "Premium product design with large typography, spacing, and micro-interactions.",
    process: ["Research", "Flows", "Design", "Prototypes", "Handoff"],
    pricing: [
      { tier: "Starter", price: "$", features: ["Landing page"] },
      { tier: "Growth", price: "$$", features: ["Product design"] },
      { tier: "Enterprise", price: "$$$", features: ["Design systems"] }
    ]
  }
];
