import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Andy Nadal",
    description:
        "Andy Nadal is the CEO and Founder of Pausa, a breakthrough breathing app that helps people manage stress and anxiety. Serial entrepreneur, software engineer, and mental health advocate building the future of accessible wellness technology.",
    keywords: [
        "Andy Nadal",
        "Pausa founder",
        "Pausa CEO",
        "entrepreneur",
        "breathing app founder",
        "mental health technology",
        "anxiety relief",
        "stress management app",
        "wellness technology",
        "startup founder",
        "software engineer",
        "tech entrepreneur",
        "Mexico entrepreneur",
        "nervous system regulation",
    ],
    openGraph: {
        title: "About Andy Nadal - Founder & CEO of Pausa",
        description:
            "Serial entrepreneur and software engineer building Pausa, a breakthrough breathing app for stress and anxiety management.",
        url: "https://andynadal.com/about",
        type: "profile",
    },
    twitter: {
        card: "summary_large_image",
        title: "About Andy Nadal - Founder & CEO of Pausa",
        description:
            "Serial entrepreneur and software engineer building Pausa, a breakthrough breathing app for stress and anxiety management.",
    },
    alternates: {
        canonical: "https://andynadal.com/about",
    },
};

export { default } from "./about-client";
