<div align="center">

```
 ██████╗ ██╗   ██╗███████╗    ██████╗ ███████╗██╗   ██╗
██╔════╝ ██║   ██║██╔════╝    ██╔══██╗██╔════╝██║   ██║
██║  ███╗██║   ██║███████╗    ██║  ██║█████╗  ██║   ██║
██║   ██║██║   ██║╚════██║    ██║  ██║██╔══╝  ╚██╗ ██╔╝
╚██████╔╝╚██████╔╝███████║    ██████╔╝███████╗ ╚████╔╝
 ╚═════╝  ╚═════╝ ╚══════╝    ╚═════╝ ╚══════╝  ╚═══╝
```

**Personal portfolio — [gustavo-velasco.vercel.app](https://gustavo-velasco.vercel.app)**

![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=flat-square&logo=vite&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-7C3AED?style=flat-square&logo=framer&logoColor=white)
![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?style=flat-square&logo=vercel&logoColor=white)

</div>

---

## What this is

My personal portfolio. Built from scratch with a focus on creative web interactions — 3D backgrounds, scroll-driven animations, and a type system that actually has some personality. No templates, no component kits doing the heavy lifting.

The goal was to make something that feels closer to what you'd see on Awwwards than a standard dev portfolio, without losing the performance side of things.

---

## Stack

| Layer      | Tech                           |
| ---------- | ------------------------------ |
| Framework  | React 19 + TypeScript          |
| Build tool | Vite 8                         |
| Styling    | Tailwind CSS v4                |
| Animation  | Framer Motion 12               |
| 3D         | Spline (WebGL)                 |
| Deployment | Vercel                         |
| Font       | Diagraph Etc (variable, local) |

---

## Structure

```
src/
├── components/
│   ├── Hero.tsx              # Spline 3D background + title
│   ├── About.tsx             # Scroll-driven text reveal
│   ├── Services.tsx          # Animated accordion
│   ├── MyProjects.tsx        # Hover expand cards
│   ├── Contact.tsx           # Form + marquee footer
│   ├── Navbar.tsx            # Staggered hamburger menu
│   ├── Loader.tsx            # Curtain intro animation
│   ├── GradientText.tsx      # Per-letter weight gradient
│   ├── ScrollIndicator.tsx   # Minimal scroll prompt
│   └── CircularText.tsx      # SVG circular typography
├── index.css                 # Global styles + font faces
└── App.tsx                   # Layout + z-index stacking
public/
├── fonts/                    # Diagraph Etc (9 weights)
├── scene.splinecode          # 3D scene file
└── pfp.png                   # Profile photo
```

---

## A few things worth noting

**The z-index stacking** in `App.tsx` is intentional. Hero sits at `z-10`, content sections at `z-20`, Contact is `position: fixed` at `z-0` — so sections slide over it as you scroll down and reveal it at the bottom, like lifting a curtain.

**The Spline chunk** is around 4.5MB after build. That's the cost of WebGL in the browser. It's lazy-loaded so it doesn't block the initial render, and Vercel's CDN handles caching after the first visit.

**GradientText** splits each character into a `span` with an incrementally heavier `font-weight`, pulled from the 9-weight range of Diagraph Etc. The `whileInView` animation runs once when the element enters the viewport.

**The scroll reveal in About** uses `useScroll` + `useTransform` from Framer Motion. The section is `400vh` tall with the content `sticky top-0`, so paragraphs animate from `rgb(60,60,60)` to white as you scroll through.

---

## Running locally

```bash
git clone https://github.com/ggvelasco/gusdev.git
cd gusdev
npm install
npm run dev
```

Node 22+ recommended. If you're on Windows, run this inside WSL — the Rolldown native bindings don't resolve correctly from `/mnt/c/`.

---

## Build

```bash
npm run build
```

Chunks are split manually in `vite.config.ts`:

```ts
manualChunks(id) {
  if (id.includes('@splinetool')) return 'spline'
  if (id.includes('framer-motion')) return 'framer'
  if (id.includes('react-dom') || id.includes('react/')) return 'react'
}
```

This keeps the Spline bundle isolated so the browser can cache it separately.

---

## What's next

**Custom domain** — picking up a `.dev` or `.com` to replace the Vercel subdomain.

**Contact form with Resend** — the form UI is done, just needs the API route wired up. Plan is a simple serverless function that forwards submissions to email via Resend.

**Career timeline section** — a visual walkthrough of the path so far: self-taught, internship, first shipped products. Probably scroll-driven to match the rest of the site.

---

## License

The code is MIT. The font (Diagraph Etc) is licensed separately — don't redistribute it.

---

<div align="center">

Built by [Gustavo Velasco](https://gustavo-velasco.vercel.app) · [LinkedIn](https://linkedin.com/in/ggvelasco) · [GitHub](https://github.com/ggvelasco)

</div>
