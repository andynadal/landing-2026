import Link from "next/link";

export default function NotFound() {
    return (
        <main className="min-h-screen flex items-center justify-center px-4">
            <div className="text-center max-w-2xl">
                <h1 className="font-display text-6xl md:text-8xl font-bold text-foreground mb-6">
                    404
                </h1>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                    Skill Not Found
                </h2>
                <p className="font-serif text-xl text-foreground/70 mb-12">
                    Sorry, we couldn't find the technical skill you're looking
                    for.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/tech-skills"
                        className="inline-flex items-center px-8 py-4 rounded-lg bg-accent hover:bg-accent-light text-background font-semibold transition-all duration-300"
                    >
                        View All Skills
                    </Link>
                    <Link
                        href="/"
                        className="inline-flex items-center px-8 py-4 rounded-lg bg-foreground/5 hover:bg-foreground/10 text-foreground font-semibold transition-all duration-300"
                    >
                        Go Home
                    </Link>
                </div>
            </div>
        </main>
    );
}
