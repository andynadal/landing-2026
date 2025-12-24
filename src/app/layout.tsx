import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Andy Nadal - Entrepreneur & Developer",
  description: "Personal landing page showcasing entrepreneur and developer experience",
  keywords: ["entrepreneur", "developer", "software engineer", "startup"],
  authors: [{ name: "Andy Nadal" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://andynadal.com",
    title: "Andy Nadal - Entrepreneur & Developer",
    description: "Personal landing page showcasing entrepreneur and developer experience",
    siteName: "Andy Nadal",
  },
  twitter: {
    card: "summary_large_image",
    title: "Andy Nadal - Entrepreneur & Developer",
    description: "Personal landing page showcasing entrepreneur and developer experience",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
