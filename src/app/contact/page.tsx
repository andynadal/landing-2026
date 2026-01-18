import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact",
    description:
        "Get in touch with Andy Nadal for consulting, partnerships, speaking engagements, or collaboration opportunities. Open to discussing new projects, technical advisory, and entrepreneurship.",
    keywords: [
        "contact",
        "Andy Nadal contact",
        "hire developer",
        "technical consulting",
        "startup consulting",
        "co-founder",
        "technical advisor",
        "partnerships",
        "speaking engagements",
        "collaboration",
        "consulting services",
        "software development",
    ],
    openGraph: {
        title: "Contact - Andy Nadal",
        description:
            "Get in touch for consulting, partnerships, speaking engagements, or collaboration opportunities.",
        url: "https://andynadal.com/contact",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Contact - Andy Nadal",
        description:
            "Get in touch for consulting, partnerships, or collaboration opportunities.",
    },
    alternates: {
        canonical: "https://andynadal.com/contact",
    },
};

export { default } from "./contact-client";
