/**
 * Display font slot (headings, your name).
 *
 * By default the site uses a classic serif stack defined in globals.css
 * (--font-display-stack). To use your own font file:
 *
 *   1. Put the file in public/fonts/, e.g. public/fonts/display.woff2
 *   2. Replace the `displayFont` line below with:
 *
 *        import localFont from "next/font/local";
 *        export const displayFont: { variable: string } | null = localFont({
 *          src: "../public/fonts/display.woff2",
 *          variable: "--font-display-custom",
 *          display: "swap",
 *        });
 *
 * Or a Google font:
 *
 *        import { Fraunces } from "next/font/google";
 *        export const displayFont: { variable: string } | null = Fraunces({
 *          subsets: ["latin"],
 *          variable: "--font-display-custom",
 *          display: "swap",
 *        });
 */
export const displayFont: { variable: string } | null = null;
