# Next.js - CMS - WEB - API - Prisma

This project implement a fullstack app in TypeScript with Next.js using React (frontend), Next.js API routes and Prisma Client (backend). Also use PostgreSQL database and implement a seed to start develop faster. 

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.


## Makes migrations

Create a migrations running the command below:

```bash
npx prisma migrate dev --name migration-name
```
