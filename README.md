# Jinyoung Hong — Portfolio

Personal portfolio built with [Astro](https://astro.build) + Tailwind CSS, deployed to GitHub Pages.

- Bilingual: `/ko/` (default via system-language detection) and `/en/`
- Content lives in `src/i18n/ko.ts` and `src/i18n/en.ts`

## Commands

| Command           | Action                                       |
| :----------------- | :-------------------------------------------- |
| `npm install`       | Install dependencies                          |
| `npm run dev`        | Start local dev server at `localhost:4321`    |
| `npm run build`      | Build production site to `./dist/`            |
| `npm run preview`    | Preview the production build locally          |
| `npm run astro check`| Type-check `.astro` files                     |

## Deployment

Pushes to `main` trigger `.github/workflows/deploy.yml`, which builds the site and deploys it to GitHub Pages.
