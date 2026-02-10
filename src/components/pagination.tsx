"use client";

import Link from "next/link";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    basePath?: string;
}

export function Pagination({
    currentPage,
    totalPages,
    basePath = "/blog",
}: PaginationProps) {
    if (totalPages <= 1) {
        return null;
    }

    const pages: (number | string)[] = [];
    const showEllipsis = totalPages > 7;

    if (showEllipsis) {
        // Show first page
        pages.push(1);

        // Show ellipsis and nearby pages
        if (currentPage > 3) {
            pages.push("...");
        }

        // Show pages around current page
        for (
            let i = Math.max(2, currentPage - 1);
            i <= Math.min(totalPages - 1, currentPage + 1);
            i++
        ) {
            pages.push(i);
        }

        // Show ellipsis before last page
        if (currentPage < totalPages - 2) {
            pages.push("...");
        }

        // Show last page
        pages.push(totalPages);
    } else {
        // Show all pages
        for (let i = 1; i <= totalPages; i++) {
            pages.push(i);
        }
    }

    return (
        <nav
            className="flex items-center justify-center gap-2 mt-12"
            aria-label="Pagination"
        >
            {/* Previous Button */}
            {currentPage > 1 ? (
                <Link
                    href={
                        currentPage === 2
                            ? basePath
                            : `${basePath}?page=${currentPage - 1}`
                    }
                    className="px-4 py-2 rounded-lg bg-background border border-foreground/10 hover:border-foreground/20 transition-colors text-sm font-medium"
                    aria-label="Previous page"
                >
                    ← Previous
                </Link>
            ) : (
                <span className="px-4 py-2 rounded-lg bg-background border border-foreground/5 text-foreground/30 text-sm font-medium cursor-not-allowed">
                    ← Previous
                </span>
            )}

            {/* Page Numbers */}
            <div className="flex items-center gap-1">
                {pages.map((page, index) => {
                    if (page === "...") {
                        return (
                            <span
                                key={`ellipsis-${index}`}
                                className="px-3 py-2 text-foreground/50"
                            >
                                ...
                            </span>
                        );
                    }

                    const pageNumber = page as number;
                    const isCurrentPage = pageNumber === currentPage;

                    return (
                        <Link
                            key={pageNumber}
                            href={
                                pageNumber === 1
                                    ? basePath
                                    : `${basePath}?page=${pageNumber}`
                            }
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                                isCurrentPage
                                    ? "bg-green-600 text-white"
                                    : "bg-background border border-foreground/10 hover:border-foreground/20"
                            }`}
                            aria-label={`Page ${pageNumber}`}
                            aria-current={isCurrentPage ? "page" : undefined}
                        >
                            {pageNumber}
                        </Link>
                    );
                })}
            </div>

            {/* Next Button */}
            {currentPage < totalPages ? (
                <Link
                    href={`${basePath}?page=${currentPage + 1}`}
                    className="px-4 py-2 rounded-lg bg-background border border-foreground/10 hover:border-foreground/20 transition-colors text-sm font-medium"
                    aria-label="Next page"
                >
                    Next →
                </Link>
            ) : (
                <span className="px-4 py-2 rounded-lg bg-background border border-foreground/5 text-foreground/30 text-sm font-medium cursor-not-allowed">
                    Next →
                </span>
            )}
        </nav>
    );
}
