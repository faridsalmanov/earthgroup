# Earth Group MMC — Corporate Website

Official website for **Earth Group MMC**, a professional event management and venue services company based in Azerbaijan.

## Tech Stack

- **Next.js 16** — App Router, static export
- **TypeScript**
- **Tailwind CSS v3** — custom brand color palette
- **i18next** — multilingual support (AZ / EN / RU)
- **EmailJS** — contact form email delivery

## Pages

| Route | Page |
|-------|------|
| `/` | Home |
| `/about` | About |
| `/services` | Services |
| `/projects` | Projects |
| `/contact` | Contact |
| `/team` | Team |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Build

```bash
npm run build
```

Outputs a fully static site to the `out/` folder — ready to deploy on any static host (Vercel, Netlify, GitHub Pages, etc.).

## Contact Form Setup

The contact form uses [EmailJS](https://www.emailjs.com/) to send messages to `info@earthgroup.az`.  
Fill in the three constants in [app/contact/page.tsx](app/contact/page.tsx):

```ts
const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY';
```
