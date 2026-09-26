# Teddy Rosen — portfolio

Single-page static site. Next.js (App Router) + TypeScript + Tailwind, deployed on Vercel.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build; run this before pushing to catch errors
```

## Editing text

**All text is in [`content/site.ts`](content/site.ts).** You never need to open a component to change words.

- Every `"[WRITE: ...]"` string is a placeholder. It shows on the page with a yellow dashed outline so nothing unwritten slips through.
- The comment above each placeholder lists the facts to cover. It's a checklist, not text to paste.
- Replace the whole string, brackets included.
- Paragraphs: put a blank line between them. Backticks make this easy:
  ```ts
  whatIBuilt: `First paragraph.

  Second paragraph.`,
  ```
- See what's left: `grep -n "\[WRITE" content/site.ts`

What's in the file, top to bottom:

| Section | What it controls |
| --- | --- |
| `site` | Name, tagline, intro, link-preview description, optional preview image, site URL |
| `built` | Project cards, **in the order listed** |
| `notBuilt` | The quieter "Not built yet" cards. `hidden: true` hides one (the third slot starts hidden) |
| `links` | Link buttons. Entries with an empty `href` are skipped |
| `accents` | Optional decorative stickers in the header |

Status badges get a color when the status is `Live`, `Shut down`, `Paid work` or `Personal tool`. Anything else gets a neutral badge. Colors are set in `app/globals.css`.

To remove a live link or code link, delete the `liveUrl` / `repoUrl` line.

## Adding images and video

Each built project has a folder for its main image: `public/projects/<slug>/` (`pathbrew`, `upsack`, `scaffold`, `ugc-scripts`, `chum`).

1. Drop **one** file in the folder: `.jpg .jpeg .png .webp .avif .gif` or a short `.mp4 .webm` video.
2. Set `mediaAlt` for that project in `content/site.ts` to describe the image, for screen readers.
3. Run `npm run build` (or restart `npm run dev`). The file is found automatically.

Notes:
- If the folder has several files, set `media: "filename.png"` on the project to pick one. Otherwise the first file alphabetically is used.
- No file means a neutral placeholder box. A missing or wrong file never breaks the layout.
- The box is 16:10 and the media is cropped to fill it. Wide screenshots (about 1600×1000) work best.
- Images are resized and compressed automatically. Videos are not: keep them short (under about 10 seconds) and small (under about 3 MB). Videos play muted and on a loop, and they're paused for visitors who've turned on "reduce motion".

## Numbers, Carried forward, Artifacts, Build log

Each built project in `content/site.ts` also has:

- **`carriedForward`**: shown on the closed card, under the links. It's what from this project changed the next one.
- **`numbers`**: real figures only, shown as small boxes on the closed card. If the list is empty, nothing is shown.
  ```ts
  numbers: [{ value: "5", label: "affiliate creators recruited" }],
  ```
- **`artifacts`**: proof of real work, like screenshots of posts, DMs, scripts and marketing plans. Shown when the card is opened.
  - Easiest: drop images (`.png .jpg .webp …`) or PDFs in `public/projects/<slug>/artifacts/`. They appear automatically, labeled with their filename.
  - To give them proper labels, set the order, or add a link to something online, list them:
    ```ts
    artifacts: [
      { label: "Launch post", file: "launch-post.png", alt: "Reddit post announcing Scaffold" },
      { label: "Marketing plan", file: "plan.pdf" },
      { label: "Product Hunt page", href: "https://www.producthunt.com/..." },
    ],
    ```
  - A listed `file` that isn't in the folder is skipped, not shown broken. Files you don't list are added after the listed ones.
  - Blur or crop anything private (names and handles in DMs) before adding it.
- **`buildLog`** (PathBrew only for now; any project can have one): a dated log shown when the card is opened. Entries are sorted newest first automatically, so add them anywhere in the list. The 5 newest are shown and the rest are behind "Show all".
  ```ts
  buildLog: [
    { date: "2026-09-26", entry: "What I did." },
  ],
  ```
  Dates must be `YYYY-MM-DD`. They're displayed as "Sep 26, 2026". An entry without a valid date is pinned to the top so you notice it. Delete the starter `[WRITE: ...]` entry once you've added real ones.

## Design accents

Colors, fonts and texture are all CSS variables at the top of [`app/globals.css`](app/globals.css). Light values are in `:root` and dark values are in the `prefers-color-scheme: dark` block below it. The site follows the visitor's system setting.

- **Colors:** edit the `--color-*` and `--status-*` variables.
- **Background texture:** put an image in `public/accents/` and set `--texture-image: url("/accents/paper.png");`. Adjust `--texture-opacity` (there's a separate value for dark mode) and `--texture-size` (e.g. `400px` to tile it, or `cover`).
- **Stickers / splashes:** put PNGs (with transparent backgrounds) in `public/accents/` and add them in `content/site.ts`:
  ```ts
  stickers: [{ src: "/accents/splash.png", position: "top-right", width: 140 }],
  ```
  They sit behind the header text, are hidden from screen readers, and shrink on phones.
- **Display font** (your name and headings): follow the instructions in [`app/fonts.ts`](app/fonts.ts). You can use a font file in `public/fonts/` or a Google font. The body font is `--font-body` in `globals.css`.

## Link previews (Open Graph)

The page title is "Teddy Rosen". Also set these in `content/site.ts`:
- `metaDescription` is the one sentence shown in link previews and search results.
- `ogImage` is an optional 1200×630 image in `public/`, e.g. `"/og.png"`.
- `url` is your final URL. If you leave it empty, Vercel's production URL is used.

## Deploying

The repo is connected to Vercel. Pushing to the production branch deploys automatically. Pushing to other branches creates preview URLs.
