declare module "@tryghost/content-api" {
    import type { GhostPost } from "@/types/ghost";

    interface GhostAPIOptions {
        url: string;
        key: string;
        version: string;
    }

    interface BrowseOptions {
        limit?: string | number;
        include?: string | string[];
        filter?: string;
        page?: number;
    }

    interface ReadOptions {
        include?: string | string[];
    }

    interface PostsAPI {
        browse(options?: BrowseOptions): Promise<GhostPost[]>;
        read(
            data: { slug: string } | { id: string },
            options?: ReadOptions
        ): Promise<GhostPost>;
    }

    class GhostContentAPI {
        constructor(options: GhostAPIOptions);
        posts: PostsAPI;
    }

    export = GhostContentAPI;
}
