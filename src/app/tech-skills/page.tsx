import type { Metadata } from "next";

import TechSkillsClient from "./tech-skills-client";

export const metadata: Metadata = {
    title: "Technical Skills - Full-Stack Development Expertise",
    description:
        "Explore Andy Nadal's comprehensive technical skills: AI coding pipelines, iOS & Android development, fintech infrastructure, backend systems with REST & GraphQL, databases, authentication, and CI/CD. 10+ years of building scalable products.",
    keywords: [
        "technical skills",
        "full-stack developer",
        "AI coding",
        "iOS development",
        "Android development",
        "fintech",
        "backend development",
        "REST API",
        "GraphQL",
        "databases",
        "MongoDB",
        "PostgreSQL",
        "authentication",
        "CI/CD",
        "DevOps",
        "Swift",
        "SwiftUI",
        "Kotlin",
        "Node.js",
        "product development",
        "software engineering",
    ],
    openGraph: {
        title: "Technical Skills - Andy Nadal",
        description:
            "Comprehensive technical expertise across AI, mobile, backend, and infrastructure development.",
        url: "https://andynadal.com/tech-skills",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Technical Skills - Andy Nadal",
        description:
            "Full-stack development expertise: AI, mobile, backend, and infrastructure.",
    },
    alternates: {
        canonical: "https://andynadal.com/tech-skills",
    },
};

export default function TechSkillsPage() {
    return <TechSkillsClient />;
}
