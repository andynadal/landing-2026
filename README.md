# landing-2026

A personal landing page (andynadal.com) that showcases entrepreneur and
developer experience.

## Tech Stack

- **Next.js 15** - React framework with App Router
- **TypeScript 5.7** - Type-safe development with strict mode enabled
- **Tailwind CSS** - Utility-first CSS framework for styling
- **Tailwind Typography** - Beautiful typographic defaults for prose content
- **Aceternity UI** - Modern UI components (framer-motion, clsx, tailwind-merge)
- **next-themes** - Dark mode with light mode toggle
- **React 19** - Latest React with Server Components
- **Ghost CMS** - Headless CMS for blog content

## Features

- ✅ Dark mode first with light mode toggle
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ SEO optimized with metadata, Open Graph, and Twitter Cards
- ✅ Server-Side Rendering (SSR)
- ✅ Incremental Static Regeneration (ISR) for blog posts
- ✅ Dynamic sitemap generation including blog posts
- ✅ Blog integration with Ghost CMS
- ✅ VSCode debugger integration
- ✅ VSCode tasks for dev, build, lint, type-check
- ✅ Modern TypeScript configuration
- ✅ ESLint with Next.js config

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Ghost CMS instance (optional for blog functionality)

### Installation

```bash
npm install
```

### Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```bash
# Ghost CMS Configuration (required for blog)
# These environment variables are server-side only and never exposed to the client
GHOST_CONTENT_URL=https://your-ghost-site.com
GHOST_CONTENT_API_KEY=your_content_api_key
```

**Getting Ghost API Credentials:**

1. Go to your Ghost Admin panel
2. Navigate to Settings → Integrations
3. Click "Add custom integration"
4. Copy the Content API URL and Content API Key
5. Add them to your `.env.local` file

**Note:** The blog will gracefully handle missing credentials and show an empty
state if Ghost is not configured.

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

Build the production application:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

### Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Auto-fix ESLint issues
- `npm run format` - Format code with Prettier
- `npm run type-check` - Run TypeScript type checking

## VSCode Integration

### Debugging

This project includes VSCode debugging configurations:

- **Next.js: debug server-side** - Debug server-side code
- **Next.js: debug client-side** - Debug client-side code in Chrome
- **Next.js: debug full stack** - Debug both server and client

Press `F5` or use the Debug panel to start debugging.

### Tasks

Available VSCode tasks (Ctrl/Cmd + Shift + P → "Tasks: Run Task"):

- **dev** - Start development server
- **build** - Build production bundle
- **lint** - Run ESLint
- **type-check** - Run TypeScript type checking

### Recommended Extensions

- ESLint
- Prettier - Code formatter
- Tailwind CSS IntelliSense
- TypeScript and JavaScript Language Features

## Project Structure

```
├── .vscode/              # VSCode configuration
│   ├── launch.json       # Debug configurations
│   ├── tasks.json        # Task definitions
│   ├── settings.json     # Editor settings
│   └── extensions.json   # Recommended extensions
├── src/
│   ├── app/              # Next.js App Router
│   │   ├── blog/         # Blog pages
│   │   │   ├── [slug]/   # Dynamic blog post pages
│   │   │   └── page.tsx  # Blog listing page
│   │   ├── layout.tsx    # Root layout with theme provider
│   │   ├── page.tsx      # Home page
│   │   ├── sitemap.ts    # Dynamic sitemap generation
│   │   ├── robots.ts     # Robots.txt generation
│   │   └── globals.css   # Global styles
│   ├── components/       # React components
│   │   ├── blog-list-client.tsx
│   │   ├── blog-post-client.tsx
│   │   ├── hero.tsx      # Hero section
│   │   ├── theme-provider.tsx
│   │   └── theme-toggle.tsx
│   ├── lib/              # Utility functions
│   │   ├── ghost.ts      # Ghost CMS API client
│   │   └── utils.ts      # cn() helper for class merging
│   └── types/            # TypeScript type definitions
│       ├── ghost.ts      # Ghost post types
│       └── tryghost__content-api.d.ts
├── public/               # Static assets
├── .env.example          # Environment variables template
├── next.config.ts        # Next.js configuration
├── tailwind.config.ts    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Dependencies and scripts
```

## Blog Integration

The blog is powered by Ghost CMS with the following features:

### SSR & ISR

- **Server-Side Rendering**: Blog posts are rendered server-side for optimal SEO
- **Incremental Static Regeneration**: Content is cached and revalidated every
  24 hours
- **Build-time Generation**: All blog posts are pre-rendered at build time using
  `generateStaticParams`

### SEO Optimization

- Full metadata support (title, description, keywords)
- Open Graph tags for social media sharing
- Twitter Card support
- Custom meta tags from Ghost (og_title, og_description, etc.)
- Dynamic sitemap with all blog post URLs
- Robots.txt for search engine crawling

### Content Styling

- Blog post HTML content is styled with Tailwind Typography
- Custom prose styles for dark/light mode support
- Responsive images with Next.js Image optimization
- Feature images with optional captions
- Reading time estimates

### Architecture

The Ghost API is accessed **server-side only**:

- API credentials never exposed to the client
- All fetching happens during SSR/SSG
- Error handling with graceful degradation
- Type-safe with full TypeScript support

## License

MIT License - see LICENSE file for details
