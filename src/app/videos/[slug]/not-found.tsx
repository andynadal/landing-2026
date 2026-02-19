import Link from "next/link";

export default function NotFound() {
    return (
        <main className="min-h-screen bg-background pt-20 md:pt-24 flex items-center justify-center">
            <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="text-6xl mb-6">🎥❓</div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    Video Not Found
                </h1>
                <p className="text-xl text-foreground/60 mb-8">
                    The video you&apos;re looking for doesn&apos;t exist or has
                    been removed.
                </p>
                <Link
                    href="/videos"
                    className="inline-flex items-center px-6 py-3 text-sm font-medium rounded-lg bg-green-600 text-white hover:bg-green-700 transition-colors"
                >
                    <svg
                        className="mr-2 w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 19l-7-7 7-7"
                        />
                    </svg>
                    Back to Videos
                </Link>
            </div>
        </main>
    );
}
