export const PROJECTS = [
  {
    id: "hotlist",
    title: "HotList Search Service",
    org: "Valley Bank",
    summary:
      "A .NET 8 Azure Functions microservice built with Clean Architecture (SYS/EXP layers) to validate, process, and execute hotlist search requests in a regulated financial environment. The service performs multi-criteria searches across SQL Server datasets, derives customer type, and returns standardized, audit-friendly match responses for front-office teams.",
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
      "Azure Key Vault",
      "Application Insights",
      "Azure DevOps"
    ],
    impact: [
      "Built the SYS-layer service enabling regulated high-risk customer searches",
      "Implemented conditional validation across five search criteria",
      "Integrated SQL Server using repository patterns for multi-table queries",
      "Authored implementation pattern docs for SQL Server access in Azure Functions",
      "Defined clean DTO and contract boundaries across EXP → SYS → repository layers",
      "Added customer-type derivation logic based on tax identifier rules",
      "Standardized response modeling with field-level null suppression",
      "Documented endpoints with OpenAPI/Swagger for partner alignment",
      "Created NUnit tests for validation, business logic, mapping, and no-match cases",
      "Supported teammate in building and deploying the EXP-layer microservice"
    ]
  },
  {
    id: "hit",
    title: "Health of IT (HIT) Microservices",
    org: "Valley Bank",
    summary:
      "A .NET 8 Azure Functions ecosystem powering real-time product health visibility, automated notifications, and an internal Vue.js dashboard. The platform integrates Cosmos DB, Azure Service Bus, and structured observability patterns to support regulated, multi-environment operations across the bank.",
    href: null,
    code: null,
    tags: [
      ".NET 8",
      "C#",
      "Azure Functions",
      "Cosmos DB",
      "NoSQL",
      "Terraform",
      "Azure Pipelines",
      "CI/CD",
      "OpenAPI/Swagger",
      "NUnit",
      "Moq",
      "Logging",
      "Vue.js",
      "Agile/Scrum"
    ],
    impact: [
      "Delivered and maintained 8+ production Azure Functions across EXP/PRC/SYS layers",
      "Built product-health APIs, nightly sync jobs, and real-time notification microservices",
      "Integrated Cosmos DB for storing product-health data and powering real-time dashboard queries",
      "Created structured logging patterns for cross-service traceability via App Insights",
      "Established IaC using Terraform and deployments through Azure Pipelines",
      "Produced clean API definitions with OpenAPI/Swagger",
      "Maintained unit test coverage with NUnit/Moq across validators and services",
      "Enhanced the internal Vue.js dashboard with real-time product status rendering"
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
    id: "tiptap-editor",
    title: "Rich Text Editor Integration",
    org: "Valley Bank",
    summary:
      "Integrated a TipTap-powered rich text editor into the internal Vue.js product health dashboard, enabling teams to compose formatted notifications and improve communication clarity.",
    href: null,
    code: null,
    tags: [
      "Vue.js",
      "TipTap",
      "JavaScript",
      "API Integration",
      "UX Enhancements"
    ],
    impact: [
      "Implemented a TipTap rich text editor within an existing Vue.js dashboard, replacing plain text inputs for product-health notifications",
      "Configured toolbar options, formatting rules, and content schema to align with internal communication standards",
      "Ensured compatibility with existing backend APIs and notification payloads",
      "Improved usability by enabling bold/italic text, hyperlinks, and structured formatting",
      "Contributed UI/UX enhancements that improved clarity, readability, and consistency of internal product-status updates"
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
      "A fully custom React + Vite portfolio that highlights engineering and photography work with a modern component architecture, Tailwind styling, accessibility-first UI, dark mode, and smooth Framer Motion animations. Designed for performance, maintainability, and a polished end-to-end user experience.",
    href: "https://caiteesmith.com/",
    code: "https://github.com/caiteesmith/portfolio-main",
    tags: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Framer Motion",
      "Lucide React",
      "Responsive Design",
      "Design Systems",
      "Accessibility",
      "Dark Mode",
      "SEO",
      "SPA",
      "Performance Optimization",
      "Netlify",
      "CI/CD"
    ],
    img: "/images/projects/portfolio-mat.webp",
    impact: [
      "Rebuilt a static Bootstrap site into a React SPA with modular components and Vite",
      "Implemented a design using Tailwind CSS and shared UI primitives for consistency",
      "Developed dark/light theme support with Tailwind and CSS variables",
      "Integrated Framer Motion for subtle transitions and page-level animations",
      "Configured Netlify CI/CD for automatic deployments from GitHub on every commit",
      "Built reusable components for project cards, skill tags, and case studies"
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