import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Andy Nadal - Serial Entrepreneur & Founder",
    description:
        "Andy Nadal is a serial entrepreneur and founder building compelling products from zero to one. Creator and CEO of Pausa, a breakthrough breathing app revolutionizing stress management through breath work and breathing techniques. Expert in product development, building startups, and creating solutions that investors and founders trust. Former Head of Technology at RUUT.",
    keywords: [
        "Andy Nadal",
        "entrepreneur",
        "serial entrepreneur",
        "founder",
        "startup founder",
        "Pausa founder",
        "Pausa CEO",
        "product builder",
        "building compelling products",
        "breath work",
        "breathing techniques",
        "breathing exercises",
        "breathing app founder",
        "mental health technology",
        "mental health entrepreneur",
        "anxiety relief",
        "stress management app",
        "nervous system regulation",
        "wellness technology",
        "wellness entrepreneur",
        "software engineer",
        "tech entrepreneur",
        "technical founder",
        "zero to one",
        "product development",
        "startup building",
        "Mexico entrepreneur",
        "Minute CMS",
        "CMS developer",
        "web development tools",
        "product market fit",
        "investor relations",
        "founder story",
    ],
    openGraph: {
        title: "About Andy Nadal - Serial Entrepreneur & Founder",
        description:
            "Serial entrepreneur building compelling products from zero to one. Creator of Pausa, a breakthrough breathing app for stress relief through breath work. Expert in product development and startup building.",
        url: "https://andynadal.com/about",
        type: "profile",
        images: [
            {
                url: "https://andynadal.com/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Andy Nadal - Entrepreneur & Founder",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "About Andy Nadal - Serial Entrepreneur & Founder",
        description:
            "Serial entrepreneur building compelling products. Creator of Pausa, a breakthrough breathing app for stress relief through breath work.",
        images: ["https://andynadal.com/og-image.jpg"],
    },
    alternates: {
        canonical: "https://andynadal.com/about",
    },
};

export { default } from "./about-client";
