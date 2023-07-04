# Next.js - CMS - WEB - API - Prisma

This project implement a fullstack app in TypeScript with Next.js using React (frontend), Next.js API routes and Prisma Client (backend). Also use PostgreSQL database and implement a seed to start develop faster. 

## Features

- prisma ORM
- NextAuth.js
- React Hook Form with yup schema validation

## Getting Started

First, run the dockerized db with:

```bash
docker compose up -d
```

Then run the project:

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


## Interesting Prisma commands

Create migrations:

```bash
npx prisma migrate dev --name migration-name
```

Run prisma studio

```bash
npx prisma studio
```

## Installed libraries

- `bcryptjs` - A library for hashing and comparing passwords.

## Authentication

I used NextAuth.js to handle the users authentication session at the client and the server side. With this library we can define providers in api/auth/[...nextauht]/route.ts, like Google, Github and many others. I also use json web token to external request and bcrypt to hash the user passwords.

Must install the follow packages:

- bcrypt
- next-auth
- jsonwebtoken

Command to generate secret key and next auth key:

```bash
openssl rand -base64 32
```