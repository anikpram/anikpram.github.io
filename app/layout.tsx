import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.GITHUB_PAGES === "true"
      ? "https://anikpram.github.io"
      : "https://aniket-pramanik-research.agermanfan.chatgpt.site",
  ),
  title: "Aniket Pramanik — Medical Imaging Researcher",
  description:
    "Research Fellow in Medical Physics at Memorial Sloan Kettering Cancer Center. Physics-informed learning for MRI, industrial CT, and real-time image-guided radiotherapy.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: {
    title: "Aniket Pramanik — Computational Imaging Research",
    description:
      "Physics-informed image reconstruction, computational MRI, industrial CT, and MRI-guided radiotherapy.",
  },
  twitter: {
    card: "summary",
    title: "Aniket Pramanik — Computational Imaging Research",
    description: "Physics-informed image reconstruction, computational MRI, and inverse problems.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
