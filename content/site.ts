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
  sections: {
    whatIBuilt: string;
    howItWasMeantToSpread: string;
    whatHappened: string;
    whatILearned: string;
  };
  /** Shown on the collapsed card, right under the one-liner. */
  carriedForward: string;
  /** Real figures only. Empty list = the Numbers row isn't shown. Entries with an empty value are skipped. */
  numbers: ProjectNumber[];
  /**
   * Proof of real work, shown in the expanded card. Files in
   * public/projects/<slug>/artifacts/ appear automatically (filename as the
   * label). List them here to add a label, alt text, or order, or to add a
   * link to something hosted elsewhere.
   */
  artifacts?: Artifact[];
  /** Dated log. Sorted newest first automatically; 5 shown, the rest behind "Show all". */
  buildLog?: LogEntry[];
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

export type LogEntry = {
  /** "YYYY-MM-DD", e.g. "2026-09-26". Used for sorting and shown as "Sep 26, 2026". */
  date: string;
  entry: string;
};

export type UnbuiltIdea = {
  slug: string;
  name: string;
  oneLiner: string;
  /** true = not shown on the site. */
  hidden?: boolean;
  sections: {
    howItSpreads: string;
    whatItNeeds: string;
  };
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
    oneLiner: "[WRITE: one line about PathBrew]",
    status: "Live",
    role: "Founder & Developer",
    // Facts: built since Feb 2026. Confirm the end ("Present"?) yourself.
    dates: "Feb 2026 – [WRITE: end or Present]",
    liveUrl: "https://pathbrew-demo.vercel.app",
    repoUrl: "https://github.com/teddykr08/pathbrew-demo",
    mediaAlt: "",
    sections: {
      // Facts: Next.js 15, Supabase, Stripe, OpenRouter.
      // Built: branching engine (fork slides with choices that jump to other
      // slides); in-app fork editor; generate/save/load round trip; AI
      // refinement pipeline; save with unsaved-change tracking and one-level undo.
      // Challenge: Vercel's servers get blocked by YouTube, which broke
      // transcript fetching; needed a workaround (say what yours was).
      whatIBuilt: "[WRITE: what I built]",
      // Facts: none given — cover who it's for and how they'd find it / share it.
      howItWasMeantToSpread: "[WRITE: how it was meant to spread]",
      // Facts: traction — fill in real numbers only (users, paths generated,
      // paying users, etc.). Nothing has been filled in for you.
      whatHappened: "[WRITE: what happened]",
      // Facts: none given — what you learned building it, what you still see in it.
      whatILearned: "[WRITE: what I learned and what I still see in it]",
    },
    // Facts: none recorded yet — what from PathBrew changed what you built or
    // did next. If nothing has come after it yet, say what it's changing now.
    carriedForward: "[WRITE: what from this project changed the next one]",
    // Real figures only (users, paths generated, paying users, etc.).
    // Example: { value: "120", label: "signups" }
    numbers: [],
    // Screenshots/links of real work. Or just drop files in
    // public/projects/pathbrew/artifacts/.
    // Example: { label: "Fork editor", file: "fork-editor.png", alt: "..." }
    artifacts: [],
    // Newest first is automatic. Add a line per entry; use "YYYY-MM-DD" dates.
    // Facts you could log: Vercel/YouTube transcript-fetching workaround;
    // branching engine; fork editor; generate/save/load round trip; AI
    // refinement pipeline; unsaved-change tracking and one-level undo.
    // Only log with real dates.
    buildLog: [{ date: "[WRITE: YYYY-MM-DD]", entry: "[WRITE: what I did]" }],
  },
  {
    slug: "upsack",
    name: "Upsack",
    // Facts: app built around the hacky sack trend; a community around it.
    oneLiner: "[WRITE: one line about Upsack]",
    status: "Shut down",
    role: "Founder & Developer",
    // Facts: worked on it about a month. No start/end dates recorded.
    dates: "[WRITE: dates]",
    mediaAlt: "",
    sections: {
      // Facts: app built around the hacky sack trend; community around it.
      // Went from idea to action in about a week.
      whatIBuilt: "[WRITE: what I built]",
      // Facts: recruited 5 small affiliate creators.
      howItWasMeantToSpread: "[WRITE: how it was meant to spread]",
      // Facts: worked on it about a month; died because the trend was already fading.
      whatHappened: "[WRITE: what happened]",
      // Facts: it was a small test of the idea behind Ozio (see "Not built yet").
      whatILearned: "[WRITE: what I learned and what I still see in it]",
    },
    // Facts: Upsack was a small test of the idea behind Ozio (activity-first
    // social app, in "Not built yet").
    carriedForward: "[WRITE: what from this project changed the next one]",
    // Real figures only. Known fact: recruited 5 small affiliate creators.
    // Example: { value: "5", label: "affiliate creators recruited" }
    numbers: [],
    // e.g. creator outreach DMs, posts. Or drop files in public/projects/upsack/artifacts/.
    artifacts: [],
  },
  {
    slug: "scaffold",
    name: "Scaffold",
    // Facts: no-code form builder; {{variable}} placeholders generate
    // pre-formatted prompts that open directly in ChatGPT; no API calls; free.
    oneLiner: "[WRITE: one line about Scaffold]",
    // Fill in: e.g. "Live", "Shut down", "Paused".
    status: "[WRITE: status]",
    role: "[WRITE: role]",
    dates: "[WRITE: dates]",
    // Confirm scaffoldtool.com is still up before submitting; delete this line if not.
    liveUrl: "https://scaffoldtool.com",
    mediaAlt: "",
    sections: {
      // Facts: no-code form builder at scaffoldtool.com; {{variable}}
      // placeholders generate pre-formatted prompts that open directly in
      // ChatGPT; no API calls; free.
      whatIBuilt: "[WRITE: what I built]",
      // Facts: planned marketing — Reddit/forum templates, cold outreach DMs,
      // a scraping agent, Product Hunt, Indie Hackers, structured data,
      // AI-search optimization. (Say which, if any, actually happened.)
      howItWasMeantToSpread: "[WRITE: how it was meant to spread]",
      // Facts: Scaffold didn't really have any marketing. Add real results only.
      whatHappened: "[WRITE: what happened]",
      // Facts: lesson you've named — marketing matters, precisely because
      // Scaffold didn't really have any.
      whatILearned: "[WRITE: what I learned and what I still see in it]",
    },
    // Facts: the lesson you've named — marketing matters, precisely because
    // Scaffold didn't really have any. Say where that showed up next.
    carriedForward: "[WRITE: what from this project changed the next one]",
    // Real figures only. None recorded yet.
    numbers: [],
    // e.g. the marketing plan (Reddit/forum templates, cold DMs, scraping agent,
    // Product Hunt, Indie Hackers, structured data, AI-search optimization).
    // Or drop files in public/projects/scaffold/artifacts/.
    artifacts: [],
  },
  {
    slug: "ugc-scripts",
    name: "UGC scripts for Wagr and Anoria",
    // Facts: user-generated-content video scripts for two apps.
    oneLiner: "[WRITE: one line about the UGC scripts]",
    status: "Paid work",
    role: "Script writer",
    dates: "[WRITE: dates]",
    mediaAlt: "",
    sections: {
      // Facts: wrote UGC video scripts for Wagr (real-money skill games app;
      // careful language required around stakes) and Anoria
      // (emotional-intelligence wearable; soft claims only).
      whatIBuilt: "[WRITE: what I built]",
      // Facts: UGC videos meant to spread on views; pay depended on views.
      howItWasMeantToSpread: "[WRITE: how it was meant to spread]",
      // Facts: the scripts didn't get enough views.
      whatHappened: "[WRITE: what happened]",
      // Facts: none given — e.g. writing under constraints (stakes language,
      // soft claims), view-based pay.
      whatILearned: "[WRITE: what I learned and what I still see in it]",
    },
    // Facts: none recorded — what from the scripts (writing under stakes/claims
    // constraints, view-based pay) changed what you did next.
    carriedForward: "[WRITE: what from this project changed the next one]",
    // Real figures only (e.g. views per video, pay). None recorded yet.
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
    dates: "[WRITE: dates]",
    mediaAlt: "",
    sections: {
      // Facts: forked the mouse-tooltip-translator Chrome extension for
      // AI-assisted language learning. Added offline French and Spanish IPA
      // dictionaries, a custom syllabifier, and a clipboard-based standing
      // prompt tool.
      whatIBuilt: "[WRITE: what I built]",
      // Facts: built for your own use — say so, or whether you ever meant to share it.
      howItWasMeantToSpread: "[WRITE: how it was meant to spread]",
      // Facts: built for your own Québécois French and Latin American Spanish learning.
      whatHappened: "[WRITE: what happened]",
      // Facts: none given.
      whatILearned: "[WRITE: what I learned and what I still see in it]",
    },
    // Facts: none recorded — what from Chum changed what you built next.
    carriedForward: "[WRITE: what from this project changed the next one]",
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
    slug: "ozio",
    name: "Ozio",
    // Facts: activity-first social app; find and join real activities near you.
    oneLiner: "[WRITE: one line about Ozio]",
    sections: {
      // Facts: none given beyond the concept. Upsack was a small test of this idea.
      howItSpreads: "[WRITE: how it spreads]",
      // Facts: has a full concept doc; building started and hit blockers
      // (name the blockers).
      whatItNeeds: "[WRITE: what it needs that I don't have yet]",
    },
  },
  {
    slug: "splashy-cam",
    name: "Splashy Cam",
    // Facts: water-gun phone mount plus an app, for Senior Assassin and water fights.
    oneLiner: "[WRITE: one line about Splashy Cam]",
    sections: {
      // Facts: Senior Assassin and water fights.
      howItSpreads: "[WRITE: how it spreads]",
      // Facts: none given — e.g. hardware (the mount).
      whatItNeeds: "[WRITE: what it needs that I don't have yet]",
    },
  },
  {
    // Spare slot. Set hidden: false and fill it in, or delete this whole block.
    slug: "idea-3",
    name: "[WRITE: name]",
    oneLiner: "[WRITE: one line]",
    hidden: true,
    sections: {
      howItSpreads: "[WRITE: how it spreads]",
      whatItNeeds: "[WRITE: what it needs that I don't have yet]",
    },
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
