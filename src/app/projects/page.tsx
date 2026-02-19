import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Projects - Building Compelling Products That Matter",
    description:
        "Explore Andy Nadal's portfolio of compelling products built from zero to one. From Pausa (breakthrough breathing app) to RUUT (fintech investment platform), Journal Habit, and Pro Ledger. Real products solving real problems for founders, investors, and users worldwide.",
    keywords: [
        "projects",
        "portfolio",
        "building products",
        "product development",
        "compelling products",
        "zero to one",
        "startup projects",
        "product builder",
        "Pausa",
        "breathing app",
        "breath work product",
        "RUUT",
        "fintech",
        "fintech products",
        "investment platform",
        "Journal Habit",
        "Pro Ledger",
        "mobile apps",
        "web applications",
        "AI applications",
        "productivity apps",
        "SaaS products",
        "habit tracking",
        "financial analytics",
        "product portfolio",
        "entrepreneur projects",
        "founder projects",
        "product market fit",
        "scalable products",
        "innovative solutions",
    ],
    openGraph: {
        title: "Projects - Building Compelling Products That Matter",
        description:
            "Portfolio of compelling products built from zero to one: Pausa (breakthrough breathing app), RUUT (fintech investment platform), Journal Habit, and Pro Ledger. Real products solving real problems.",
        url: "https://andynadal.com/projects",
        type: "website",
        images: [
            {
                url: "https://andynadal.com/projects-og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Andy Nadal - Product Portfolio",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Projects - Building Compelling Products That Matter",
        description:
            "Portfolio of compelling products: Pausa (breathing app), RUUT (fintech platform), Journal Habit, and Pro Ledger. Built from zero to one.",
        images: ["https://andynadal.com/projects-og-image.jpg"],
    },
    alternates: {
        canonical: "https://andynadal.com/projects",
    },
};

export { default } from "./projects-client";
