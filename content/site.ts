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
  /** Shown as a badge. Known values get a color: "Live", "Launched", "Shipped", "Shut down", "Internship", "Personal tool", "Building now". */
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

export type TimelineEntry = {
  /** e.g. "Sep 2025". */
  date: string;
  name: string;
  /** Slug of the card this links to (its id on the page). */
  target: string;
  /** Optional badge, e.g. "Shipped". */
  badge?: string;
  /** Marks the newest entry as current. */
  current?: boolean;
  text: string;
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
  metaDescription: "Portfolio of Teddy Rosen, a high school senior building consumer products.",

  /** Optional link-preview image, 1200×630, placed in public/. e.g. "/og.png". */
  ogImage: "",

  // Hero line directly under your name.
  // Facts: high school senior who builds consumer products.
  tagline: "Building products is easy now. Making people want them is what I'm working to become fluent in.",

  // Small facts line under the tagline.
  // Facts to pick from: grade, city, building solo since Sep 2025, or whatever
  // facts you choose.
  facts: "High school senior · San Diego · Building since Sep 2025",

  // Intro: a few sentences.
  // Facts to consider: high school senior; builds consumer products; this site
  // is for the Horowitz Andreessen Academy application; what ties the projects
  // below together (the ones you built and the ones you haven't yet).
  intro: "Coming up with ideas is easy for me. Making them is getting easier by the day. It's getting easy for everybody, though, which makes more noise. So cutting through the noise is what I try to make my products do, and understanding what does that is what I'm working to do. The challenge of choosing the hardest part, cutting through the noise, not only fulfills me the most, since it's a puzzle to solve, but is also the most fulfilling way to spend my time, since the skills that are hardest to learn are the ones I see as the most rare and most valuable.",
};


// ---------------------------------------------------------------------------
// Timeline — oldest first. Shown under the intro. Mark the newest as current.
// ---------------------------------------------------------------------------

export const timeline: TimelineEntry[] = [
  {
    date: "Sep 2025",
    name: "Scaffold",
    target: "scaffold",
    badge: "Shipped",
    // Facts: first project; launched with accounts; learned a product someone
    // would use and a product that succeeds are very different.
    text: "First project.",
  },
  {
    date: "Feb 2026",
    name: "PathBrew",
    target: "pathbrew",
    badge: "Build start",
    // Facts: started building; original purpose wasn't going to work out.
    text: "Scaffold was for devs; PathBrew was for consumers. I saw a better use case, and it sounded like a better idea.",
  },
  {
    date: "Mar 2026",
    name: "PathBrew",
    target: "pathbrew",
    badge: "Paused",
    // Facts: found a new purpose, but the APIs it needed weren't worth the
    // cost; paused to study for AP tests and finals in May. It was an AI
    // wrapper type thing you were working on quickly.
    text: "It needed APIs, so I was further from shipping than I thought. I'd rather spend that time studying for finals and AP tests.",
  },
  {
    date: "Jun 2026",
    name: "Upsack",
    target: "upsack",
    badge: "Shipped",
    // Facts: led with creators from day one; idea to launch fast.
    text: "I marketed it as I was shipping it, in about a week.",
  },
  {
    date: "Jul 2026",
    name: "Chum",
    target: "chum",
    badge: "Personal tool",
    // Facts: built for your own language learning. Your notes (not on the page):
    // in its current form it didn't seem like something that would work, and
    // you didn't want to focus on it at that time.
    text: "I had the idea and saw a use for it myself, so I made it. It was pretty easy to make.",
  },
  {
    date: "Jul 2026",
    name: "UGC agency internship",
    target: "ugc-scripts",
    // Facts: went to get good at marketing; learned UGC is mostly name
    // recognition, and that your own approach is product-level marketing
    // (make the product itself more marketable).
    text: "Reached out to a UGC agency and wrote scripts they used in their campaigns.",
  },
  {
    date: "Aug 2026",
    name: "PathBrew",
    target: "pathbrew",
    badge: "Back",
    // Facts: came back to it after Upsack.
    text: "I came back across PathBrew and wanted something to work on. I thought it was the best idea I could do right now.",
  },
  {
    date: "Sep 2026",
    name: "PathBrew",
    target: "pathbrew",
    badge: "Shipped",
    // Facts: public launch at pathbrew.guide; learned that who it's for and how
    // you reach them matter more than the tool itself.
    text: "I shipped it and realized the mistakes in building it: it wasn't marketable.",
  },
  {
    date: "Sep 2026",
    name: "Splashy Cam",
    target: "splashy-cam",
    current: true,
    // Facts: first physical product; built around product-level marketing and
    // spread from day one.
    text: "I wanted to build a physical product, and one that had tech mixed in.",
  },
];

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
    oneLiner: "A physical/digital product for Senior Assassin that fills a present gap.",
    status: "Building now",
    role: "Founder",
    dates: "Sep 2026 – Present",
    mediaAlt: "",
    sections: [
      {
        // Free-form, no heading.
        // Facts: affiliate codes through whoever runs each school's Senior
        // Assassin account; proving hits is already part of the game; mount
        // has to grip the barrel and fit cheap guns; 3D-printed.
        text: "I'm figuring out how it will spread, because the use case is already within the system of Senior Assassin itself, and Senior Assassin is trendy. I took inspiration from Anoria: I like how it cut costs by not having the tech built in, but still made something consumer. It simplified it.",
      },
    ],
    // Real figures only. The first one shows on the closed card.
    numbers: [],
    // Or drop files in public/projects/splashy-cam/artifacts/.
    artifacts: [],
  },
];

