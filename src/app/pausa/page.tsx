import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Pausa - Breathing App for Stress & Anxiety",
    description:
        "Pausa is a breathing app for people who don't meditate. Regulate your nervous system when life hits too hard. Fast relief for stress, anxiety, and panic - no rituals, no spirituality, just breathe.",
    keywords: [
        "Pausa",
        "breathing app",
        "anxiety relief",
        "stress management",
        "panic attack",
        "nervous system regulation",
        "mental health",
        "meditation alternative",
        "breathing exercises",
        "mindfulness",
        "wellness app",
        "stress relief",
        "anxiety app",
        "mental wellness",
    ],
    openGraph: {
        title: "Pausa - Breathing App for Stress & Anxiety",
        description:
            "A breathing app for people who don't meditate. Regulate your nervous system when life hits too hard. Fast relief for stress, anxiety, and panic.",
        url: "https://andynadal.com/pausa",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Pausa - Breathing App for Stress & Anxiety",
        description:
            "A breathing app for people who don't meditate. Fast relief for stress, anxiety, and panic.",
    },
    alternates: {
        canonical: "https://andynadal.com/pausa",
    },
};

export { default } from "./pausa-client";
