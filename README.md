# Premium AI Agency Portfolio

A modern, high-performance portfolio website for an AI product studio, built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- **Premium Design**: Dark theme, glassmorphism, and smooth animations.
- **Dynamic Portfolio**: Manually curated case studies merged with live Vercel deployment data.
- **Vercel Integration**: Automatically fetches project status, last updated date, and live URLs.
- **Labs Dashboard**: Internal dashboard to track all experimental projects.
- **Responsive**: Mobile-first design using Tailwind CSS.
- **SEO Optimized**: Meta tags, OpenGraph support, and semantic HTML.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS, Shadcn UI
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel

## Getting Started

### 1. Clone the repository

```bash
git clone <repository-url>
cd ai-agency-site
```

### 2. Install dependencies

```bash
npm install
```

### 3. Environment Setup

To enable the Vercel API integration (for live project status), you need a Vercel Access Token.

1.  Go to your [Vercel Account Settings > Tokens](https://vercel.com/account/tokens).
2.  Create a new token.
3.  Create a `.env.local` file in the root directory:

```bash
touch .env.local
```

4.  Add your token:

```env
VERCEL_TOKEN=your_token_here
```

> **Note**: If you skip this step, the portfolio will still work, but projects will show as "NOT DEPLOYED" and the Labs dashboard will be empty.

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `/app`: Next.js App Router pages.
- `/components`: Reusable UI components.
- `/data`: Static data files (projects, services).
- `/lib`: Utility functions (Vercel API, etc.).
- `/public`: Static assets.

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
