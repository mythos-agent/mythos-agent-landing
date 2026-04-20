# mythos-agent-landing

Marketing site for [mythos-agent](https://github.com/mythos-agent/mythos-agent) — AI code review for application security. Lives at **[mythos-agent.com](https://mythos-agent.com)**.

## Stack

- **[Astro 6](https://astro.build)** — SSG, file routing, zero JS by default
- **[Tailwind CSS v4](https://tailwindcss.com)** — design tokens via CSS variables
- **[Fontsource](https://fontsource.org)** — self-hosted Inter + Geist Mono
- **[Iconify Lucide](https://lucide.dev)** — icon set via `astro-icon`
- **[Vercel](https://vercel.com)** — hosting + PR preview deploys

## Develop

```bash
pnpm install
pnpm dev          # http://localhost:4321
pnpm check        # astro type-check
pnpm build        # produces ./dist
pnpm preview      # serve built site
```

Node >= 22.12.0, pnpm 10.x.

## Brand tokens

Palette, typography, and Cerby mascot usage rules live in the sphinx-agent repo at [`BRAND.md`](https://github.com/mythos-agent/mythos-agent/blob/main/BRAND.md). Runtime constants are mirrored here in `src/styles/tokens.css`. Do not invent hex values — add them to `BRAND.md` upstream first.

## Structure

```
src/
|-- assets/        # Cerby SVG suite (mirror of sphinx-agent/assets)
|-- components/    # One .astro per section + small UI primitives
|-- content/       # Structured data (scanners.json, MDX content)
|-- layouts/       # BaseLayout with no-FOUC theme init, OG, JSON-LD
|-- lib/           # site.ts constants - single source for URLs/stats
|-- pages/         # index.astro (one-pager), privacy, security
`-- styles/        # tokens.css - brand + semantic theme variables
```

## Replacing the demo mock

The `DemoEmbed` component currently renders a static terminal mock. When the real GIF is recorded per [sphinx-agent/docs/DEMO-SCRIPT.md](https://github.com/mythos-agent/mythos-agent/blob/main/docs/DEMO-SCRIPT.md) (ScreenToGif or VHS), drop it at `public/demo.gif` and edit `src/components/DemoEmbed.astro` to swap the `<div class="terminal">` block for an `<img>` tag pointing at `/demo.gif`.

## Deployment

Production deploys from `main` via Vercel. `vercel.json` sets security headers (HSTS, CSP, Referrer-Policy, Permissions-Policy) and short-URL redirects (`/github`, `/npm`, `/sponsor`, `/vision`, `/roadmap`, `/docs`).

DNS at the registrar: apex `A` record to Vercel; `www` as `CNAME` to the apex.

## License

MIT. See [LICENSE](LICENSE).
