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
        experience: "2+ years",
        technologies: ["GitHub Copilot", "AI Agents", "CI/CD", "Automation"],
        impact: "Reduced development time by 67% while maintaining code quality",
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
        experience: "1+ years",
        technologies: ["MCP", "AI/ML", "CDN", "NLP"],
        impact: "Enabled intelligent, context-aware conversational experiences",
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
        experience: "5+ years",
        technologies: ["Swift", "SwiftUI", "UIKit", "Combine", "Async/Await"],
        impact: "Shipped multiple apps to 100K+ users with 4.5+ star ratings",
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
        experience: "4+ years",
        technologies: ["Kotlin", "Android SDK", "Jetpack", "Material Design"],
        impact: "Developed apps serving thousands of daily active users",
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
        experience: "3+ years",
        technologies: [
            "Payment APIs",
            "Compliance Systems",
            "Banking Infrastructure",
        ],
        impact: "Processed millions in international transfers securely",
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
        experience: "6+ years",
        technologies: ["User Research", "Analytics", "A/B Testing", "Figma"],
        impact: "Launched products that reached 100K+ users",
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
        experience: "6+ years",
        technologies: ["Node.js", "Express", "GraphQL", "REST", "API Gateway"],
        impact: "APIs serving millions of requests daily with 99.9% uptime",
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
        experience: "6+ years",
        technologies: ["MongoDB", "PostgreSQL", "Supabase", "Redis"],
        impact: "Managed databases with millions of records efficiently",
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
        experience: "5+ years",
        technologies: ["OAuth", "JWT", "Auth0", "Firebase Auth"],
        impact: "Secured platforms handling sensitive financial data",
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
        experience: "5+ years",
        technologies: [
            "GitHub Actions",
            "CircleCI",
            "Fastlane",
            "Docker",
            "Kubernetes",
        ],
        impact: "Reduced deployment time from hours to minutes",
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
