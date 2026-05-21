import type { Config } from "tailwindcss";

export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                accent: "var(--accent)",
                "accent-light": "var(--accent-light)",
                muted: "var(--muted)",
                border: "var(--border)",
            },
            fontFamily: {
                serif: ["Georgia", "Garamond", "Times New Roman", "serif"],
                display: ["Georgia", "Garamond", "Times New Roman", "serif"],
            },
        },
    },
    plugins: [require("@tailwindcss/typography")],
} satisfies Config;
