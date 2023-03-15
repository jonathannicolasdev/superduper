# 🐈 Super Duper Gallery Website

# Introduction

Super Duper Gallery is a web app to manage the artworks gallery.

This repo made using Rewinds, a Remix Tailwind Stack with Tailwind CSS family of libraries, interactive components, and the TypeScript ecosystem. The core stack includes: TypeScript, Remix & Remix Auth, React, Tailwind CSS, Radix UI, Prisma ORM, MySQL on PlanetScale, and Vercel.

Check out the code and the demo:

- [jonathannicolasdev/superduper](https://github.com/jonathannicolasdev/superduper)
- [superduper.vercel.app](https://superdupergallery.vercel.app)
- [superdupergallery.com](https://superdupergallery.com)

# Tech Stack

> ⚠️ Some setup might haven't done yet or still in progress.

- [TypeScript](https://typescriptlang.org)
- [React](https://beta.reactjs.org)
- [Remix](https://remix.run/docs)
  - [Remix Auth](https://github.com/sergiodxa/remix-auth)
- [Tailwind CSS](https://tailwindcss.com)
  - [Radix UI](https://radix-ui.com)
  - [Fontsource](https://fontsource.org)
- [Prisma ORM](https://prisma.io)
- [PlanetScale](https://planetscale.com)
- [Vercel](https://vercel.com)

More details and references can also be checked from [`catamyst/stack`](https://a.catamyst.com/stack)

# Development

## Install Dependencies

Before running your Remix app locally, make sure your project's local dependencies are installed using your preferred package manager agent:

```sh
npm i
yarn i
pnpm i
# just keep in mind about the existing lock file
```

Or if using [`ni`](https://github.com/antfu/ni) which can autodetect the agent:

```sh
pnpm add -g @antfu/ni  # install once
ni                     # can auto choose npm/yarn/pnpm
```

## Setup Environment Variables

Use plain `.env` file for local development:

```sh
cp -i .env.example .env
# `-i` or `--interactive` will prompt before overwrite
# then edit `.env` as you prefer
```

Or use [Doppler](htts://doppler.com) CLI to manage them:

```sh
doppler secrets download --no-file --format env > .env
```

> ⚠️ Make sure to setup the environment variables here, on Vercel, or on your preferred deployment target. Otherwise the app will break on production. That's why Doppler is recommended and there are some preset strings in the `.env.example` which you can copy directly.

## Run Development Server

Afterwards, start the Remix development server like so:

```sh
nr dev
```

Open up [localhost:3000](http://localhost:3000) and you should be ready to go!

If you're used to using the `vercel dev` command provided by [Vercel CLI](https://vercel.com/cli) instead, you can also use that, but it's not needed.

# Deployment

## Vercel

As this repo was made after having run the `create-remix` command and selected "Vercel" as a deployment target, you only need to [import your Git repository](https://vercel.com/new) into Vercel, and it will be deployed.

If you'd like to avoid using a Git repository, you can also deploy the directory by running [Vercel CLI](https://vercel.com/cli):

```sh
ni -g vercel
vercel
```

It is generally recommended to use a Git repository, because future commits will then automatically be deployed by Vercel, through its [Git Integration](https://vercel.com/docs/concepts/git).

## References

- [Bulletproof React - A simple, scalable, and powerful architecture for building production ready React applications](https://github.com/alan2207/bulletproof-react)
- [Why we use Tailwind CSS as our primary framework | Clean Commit](https://cleancommit.io/blog/why-we-use-tailwind-css-as-our-primary-framework)
- [An Honest Look at Tailwind as an API for CSS | thoughtbot, inc.](https://thoughtbot.com/blog/an-honest-look-at-tailwind-as-an-api-for-css)
- [Styling Best Practices I Use With Tailwind CSS | theodorusclarence.com](https://theodorusclarence.com/blog/tailwindcss-best-practice)
- [Fix roperty does not exist on type 'never' in TypeScript | bobbyhadz](https://bobbyhadz.com/blog/typescript-property-does-not-exist-on-type-never)
