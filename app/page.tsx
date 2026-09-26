import { accents, built, links, notBuilt, site } from "@/content/site";
import { BuiltCard } from "@/components/BuiltCard";
import { IdeaCard } from "@/components/IdeaCard";
import { Stickers } from "@/components/Stickers";
import { Inline, Prose } from "@/components/Text";

export default function Home() {
  const ideas = notBuilt.filter((i) => !i.hidden);
  const activeLinks = links.filter((l) => l.href && l.label);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:rounded focus:bg-surface focus:px-3 focus:py-2"
      >
        Skip to content
      </a>

      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <header className="relative isolate pt-14 pb-8 sm:pt-20 sm:pb-10">
          <Stickers stickers={accents.stickers} />
          <h1 className="font-display text-5xl leading-[1.05] font-bold tracking-tight sm:text-6xl">{site.name}</h1>
          <p className="mt-3 text-lg text-muted sm:text-xl">
            <Inline text={site.tagline} />
          </p>
          <nav aria-label="Sections" className="mt-6">
            <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium">
              <li><a href="#built">Built</a></li>
              {ideas.length > 0 && <li><a href="#not-built-yet">Not built yet</a></li>}
              <li><a href="#links">Links</a></li>
            </ul>
          </nav>
        </header>

        <main id="main">
          <section aria-label="Intro" className="pb-12 text-[1.075rem]">
            <Prose text={site.intro} />
          </section>

          <section id="built" aria-labelledby="built-heading" className="scroll-mt-6 pb-14">
            <h2 id="built-heading" className="mb-5 font-display text-3xl font-bold">
              Built
            </h2>
            <div className="space-y-5">
              {built.map((project) => (
                <BuiltCard key={project.slug} project={project} />
              ))}
            </div>
          </section>

          {ideas.length > 0 && (
            <section id="not-built-yet" aria-labelledby="ideas-heading" className="scroll-mt-6 pb-14">
              <h2 id="ideas-heading" className="mb-5 font-display text-2xl font-bold text-muted">
                Not built yet
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {ideas.map((idea) => (
                  <IdeaCard key={idea.slug} idea={idea} />
                ))}
              </div>
            </section>
          )}

          <section id="links" aria-labelledby="links-heading" className="scroll-mt-6 pb-14">
            <h2 id="links-heading" className="mb-4 font-display text-2xl font-bold">
              Links
            </h2>
            <ul className="flex flex-wrap gap-3">
              {activeLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    {...(link.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="inline-flex items-center gap-1 rounded-full border border-border bg-surface px-4 py-2 font-medium no-underline hover:border-accent"
                  >
                    {link.label}
                    <span aria-hidden="true">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </main>

        <footer className="border-t border-border py-8 text-sm text-muted">
          <p>
            © {new Date().getFullYear()} {site.name}
          </p>
        </footer>
      </div>
    </>
  );
}
