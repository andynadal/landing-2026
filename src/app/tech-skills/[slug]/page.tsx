import type { Metadata } from "next";
import { notFound } from "next/navigation";

import TechSkillDetailClient from "./tech-skill-detail-client";

import { getTechSkillBySlug, techSkills } from "@/lib/tech-skills";

// Generate static params for all tech skills
export async function generateStaticParams() {
    return techSkills.map((skill) => ({
        slug: skill.slug,
    }));
}

// Generate metadata for each tech skill
export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const skill = getTechSkillBySlug(slug);

    if (!skill) {
        return {
            title: "Skill Not Found - Andy Nadal",
        };
    }

    return {
        title: `${skill.title} - Technical Skills`,
        description: skill.description,
        keywords: [
            skill.title,
            ...(skill.technologies || []),
            skill.category,
            "technical skills",
            "Andy Nadal",
        ],
        openGraph: {
            type: "article",
            title: skill.title,
            description: skill.description,
            url: `https://andynadal.com/tech-skills/${slug}`,
        },
        twitter: {
            card: "summary_large_image",
            title: skill.title,
            description: skill.description,
        },
        alternates: {
            canonical: `https://andynadal.com/tech-skills/${slug}`,
        },
    };
}

export default async function TechSkillDetailPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const skill = getTechSkillBySlug(slug);

    if (!skill) {
        notFound();
    }

    return <TechSkillDetailClient skill={skill} />;
}
