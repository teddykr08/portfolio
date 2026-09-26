import type { Metadata, Viewport } from "next";
import { site } from "@/content/site";
import { displayFont } from "./fonts";
import "./globals.css";

function siteUrl() {
  if (site.url) return site.url;
  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercel) return `https://${vercel}`;
  return "http://localhost:3000";
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl()),
  title: site.name,
  description: site.metaDescription,
  openGraph: {
    type: "website",
    url: "/",
    siteName: site.name,
    title: site.name,
    description: site.metaDescription,
    ...(site.ogImage ? { images: [{ url: site.ogImage, width: 1200, height: 630, alt: site.name }] } : {}),
  },
  twitter: {
    card: site.ogImage ? "summary_large_image" : "summary",
    title: site.name,
    description: site.metaDescription,
    ...(site.ogImage ? { images: [site.ogImage] } : {}),
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f1e7" },
    { media: "(prefers-color-scheme: dark)", color: "#15130f" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={displayFont?.variable}>
      <body className="min-h-dvh antialiased">{children}</body>
    </html>
  );
}
