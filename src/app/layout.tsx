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
            "Andy Nadal - Founder of Pausa | Building Products That Matter",
        template: "%s | Andy Nadal",
    },
    description:
        "Andy Nadal is the Founder of Pausa, a guided breathwork app helping people manage stress and anxiety. Building products from 0 to 100K+ users. Former founding team at RUUT (500 Global-backed fintech). Raised capital, built teams, shipped products.",
    keywords: [
        "Andy Nadal",
        "Founder",
        "Pausa Founder",
        "entrepreneur",
        "startup founder",
        "product builder",
        "building products",
        "breath work",
        "breathwork",
        "breathing app",
        "stress relief",
        "stress management",
        "anxiety management",
        "wellness founder",
        "mental health entrepreneur",
        "RUUT",
        "founding team",
        "500 Global",
        "fintech founder",
        "product development",
        "zero to one",
        "fundraising",
        "startup building",
        "Mexico",
        "Aguascalientes",
        "Mexico City",
        "100K users",
        "product market fit",
        "team building",
        "scaling products",
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
        title: "Andy Nadal - Founder of Pausa | Building Products That Matter",
        description:
            "Founder of Pausa, helping people manage stress and anxiety through guided breathwork. Built products from 0 to 100K+ users. Former founding team at RUUT (500 Global-backed fintech).",
        siteName: "Andy Nadal",
        images: [
            {
                url: "https://andynadal.com/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Andy Nadal - Founder of Pausa",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        site: "@andynadal",
        creator: "@andynadal",
        title: "Andy Nadal - Founder of Pausa | Building Products That Matter",
        description:
            "Founder of Pausa. Built products from 0 to 100K+ users. Former founding team at RUUT (500 Global-backed fintech).",
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
