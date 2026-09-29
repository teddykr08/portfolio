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
  /** Shown as a badge. Known values get a color: "Live", "Launched", "Shut down", "Internship", "Personal tool", "Building now". */
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
  /** Optional small line under the title, e.g. "Scripts for Wagr and Anoria". */
  subtitle?: string;
  /** Extra label/value rows next to role and dates, e.g. { label: "Based on", value: "..." }. */
  meta?: MetaRow[];
  /** Shown on the closed card. Leave out or empty to hide. */
  carriedForward?: string;
  /** Shown when the card is opened ("Read more"), in this order. */
  sections: Section[];
  /**
   * Real figures only. The FIRST one shows on the closed card; the rest show
   * when it's opened. Empty list = nothing shown.
   */
  numbers: ProjectNumber[];
  /** Dated log, sorted newest first automatically; 5 shown, the rest behind "Show all". */
  buildLog?: LogEntry[];
  /**
   * Proof of real work, shown in the expanded card. Files in
   * public/projects/<slug>/artifacts/ appear automatically (filename as the
   * label). List them here to add a label, alt text, or order, or to add a
   * link to something hosted elsewhere.
   */
  artifacts?: Artifact[];
};

export type ProjectNumber = {
  /** The figure itself, e.g. "120". Leave out for a text-only item. */
  value?: string;
  /** What it counts, e.g. "signups". */
  label: string;
};

export type MetaRow = {
  label: string;
  value: string;
};

export type LogEntry = {
  /** "YYYY-MM-DD", e.g. "2026-09-26". Used for sorting and shown as "Sep 26, 2026". */
  date: string;
  entry: string;
};

export type OtherWorkItem = {
  name: string;
  role: string;
  dates: string;
  oneLiner: string;
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

  // Small facts line under the tagline.
  // Facts to pick from: grade, city, building solo since Sep 2025, or whatever
  // facts you choose.
  facts: "[WRITE: grade, city, building solo since Sep 2025, or whatever facts Teddy picks]",

  // Intro: a few sentences.
  // Facts to consider: high school senior; builds consumer products; this site
  // is for the Horowitz Andreessen Academy application; what ties the projects
  // below together (the ones you built and the ones you haven't yet).
  intro: "[WRITE: short intro, a few sentences]",
};


// ---------------------------------------------------------------------------
// Now — what you're building at the moment (full card + build log)
// ---------------------------------------------------------------------------

export const now: BuiltProject[] = [
  {
    slug: "splashy-cam",
    name: "Splashy Cam",
    // Facts: a phone mount that straps onto water guns, even cheap kids' ones,
    // with the camera pointing along the barrel, plus an app that records front
    // and back cameras with a tamper-proof stamp to prove hits; Senior Assassin
    // first, then a cheap POV camera option.
    oneLiner: "[WRITE: what it is, plainly]",
    status: "Building now",
    role: "Founder",
    dates: "Sep 2026 – Present",
    mediaAlt: "",
    sections: [
      {
        heading: "How it spreads",
        // Facts: affiliate codes through whoever runs each school's Senior
        // Assassin account (buyer gets a small discount, host gets a cut);
        // senior creators; proving hits is already part of the game.
        text: "[WRITE: how it spreads]",
      },
      {
        heading: "What I'm building now",
        // Facts: none given — the current stage of the mount and the app.
        text: "[WRITE: what I'm building now]",
      },
      {
        heading: "What's hard",
        // Facts: first physical product; mount has to grip the barrel tightly;
        // has to fit cheap guns; 3D-printed and hand-assembled.
        text: "[WRITE: what's hard]",
      },
    ],
    // Real figures only. The first one shows on the closed card.
    numbers: [],
    // Or drop files in public/projects/splashy-cam/artifacts/.
    artifacts: [],
    // Newest first is automatic. Add a line per entry; use "YYYY-MM-DD" dates.
    // Delete the starter entry once you've added real ones.
    buildLog: [{ date: "[WRITE: YYYY-MM-DD]", entry: "[WRITE: what I did]" }],
  },
];

// ---------------------------------------------------------------------------
// Built — shown in this order
// ---------------------------------------------------------------------------

