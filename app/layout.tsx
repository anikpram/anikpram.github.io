import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aniket Pramanik — Medical Imaging Researcher",
  description:
    "Research scientist working across computational imaging, computer vision, inverse problems, human–AI collaboration, and agentic systems.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
