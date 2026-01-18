import Script from "next/script";

export function JsonLd() {
    const personSchema = {
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Andy Nadal",
        url: "https://andynadal.com",
        jobTitle: "Entrepreneur & Software Engineer",
        description:
            "Entrepreneur, software engineer, and startup founder. Founder of Pausa, former Head of Technology at RUUT.",
        sameAs: [
            "https://linkedin.com/in/andynadal",
            "https://github.com/andynadal",
            "https://twitter.com/andynadal",
        ],
        knowsAbout: [
            "Software Engineering",
            "Entrepreneurship",
            "Product Development",
            "Fintech",
            "AI Applications",
            "Mobile Development",
            "Startup Building",
        ],
        alumniOf: {
            "@type": "Organization",
            name: "RUUT",
        },
        founder: [
            {
                "@type": "Organization",
                name: "Pausa",
                description:
                    "AI-powered productivity and work-life balance platform",
                url: "https://pausaapp.com",
            },
        ],
    };

    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Andy Nadal",
        url: "https://andynadal.com",
        description:
            "Personal website of Andy Nadal - Entrepreneur, software engineer, and startup founder",
        author: {
            "@type": "Person",
            name: "Andy Nadal",
        },
        potentialAction: {
            "@type": "SearchAction",
            target: "https://andynadal.com/blog?search={search_term_string}",
            "query-input": "required name=search_term_string",
        },
    };

    return (
        <>
            <Script
                id="person-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(personSchema),
                }}
            />
            <Script
                id="website-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(websiteSchema),
                }}
            />
        </>
    );
}
