export interface MinuteArticle {
    id: string;
    published_at: string;
    title: string;
    html_path: string;
    slug: string;
    author: string;
    languages: string[];
    audience: string[];
    account_id: string;
    content: string;
}

export interface MinutePagination {
    page: number;
    page_size: number;
    total: number;
    total_pages: number;
}

export interface MinuteApiResponse {
    success: boolean;
    data: {
        articles: MinuteArticle[];
        pagination: MinutePagination;
    };
}
