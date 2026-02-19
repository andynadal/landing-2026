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

export interface MinuteVideo {
    id: string;
    account_id: string;
    created_at: string;
    title: string;
    slug: string;
    description: string;
    embed_url: string;
    thumbnail_url: string | null;
    is_short: boolean | null;
    video_site_id: string | null;
    publisher_site: string | null;
}

export interface MinuteVideoApiResponse {
    success: boolean;
    data: {
        videos: MinuteVideo[];
        pagination: MinutePagination;
    };
}
