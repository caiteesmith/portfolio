export const PROJECTS = [
  {
    id: "hotlist",
    title: "HotList Search Service",
    org: "Valley Bank",
    summary:
  "A .NET 8 microservice built using Clean Architecture (SYS/EXP layers) to validate and process hotlist search requests in a regulated financial environment. The service enables front-office teams to identify potential high-risk customers by executing multi-criteria searches against internal records and returning standardized, audit-friendly match results.",
    href: null,
    code: null,
    tags: [
      ".NET 8",
      "C#",
      "Clean Architecture",
      "Azure Functions",
      "SQL Server",
      "Repository Pattern",
      "OpenAPI",
      "NUnit",
      "Azure DevOps"
    ],
    impact: [
      "Built the SYS-layer service used by front-office teams to identify high-risk customers",
      "Implemented flexible validation across five search criteria",
      "Designed clean DTOs and contracts across EXP > SYS > repository layers",
      "Normalized search logic and response models for consistent EXP consumption",
      "Produced clear API documentation with OpenAPI/Swagger",
      "Created comprehensive NUnit unit tests for validators, services, and controllers",
      "Guided teammate through building the EXP microservice from config to deployment"
    ]
  },
  {
    id: "hit",
    title: "Health of IT (HIT) Microservices",
    org: "Valley Bank",
    summary:
      ".NET 8 Azure Functions platform for real-time product health, notifications, and a Vue.js dashboard; Cosmos DB + Service Bus; Terraform + Azure Pipelines.",
    href: null,
    code: null,
    tags: [
      ".NET 8",
      "C#",
      "Azure Functions",
      "Cosmos DB",
      "Azure Service Bus",
      "Terraform",
      "Azure Pipelines",
      "CI/CD",
      "OpenAPI/Swagger",
      "NUnit",
      "Moq",
      "Logging & Observability",
      "Vue.js",
      "Agile/Scrum"
    ],
    impact: [
      "Owned 8+ .NET 8 services across EXP/PRC/SYS layers",
      "Implemented structured logging for cross-service traceability",
      "Automated deployments with Terraform and Azure Pipelines",
      "Maintained strong unit test coverage (NUnit/Moq) and clear API contracts (OpenAPI)"
    ]
  },
  {
    id: "chatbots",
    title: "AI/ML Chatbot Containerization",
    org: "Valley Bank",
    summary:
      "Modernizing internal DataRobot AI chatbots by containerizing services with Docker Compose and preparing them for Kubernetes deployment.",
    href: null,
    code: null,
    tags: [
      "Docker",
      "Docker Compose",
      "DataRobot",
      "Streamlit",
      "Python",
      "AI/ML",
      "Containerization",
      "Kubernetes (planned)"
    ],
    impact: [
      "Containerized multiple Streamlit applications for reproducible environments",
      "Designed Docker Compose architecture to streamline local deployment",
      "Improved reliability and portability across engineering teams",
      "Laid groundwork for internal Kubernetes hosting and orchestration",
      "Collaborated cross-team to align services with existing CI/CD and infrastructure"
    ]
  },
  {
    id: "pet",
    title: "Pet Adoption Prediction Dashboard",
    org: "Western Governors University",
    summary:
      "Streamlit dashboard with ML predictions for shelter adoption likelihood.",
    href: "https://huggingface.co/spaces/caiteesmith/pet-adoption-prediction-dash",
    code: "https://github.com/caiteesmith/c964-pet-adoption-prediction-dash",
    tags: [
      "Python",
      "Machine Learning",
      "Streamlit",
      "Altair",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Google Colab",
      "Jupyter Notebooks",
      "Hugging Face Spaces"
    ],
    img: "/images/projects/pet-adoption.webp",
    impact: [
      "Built interactive Streamlit dashboard for exploring shelter data",
      "Implemented ML pipeline (feature engineering and model evaluation)",
      "Clear visualizations with Altair; reproducible notebooks and code",
      "Prototyped and trained models in Google Colab",
      "Deployed interactive app via Hugging Face Spaces with GitHub CI/CD"
    ]
  },
  {
    id: "financial-breakdown",
    title: "The Financial Breakdown",
    org: "Personal Project",
    summary:
      "A set of spreadsheet-style personal finance tools built with Python, Streamlit, and a Supabase backend to organize income, expenses, debt, and housing so the numbers make sense before decisions are made.",
    href: "https://the-financial-breakdown.streamlit.app/",
    code: "https://github.com/caiteesmith/the-financial-breakdown",
    tags: [
      "Python",
      "Streamlit",
      "Supabase",
      "PostgreSQL",
      "Product Design",
      "UX/UI",
      "Pandas",
      "Financial Modeling",
      "Data Visualization",
      "Personal Finance"
    ],
    img: "images/projects/personal-finance-dashboard.png",
    impact: [
      "Built a spreadsheet-style cash flow tool to itemize personal finances",
      "Designed an at-a-glance summary highlighting the most important financial signals",
      "Implemented an emergency minimum to model survival-level monthly spending",
      "Designed a mortgage payoff calculator to see amortization and early payoff timelines",
      "Enabled exportable snapshots and CSV outputs for portability and offline analysis",
      "Added Supabase authentication and a user-backed database so users can save data"
    ]
  },
  {
    id: "photo-ops-suite",
    title: "Photo Ops Suite",
    org: "Caitee Smith Photography",
    summary:
      "A suite of wedding photographer-focused planning tools built with Python & Streamlit to help users create realistic timelines, plan around sunset and golden hour, and estimate post-processing workload.",
    href: "https://photo-ops-suite.streamlit.app/",
    code: "https://github.com/caiteesmith/photo-ops-suite",
    tags: [
      "Python",
      "Streamlit",
      "Product Design",
      "UX/UI",
      "Time-based calculations",
      "API Integration",
      "Geocoding",
      "Pandas",
      "Financial Modeling"
    ],
    img: "images/projects/photo-ops-suite.webp",
    impact: [
      "Designed a planning tool suite for real-world wedding photography workflows",
      "Built a timeline engine that accounts for coverage limits, travel, buffers, and more",
      "Implemented a location-aware sunset planner using geocoding and external APIs",
      "Added a post-processing workload estimator to support delivery timelines",
      "Built a CODB calculator to model costs, time, profit margin, and take-home pricing"
    ]
  },
  {
    id: "application-tracker",
    title: "ApplicationTracker",
    org: "Personal Project",
    summary:
      "A streamlined job application tracker built with Python, Streamlit, and Supabase. Users can securely create accounts, log applications, track follow-ups, upload screenshots, and visualize their job search with clean analytics.",
    href: "https://application-tracker-tool.streamlit.app/",
    code: "https://github.com/caiteesmith/application-tracker",
    tags: [
      "Python",
      "Streamlit",
      "Supabase",
      "Postgres",
      "Auth",
      "SQL",
      "Data Visualization",
      "Plotly",
      "Sankey Diagram",
      "UX/UI",
      "Product Design",
      "Career Tools"
    ],
    img: "images/projects/application-tracker-ss-2.png",
    impact: [
      "Implemented secure user auth and login with Supabase Auth",
      "Designed an intuitive UI for logging job applications",
      "Integrated persistent data storage using Supabase Postgres",
      "Developed a Sankey diagram to visualize how applications flow across stages",
      "Built an analytics dashboard summarizing total applications, unique companies, etc.",
      "Added screenshot uploads to save job posting details before listings expire",
      "Created fast, flexible filtering by status, location type, or keyword"
    ]
  },
  {
    id: "portfolio",
    title: "Personal Portfolio",
    org: "Personal",
    summary:
      "React + Vite app with Tailwind CSS, Framer Motion, and Lucide React icons.",
    href: "https://caiteesmith.com/",
    code: "https://github.com/caiteesmith/portfolio-main",
    tags: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Framer Motion",
      "Lucide React",
      "Responsive Design",
      "Accessibility",
      "Dark Mode",
      "Netlify"
    ],
    img: "/images/projects/portfolio-mat.webp",
    impact: [
      "Migrated from static Bootstrap to React, Vite, and Tailwind",
      "Accessible components, keyboard-friendly nav, dark mode",
      "Animated backgrounds and performant motion with Framer Motion"
    ]
  },
  {
    id: "thorlabs",
    title: "Thorlabs Toolkit",
    org: "Thorlabs",
    summary:
      "Optical calculator iOS and Android app revamp with improved UI and modules.",
    href: "https://apps.apple.com/us/app/thorlabs-toolkit/id6475776756",
    code: "https://github.com/caiteesmith/ThorlabsToolkit-iOS",
    tags: [
      "Swift",
      "Java",
      "Xcode",
      "Android Studio",
      "Mobile",
      "iOS",
      "Android",
      "UI/UX",
      "Accessibility",
      "App Store",
      "Google Play Store"
    ],
    img: "/images/projects/thorlabs-toolkit.webp",
    impact: [
      "Refactored modules and modernized UI for clarity and speed",
      "Shipped updates to both App Store and Google Play",
      "Improved UX consistency and accessibility across calculators"
    ]
  },
  {
    id: "feedback",
    title: "Mobile Feedback Form",
    org: "Thorlabs",
    summary:
      "Mobile-friendly product feedback form with validation, to be embedded within the Thorlabs Toolkit mobile app.",
    href: "https://thorlabs-toolkit-feedback.netlify.app/",
    code: "https://github.com/caiteesmith/Mobile-Feedback-Form",
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "Netlify",
      "Form Validation",
      "Mobile-first",
      "UX/UI"
    ],
    img: "/images/projects/feedback.webp",
    impact: [
      "Lightweight, mobile-first form embedded via WKWebView",
      "Client-side validation and clean error states",
      "Zero-ops hosting/deploy previews with Netlify"
    ]
  }
];