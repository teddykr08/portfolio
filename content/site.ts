/**
 * ALL SITE TEXT LIVES IN THIS FILE.
 *
 * Every "[WRITE: ...]" string is a placeholder. It shows up on the page with a
 * dashed outline so you can see what is still missing. Replace the whole string
 * (brackets included) with your own words. The comment above each placeholder
 * lists the facts to cover — it's a checklist, not text to copy.
 *
 * To find what's left:  grep -n "\[WRITE" content/site.ts
 *
 * Longer text: separate paragraphs with a blank line ("\n\n") inside the string,
 * or use a template literal (backticks) and just press enter twice.
 *
 * Sections: each card's `sections` is a list, shown in that order. Add, remove
 * or reorder freely. Leave `heading` out for a free-form block with no title.
 *
 * Media: put ONE image (.jpg .jpeg .png .webp .avif .gif) or short video
 * (.mp4 .webm) in public/projects/<slug>/. It's picked up automatically.
 * If the folder has several files, set `media` on the project to the filename
 * you want. No file = a neutral placeholder box.
 *
 * Artifacts (screenshots, PDFs of real work): drop them in
 * public/projects/<slug>/artifacts/. They show up automatically in the
 * expanded card; list them in `artifacts` to give them labels.
 */

// ---------------------------------------------------------------------------
// Types (you shouldn't need to edit these)
// ---------------------------------------------------------------------------

export type Section = {
  /** Small title above the text. Leave out for a free-form block. */
  heading?: string;
  text: string;
};

export type BuiltProject = {
  /** Folder name under public/projects/ and the URL anchor. Lowercase, no spaces. */
  slug: string;
  name: string;
  oneLiner: string;
  /** Shown as a badge. Known values get a color: "Live", "Shut down", "Paid work", "Personal tool". */
  status: string;
  role: string;
  /** Free text, e.g. "Feb 2026 – Present". */
  dates: string;
  liveUrl?: string;
  repoUrl?: string;
  /** Optional filename inside public/projects/<slug>/ if you want a specific file. */
  media?: string;
  /** Alt text for the image (describe what's in it). Leave empty for a purely decorative video. */
  mediaAlt?: string;
  /** Shown when the card is opened ("Read more"), in this order. */
  sections: Section[];
  /** Real figures only. Empty list = the Numbers row isn't shown. Entries with an empty value are skipped. */
  numbers: ProjectNumber[];
  /**
   * Proof of real work, shown in the expanded card. Files in
   * public/projects/<slug>/artifacts/ appear automatically (filename as the
   * label). List them here to add a label, alt text, or order, or to add a
   * link to something hosted elsewhere.
   */
  artifacts?: Artifact[];
};

export type ProjectNumber = {
  /** The figure itself, e.g. "120". */
  value: string;
  /** What it counts, e.g. "signups". */
  label: string;
};

export type Artifact = {
  /** Short label shown under the thumbnail. */
  label: string;
  /** A file in public/projects/<slug>/artifacts/, e.g. "reddit-post.png". */
  file?: string;
  /** Or a link to something hosted elsewhere. */
  href?: string;
  /** For images: describe what's in it (screen readers). Defaults to the label. */
  alt?: string;
};

export type UnbuiltIdea = {
  slug: string;
  name: string;
  oneLiner: string;
  /** Optional small badge next to the name, e.g. "Building now". */
  badge?: string;
  /** true = not shown on the site. */
  hidden?: boolean;
  sections: Section[];
};

export type SiteLink = {
  label: string;
  href: string;
};

export type Sticker = {
  /** Path under public/, e.g. "/accents/star.png". */
  src: string;
  /** Where it sits in the hero. */
  position: "top-right" | "bottom-right" | "top-left" | "bottom-left";
  /** Width in px on desktop (scaled down on phones). */
  width: number;
};

// ---------------------------------------------------------------------------
// Site-wide
// ---------------------------------------------------------------------------

export const site = {
  name: "Teddy Rosen",

  /**
   * Full URL after you deploy, e.g. "https://teddyrosen.vercel.app".
   * Used for link previews (Open Graph). If left empty, Vercel's production
   * URL is used automatically.
   */
  url: "",

  /**
   * Short description used in Google results and link previews (iMessage,
   * Slack, etc.). One sentence. Not shown on the page itself.
   */
  // Facts: high school senior; builds consumer products.
  metaDescription: "[WRITE: one-sentence description for link previews]",

  /** Optional link-preview image, 1200×630, placed in public/. e.g. "/og.png". */
  ogImage: "",

  // Hero line directly under your name.
  // Facts: high school senior who builds consumer products.
  tagline: "[WRITE: one line about me]",

  // Intro: a few sentences.
  // Facts to consider: high school senior; builds consumer products; this site
  // is for the Horowitz Andreessen Academy application; what ties the projects
  // below together (the ones you built and the ones you haven't yet).
  intro: "[WRITE: short intro, a few sentences]",
};


