import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aniket Pramanik — Medical Imaging Researcher",
  description:
    "Research scientist working across computational imaging, computer vision, inverse problems, human–AI collaboration, and agentic systems.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: {
    title: "Aniket Pramanik — Computational Imaging, Vision & Human–AI Systems",
    description:
      "Research across computational imaging, computer vision, inverse problems, human–AI collaboration, and agentic systems.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Aniket Pramanik academic research website" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aniket Pramanik — Computational Imaging, Vision & Human–AI Systems",
    description: "Computational imaging, computer vision, inverse problems, and human–AI systems.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
