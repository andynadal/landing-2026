import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { ThemeProvider } from "@/components/theme-provider";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { JsonLd } from "@/components/json-ld";

import "./globals.css";

export const metadata: Metadata = {
    metadataBase: new URL("https://andynadal.com"),
    title: {
        default: "Andy Nadal - Entrepreneur & Developer",
        template: "%s | Andy Nadal",
    },
    description:
        "Andy Nadal is an entrepreneur, software engineer, and startup founder. Founder of Pausa, former Head of Technology at RUUT. Expert in product development, fintech, and AI-powered applications.",
    keywords: [
        "Andy Nadal",
        "entrepreneur",
        "software engineer",
        "developer",
        "startup founder",
        "Pausa",
        "RUUT",
        "fintech",
        "product development",
        "AI applications",
        "mobile apps",
        "web development",
        "technical leadership",
        "Mexico",
        "technology",
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
        title: "Andy Nadal - Entrepreneur & Developer",
        description:
            "Andy Nadal is an entrepreneur, software engineer, and startup founder. Founder of Pausa, former Head of Technology at RUUT. Expert in product development, fintech, and AI-powered applications.",
        siteName: "Andy Nadal",
    },
    twitter: {
        card: "summary_large_image",
        site: "@andynadal",
        creator: "@andynadal",
        title: "Andy Nadal - Entrepreneur & Developer",
        description:
            "Andy Nadal is an entrepreneur, software engineer, and startup founder. Founder of Pausa, former Head of Technology at RUUT.",
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
                </ThemeProvider>
                <Analytics />
                <SpeedInsights />
            </body>
        </html>
    );
}
