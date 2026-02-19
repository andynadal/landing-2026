import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { ThemeProvider } from "@/components/theme-provider";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { JsonLd } from "@/components/json-ld";
import CalBooking from "@/components/cal-booking";

import "./globals.css";

export const metadata: Metadata = {
    metadataBase: new URL("https://andynadal.com"),
    title: {
        default: "Andy Nadal - Entrepreneur, Founder & Product Builder",
        template: "%s | Andy Nadal",
    },
    description:
        "Andy Nadal is a serial entrepreneur and founder building compelling products that matter. Creator of Pausa, a breakthrough breathing app for stress relief. Expert in breath work, product development, and building startups from zero to one. Former Head of Technology at RUUT.",
    keywords: [
        "Andy Nadal",
        "entrepreneur",
        "founder",
        "startup founder",
        "product builder",
        "building products",
        "compelling products",
        "breath work",
        "breathing techniques",
        "breathing exercises",
        "Pausa founder",
        "Pausa",
        "breathing app",
        "stress relief",
        "anxiety management",
        "nervous system regulation",
        "mental health entrepreneur",
        "wellness founder",
        "software engineer",
        "technical founder",
        "RUUT",
        "fintech",
        "product development",
        "startup builder",
        "zero to one",
        "entrepreneurship",
        "investor pitch",
        "product market fit",
        "Mexico",
        "technology entrepreneur",
    ],
    authors: [{ name: "Andy Nadal", url: "https://andynadal.com" }],
    creator: "Andy Nadal",
    publisher: "Andy Nadal",
    alternates: {
        canonical: "https://andynadal.com",
        languages: {
            "en-US": "https://andynadal.com",
            "es-MX": "https://andynadal.com",
        },
    },
    openGraph: {
        type: "website",
        locale: "en_US",
        alternateLocale: ["es_MX"],
        url: "https://andynadal.com",
        title: "Andy Nadal - Entrepreneur, Founder & Product Builder",
        description:
            "Serial entrepreneur building compelling products. Creator of Pausa, a breakthrough breathing app for stress relief. Expert in breath work, product development, and building startups from zero to one.",
        siteName: "Andy Nadal",
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
        site: "@andynadal",
        creator: "@andynadal",
        title: "Andy Nadal - Entrepreneur, Founder & Product Builder",
        description:
            "Serial entrepreneur building compelling products. Creator of Pausa, a breakthrough breathing app. Expert in breath work and building startups from zero to one.",
        images: ["https://andynadal.com/og-image.jpg"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    verification: {
        google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <JsonLd />
            </head>
            <body className="font-sans antialiased">
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem={false}
                    disableTransitionOnChange
                >
                    <Navigation />
                    {children}
                    <Footer />
                    <CalBooking />
                </ThemeProvider>
                <Analytics />
                <SpeedInsights />
            </body>
        </html>
    );
}
