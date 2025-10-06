export const projects = [
  {
    title: "AI Resume Analyzer",
    slug: "resume-analyzer",
    tagline:
      "Upload a resume → get ATS-style scoring, keyword gaps, and tailored improvements powered by GPT.",
    overview:
      "A React app that analyzes resumes and matches them to job descriptions. It pairs OpenAI for semantic feedback with storage/auth, delivering practical, recruiter-style insights.",
    features: [
      "AI feedback for skills, gaps, and improvements",
      "ATS-style scoring & JD matching",
      "Auth + file upload flow",
      "Clean, responsive UI with reusable components",
    ],
    techStack: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "OpenAI API",
      "React Router / Vite",
    ],
    challenges: [
      "Prompt design for consistent, actionable feedback",
      "Balancing token cost vs. response quality",
      "Normalizing resume content and metadata",
    ],
    learnings: [
      "Built prompt patterns for structured scoring",
      "Improved file-processing UX with progress and errors",
      "Deployed a lightweight, single-page AI tool end-to-end",
    ],
    feedback: true,
    links: {
      live: "https://resume-analyzer-1.vercel.app/",
      github: "https://github.com/Raghav847/resume-analyzer",
    },
  },
  //change this one to my portfolio
  {
    title: "Portfolio | Raghav Khandelwal",
    slug: "portfolio",
    tagline:
      "A dynamic portfolio that highlights my projects, technical depth, and passion for building full-stack applications using scalable web technologies.",
    overview:
      "This portfolio serves as a dynamic showcase of my journey as a software engineer — blending backend logic, AI integration, and frontend polish. It features live analytics, interactive components, and server-driven functionality that reflect my skills in creating data-aware and performant applications.",
    features: [
      "Real-time API to track and display unique profile views and engagement stats.",
      "Appreciation counter to allow visitors to express feedback on my work.",
      "Server Actions and ISR integration using Next.js App Router for better performance.",
      "Dynamic project pages with slug-based routing and metadata for SEO optimization.",
      "Responsive, accessible UI built with Tailwind CSS and TypeScript.",
      "Backend data persistence with MongoDB and Prisma for scalable interaction tracking.",
    ],
    techStack: [
      "Next.js",
      "React",
      "Mongoose",
      "MongoDB",
      "Tailwind CSS",
      "Radix UI",
      "TypeScript",
    ],
    challenges: [
      "Structuring server-side components for efficient data fetching and caching.",
      "Balancing dynamic content updates with static generation for performance.",
      "Ensuring seamless integration of analytics APIs while maintaining privacy.",
      "Optimizing UX across devices and network conditions.",
    ],
    learnings: [
      "Strengthened expertise in Next.js App Router, ISR, and server components.",
      "Improved ability to design scalable backend workflows with Prisma and MongoDB.",
      "Learned to instrument user analytics using edge functions and serverless APIs.",
      "Enhanced understanding of performance tuning and accessibility best practices.",
    ],
    feedback: true,
    links: {
      live: "",
      github: "",
    },
  },

  {
    title: "SortViz Pro",
    slug: "sortviz-pro",
    tagline:
      "An interactive visualizer for classic sorting algorithms with stats, speed control, and themes.",
    overview:
      "A polished Next.js 15 app for learning and demoing sorting algorithms. Includes rich animations, live counters for comparisons/swaps, and multiple themes for accessibility.",
    features: [
      "Bubble, Selection, Insertion, Quick, Merge, Heap",
      "Speed & array-size controls",
      "Live stats (comparisons, swaps)",
      "Responsive design + themed UI",
    ],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    challenges: [
      "Keeping animations smooth at high element counts",
      "Designing a clean state model for algorithm steps",
    ],
    learnings: [
      "Optimized render loops for visualization",
      "Improved component composition and memoization",
    ],
    feedback: true,
    links: {
      live: "https://sortviz-pro.vercel.app/",
      github: "https://github.com/Raghav847/sortviz-pro",
    },
  },
  {
    title: "Agents Production (Playground)",
    slug: "agents-production",
    tagline:
    "TypeScript scaffolding to build and evaluate AI agents with a minimal dashboard and OpenAI integration.",
    overview:
    "A production-leaning playground for running AI agent experiments. It provides a clean TypeScript entrypoint, a structured place for agent code (tools, routers, memory), a lightweight dashboard scaffold, and an `evals/` workspace for reproducible evaluation runs. Designed to iterate fast on prompts, tools, and behaviors while keeping the project layout predictable.",
    features: [
      "TypeScript app entrypoint (`index.ts`) to launch agent logic",
      "`src/` for agent code, tools, memory, and routers",
      "`evals/` folder for prompts, fixtures, and run logs (reproducible evals)",
      "`dashboard/` scaffold for a local UI you can evolve",
      "Node.js or Bun runtime; simple npm/bun scripts",
      "OpenAI API integration via environment variable"
    ],
    techStack: [
      "TypeScript",
      "Node.js (20+)",
      "Bun",
      "OpenAI API"
    ],
    challenges: [
      "Designing a minimal yet scalable structure for multiple agent workflows",
      "Keeping evaluations repeatable and comparable across runs",
      "Balancing fast iteration with type-safety and clear boundaries",
    ],
    learnings: [
      "Set up a repeatable evaluation harness for agent behaviors",
      "Standardized folders for tools/memory to speed up agent iteration",
    "Environment-based wiring for provider keys and runtime settings"
    ],
    feedback: true,
    links: {
      live: "",
      github: "https://github.com/Raghav847/agents-production",
    },
  },
  {
    title: "makemore — Character-level Language Models (Learning Series)",
  slug: "makemore",
  tagline:
    "Rebuilding GPT-style character models from scratch to learn PyTorch, autograd, and training loops.",
  overview:
    "A hands-on study repo following Andrej Karpathy’s makemore series. I re-implement character-level language models end-to-end: data preprocessing, n-gram/bigram baselines, MLPs with embeddings, and training loops with autograd—then iterate toward transformer-friendly patterns. The goal is to deeply understand how tokenization, batching, loss, and backprop fit together before scaling up.",
  features: [
    "Data pipeline: character vocabulary, tokenization, and split (train/val/test)",
    "n-gram & bigram baselines for calibration",
    "Embedding → MLP models with Tanh/ReLU and cross-entropy loss",
    "Manual training loops (forward/backward/step) to grok autograd",
    "Batching, initialization, and learning-rate schedules",
    "Experiment tracking via scripts & reproducible seeds"
  ],
  techStack: [
    "Python",
    "PyTorch",
    "NumPy",
    "Matplotlib",
    "Jupyter Notebook"
  ],
  challenges: [
    "Stabilizing training via proper initialization and LR tuning",
    "Avoiding data leakage and overfitting on tiny corpora",
    "Interpreting loss curves and debugging vanishing/exploding grads"
  ],
  learnings: [
    "Solid grasp of tensors, autograd, and optimization steps in PyTorch",
    "Why baselines (n-gram/bigram) matter before complex models",
    "How embeddings + MLPs model character contexts",
    "Better intuition for batching, regularization, and evaluation"
  ],
  feedback: false,
  links: {
    live: "",
    github: "https://github.com/Raghav847/makemore"
    },
  },
  {
    title: "Movie GPT",
    slug: "movie-gpt",
    tagline:
      "AI-assisted movie discovery with GPT suggestions + TMDB details, auth, and a clean UI.",
    overview:
      "A React app that blends GPT-powered search with TMDB data. Includes Firebase auth and a multi-language UI for a complete product feel.",
    features: [
      "GPT-driven recommendations",
      "TMDB integration for rich metadata",
      "Firebase auth; protected routes",
      "Responsive, multi-language UI",
    ],
    techStack: [
      "React",
      "Tailwind CSS",
      "Firebase",
      "Redux",
      "React Router",
      "TMDB API",
      "OpenAI API",
    ],
    challenges: [
      "Merging LLM suggestions with catalog results",
      "Rate limiting & retries for third-party APIs",
    ],
    learnings: [
      "Search result ranking & deduping",
      "Auth + routing patterns for SPA apps",
    ],
    feedback: true,
    links: {
      live: "https://movie-gpt-six.vercel.app/",
      github: "https://github.com/Raghav847/movie-gpt",
    },
  },
  {
    title: "Mars Weather Dashboard",
    slug: "mars-weather-dashboard",
    tagline:
      "Real-time Martian weather from NASA InSight with animated charts and a Mars-themed UI.",
    overview:
      "A lightweight dashboard that fetches recent Sol data and visualizes temperature, wind, and pressure with smooth animations and a mobile-friendly layout.",
    features: [
      "Toggleable charts for temp/wind/pressure",
      "Wind compass visual per Sol",
      "Download data as JSON",
      "Animated, responsive UI",
    ],
    techStack: ["React", "Vite", "Tailwind CSS", "Framer Motion", "Chart.js"],
    challenges: [
      "Handling gaps/latency in the public API",
      "Designing a compact, readable chart layout",
    ],
    learnings: [
      "Data normalization for charting",
      "Accessible color/legend choices for dark UIs",
    ],
    feedback: true,
    links: {
      live: "https://mars-weather-dashboard.vercel.app/",
      github: "https://github.com/Raghav847/mars-weather-dashboard",
    },
  },
];
