import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Pausa - Breath Work & Breathing App for Stress Relief",
    description:
        "Pausa is a breakthrough breathing app for people who don't meditate. Master breath work and breathing techniques to regulate your nervous system when life hits too hard. Fast relief for stress, anxiety, and panic through proven breathing exercises - no rituals, no spirituality, just breathe and feel better.",
    keywords: [
        "Pausa",
        "breathing app",
        "breath work",
        "breathwork",
        "breathing techniques",
        "breathing exercises",
        "breathing methods",
        "box breathing",
        "diaphragmatic breathing",
        "4-7-8 breathing",
        "anxiety relief",
        "stress management",
        "stress relief",
        "panic attack",
        "panic relief",
        "nervous system regulation",
        "vagal tone",
        "parasympathetic nervous system",
        "mental health",
        "mental wellness",
        "meditation alternative",
        "mindfulness",
        "wellness app",
        "anxiety app",
        "calm app",
        "relaxation techniques",
        "self-care",
        "emotional regulation",
        "anxiety management",
        "stress reduction",
        "breathing for anxiety",
        "breathing for stress",
    ],
    openGraph: {
        title: "Pausa - Breath Work & Breathing App for Stress Relief",
        description:
            "A breakthrough breathing app for people who don't meditate. Master breath work and breathing techniques to regulate your nervous system. Fast relief for stress, anxiety, and panic through proven breathing exercises.",
        url: "https://andynadal.com/pausa",
        type: "website",
        images: [
            {
                url: "https://andynadal.com/pausa-og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Pausa - Breath Work & Breathing App",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Pausa - Breath Work & Breathing App for Stress Relief",
        description:
            "A breathing app for people who don't meditate. Master breath work and breathing techniques for fast relief from stress, anxiety, and panic.",
        images: ["https://andynadal.com/pausa-og-image.jpg"],
    },
    alternates: {
        canonical: "https://andynadal.com/pausa",
    },
};

export { default } from "./pausa-client";
