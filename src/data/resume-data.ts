import type { ResumeData } from "@/lib/types";

export const RESUME_DATA: ResumeData = {
  name: "Luan Muniz",
  initials: "LM",
  location: "Remote, Spain",
  locationLink: "https://www.google.com/maps/place/Spain",
  about: "Backend/Platform Engineer | Lead Node.js | Serverless | Data Pipelines | Integrations",
  summary: `I'm a Node.js backend and platform engineer with experience building scalable product systems, integrations, data pipelines, and platform architecture for high-volume applications. My strongest work sits at the intersection of backend, product, financial-data systems, and practical architecture: turning complex product ideas into reliable, scalable software, workflows and apis.

Most recently at TrendSpider, I worked as an early backend/platform engineer on a small remote team, reporting directly to the CTO. I built core systems across authentication, user hydration, market scanners, JavaScript-based custom scripting, backtesting, serverless data pipelines, financial-data integrations, and more.

Earlier in my career, I also worked on social-data products, search systems, sync pipelines, CI/CD, production operations, and high-scale data workflows.

Core skills: Node.js, JavaScript, backend systems, platform engineering, AWS Lambda, serverless architecture, data pipelines, integrations, queues, Redis, MongoDB, PostgreSQL, Docker, CI/CD, system design, performance tuning.`,
  avatarUrl: "https://avatars.githubusercontent.com/u/3428149?v=4",
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
    {
      school: "OPIT - Open Institute of Technology",
      degree: "Bachelor's Degree (BSc) (Hons) in Computer Science",
      start: "2025",
      end: "2028"
    },
  ],
  work: [
    {
      company: "TrendSpider LLC",
      link: "https://trendspider.com/",
      badges: ["Remote", "Node.js", "Serverless", "AWS Lambda", "Data Pipelines", "Data Integrations"],
      title: "Backend/Platform Engineer",
      start: "Feb 2021",
      end: "Mar 2026",
      description: `Backend/platform engineer on the engineering team building TrendSpider's trading analytics platform across Node.js microservices, AWS Lambda data pipelines, queues, databases, Docker runtimes, and CI/CD. Reported directly to the CTO and led technical decisions for major backend/platform capabilities, including authentication, non-market-data integrations, serverless architecture, and scanner/custom scripting.`,
      highlights: [
        "Built TrendSpider's authentication and user-hydration microservice, preserving billing compatibility while enabling independent scaling for millions of users and thousands of concurrent users.",
        "Owned non-market-data and third-party integrations, building pipelines for FED data, FINRA, 13F filings, Relative Strength, Market Breadth, and WallStreetBets/Reddit content.",
        "Built serverless Relative Strength and Market Breadth pipelines from scratch, processing 6K+ tickers plus crypto, watchlists, indexes, sectors, and market-cap groups across years pricing and fundamental data.",
        "Built scanner/custom-scripting backend functionality for JavaScript indicators, custom indicators, data comparison, and backtesting, using scalable compute to scan thousands of tickers.",
        "Led Node.js runtime modernization across almost all microservices from v10 through v24, managing native C++ module compatibility, security review, and JavaScript breaking-change risks.",
      ],
    },
    {
      company: "ENbox Brasil",
      link: "https://enbox.com.br/",
      badges: ["Hybrid", "Node.js", "WebRTC", "WebSockets", "Postgres"],
      title: "Technical Lead Engineer",
      start: "Apr 2019",
      end: "Jan 2021",
      description: `ENbox is an OTC (Over The Counter) investing platform for the Brazilian Energy market. I was the main lead developer creating the entire platform. From the Database architecture to the Frontend. Our development team was small, 7 people, but we managed to create a platform that is very secure and scalable.

The Platform is of vital importance to the market since we are 1 of the 2 platforms in the entire market that provide this service. The stability and confidence of the platform are also very important since even the small contracts in the platform can be worth more than a few hundred thousand BRL.`,
      highlights: [
        "Created the entire platform from scratch, including the database architecture, backend, and frontend.",
        "Implemented WebRTC and WebSockets for real-time communication between users.",
        "Ensured the platform's security and scalability to handle high-value transactions.",
        "Led a small team of developers, fostering collaboration and efficient development practices."
      ],
    },
    {
      company: "ManageFlitter",
      link: "https://manageflitter.com/",
      badges: ["Remote", "Node.js", "Redis", "MongoDB", "Postgres"],
      title: "Technical Lead Engineer",
      start: "May 2017",
      end: "Mar 2019",
      description: `I was the leading developer for the ManageSocial platform. That project was built to replace the entire ManageFlitter software using a modern, more scalable and more maintainable development cycle. The entire architecture was done using serverless components. 

The hundreds of GB Database was a big challenge, to make that available to all users in a quick and consistent way was one of the biggest selling points of the platform. We had more than 200M Twitter users and more than 40M Instagram users indexed in our database. Keep all that up to date and consistent required a system that checks and update every data at a fast pace. `,
      highlights: [
        "Led the development of the ManageSocial platform, replacing the entire ManageFlitter software with a modern, scalable architecture.",
        "Implemented serverless components to handle the large-scale database, ensuring quick and consistent access for users.",
        "Managed a database with over 200M Twitter users and 40M Instagram users, maintaining data integrity and performance.",
        "Developed efficient data indexing and updating mechanisms to keep the platform responsive and reliable."
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
      end: "Mar 2017",
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
    'Node.js', 'JavaScript', 'Serverless Architecture', 'AWS Lambda', 'Data Pipelines',
    'Integrations', 'Redis', 'MongoDB', 'PostgreSQL', 'Docker', 'CI/CD', 'Terraform',
    'Performance Tuning', 'Platform engineering', 'Microservices', 'WebRTC', 'WebSockets', 'Rust', 'Bash', 'React'
  ],
  projects: [
    // {
    //   title: "Contributor to Node.js",
    //   techStack: ["Node.js"],
    //   description: "Recently started to contribute to Node.js core and ecosystem, including benchmarks and issue management.",
    //   link: {
    //     label: "nodejs.org",
    //     href: "https://nodejs.org/",
    //   },
    // },
    {
      title: "Fintatica",
      techStack: ["Node.js", 'React', 'Bash', 'Rust'],
      description: "Financial data platform that aggregates and analyzes financial, regulatory, and macroeconomic datasets. Insights into market trends, investment opportunities, and economic indicators.",
      link: {
        label: "fintatica.com",
        href: "https://fintatica.com.br/",
      },
    },
    {
      title: "Spotify Physical Radio",
      techStack: ["Node.js", 'RaspberryPi', 'Bash', 'Rust'],
      description: "A real vintage radio that integrates with Spotify, turning real knobs to control the music.",
      link: {
        label: "spotify.com",
        href: "https://spotify.com/",
      },
    },
  ],
} as const;
