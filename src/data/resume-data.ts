import type { ResumeData } from "@/lib/types";

export const RESUME_DATA: ResumeData = {
  name: "Luan Muniz",
  initials: "LM",
  location: "Remote",
  locationLink: "#",
  about: "Senior Backend Engineer | Lead Node.js | Data Pipelines | Integrations",
  highlights: [
    "<strong>Backend Platform Leadership</strong>: Led build of Node.js microservices, authentication, serverless architecture, integrations, and runtime modernization for high-volume trading systems.",
    "<strong>Scalable Data Pipelines</strong>: Built AWS Lambda/serverless pipelines processing 6K+ tickers and 200M+ social profiles on large-scale financial/social datasets across Redis, MongoDB, and PostgreSQL.",
    "<strong>Product-to-Platform Delivery</strong>: Led secure, scalable platforms from architecture to production across fintech, trading analytics, real-time communication, and data products.",
  ],
  summary: `Senior Backend Engineer specializing in Node.js, data pipelines, and integrations for high-volume products, with experience building scalable systems. My strongest work sits at the intersection of backend, product, financial-data systems, and practical architecture: turning complex ideas into scalable software, workflows and apis.

Most recently at TrendSpider, as an early backend/platform engineer, reporting directly to the CTO. I built core systems across authentication, market scanners, JavaScript-based custom scripting, backtesting, serverless data pipelines, financial-data integrations, and more.

Earlier in my career, I also worked on social-data products, search systems, sync pipelines, CI/CD, production operations, and high-scale data workflows.

Core skills: Node.js, JavaScript, Typescript, Backend, platform engineering, AWS Lambda, serverless architecture, data pipelines, integrations, queues, Redis, MongoDB, PostgreSQL, Docker, CI/CD, system design, performance tuning.`,
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
      {
        name: "X",
        url: "https://x.com/lluanmuniz",
        icon: "x",
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
      badges: ["Remote", "Node.js", "Typescript", "Serverless", "AWS Lambda", "Data Pipelines", "Data Integrations", "AI Workflows", "AI Agents", "AI Automation"],
      title: "Senior Backend/Platform Engineer",
      start: "Feb 2021",
      end: "Mar 2026",
      description: `Senior Backend/platform engineer on the engineering team building TrendSpider's trading analytics platform, reporting directly to the CTO. Owned core Node.js/Typescript microservices, AWS Lambda data pipelines, queues, databases, Docker runtimes, and CI/CD, and led technical decisions for major backend/platform capabilities, including authentication, non-market-data integrations, serverless architecture, and scanner/custom scripting.`,
      highlights: [
        "Built authentication and user-hydration services in Node.js/Typescript, preserving billing compatibility while enabling independent scaling for thousands of concurrent users.",
        "Owned third-party integrations and data pipelines for Federal Reserve data, FINRA, 13F filings, and WallStreetBets/Reddit content.",
        "Built the backend for JavaScript-based custom indicators, market scanning, data comparison, and backtesting, using scalable compute to scan thousands of tickers.",
        "Led Node.js/Typescript runtime modernization across almost all microservices from v10 through v24, managing native C++ module compatibility, security review, and JavaScript breaking-change risks.",
        "Built AI Workflow that allow users to create Custom TradeBot Agents within a Secure environment, allowing users to create their own trading strategies using AI human language and backtest them against historical data.",
      ],
    },
    {
      company: "ENbox Brasil",
      link: "https://enbox.com.br/",
      badges: ["Hybrid", "Node.js", "WebRTC", "WebSockets", "Postgres"],
      title: "Technical Lead Engineer",
      start: "Apr 2019",
      end: "Jan 2021",
      description: `Technical lead for an OTC trading platform serving Brazil's energy market, supporting contracts worth hundreds of thousands of BRL. Responsible for backend and database architecture, with security, reliability, and scalability central to the platform's design and delivery.

ENbox was an OTC (Over The Counter) investing platform for the Brazilian Energy market. The Platform was of vital importance to the market since we were 1 of the 2 platforms in the entire market that provide this service. The stability and confidence of the platform are also very important since even the small contracts in the platform can be worth more than a few hundred thousand BRL.`,
      highlights: [
        "Created the platform from scratch, including database architecture, backend services, and frontend delivery for a secure, scalable trading product.",
        "Implemented WebRTC and WebSockets for real-time communication between users.",
        "Led technical delivery within a 7-person development team, coordinating database design, backend implementation, and frontend integration."
      ],
    },
    {
      company: "ManageFlitter",
      link: "https://manageflitter.com/",
      badges: ["Remote", "Node.js", "Redis", "MongoDB", "Postgres"],
      title: "Technical Lead Engineer",
      start: "May 2017",
      end: "Mar 2019",
      description: `Technical lead for ManageSocial, a social-data platform built to replace the previous platform ManageFlitter software using a modern, more scalable and more maintainable development cycle. 
Owned backend architecture and large-scale data workflows, using serverless components to support fast access to extensive social-profile datasets and keep them up to date.
The hundreds of GB Database was a big challenge, to make that available to all users in a quick and consistent way was one of the biggest selling points of the platform. Keep all that up to date and consistent required a system that checks and update every data at a fast pace. `,
      highlights: [
        "Led the development of the replacement of the ManageFlitter platform with a serverless platform designed for scalability and maintainability.",
        "Managed hundreds of gigabytes of indexed data covering 200M+ Twitter profiles and 40M+ Instagram profiles, maintaining data integrity and query performance.",
        "Built indexing and data-refresh workflows to keep profile data current and provide fast, consistent access for users."
      ],
    },
    {
      company: "Zimp",
      link: "https://zimp.com.br/",
      badges: ["Remote", "Node.js", "Redis", "MongoDB", "Postgres"],
      title: "Co Founder & In charge of Technology and data",
      start: "Nov 2013",
      end: "May 2017",
      description: `Co-founder and Node.js developer in charge of build the API systems, the integrations with the e-commerces and the data analysis from those.`,
      highlights: [
        "Co-founded Zimp, a company focused on providing API systems and integrations for e-commerce platforms.",
        "Developed and maintained the backend systems using Node.js, ensuring high performance and reliability.",
        "Implemented data analysis tools to extract insights from e-commerce data, improving business decision-making.",
        "Collaborated with cross-functional teams to deliver innovative solutions for clients."
      ],
    }, {
      company: "Extraball",
      link: "https://extraball.com.br/",
      badges: ["Remote", "Node.js", "Redis", "MongoDB", "Postgres"],
      title: "Senior FullStack Developer",
      start: "Aug 2013",
      end: "Mar 2014",
      description: `At Extraball I had the opportunity to work with Big Players in the Brazilian e-commerce creating a very wide experience in the area. Extraball is a powerful VTEX partner, one of the largest e-commerce platforms in Brazil. I've learned there to work remotely with big companies and how to communicate to all levels required.`,
      highlights: [
        "Worked with major Brazilian e-commerce companies, gaining extensive experience in the industry.",
        "Developed and maintained full-stack applications using Node.js and React, ensuring high-quality code and performance.",
        "Collaborated with cross-functional teams to deliver innovative solutions for clients.",
        "Learned to work remotely with large companies, effectively communicating across all levels of the organization."
      ],
    }
  ],
  skills: [
    'Node.js', 'Typescript', 'Javascript', 'Serverless', 'AWS Lambda', 'PostgreSQL', 'Redis', 'MongoDB',
    'Microservices', 'Data Pipelines', 'Integrations', 'Docker', 'CI/CD', 'Terraform',
    'Performance Tuning', 'Platform engineering', 'WebSockets', 'Rust', 'Bash', 'React',
    'OpenAI SDK', 'AI Integration', 'Custom Scripted TradeBots', 'AI Agents', 'AI Workflows', 'AI Automation', 'Serverless Architecture'
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
      description: "Financial data platform aggregating and analyzing financial, regulatory, and macroeconomic datasets, demonstrating data integration and processing.",
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
