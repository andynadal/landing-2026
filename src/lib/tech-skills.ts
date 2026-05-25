export interface TechSkill {
    slug: string;
    title: string;
    shortDescription: string;
    description: string;
    icon: string;
    category: string;
    highlights: string[];
    experience: string;
    technologies?: string[];
    impact?: string;
    projects?: Array<{
        name: string;
        url: string;
        description: string;
    }>;
    detailedDescription?: string[];
}

export const techSkills: TechSkill[] = [
    {
        slug: "ai-coding-pipelines",
        title: "AI Coding Pipelines",
        shortDescription:
            "3X development speed with end-to-end AI agents and CI/CD",
        description:
            "Built comprehensive AI-powered development pipelines that accelerate development by 3X. Implemented end-to-end agents with continuous integration and deployment, enabling faster iteration and higher quality code delivery.",
        icon: "🤖",
        category: "AI & Automation",
        highlights: [
            "3X faster development cycles",
            "End-to-end AI agent integration",
            "Automated CI/CD workflows",
            "Intelligent code review and testing",
        ],
        experience: "2 years",
        technologies: ["GitHub Copilot", "AI Agents", "CI/CD", "Automation"],
        impact: "Reduced development time by 67% while maintaining code quality",
        projects: [
            {
                name: "Pausa",
                url: "/pausa",
                description:
                    "Implemented AI-powered development workflows to accelerate feature delivery and maintain code quality across iOS and backend systems",
            },
        ],
        detailedDescription: [
            "Pioneered the integration of AI coding assistants into the development workflow, achieving a 3X increase in development velocity while maintaining high code quality standards.",
            "Built custom AI agent pipelines that automate repetitive coding tasks, generate boilerplate code, and provide intelligent code suggestions based on project context.",
            "Integrated AI-powered code review systems that catch potential bugs, security vulnerabilities, and code quality issues before they reach production.",
            "Developed automated testing frameworks that leverage AI to generate test cases and identify edge cases that human developers might miss.",
            "Created CI/CD pipelines that use machine learning to optimize build times, predict deployment risks, and automatically rollback problematic releases.",
        ],
    },
    {
        slug: "mcp-servers-agents",
        title: "MCP Servers & AI Agents",
        shortDescription:
            "Building context-aware AI agents and chatbots with MCP",
        description:
            "Developed Model Context Protocol (MCP) servers and CDN solutions for AI context management. Built intelligent agents and chatbots that leverage contextual information for better user experiences.",
        icon: "🧠",
        category: "AI & Automation",
        highlights: [
            "MCP server architecture",
            "Context-aware AI systems",
            "CDN for agent context",
            "Custom chatbot implementations",
        ],
        experience: "2 years",
        technologies: ["MCP", "AI/ML", "CDN", "NLP"],
        impact: "Enabled intelligent, context-aware conversational experiences",
        projects: [
            {
                name: "Pausa",
                url: "/pausa",
                description:
                    "Built AI-powered chatbot systems to provide personalized breathing guidance and mental health support",
            },
        ],
        detailedDescription: [
            "Architected and deployed Model Context Protocol (MCP) servers that enable AI agents to maintain context across conversations and sessions.",
            "Built CDN infrastructure for distributing AI model contexts globally, reducing latency and improving response times for users worldwide.",
            "Developed custom chatbot implementations that understand user intent, maintain conversation history, and provide contextually relevant responses.",
            "Implemented natural language processing pipelines that extract meaning from user inputs and generate human-like responses.",
            "Created monitoring and analytics systems to track chatbot performance, user satisfaction, and identify areas for improvement.",
        ],
    },
    {
        slug: "ios-development",
        title: "iOS Development",
        shortDescription:
            "Native iOS apps with SwiftUI, UIKit, Combine, and async/await",
        description:
            "Expert in building native iOS applications using modern Swift technologies. Proficient with SwiftUI for declarative UI, UIKit for complex interfaces, Combine for reactive programming, and async/await for concurrent operations.",
        icon: "📱",
        category: "Mobile Development",
        highlights: [
            "SwiftUI and UIKit expertise",
            "Reactive programming with Combine",
            "Modern async/await patterns",
            "App Store optimization",
        ],
        experience: "7 years",
        technologies: ["Swift", "SwiftUI", "UIKit", "Combine", "Async/Await"],
        impact: "Shipped multiple apps to 100K+ users with 4.5+ star ratings",
        projects: [
            {
                name: "Pausa",
                url: "/pausa",
                description:
                    "Built the iOS app from scratch, implementing guided breathwork features, real-time audio processing, and seamless user experience",
            },
            {
                name: "RUUT",
                url: "/projects",
                description:
                    "Led iOS development as founding engineer, building investment platform that reached 100K+ downloads",
            },
        ],
        detailedDescription: [
            "Led iOS development for multiple successful apps, from initial architecture to App Store launch and beyond, reaching over 100,000 users combined.",
            "Mastered SwiftUI for building modern, declarative user interfaces with smooth animations and responsive layouts that adapt to different screen sizes.",
            "Deep expertise in UIKit for complex custom UI components, advanced animations, and performance optimization in resource-constrained environments.",
            "Implemented reactive programming patterns using Combine framework to handle asynchronous data streams, user interactions, and network requests elegantly.",
            "Leveraged modern Swift concurrency with async/await to write clean, maintainable code for complex asynchronous operations like API calls and data processing.",
            "Optimized app performance through profiling, memory management, and efficient use of iOS frameworks, achieving smooth 60fps animations and minimal battery drain.",
            "Implemented comprehensive testing strategies including unit tests, UI tests, and snapshot tests to ensure code quality and prevent regressions.",
        ],
    },
    {
        slug: "android-development",
        title: "Android Development",
        shortDescription:
            "Building scalable Android applications with modern tools",
        description:
            "Experienced in Android app development using Kotlin and modern Android architecture components. Built scalable, performant applications following Material Design principles.",
        icon: "🤖",
        category: "Mobile Development",
        highlights: [
            "Kotlin and Java proficiency",
            "Modern Android architecture",
            "Material Design implementation",
            "Play Store deployment",
        ],
        experience: "5 years",
        technologies: ["Kotlin", "Android SDK", "Jetpack", "Material Design"],
        impact: "Developed apps serving thousands of daily active users",
        projects: [
            {
                name: "Pausa",
                url: "/pausa",
                description:
                    "Developed Android version of the breathwork app with feature parity to iOS",
            },
            {
                name: "RUUT",
                url: "/projects",
                description:
                    "Built Android app for fintech platform, handling secure transactions and real-time market data",
            },
        ],
        detailedDescription: [
            "Built production Android applications using Kotlin and modern Android architecture components (MVVM, LiveData, ViewModel, Room).",
            "Implemented Material Design 3 principles to create beautiful, intuitive user interfaces that follow Android design guidelines and user expectations.",
            "Developed scalable app architectures using Jetpack libraries, ensuring maintainability and testability as the codebase grows.",
            "Optimized app performance for various Android devices and OS versions, ensuring smooth operation on both high-end and budget devices.",
            "Implemented secure data storage and transmission using Android Keystore, encrypted SharedPreferences, and SSL pinning for sensitive user data.",
            "Integrated third-party SDKs and APIs for payments, analytics, push notifications, and other essential app features.",
            "Managed Play Store releases, including beta testing, staged rollouts, and monitoring crash reports to ensure stable production releases.",
        ],
    },
    {
        slug: "fintech-infrastructure",
        title: "Fintech Infrastructure",
        shortDescription:
            "Created and led money transmitter for international transfers",
        description:
            "Helped create and lead a licensed money transmitter platform at RUUT for international money transfers. Built secure, compliant infrastructure handling millions in transactions while ensuring regulatory compliance.",
        icon: "💰",
        category: "Backend & Infrastructure",
        highlights: [
            "Money transmitter licensing",
            "International payment processing",
            "Regulatory compliance (KYC/AML)",
            "Secure transaction handling",
        ],
        experience: "4 years",
        technologies: [
            "Payment APIs",
            "Compliance Systems",
            "Banking Infrastructure",
        ],
        impact: "Processed millions in international transfers securely",
        projects: [
            {
                name: "RUUT",
                url: "/projects",
                description:
                    "Built and scaled fintech infrastructure as CTO, handling international money transfers and investment transactions",
            },
        ],
        detailedDescription: [
            "Led the technical development of a licensed money transmitter platform, navigating complex regulatory requirements and building compliant infrastructure.",
            "Architected secure payment processing systems that handle millions of dollars in international transfers while maintaining PCI DSS compliance.",
            "Implemented comprehensive KYC (Know Your Customer) and AML (Anti-Money Laundering) systems to prevent fraud and ensure regulatory compliance.",
            "Built real-time transaction monitoring systems that detect suspicious activity and automatically flag transactions for review.",
            "Developed secure APIs for integrating with banking partners, payment processors, and third-party financial services.",
            "Reduced international transfer times from ~3 days to instant by optimizing payment routing and partnering with modern payment rails.",
            "Created audit trails and reporting systems to satisfy regulatory requirements and provide transparency to users and regulators.",
        ],
    },
    {
        slug: "product-development",
        title: "Product Development",
        shortDescription: "User-centric product strategy and execution",
        description:
            "Expert in talking to users, gathering feedback, and extracting actionable insights. Built products from zero to launch by deeply understanding user needs and iterating based on real feedback.",
        icon: "🎯",
        category: "Product & Strategy",
        highlights: [
            "User research and interviews",
            "Product roadmap planning",
            "Feedback analysis and prioritization",
            "Data-driven decision making",
        ],
        experience: "6 years",
        technologies: ["User Research", "Analytics", "A/B Testing", "Figma"],
        impact: "Launched products that reached 100K+ users",
        projects: [
            {
                name: "Pausa",
                url: "/pausa",
                description:
                    "Led product development from concept to launch, conducting user research and iterating based on feedback",
            },
            {
                name: "RUUT",
                url: "/projects",
                description:
                    "Shaped product strategy and roadmap as CTO, working closely with users and investors",
            },
        ],
        detailedDescription: [
            "Led product development for multiple successful products, from initial concept through launch and growth to 100K+ users.",
            "Conducted extensive user research through interviews, surveys, and usability testing to deeply understand user needs and pain points.",
            "Built product roadmaps that balance user needs, business goals, and technical constraints, prioritizing features that deliver maximum value.",
            "Implemented data-driven decision making using analytics, A/B testing, and user feedback to validate assumptions and measure success.",
            "Collaborated with designers to create intuitive user experiences, iterating on designs based on user feedback and usability testing.",
            "Worked closely with engineering teams to ensure technical feasibility and optimal implementation of product features.",
            "Established feedback loops with users through in-app surveys, support channels, and community engagement to continuously improve the product.",
        ],
    },
    {
        slug: "backend-development",
        title: "Backend Development",
        shortDescription: "RESTful APIs and GraphQL backends at scale",
        description:
            "Built robust backend systems using REST and GraphQL architectures. Designed scalable APIs that power web and mobile applications, handling high traffic with optimal performance.",
        icon: "⚡",
        category: "Backend & Infrastructure",
        highlights: [
            "RESTful API design",
            "GraphQL implementation",
            "Microservices architecture",
            "API security and rate limiting",
        ],
        experience: "4 years",
        technologies: ["Node.js", "Express", "GraphQL", "REST", "API Gateway"],
        impact: "APIs serving millions of requests daily with 99.9% uptime",
        projects: [
            {
                name: "Pausa",
                url: "/pausa",
                description:
                    "Built scalable backend infrastructure to support mobile apps and handle user data securely",
            },
            {
                name: "RUUT",
                url: "/projects",
                description:
                    "Architected backend systems for fintech platform, handling transactions and real-time market data",
            },
        ],
        detailedDescription: [
            "Architected and built scalable backend systems that serve millions of API requests daily with 99.9% uptime and sub-100ms response times.",
            "Designed RESTful APIs following best practices for versioning, authentication, error handling, and documentation.",
            "Implemented GraphQL APIs that allow clients to request exactly the data they need, reducing over-fetching and improving performance.",
            "Built microservices architectures that enable independent scaling, deployment, and development of different system components.",
            "Implemented comprehensive API security including authentication (JWT, OAuth), authorization (RBAC), rate limiting, and input validation.",
            "Optimized database queries and implemented caching strategies (Redis, CDN) to handle high traffic loads efficiently.",
            "Set up monitoring, logging, and alerting systems to quickly identify and resolve issues before they impact users.",
        ],
    },
    {
        slug: "databases",
        title: "Database Management",
        shortDescription: "MongoDB, PostgreSQL, and Supabase for data storage",
        description:
            "Extensive experience with both SQL and NoSQL databases. Implemented MongoDB for flexible document storage and PostgreSQL/Supabase for relational data, ensuring optimal performance and data integrity.",
        icon: "🗄️",
        category: "Backend & Infrastructure",
        highlights: [
            "MongoDB document modeling",
            "PostgreSQL optimization",
            "Supabase integration",
            "Data migration strategies",
        ],
        experience: "4 years",
        technologies: ["MongoDB", "PostgreSQL", "Supabase", "Redis"],
        impact: "Managed databases with millions of records efficiently",
        projects: [
            {
                name: "Pausa",
                url: "/pausa",
                description:
                    "Designed database schema and implemented data storage for user profiles, sessions, and analytics",
            },
            {
                name: "RUUT",
                url: "/projects",
                description:
                    "Built database infrastructure for financial transactions, user data, and market information",
            },
        ],
        detailedDescription: [
            "Designed and optimized database schemas for both SQL and NoSQL databases, handling millions of records with efficient query performance.",
            "Implemented MongoDB for flexible document storage, designing schemas that balance query performance with data flexibility.",
            "Built PostgreSQL databases with proper indexing, constraints, and relationships to ensure data integrity and optimal query performance.",
            "Integrated Supabase for rapid development with built-in authentication, real-time subscriptions, and auto-generated APIs.",
            "Implemented database migration strategies that allow safe schema changes without downtime or data loss.",
            "Set up database replication and backup systems to ensure data durability and enable disaster recovery.",
            "Optimized slow queries through indexing, query rewriting, and database configuration tuning to maintain fast response times as data grows.",
        ],
    },
    {
        slug: "authentication",
        title: "Authentication Systems",
        shortDescription: "Secure user authentication and authorization",
        description:
            "Implemented comprehensive authentication engines with OAuth, JWT, and multi-factor authentication. Built secure, scalable auth systems that protect user data while providing seamless experiences.",
        icon: "🔐",
        category: "Backend & Infrastructure",
        highlights: [
            "OAuth 2.0 implementation",
            "JWT token management",
            "Multi-factor authentication",
            "Role-based access control",
        ],
        experience: "4 years",
        technologies: ["OAuth", "JWT", "Auth0", "Firebase Auth"],
        impact: "Secured platforms handling sensitive financial data",
        projects: [
            {
                name: "Pausa",
                url: "/pausa",
                description:
                    "Implemented secure authentication system for user accounts and data protection",
            },
            {
                name: "RUUT",
                url: "/projects",
                description:
                    "Built authentication infrastructure for fintech platform with enhanced security requirements",
            },
        ],
        detailedDescription: [
            "Built secure authentication systems that protect user accounts and sensitive data while providing seamless login experiences.",
            "Implemented OAuth 2.0 flows for social login (Google, Apple, Facebook) and third-party API integrations.",
            "Designed JWT-based authentication with proper token expiration, refresh mechanisms, and secure storage practices.",
            "Added multi-factor authentication (MFA) using SMS, email, and authenticator apps to provide additional security for sensitive operations.",
            "Implemented role-based access control (RBAC) systems that manage user permissions and restrict access to sensitive features.",
            "Built session management systems that handle concurrent logins, device tracking, and automatic logout for security.",
            "Ensured compliance with security best practices including password hashing (bcrypt), secure token storage, and protection against common attacks (CSRF, XSS).",
        ],
    },
    {
        slug: "ci-cd-pipelines",
        title: "CI/CD Pipelines",
        shortDescription:
            "Automated testing and deployment for Android, iOS, and Web",
        description:
            "Designed and implemented CI/CD pipelines for automated testing and deployment across multiple platforms. Streamlined development workflows with automated builds, tests, and deployments for Android, iOS, and web applications.",
        icon: "🚀",
        category: "DevOps & Infrastructure",
        highlights: [
            "Automated testing workflows",
            "Multi-platform deployment",
            "Build optimization",
            "Release automation",
        ],
        experience: "4 years",
        technologies: [
            "GitHub Actions",
            "CircleCI",
            "Fastlane",
            "Docker",
            "Kubernetes",
        ],
        impact: "Reduced deployment time from hours to minutes",
        projects: [
            {
                name: "Pausa",
                url: "/pausa",
                description:
                    "Set up CI/CD pipelines for automated testing and deployment of iOS and Android apps",
            },
            {
                name: "RUUT",
                url: "/projects",
                description:
                    "Built comprehensive CI/CD infrastructure for mobile and web applications",
            },
        ],
        detailedDescription: [
            "Designed and implemented CI/CD pipelines that automate the entire software delivery process from code commit to production deployment.",
            "Built automated testing workflows that run unit tests, integration tests, and end-to-end tests on every code change.",
            "Implemented multi-platform deployment pipelines that build and deploy iOS, Android, and web applications simultaneously.",
            "Optimized build times through caching, parallelization, and incremental builds, reducing CI/CD pipeline execution from hours to minutes.",
            "Set up automated release processes for App Store and Play Store submissions, including screenshot generation and metadata updates.",
            "Implemented blue-green deployments and canary releases to minimize downtime and risk during production deployments.",
            "Created monitoring and alerting systems that notify the team of build failures, test failures, and deployment issues immediately.",
        ],
    },
];

export function getTechSkillBySlug(slug: string): TechSkill | undefined {
    return techSkills.find((skill) => skill.slug === slug);
}

export function getTechSkillsByCategory(category: string): TechSkill[] {
    return techSkills.filter((skill) => skill.category === category);
}

export function getAllCategories(): string[] {
    const categories = new Set(techSkills.map((skill) => skill.category));
    return Array.from(categories);
}
