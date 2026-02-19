import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Projects",
    description:
        "Explore Andy Nadal's portfolio of innovative projects including Pausa (AI-powered productivity app), Minute CMS (AI blogging platform), RUUT (fintech investment platform), Journal Habit, and Pro Ledger. From startups to enterprise solutions.",
    keywords: [
        "projects",
        "portfolio",
        "Pausa",
        "Minute CMS",
        "RUUT",
        "Journal Habit",
        "Pro Ledger",
        "fintech",
        "mobile apps",
        "startup projects",
        "AI applications",
        "productivity apps",
        "investment platform",
        "habit tracking",
        "financial analytics",
        "CMS",
        "content management",
        "AI blogging",
    ],
    openGraph: {
        title: "Projects - Andy Nadal",
        description:
            "Explore innovative projects by Andy Nadal: Pausa (AI-powered productivity), Minute CMS (AI blogging), RUUT (fintech investment platform), Journal Habit, and Pro Ledger.",
        url: "https://andynadal.com/projects",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Projects - Andy Nadal",
        description:
            "Explore innovative projects by Andy Nadal: Pausa (AI-powered productivity), Minute CMS (AI blogging), RUUT (fintech investment platform), Journal Habit, and Pro Ledger.",
    },
    alternates: {
        canonical: "https://andynadal.com/projects",
    },
};

export { default } from "./projects-client";
