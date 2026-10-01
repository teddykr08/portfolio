import { accents, built, links, now, otherWork, site, timeline } from "@/content/site";
import { BuiltCard } from "@/components/BuiltCard";
import { Stickers } from "@/components/Stickers";
import { Timeline } from "@/components/Timeline";
import { Inline, Prose } from "@/components/Text";

export default function Home() {
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
          {site.facts && (
            <p className="mt-2 text-sm text-muted">
              <Inline text={site.facts} />
            </p>
          )}
          <nav aria-label="Sections" className="mt-6">
            <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium">
              {timeline.length > 0 && (
                <li>
                  <a href="#timeline">Timeline</a>
                </li>
              )}
              {now.length > 0 && (
                <li>
                  <a href="#now">Now</a>
                </li>
              )}
              <li>
                <a href="#built">Built</a>
              </li>
              {otherWork.length > 0 && (
                <li>
                  <a href="#other-work">Other work</a>
                </li>
              )}
              <li>
                <a href="#links">Links</a>
              </li>
            </ul>
          </nav>
        </header>

        <main id="main">
          <section aria-label="Intro" className="pb-12 text-[1.075rem]">
            <Prose text={site.intro} />
          </section>

          {timeline.length > 0 && (
            <section id="timeline" aria-labelledby="timeline-heading" className="scroll-mt-6 pb-14">
              <h2 id="timeline-heading" className="mb-5 font-display text-2xl font-bold">
                Timeline
              </h2>
              <Timeline entries={timeline} />
            </section>
          )}

          {now.length > 0 && (
            <section id="now" aria-labelledby="now-heading" className="scroll-mt-6 pb-14">
              <h2 id="now-heading" className="mb-5 font-display text-3xl font-bold">
                Now
              </h2>
              <div className="space-y-5">
                {now.map((project) => (
                  <BuiltCard key={project.slug} project={project} />
                ))}
              </div>
            </section>
          )}

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

          {otherWork.length > 0 && (
            <section id="other-work" aria-labelledby="other-heading" className="scroll-mt-6 pb-14">
              <h2 id="other-heading" className="mb-4 font-display text-2xl font-bold">
                Other work
              </h2>
              <ul className="divide-y divide-border rounded-[var(--radius-card)] border border-border bg-surface">
                {otherWork.map((item, i) => (
                  <li key={i} className="px-4 py-3 sm:px-5">
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-0.5">
                      <h3 className="font-display text-lg font-semibold">
                        <Inline text={item.name} />
                      </h3>
                      <span className="text-sm text-muted">
                        <Inline text={item.role} /> · <Inline text={item.dates} />
                      </span>
                    </div>
                    <p className="mt-0.5">
                      <Inline text={item.oneLiner} />
                    </p>
                  </li>
                ))}
              </ul>
            </section>
          )}

          <section id="links" aria-labelledby="links-heading" className="scroll-mt-6 pb-14">
            <h2 id="links-heading" className="mb-4 font-display text-2xl font-bold">
              Links
            </h2>
            <ul className="flex flex-wrap gap-3">
              {activeLinks.map((link) =>
                link.href.includes("[WRITE") ? (
                  <li key={link.href}>
                    <span className="inline-flex items-center gap-2 rounded-full border border-dashed border-border bg-surface px-4 py-2 font-medium">
                      {link.label}
                      <Inline text={link.href.slice(link.href.indexOf("[WRITE"))} />
                    </span>
                  </li>
                ) : (
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
                ),
              )}
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
