# stanley_tejakusuma

Personal portfolio — a tabbed one-pager. Data · statistics · modeling · the tools that act on it.

Live at [stanleytejakusuma.com](https://stanleytejakusuma.com).

## Stack

- [Astro](https://astro.build) (static output, zero-framework islands)
- Hand-written WebGL curl-noise field ([ogl](https://github.com/oframe/ogl)) with light/dark theming
- Terminal-style command bar — type `about` / `projects` to switch tabs
- JetBrains Mono · Inter · Space Grotesk, self-hosted

## Develop

```sh
npm install
npm run dev       # localhost:4321
npm run build     # static output in dist/
npm run preview   # serve the production build
```

## Notes

- No page scroll on desktop: panels scroll internally; mobile reflows to natural scrolling.
- `prefers-reduced-motion` disables the decrypt animation and field motion.