export const built: BuiltProject[] = [
  {
    slug: "scaffold",
    name: "Scaffold",
    // Facts: forms with prefilled prompt spaces; answers fill the prompt, which
    // opens directly in ChatGPT; gives small sites AI features with no API cost.
    oneLiner: "[WRITE: plain one-liner matching how it actually worked]",
    // "Finished" stays true whether or not the site is still up.
    status: "Finished",
    role: "Founder & Developer",
    dates: "Sep 2025 – Jan 2026",
    // May shut down (Supabase room). Check it's up before submitting; delete this line if not.
    liveUrl: "https://scaffoldtool.com",
    mediaAlt: "",
    sections: [
      {
        heading: "How it worked",
        // Delete this section if you'd rather not explain it.
        text: "It used forms with a prompt that had pre-filled spaces, and the questions on the form determined what goes in those spaces. The form then brought the user to ChatGPT to complete it, using ChatGPT URLs that can embed a prompt, so the prompt could carry context and the user's answers.",
      },
      {
        heading: "How it was meant to spread",
        // Facts: planned marketing — Reddit/forum templates, cold outreach DMs,
        // a scraping agent, Product Hunt, Indie Hackers, structured data,
        // AI-search optimization. (Say which, if any, actually happened.)
        text: "Through B2B SaaS means, except it was for small devs, so really just through forums.",
      },
      {
        heading: "What I learned",
        // Facts: lesson you've named — marketing matters, precisely because
        // Scaffold didn't really have any.
        // Your notes: your first-ever project; learned basic marketing
        // tactics (which you still think matter most); discovering tools —
        // which to use, which not to, which just add steps; time.
        text: "Scaffold was my first ever project, and I learned a lot. Basic marketing tactics, which I still think is the most important part. Using and discovering tools: just as important as the ones to use are the ones not to use, and the ones that just add steps. And something that's hard to explain is hard to sell people on.",
      },
      {
        heading: "What I still see in it",
        // Facts: none given.
        text: "The gap it fills, free AI embedding, is getting smaller and smaller. The execution that allows it to be free is simpler, but has less potential, less you can do with it, than a traditional AI wrapper that uses an API key.",
      },
    ],
    // Carried forward — facts: Scaffold had almost no marketing, which led to
    // leading with creators on Upsack.
    carriedForward: "[WRITE: what carried forward]",
    // Real figures only. The first one shows on the closed card.
    // 150 users came via Reddit and Hacker News outreach.
    numbers: [{ value: "150", label: "users" }],
    // e.g. the marketing plan. Or drop files in public/projects/scaffold/artifacts/.
    artifacts: [],
  },
  {
    slug: "upsack",
    name: "Upsack",
    // Facts: app built around the hacky sack trend; a community around it.
    oneLiner: "A local social media app for hacky sack.",
    status: "Shut down",
    role: "Founder & Developer",
    dates: "May 2026",
    mediaAlt: "",
    sections: [
      {
        heading: "How it was meant to spread",
        // Facts: affiliate creators (5 small creators).
        text: "[WRITE: how it spread]",
      },
      {
        heading: "What happened",
        // Facts: went from idea to action in about a week; worked on it about
        // a month; died because the trend was already fading.
        // Your notes: you put finals and finishing another project first, so
        // you got to it late. Launched and marketed as fast as you could while
        // the trend was dying. Had the beginnings of monetization, but it
        // wasn't thought out; a rushed build on a dying trend left no room to
        // learn what people wanted or to make it good.
        text: "I told myself I would study for my finals and finish another project first, so I got to it a little late. When the trend was coming down, I launched it and marketed it as quick as I could, and got 5 small creators to be affiliates. I had the beginnings of monetization, but it wasn't thought out enough. Building it was quick; making it good, seeing what people wanted and monetizing it wasn't something an app grasping at a dying trend was good for.",
      },
      {
        heading: "What I learned",
        // Facts: it was a small test of the idea behind Ozio.
        // Your notes: marketing with creators and how effective it is for
        // certain kinds of apps; collab posts vs. creators making their own
        // content; the details of working with creators.
        text: "Marketing with creators, and how effective it is for specific types of apps. The difference between collab posting with a creator and having them make their own content, and the intricacies of working with creators.",
      },
      {
        heading: "What I still see in it",
        // Your notes: the parts of it that carry over to Ozio.
        // The Ozio comparison removed from "How it spread" could go here, in
        // your words. It read: "It was meant to spread as a focused version of
        // Ozio, with all the community and friend aspects and looking-for-group,
        // except focused on the hacky sack trend that I witnessed."
        text: "Parts of it that would be applied to Ozio.",
      },
    ],
    // Carried forward — facts: creator marketing lessons feed Splashy Cam's
    // affiliate plan through game hosts.
    carriedForward: "[WRITE: what carried forward]",
    // Real figures only. The first one shows on the closed card.
    numbers: [
      { value: "5", label: "affiliate creators" },
      { value: "~5K", label: "views on the launch video" },
      { value: "~15K", label: "views across the campaign" },
      { label: "Collab with a 30K-follower creator" },
    ],
    // e.g. creator outreach DMs, posts. Or drop files in public/projects/upsack/artifacts/.
    artifacts: [],
  },
  {
    slug: "pathbrew",
    name: "PathBrew",
    // Facts: AI learning path generator; turns a topic or video into
    // slide-based learning paths, with branching tutorials.
    // Stack: Next.js 15, Supabase, Stripe, OpenRouter.
    // Built: branching engine (fork slides with choices that jump to other
    // slides); in-app fork editor; generate/save/load round trip; AI
    // refinement pipeline; save with unsaved-change tracking and one-level undo.
    oneLiner: "NotebookLM for tutorials: take sources, paste the text, and turn it into a formatted tutorial.",
    status: "Launched",
    role: "Founder & Developer",
    dates: "Feb 2026 – Present",
    liveUrl: "https://pathbrew.guide",
    repoUrl: "https://github.com/teddykr08/pathbrew-demo",
    mediaAlt: "",
    sections: [
      {
        heading: "How it was meant to spread",
        // Your notes: word of mouth. You found people on forums asking how to
        // do something and replied with a PathBrew link.
        text: "The only way it could spread, really, is by word of mouth and traditional marketing, just making people aware of it. Without money, it's only word of mouth. I was finding people on forums who were asking how to do something, and responded to them with the link.",
      },
      {
        heading: "What happened",
        // Facts: launched publicly Sep 2026 at pathbrew.guide; posted in several
        // promotion-friendly places; about one path generated in the first 24
        // hours; first outside user ran it on old servicing manuals, and it
        // worked on text but was useless on diagram-heavy pages.
        text: "[WRITE: what happened]",
      },
      {
        heading: "What I learned",
        // Facts: challenge — Vercel's servers get blocked by YouTube, which
        // broke transcript fetching; needed a workaround (say what yours was).
        // Your notes: you half-knew it already, but general-purpose tools are
        // hard to market. No built-in social/spread loop beyond word of mouth
        // and awareness. That's part of why you like social apps.
        text: "I already kind of knew this, but general projects like this are hard to market. It's a project I really like, but it doesn't have the growth capabilities built in that I've seen in other things. Having a specific niche for it would be good.",
      },
      {
        heading: "What I still see in it",
        // [WRITE] slot: what the real advantage is, without talking the product down.
        text: "I still see a lot of potential, but it's something that takes implementation into a routine. [WRITE: the real advantage] And convenience is enough for somebody to put it inside of a routine.",
      },
    ],
    // Carried forward — facts: a general tool with no spread built in led to
    // Splashy Cam being built around one niche with spread designed in.
    carriedForward: "[WRITE: what carried forward]",
    // Real figures only. The first one shows on the closed card.
    numbers: [{ label: "[WRITE: paths generated / users since launch]" }],
    // Screenshots/links of real work. Or just drop files in
    // public/projects/pathbrew/artifacts/.
    // Example: { label: "Fork editor", file: "fork-editor.png", alt: "..." }
    artifacts: [],
  },
  {
    slug: "ugc-scripts",
    name: "UGC agency internship",
    subtitle: "Scripts for Wagr and Anoria",
    // Facts: user-generated-content video scripts for two apps.
    oneLiner: "Interning for a UGC agency.",
    status: "Internship",
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
        // Your notes: marketing mattered so much that you wanted experience
        // doing only the marketing side. Reached out to an agency you'd seen
        // around and asked if they wanted an intern; worked with them for a
        // while until the agency wound down and its people moved on.
        text: "Because of how important marketing is, it came to me that some experience doing just the marketing for products could be good. So I reached out to an agency I had seen around and asked if they wanted an intern, and worked with them for a little bit. [WRITE: how it ended, clearly]",
      },
      {
        heading: "What I learned",
        // Facts: writing inside constraints (careful language around stakes for
        // Wagr, soft claims only for Anoria); what got views and what didn't,
        // and why.
        text: "[WRITE: what I learned]",
      },
    ],
    // Leave empty until you confirm. Only views on YOUR scripts, never agency
    // or campaign totals. Possible facts to check: first intern at the agency;
    // 100K+ views across your scripts.
    numbers: [],
    // e.g. the scripts themselves (check you're allowed to share them).
    // Or drop files in public/projects/ugc-scripts/artifacts/.
    artifacts: [],
  },
  {
    slug: "chum",
    name: "Chum",
    // Facts: Chrome extension for AI-assisted language learning.
    // Your notes: a language learning tool you use yourself.
    oneLiner: "A language learning tool that I use myself.",
    status: "Personal tool",
    role: "Developer",
    dates: "Jun 2026",
    meta: [{ label: "Based on", value: "fork of mouse-tooltip-translator" }],
    mediaAlt: "",
    sections: [
      {
        // Free-form, no heading. A short description.
        // Facts: forked the mouse-tooltip-translator Chrome extension for
        // AI-assisted language learning. Added offline French and Spanish IPA
        // dictionaries, a custom syllabifier, and a clipboard-based standing
        // prompt tool. Built for your own Québécois French and Latin American
        // Spanish learning.
        // Your notes: an extension for now, maybe its own chatbot later.
        // Turns AI chats into language practice: the AI chats in the other
        // language, adapts to your level while pushing you, and you can select
        // lines to translate and see how to pronounce them. You're immersed
        // while doing whatever else you're working on, and you pick up
        // vocabulary tied to your own interests.
        text: "Among other things, the AI chats in another language and teaches a lesson that has to do with what you're learning about. If you're a beginner, for example, it teaches you the basics while you're having that chat. It adapts to your level but pushes you, and I can translate selected lines and see how to pronounce things. That way I'm immersed in a language while I do whatever else I'm working on, and I learn vocabulary relevant to my interests. Right now it's an extension; later it could be a chatbot that uses more UI capabilities of a custom interface.",
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
// Other work — compact list, no expand
// ---------------------------------------------------------------------------

export const otherWork: OtherWorkItem[] = [
  {
    name: "Häagen-Dazs",
    // Facts: about five months.
    role: "[WRITE: role]",
    dates: "[WRITE: dates]",
    // Facts: hired for a new store's launch, trained by corporate, chosen to
    // train one of the owners, often ran the store alone, about five months.
    oneLiner: "[WRITE: one line]",
  },
  {
    name: "Camp counselor",
    role: "CIT, then counselor",
    // Facts: two summers.
    dates: "[WRITE: dates]",
    // Facts: two summers, CIT then paid counselor across two camps, about 14
    // weeks total, groups of 12-20 kids ages 4-6, adapted games for campers
    // with special needs.
    oneLiner: "[WRITE: one line]",
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
    oneLiner: "Activity-first social app: find and join real activities near you.",
    sections: [
      {
        heading: "How it spreads",
        // Facts: starts with friend groups teens already have, coordinating
        // hangouts instead of group chats, so it's useful with zero strangers
        // on day one; each hangout pulls in friends who aren't on it yet;
        // "lobby settings" per hangout (location, camera, calls); paid tier
        // saves the chat and photos.
        text: "[WRITE: how it spreads]",
      },
      {
        heading: "Why not yet",
        // Frame as what it needs, not a delay: money, and a long growth stage;
        // the niche is teenagers. Avoid: confidence boost, "successful(ish)",
        // "subject to change", predictions about AI.
        text: "[WRITE: why not yet]",
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
  { label: "PathBrew", href: "https://pathbrew.guide" },
  // Replace [WRITE: email] with your address, e.g. "mailto:you@example.com".
  { label: "Email", href: "mailto:[WRITE: email]" },
  // More: { label: "LinkedIn", href: "https://www.linkedin.com/in/..." },
];

// ---------------------------------------------------------------------------
// Design accents (optional) — see README "Design accents"
// ---------------------------------------------------------------------------

export const accents: { stickers: Sticker[] } = {
  // Decorative images in the hero, e.g. { src: "/accents/splash.png", position: "top-right", width: 140 }
  stickers: [],
};
