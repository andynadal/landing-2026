# landing-2026

A personal landing page (andynadal.com) that showcases entrepreneur and
developer experience.

## Tech Stack

- **Next.js 15** - React framework with App Router
- **TypeScript 5.7** - Type-safe development with strict mode enabled
- **Tailwind CSS** - Utility-first CSS framework for styling
- **Aceternity UI** - Modern UI components (framer-motion, clsx, tailwind-merge)
- **next-themes** - Dark mode with light mode toggle
- **React 19** - Latest React with Server Components

## Features

- ✅ Dark mode first with light mode toggle
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ SEO optimized with metadata
- ✅ Server-Side Rendering (SSR)
- ✅ VSCode debugger integration
- ✅ VSCode tasks for dev, build, lint, type-check
- ✅ Modern TypeScript configuration
- ✅ ESLint with Next.js config
- ✅ Placeholder content structure ready for future updates

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

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
│   │   ├── layout.tsx    # Root layout with theme provider
│   │   ├── page.tsx      # Home page
│   │   └── globals.css   # Global styles
│   ├── components/       # React components
│   │   ├── hero.tsx      # Hero section
│   │   ├── theme-provider.tsx
│   │   └── theme-toggle.tsx
│   ├── lib/              # Utility functions
│   │   └── utils.ts      # cn() helper for class merging
│   └── types/            # TypeScript type definitions
├── public/               # Static assets
├── next.config.ts        # Next.js configuration
├── tailwind.config.ts    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Dependencies and scripts
```

## Future Development

This repository is prepared for future issues that will add:

- Personal bio and experience section
- Portfolio/projects showcase
- Skills and technologies
- Contact form
- Blog integration
- Analytics
- Additional Aceternity UI components

## License

MIT License - see LICENSE file for details
