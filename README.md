# Recipe Remix

A lightweight digital pantry tracker that matches your ingredients to recipes, highlights missing items, and filters by meal type, prep time, and calories.

## Run Locally

npm install
npm run dev
npm run build

The app uses Vite and HashRouter, which ensures client‑side routing works correctly on GitHub Pages.

Local dev server runs at:

http://localhost:5173

## Create a Production Build:

npm run build

## Deploy to GitHub Pages

This project is configured for deployment using the gh-pages package.

1. Install the deploy tool (only needed once)

npm install gh-pages --save-dev

2. Ensure your vite.config.ts includes the correct base

If your site is hosted at:
https://judithliem.com/recipe-remix/

then your config must include:

export default defineConfig({
  base: "/recipe-remix/",
  plugins: [react()]
});

3. Add deploy scripts to package.json

"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "deploy": "gh-pages -d dist"
}

4. Build and deploy

npm run build
npm run deploy

This publishes the contents of dist/ to the gh-pages branch, which GitHub Pages serves automatically.

## Routing

The app uses:

React Router

HashRouter (required for GitHub Pages)

This avoids 404 errors when refreshing or deep‑linking to routes.

## Features

Pantry ingredient tracking

Add/remove ingredients

Recipe matching engine (3+ ingredient match)

Missing ingredient alerts

Filters: meal type, prep time, calories

Recipe detail view

GitHub Pages‑friendly routing

## Tech Stack

React + TypeScript

Vite

React Router

Context API

gh-pages for deployment