// ---------------------------------------------------------------------------
// Built — shown in this order
// ---------------------------------------------------------------------------

export const built: BuiltProject[] = [
  {
    slug: "upsack",
    name: "Upsack",
    // Facts: app built around the hacky sack trend; a community around it.
    oneLiner: "A local social media app for hacky sack.",
    status: "Shut down",
    role: "Founder & Developer",
    dates: "Jun 2026",
    mediaAlt: "",
    sections: [
      {
        heading: "How it was meant to spread",
        // Facts: affiliate creators (5 small creators).
        text: "It had social stuff built in, since it was a social app for the trend: the social features and communities encouraged people to get on it. I was targeting small creators who were posting a lot and were hungry, trying to be up-and-coming within the trend. They were the best people because they were also easy to reach. Same with the trend itself: people were willing to try it.",
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
        // Your notes: marketing with creators and how effective it is for
        // certain kinds of apps; collab posts vs. creators making their own
        // content; the details of working with creators.
        text: "Marketing with creators, and how effective it is for specific types of apps. The difference between collab posting with a creator and having them make their own content, and the intricacies of working with creators.",
      },
    ],
    // Carried forward — facts: creator marketing lessons feed Splashy Cam's
    // affiliate plan through game hosts.
    carriedForward: "Understanding how essential being quick to market is for capturing a trend.",
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
    slug: "scaffold",
    name: "Scaffold",
    // Facts: forms with prefilled prompt spaces; answers fill the prompt, which
    // opens directly in ChatGPT; gives small sites AI features with no API cost.
    oneLiner: "An AI alternative to putting an API in your app, but still having AI features.",
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
        text: "That wasn't even planned out. The premise was what got planned out. This was my first project.",
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
    carriedForward: "Figure out the growth before you figure out the product.",
    // Real figures only. The first one shows on the closed card.
    // 150 users came via Reddit and Hacker News outreach.
    numbers: [{ value: "150", label: "users" }],
    // e.g. the marketing plan. Or drop files in public/projects/scaffold/artifacts/.
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
    dates: "Feb 2026 – Sep 2026",
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
        // worked on text but was useless on diagram-heavy pages. Built before
        // you learned "test first, ship later"; being hard to explain made it
        // hard to say who it was for.
        text: "I reused the general strategies of Scaffold, except it worked even worse, because the product didn't have the one fit use case a dev product did.",
      },
      {
        heading: "What I learned",
        // Facts: challenge — Vercel's servers get blocked by YouTube, which
        // broke transcript fetching; needed a workaround (say what yours was).
        // Your notes: you half-knew it already, but general-purpose tools are
        // hard to market. No built-in social/spread loop beyond word of mouth
        // and awareness. That's part of why you like social apps.
        text: "I already kind of knew this, but general projects like this are hard to market. It's a project I really like, but it doesn't have the growth capabilities built in that I've seen in other things.",
      },
      {
        heading: "What I still see in it",
        // What you took from it, including the repositioning insight: chat
        // wins for learners; the person explaining needs a shareable artifact.
        // On paper a good tool; who uses it and how you reach them was the
        // most important part. And why you stopped. Nothing forward-looking.
        text: "I still see it as a good tool, but it's still kind of unclear who it's for.",
      },
    ],
    // Carried forward — facts: a general tool with no spread built in led to
    // Splashy Cam being built around one niche with spread designed in.
    carriedForward: "What it means for a product to be for everybody, and why it matters that there are specific people you already know who would use it.",
    // Real figures only. The first one shows on the closed card.
    // Add real figures here if you want them shown, e.g. { value: "10", label: "paths generated" }.
    numbers: [],
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
    oneLiner: "Reached out to a UGC agency and wrote scripts they used in their campaigns.",
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
        // while until the agency shut down and its people moved on.
        text: "Because of how important marketing is, it came to me that some experience doing just the marketing for products could be good. So I reached out to an agency I had seen around and asked if they wanted an intern, and worked with them for a little bit. It fizzled out after the first month, once they had their own work to get done and scripts they needed to write.",
      },
      {
        heading: "What I learned",
        // Facts: writing inside constraints (careful language around stakes for
        // Wagr, soft claims only for Anoria); what got views and what didn't,
        // and why.
        text: "I learned a lot more about UGC and formed opinions on how I would and wouldn't want to use it in my products: I see it as a modern version of traditional marketing where you're just building awareness, which isn't very high-converting and definitely isn't specific to each product the way I want marketing to be in my products.",
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
    dates: "Jul 2026",
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
    role: "Team Member / Shift Leader",
    dates: "Mar 2026 – Present",
    // Facts: hired for a new store's launch, trained by corporate, chosen to
    // train one of the owners, often ran the store alone, about five months.
    oneLiner: "A real job, paid hourly. Taught me about working for somebody and what it means to have a job.",
  },
  {
    name: "Camp counselor",
    role: "CIT, then counselor",
    // Facts: two summers.
    dates: "Summers, 2023 onward",
    // Facts: two summers, CIT then paid counselor across two camps, about 14
    // weeks total, groups of 12-20 kids ages 4-6, adapted games for campers
    // with special needs.
    oneLiner: "A more fun job, but working with five-year-olds who are just learning about life taught me back the things I was trying to teach them.",
  },
];

// ---------------------------------------------------------------------------
// Links — entries with an empty href are skipped
// ---------------------------------------------------------------------------

export const links: SiteLink[] = [
  { label: "GitHub", href: "https://github.com/teddykr08" },
  { label: "PathBrew", href: "https://pathbrew.guide" },
  { label: "Email", href: "mailto:teddykr08@gmail.com" },
  // More: { label: "LinkedIn", href: "https://www.linkedin.com/in/..." },
];

// ---------------------------------------------------------------------------
// Design accents (optional) — see README "Design accents"
// ---------------------------------------------------------------------------

export const accents: { stickers: Sticker[] } = {
  // Decorative images in the hero, e.g. { src: "/accents/splash.png", position: "top-right", width: 140 }
  stickers: [],
};
