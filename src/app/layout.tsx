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
        default:
            "Andy Nadal - CEO & Co-Founder of Pausa | Helping People Manage Stress & Anxiety",
        template: "%s | Andy Nadal",
    },
    description:
        "Andy Nadal is CEO & Co-Founder of Pausa, a guided breathwork app helping people manage stress, anxiety, and emotional overwhelm. Founder-level product and engineering leader building wellness, fintech, and AI-assisted software products. Former CTO at RUUT (500 Global-backed fintech).",
    keywords: [
        "Andy Nadal",
        "CEO",
        "Co-Founder",
        "Pausa CEO",
        "entrepreneur",
        "founder",
        "startup founder",
        "product builder",
        "building products",
        "compelling products",
        "breath work",
        "breathwork",
        "breathing techniques",
        "breathing exercises",
        "guided breathing",
        "Pausa founder",
        "Pausa",
        "breathing app",
        "stress relief",
        "stress management",
        "anxiety management",
        "anxiety relief",
        "emotional overwhelm",
        "nervous system regulation",
        "mental health entrepreneur",
        "wellness founder",
        "wellness app",
        "CTO",
        "technical founder",
        "RUUT",
        "RUUT CTO",
        "500 Global",
        "fintech",
        "fintech CTO",
        "product development",
        "startup builder",
        "zero to one",
        "entrepreneurship",
        "investor pitch",
        "product market fit",
        "Mexico",
        "Aguascalientes",
        "Mexico City",
        "technology entrepreneur",
        "Swift",
        "SwiftUI",
        "Kotlin",
        "iOS development",
        "Android development",
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
        title: "Andy Nadal - CEO & Co-Founder of Pausa | Helping People Manage Stress & Anxiety",
        description:
            "CEO & Co-Founder of Pausa, helping people manage stress, anxiety, and emotional overwhelm through guided breathwork. Founder-level product and engineering leader. Former CTO at RUUT (500 Global-backed fintech).",
        siteName: "Andy Nadal",
        images: [
            {
                url: "https://andynadal.com/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Andy Nadal - CEO & Co-Founder of Pausa",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        site: "@andynadal",
        creator: "@andynadal",
        title: "Andy Nadal - CEO & Co-Founder of Pausa | Helping People Manage Stress & Anxiety",
        description:
            "CEO & Co-Founder of Pausa, helping people manage stress and anxiety through guided breathwork. Former CTO at RUUT (500 Global-backed fintech).",
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
