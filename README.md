# Ponn Babu R — iOS Developer Portfolio

Apple-inspired personal portfolio built with **React 18 + TypeScript + Vite**, **Tailwind CSS**, **Framer Motion** and **Lucide** icons.

## Run locally

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build → dist/
npm run preview   # serve the production build
```

`dist/` is a fully static site — deploy it to Vercel, Netlify, GitHub Pages, Cloudflare Pages or any static host.

## Editing content

All text lives in **`src/data/profile.ts`** (taken from the résumé). Change it there and every section updates.

- **LinkedIn / GitHub** — not on the résumé, so they're hidden. Add URLs to `profile.social` and icons appear in Contact and the footer.
- **Apps (“Applications I’ve Built”)** — edit `companies` in `profile.ts`. Each app has its App Store link, icon, screenshots, listing-based features and your contribution.
- **Résumé** — replace `public/Ponn_Babu_Resume.pdf`.
- **Photo** — replace `public/profile.webp` and `public/profile.jpg`.

## Features

Loading animation · sticky glass navbar with active-section pill and scroll progress · dark/light toggle (remembered) · animated hero with 3D-tilt portrait · interactive bento skill cards · scroll-linked experience timeline · project cards with shared-element detail modal · validated contact form (opens the visitor's mail app — no backend needed) · copy-email button · SEO meta, Open Graph and JSON-LD Person schema · custom favicon · keyboard & screen-reader friendly, respects Reduce Motion.

App icons and screenshots are loaded from Apple's App Store CDN (`is1-ssl.mzstatic.com`) using the URLs from each app's public listing. If an image ever fails to load, a branded gradient placeholder is shown instead. To self-host them, download the URLs into `public/apps/` and point `icon` / `screenshots` at the local paths.

## Structure

```
src/
  data/profile.ts         ← all content
  components/             ← one component per section + shared UI
  hooks/                  ← useTheme, useActiveSection
public/                   ← photo, résumé PDF, favicon, robots.txt
```
