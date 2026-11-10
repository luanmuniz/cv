import type { ResumeData } from "@/lib/types";

export const RESUME_DATA: ResumeData = {
  name: "Luan Muniz",
  initials: "LM",
  location: "Remote",
  locationLink: "#",
  about: "Senior Backend Engineer | Node.js, TypeScript, AWS | Fintech & Market Data | AI Agents",
  highlights: [
    "<strong>Backend Platform Leadership</strong>: Five years as an early engineer at TrendSpider, a US trading platform that grew from 4,000+ traders in 2020 to 20,000+ by 2026. Built its authentication service, which still handles every user, and the pipelines behind its alternative data.",
    "<strong>Scalable Data Pipelines</strong>: Built AWS Lambda/serverless pipelines processing 6K+ tickers and 200M+ social profiles on large-scale financial/social datasets across Redis, MongoDB, and PostgreSQL.",
    "<strong>AI in production</strong>: built the backend for TrendSpider's AI coding assistant, which also powers code generation in Sidekick, the platform's AI agent. Traders describe an strategy or bot in English and we allow them to run and backtest on them.",
    "<strong>Founder and team lead</strong>: co-founder and CTO of Zimp, acquired in 2017. Later technical lead and partner at ENbox, an trading platform: hired the engineering team and built the product from scratch.",
  ],
  summary: `Senior Backend Engineer with 15+ years of experience specializing in Node.js, data pipelines, high-volume integrations, and building scalable systems. My strongest work sits at the intersection of backend, product, and practical architecture: turning complex ideas into scalable software, workflows, and APIs.

I've been an early engineer at a US trading platform, co-founder and CTO of a fintech that was acquired, and a technical partner at an energy trading platform, so I'm used to owning a system from the first commit through years of production. Some of my career highlights are:`,
  avatarUrl: "https://gravatar.com/userimage/10357206/88bd474f5c6f729c5c9393689b1a536c.jpeg?v=1792919758000&size=256",
  personalWebsiteUrl: "https://luanmuniz.com.br",
  contact: {
    email: "luan@luanmuniz.com.br",
    tel: null,
    social: [
      {
        name: "GitHub",
        url: "https://github.com/luanmuniz",
        icon: "github",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/luanmuniz/",
        icon: "linkedin",
      },
    ],
  },
  education: [
    // {
    //   school: "OPIT - Open Institute of Technology",
    //   degree: "Bachelor's Degree (BSc) (Hons) in Computer Science",
    //   start: "2025",
    //   end: "2028"
    // },
  ],
  work: [
    {
      company: "TrendSpider LLC",
      link: "https://trendspider.com/",
      badges: ["Node.js", "TypeScript", "Fastify", "Express", "AWS Lambda", "SQS", "Redis", "Kubernetes", "Terraform", "Prometheus", "CloudWatch", "AI Agents"],
      title: "Senior Backend Engineer",
      start: "Feb 2021",
      end: "Mar 2026",
      description: `Senior Backend/platform engineer on the engineering team building TrendSpider's trading analytics platform, reporting directly to the CTO. Owned core Node.js/Typescript microservices, AWS Lambda data pipelines, queues, databases, Docker runtimes, and CI/CD, and led technical decisions for major backend/platform capabilities, including authentication, non-market-data integrations, serverless architecture, and scanner/custom scripting.`,
      highlights: [
        "Replaced the WordPress-based login with a standalone authentication and user-hydration service in Node.js, enabling independent scaling for thousands of concurrent users.",
        "Built the backend used in the AI coding assistant, which also powers code generation in Sidekick, TrendSpider's AI agent. Traders describe an indicator, strategy or trading bot in plain English, the system concerts to code and it in a sandbox and lets them backtest it on historical data.",
        "Owned third-party integrations and data pipelines for Federal Reserve data, FINRA, 13F filings, and WallStreetBets/Reddit content, used across charts, scanners and watchlists.",
        "Built backend features for the market scanner and custom JavaScript scripting, such as custom indicators, data comparison and backtesting, running scans across thousands of tickers on demand.",
        "Led Node.js/Typescript modernization on every backend service, 10+ microservices on Kubernetes plus the Lambda functions, handling native C++ module compatibility, breaking changes and a security review for each major version since v10."
      ],
    },
    {
      company: "ENbox Brasil",
      link: "https://enbox.com.br/",
      badges: ["Node.js", "Postgres", "WebRTC", "WebSockets"],
      title: "Technical Lead & Partner",
      start: "Apr 2019",
      end: "Jan 2021",
      description: `Technical lead for an OTC trading platform serving Brazil's energy market, supporting contracts worth hundreds of thousands of BRL. Responsible for backend and database architecture, with security, reliability, and scalability central to the platform's design and delivery.

ENbox was an OTC trading desk for Brazil's free electricity market and an important platform since we were 1 of the 2 platforms in the market that provide this service.`,
      highlights: [
        "Hired and led the engineering team, and was responsible for the platform's security and reliability.",
        "Designed and built the platform end to end, from the PostgreSQL data model to the frontend: real-time buy and sell orders, per-counterparty energy, credit and delivery-period limits, electronic trade tickets and contract e-signature.",
        "Built real-time negotiation between counterparties over WebSockets and WebRTC, where even small contracts are worth several hundred thousand BRL.",
      ],
    },
    {
      company: "ManageFlitter",
      link: "https://manageflitter.com/",
      badges: ["Remote", "Node.js", "Serverless", "Redis", "MongoDB", "PostgreSQL"],
      title: "Technical Lead Engineer",
      start: "May 2017",
      end: "Mar 2019",
      description: `Technical lead for ManageSocial, a social-data platform built to replace the previous platform ManageFlitter software using a modern, more scalable and more maintainable development cycle. 
Owned backend architecture and large-scale data workflows, using serverless components to support fast access to extensive social-profile datasets and keep them up to date.
The hundreds of GB Database was a big challenge, to make that available to all users in a quick and consistent way was one of the biggest selling points of the platform. Keep all that up to date and consistent required a system that checks and update every data at a fast pace. `,
      highlights: [
        "Led the rebuild of the legacy product as ManageSocial on a serverless architecture that was easier to scale and maintain.",
        "Managed hundreds of gigabytes of indexed data covering 200M+ Twitter profiles and 40M+ Instagram profiles, maintaining data integrity and query performance.",
        "Built indexing and data-refresh workflows to keep profile data current and provide fast, consistent access for users."
      ],
    },
    {
      company: "Zimp",
      link: "https://zimp.com.br/",
      badges: ["Remote", "Node.js", "Redis", "MongoDB", "Postgres", "Terraform"],
      title: "Co-founder & CTO",
      start: "Nov 2013",
      end: "May 2017",
      description: `Co-founder and Node.js developer in charge of build the API systems, the integrations with the e-commerces and the data analysis from those. Acquired by Rede Pay, a Brazilian payments company, in 2017.`,
      highlights: [
        "Co-founded Zimp, a company focused on providing API systems and integrations for e-commerce platforms.",
        "Built a crawler that pulled the full catalog and prices from partner online stores, 10M+ SKUs in about 4 hours, so members could spend their points on any partner product.",
        "Implemented data analysis to extract insights from industry data, improving business decision-making.",
        "Built the Node.js API, the integrations with partner and the analytics on their sales data."
      ],
    }, {
      company: "Extraball",
      link: "https://extraball.com.br/",
      badges: ["Remote", "Node.js", "Redis", "MongoDB", "Postgres"],
      title: "Senior FullStack Developer",
      start: "Aug 2013",
      end: "Mar 2014",
      description: `At Extraball I had the opportunity to work with Big Players in the Brazilian e-commerce creating a very wide experience in the area. Extraball is a powerful VTEX partner, one of the largest e-commerce platforms in Brazil.`,
      highlights: [
        "Worked with major Brazilian e-commerce companies, gaining extensive experience in the industry.",
      ],
    }
  ],
  skills: [
    "TypeScript", "Node.js", "JavaScript", "AWS", "AWS Lambda", "Microservices",
    "Distributed Systems", "Event-Driven Architecture", "REST APIs", "PostgreSQL", "Redis", "MongoDB", "Data Pipelines", "Web Crawling",
    "Docker", "Kubernetes", "Terraform", "CI/CD", "Performance Tuning", "LLM", "AI Agents", "OpenAI API", "Rust", "React"
  ],
  projects: [
    {
      title: "Contributor to Node.js",
      techStack: ["Node.js"],
      description: "Contributions to Node.js core and ecosystem, including benchmarks and issue management, supporting runtime performance evaluation and maintenance.",
      link: {
        label: "nodejs.org",
        href: "https://nodejs.org/",
      },
    },
    {
      title: "Fintatica",
      techStack: ["Node.js", 'React', 'Bash', 'Rust'],
      description: "APIs that standardize Brazilian financial, regulatory and macroeconomic data from CVM, B3 and IBGE. Live and used by independent financial consultants.",
      link: {
        label: "fintatica.com",
        href: "https://fintatica.com.br/",
      },
    },
    {
      title: "Spotify Physical Radio",
      techStack: ["Node.js", 'RaspberryPi', 'Bash', 'Rust'],
      description: "Integrated a vintage radio with Spotify, using physical knobs to control playback and demonstrating hardware/software integration.",
    },
  ],
} as const;