// ---------------------------------------------------------------------------
// Built — shown in this order
// ---------------------------------------------------------------------------

export const built: BuiltProject[] = [
  {
    slug: "pathbrew",
    name: "PathBrew",
    // Facts: AI learning path generator; turns a topic or video into
    // slide-based learning paths, with branching tutorials.
    // Stack: Next.js 15, Supabase, Stripe, OpenRouter.
    // Built: branching engine (fork slides with choices that jump to other
    // slides); in-app fork editor; generate/save/load round trip; AI
    // refinement pipeline; save with unsaved-change tracking and one-level undo.
    oneLiner: "[WRITE: one line about PathBrew]",
    status: "Live",
    role: "Founder & Developer",
    dates: "Feb 2026 – Present",
    liveUrl: "https://pathbrew-demo.vercel.app",
    repoUrl: "https://github.com/teddykr08/pathbrew-demo",
    mediaAlt: "",
    sections: [
      {
        heading: "How it was meant to spread",
        // Facts: none given — who it's for and how they'd find it / share it.
        text: "[WRITE: how it was meant to spread]",
      },
      {
        heading: "What I learned",
        // Facts: challenge — Vercel's servers get blocked by YouTube, which
        // broke transcript fetching; needed a workaround (say what yours was).
        text: "[WRITE: what I learned]",
      },
      {
        heading: "What I still see in it",
        // Facts: none given.
        text: "[WRITE: what I still see in it]",
      },
    ],
    // Real figures only (users, paths generated, paying users, etc.).
    // Example: { value: "120", label: "signups" }
    numbers: [],
    // Screenshots/links of real work. Or just drop files in
    // public/projects/pathbrew/artifacts/.
    // Example: { label: "Fork editor", file: "fork-editor.png", alt: "..." }
    artifacts: [],
  },
  {
    slug: "upsack",
    name: "Upsack",
    // Facts: app built around the hacky sack trend; a community around it.
    oneLiner: "[WRITE: one line about Upsack]",
    status: "Shut down",
    role: "Founder & Developer",
    dates: "May 2026",
    mediaAlt: "",
    sections: [
      {
        heading: "How it was meant to spread",
        // Facts: recruited 5 small affiliate creators.
        text: "[WRITE: how it was meant to spread]",
      },
      {
        heading: "What happened",
        // Facts: went from idea to action in about a week; worked on it about
        // a month; died because the trend was already fading.
        text: "[WRITE: what happened]",
      },
      {
        heading: "What I learned",
        // Facts: it was a small test of the idea behind Ozio.
        text: "[WRITE: what I learned]",
      },
      {
        heading: "What I still see in it",
        // Facts: none given.
        text: "[WRITE: what I still see in it]",
      },
    ],
    // Real figures only. Known fact: recruited 5 small affiliate creators.
    // Example: { value: "5", label: "affiliate creators recruited" }
    numbers: [],
    // e.g. creator outreach DMs, posts. Or drop files in public/projects/upsack/artifacts/.
    artifacts: [],
  },
  {
    slug: "scaffold",
    name: "Scaffold",
    // Facts: no-code form builder at scaffoldtool.com; {{variable}}
    // placeholders generate pre-formatted prompts that open directly in
    // ChatGPT; no API calls; free.
    oneLiner: "[WRITE: one line about Scaffold]",
    // Fill in: e.g. "Live", "Shut down", "Paused".
    status: "[WRITE: status]",
    role: "Founder & Developer",
    dates: "Sep 2025 – Jan 2026",
    // Confirm scaffoldtool.com is still up before submitting; delete this line if not.
    liveUrl: "https://scaffoldtool.com",
    mediaAlt: "",
    sections: [
      {
        heading: "How it was meant to spread",
        // Facts: planned marketing — Reddit/forum templates, cold outreach DMs,
        // a scraping agent, Product Hunt, Indie Hackers, structured data,
        // AI-search optimization. (Say which, if any, actually happened.)
        text: "[WRITE: how it was meant to spread]",
      },
      {
        heading: "What I learned",
        // Facts: lesson you've named — marketing matters, precisely because
        // Scaffold didn't really have any.
        text: "[WRITE: what I learned]",
      },
      {
        heading: "What I still see in it",
        // Facts: none given.
        text: "[WRITE: what I still see in it]",
      },
    ],
    // Real figures only. None recorded yet.
    numbers: [],
    // e.g. the marketing plan. Or drop files in public/projects/scaffold/artifacts/.
    artifacts: [],
  },
  {
    slug: "ugc-scripts",
    name: "UGC scripts for Wagr and Anoria",
    // Facts: user-generated-content video scripts for two apps.
    oneLiner: "[WRITE: one line about the UGC scripts]",
    status: "Paid work",
    role: "Script writer",
    dates: "Jul 2026",
    mediaAlt: "",
    sections: [
      {
        // Free-form, no heading. Your role on this one.
        // Facts: wrote UGC video scripts for Wagr (real-money skill games app;
        // careful language required around stakes) and Anoria
        // (emotional-intelligence wearable; soft claims only). Pay depended on
        // views; the scripts didn't get enough views.
        text: "[WRITE: about my role on the scripts]",
      },
    ],
    // Real figures only (e.g. views per video). None recorded yet.
    numbers: [],
    // e.g. the scripts themselves (check you're allowed to share them).
    // Or drop files in public/projects/ugc-scripts/artifacts/.
    artifacts: [],
  },
  {
    slug: "chum",
    name: "Chum",
    // Facts: Chrome extension for AI-assisted language learning.
    oneLiner: "[WRITE: one line about Chum]",
    status: "Personal tool",
    role: "Developer",
    dates: "Jun 2026",
    mediaAlt: "",
    sections: [
      {
        // Free-form, no heading. A short description.
        // Facts: forked the mouse-tooltip-translator Chrome extension for
        // AI-assisted language learning. Added offline French and Spanish IPA
        // dictionaries, a custom syllabifier, and a clipboard-based standing
        // prompt tool. Built for your own Québécois French and Latin American
        // Spanish learning.
        text: "[WRITE: short description]",
      },
    ],
    // Real figures only. None recorded yet.
    numbers: [],
    // e.g. screenshots of the tooltip, IPA lookup, syllabifier.
    // Or drop files in public/projects/chum/artifacts/.
    artifacts: [],
  },
];

