declare module "@tryghost/content-api" {
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
        browse(options?: BrowseOptions): Promise<unknown[]>;
        read(
            data: { slug: string } | { id: string },
            options?: ReadOptions
        ): Promise<unknown>;
    }

    class GhostContentAPI {
        constructor(options: GhostAPIOptions);
        posts: PostsAPI;
    }

    export = GhostContentAPI;
}
