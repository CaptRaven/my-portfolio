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
    slug: "conversio-ai-assistant",
    title: "Conversio AI Assistant",
    summary:
      "A support copilot that turns scattered docs and ticket history into fast, accurate customer answers.",
    category: "AI Systems",
    problem:
      "Support teams were drowning in repetitive questions, and knowledge was spread across docs, previous tickets, and internal notes. Response quality depended too heavily on who was online.",
    solution:
      "I built a retrieval-augmented AI assistant that drafts responses, cites the right source material, and gives agents a fast approval workflow instead of replacing them outright.",
    architecture:
      "Next.js frontend, Python retrieval services, vector search for knowledge lookup, and PostgreSQL for conversation history, analytics, and admin workflows.",
    features: [
      "Document and ticket ingestion pipeline",
      "Retrieval with source-grounded answers",
      "Human review mode for sensitive replies",
      "Conversation analytics and intent tracking",
    ],
    impact: [
      "Reduced average response time by 47%",
      "Improved CSAT by 12 points during pilot rollout",
    ],
    demoUrl: "https://example.com/conversio-demo",
    githubUrl: "https://github.com/example/conversio-ai-assistant",
    stack: ["Next.js", "TypeScript", "Python", "OpenAI", "PostgreSQL"],
    role: "Product engineer owning UX, AI workflow design, and backend integration",
    timeline: "8 weeks",
    approach: [
      "Mapped the support flow first so the assistant would fit the real operational workflow, not just generate nice-looking answers.",
      "Split the system into ingestion, retrieval, response generation, and human approval stages to make failures easier to detect and debug.",
      "Prioritized grounded responses and agent trust over aggressive automation because accuracy mattered more than raw automation rate.",
    ],
    architectureDetails: [
      "Document ingestion normalizes knowledge sources into chunked embeddings for semantic retrieval.",
      "A Python service ranks context before handing it to the model, which reduces noisy prompts and keeps token usage under control.",
      "A Next.js admin surface exposes confidence, citations, and feedback signals so non-engineers can tune the system safely.",
    ],
    tradeoffs: [
      "I chose a human-in-the-loop release for high-risk intents instead of full automation to avoid incorrect policy answers.",
      "Semantic retrieval improved flexibility, but required tighter chunking and metadata strategy to avoid irrelevant context bleed.",
    ],
    productionScale: [
      "Move ingestion to queued background workers with retry and dead-letter handling.",
      "Add eval datasets for answer quality, hallucination rate, and source precision before expanding to more channels.",
      "Introduce tenant isolation, SSO, and role-based permissions for enterprise deployment.",
    ],
    links: [
      { label: "Live demo", href: "https://example.com/conversio-demo" },
      { label: "GitHub", href: "https://github.com/example/conversio-ai-assistant" },
    ],
  },
  {
    slug: "pulse-route",
    title: "Pulse Route",
    summary:
      "A logistics platform that combines route optimization, driver visibility, and ETA prediction for last-mile teams.",
    category: "Backend / APIs",
    problem:
      "Delivery operators were planning routes manually, which increased fuel cost, delayed deliveries, and made it hard to respond when traffic or order priorities changed.",
    solution:
      "I designed a route optimization platform with a planning dashboard, driver-facing mobile workflow, and a FastAPI engine that recalculates routes with live constraints.",
    architecture:
      "React dashboard and driver app backed by FastAPI services, optimization jobs, geospatial data, and event-driven updates for dispatch teams.",
    features: [
      "Constraint-aware route planning",
      "Driver stop list with live updates",
      "ETA prediction and exception alerts",
      "Dispatch dashboard with route replay",
    ],
    impact: [
      "Cut pilot fleet fuel spend by about 18%",
      "Reduced manual dispatch planning time from hours to minutes",
    ],
    demoUrl: "https://example.com/pulse-route-demo",
    githubUrl: "https://github.com/example/pulse-route",
    stack: ["FastAPI", "Python", "PostGIS", "React Native", "TypeScript"],
    role: "Lead engineer across optimization backend, APIs, and mobile delivery workflow",
    timeline: "10 weeks",
    approach: [
      "Started with dispatcher pain points and mapped where route changes actually happened during the day.",
      "Separated route calculation from route presentation so the backend could evolve independently from the operator and driver interfaces.",
      "Designed for partial automation because planners still needed override controls when business context beat the model.",
    ],
    architectureDetails: [
      "Optimization jobs run in Python with geospatial inputs and business constraints like delivery windows, driver capacity, and priority stops.",
      "FastAPI exposes route plans and status events to both the web dashboard and the mobile app.",
      "PostGIS stores route geometry and historical trip data for replay, ETA calibration, and operations review.",
    ],
    tradeoffs: [
      "A near-real-time recalculation model balanced responsiveness against compute cost better than constant full replanning.",
      "I kept manual override tools in the workflow because dispatch teams needed confidence and operational control during exceptions.",
    ],
    productionScale: [
      "Add job queues and worker autoscaling for peak delivery windows.",
      "Introduce telemetry on optimization quality, lateness prediction drift, and route acceptance rate.",
      "Expand the rules engine to support multi-region routing, warehouse constraints, and SLA-aware prioritization.",
    ],
    links: [
      { label: "Live demo", href: "https://example.com/pulse-route-demo" },
      { label: "GitHub", href: "https://github.com/example/pulse-route" },
    ],
  },
  {
    slug: "learnx-mobile",
    title: "LearnX Mobile",
    summary:
      "A cross-platform learning app that personalizes practice sessions and stays usable in low-connectivity environments.",
    category: "Mobile",
    problem:
      "Learners were dropping off because the experience felt generic, progress was inconsistent across devices, and unstable connectivity made the app unreliable during actual study sessions.",
    solution:
      "I built a React Native learning app with adaptive quiz logic, offline-first sync, and a progress system that keeps the experience personalized without blocking on network access.",
    architecture:
      "React Native client with TypeScript, sync-aware local storage, Firebase-backed identity and data sync, and Python services for adaptive recommendations.",
    features: [
      "Offline-first lesson and quiz access",
      "Adaptive question difficulty",
      "Cross-device progress sync",
      "Retention and streak analytics",
    ],
    impact: [
      "Improved week-two learner retention in internal testing",
      "Made study sessions resilient in low-bandwidth conditions",
    ],
    demoUrl: "https://example.com/learnx-demo",
    githubUrl: "https://github.com/example/learnx-mobile",
    stack: ["React Native", "TypeScript", "Firebase", "Python"],
    role: "Mobile product engineer across client architecture, sync model, and learning logic",
    timeline: "6 weeks",
    approach: [
      "Defined the core learner loop first: open the app quickly, continue where you left off, and get questions at the right difficulty.",
      "Built around unreliable network assumptions so progress would never feel fragile.",
      "Used adaptive logic to improve relevance, but kept the model explainable enough for product iteration and educator review.",
    ],
    architectureDetails: [
      "The client stores recent lessons, responses, and sync events locally so the app remains useful without connectivity.",
      "Firebase handles auth and multi-device synchronization, while Python services generate updated recommendation weights.",
      "Analytics events track completion, difficulty progression, and drop-off points to inform product decisions.",
    ],
    tradeoffs: [
      "I favored a simpler adaptive model with clearer tuning over a more opaque approach that would have been harder to validate.",
      "Offline-first support added sync complexity, but it directly served the product's real usage conditions.",
    ],
    productionScale: [
      "Add background sync conflict resolution and device-level diagnostics.",
      "Introduce experiment flags for curriculum variants and recommendation tuning.",
      "Extend observability for crash rate, sync latency, and retention cohorts by lesson type.",
    ],
    links: [
      { label: "Live demo", href: "https://example.com/learnx-demo" },
      { label: "GitHub", href: "https://github.com/example/learnx-mobile" },
    ],
  },
];

export function getAllProjects() {
  return projects;
}

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
