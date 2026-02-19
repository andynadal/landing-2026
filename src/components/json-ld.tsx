import Script from "next/script";

export function JsonLd() {
    const personSchema = {
        "@context": "https://schema.org",
        "@type": ["Person", "Entrepreneur"],
        name: "Andy Nadal",
        url: "https://andynadal.com",
        jobTitle: "Founder & Entrepreneur",
        description:
            "Serial entrepreneur and founder building compelling products. Creator of Pausa, a breakthrough breathing app for stress relief and anxiety management. Expert in breath work, breathing techniques, product development, and building startups from zero to one.",
        sameAs: [
            "https://linkedin.com/in/andynadal",
            "https://github.com/andynadal",
            "https://twitter.com/andynadal",
        ],
        knowsAbout: [
            "Entrepreneurship",
            "Building Products",
            "Product Development",
            "Breath Work",
            "Breathing Techniques",
            "Stress Management",
            "Mental Health Technology",
            "Startup Building",
            "Zero to One",
            "Product Market Fit",
            "Software Engineering",
            "Fintech",
            "Wellness Technology",
            "Nervous System Regulation",
        ],
        hasOccupation: {
            "@type": "Occupation",
            name: "Entrepreneur",
            occupationalCategory: "Startup Founder",
            skills: [
                "Product Development",
                "Entrepreneurship",
                "Breath Work",
                "Building Compelling Products",
                "Technical Leadership",
            ],
        },
        alumniOf: {
            "@type": "Organization",
            name: "RUUT",
        },
        founder: [
            {
                "@type": "Organization",
                name: "Pausa",
                description:
                    "A breakthrough breathing app for people who don't meditate. Helps manage stress, anxiety, and nervous system regulation through breath work and breathing techniques.",
                url: "https://pausaapp.com",
                category: "Mental Health & Wellness",
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