// ---------------------------------------------------------------------------
// Not built yet
// ---------------------------------------------------------------------------

export const notBuilt: UnbuiltIdea[] = [
  {
    slug: "splashy-cam",
    name: "Splashy Cam",
    // Facts: water-gun phone mount plus an app, for Senior Assassin and water fights.
    oneLiner: "[WRITE: one line about Splashy Cam]",
    // You have what it needs and are building it now. Delete this line if you'd rather not show it.
    badge: "Building now",
    sections: [
      {
        heading: "How it spreads",
        // Facts: Senior Assassin and water fights.
        text: "[WRITE: how it spreads]",
      },
    ],
  },
  {
    // Hidden for now. Set hidden: false (or delete the line) to show it.
    slug: "ozio",
    name: "Ozio",
    // Facts: activity-first social app; find and join real activities near you.
    oneLiner: "[WRITE: one line about Ozio]",
    hidden: true,
    sections: [
      {
        heading: "How it spreads",
        // Facts: none given beyond the concept. Upsack was a small test of this idea.
        text: "[WRITE: how it spreads]",
      },
      {
        heading: "What it needs that I don't have yet",
        // Facts: full concept doc exists; building started and hit blockers.
        // It's a bigger project (a social app); you want some capital first to
        // do it properly.
        text: "[WRITE: what it needs that I don't have yet]",
      },
    ],
  },
  {
    // Spare slot. Set hidden: false and fill it in, or delete this whole block.
    slug: "idea-3",
    name: "[WRITE: name]",
    oneLiner: "[WRITE: one line]",
    hidden: true,
    sections: [
      { heading: "How it spreads", text: "[WRITE: how it spreads]" },
      { heading: "What it needs that I don't have yet", text: "[WRITE: what it needs that I don't have yet]" },
    ],
  },
];

// ---------------------------------------------------------------------------
// Links — entries with an empty href are skipped
// ---------------------------------------------------------------------------

export const links: SiteLink[] = [
  { label: "GitHub", href: "https://github.com/teddykr08" },
  // Examples: { label: "Email", href: "mailto:you@example.com" },
  //           { label: "LinkedIn", href: "https://www.linkedin.com/in/..." },
  { label: "", href: "" },
  { label: "", href: "" },
];

// ---------------------------------------------------------------------------
// Design accents (optional) — see README "Design accents"
// ---------------------------------------------------------------------------

export const accents: { stickers: Sticker[] } = {
  // Decorative images in the hero, e.g. { src: "/accents/splash.png", position: "top-right", width: 140 }
  stickers: [],
};
