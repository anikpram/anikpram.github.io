import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aniket Pramanik — Medical Imaging Researcher",
  description:
    "Research scientist working at the intersection of computational MRI, MRI-guided radiotherapy, and artificial intelligence.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
