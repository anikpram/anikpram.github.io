import type { Metadata } from "next";
import {AcademicNav,AcademicFooter} from "../academic-components";

export const metadata: Metadata = {
  title: "Blog — Aniket Pramanik",
  description:
    "Writing on computational MRI and AI for medical imaging.",
};

type BlogPost = {
  title: string;
  date: string;
  topic: string;
  summary: string;
  href: string;
};

// Add future posts here; the page will automatically render each one as a link.
const posts: BlogPost[] = [{
  title: "The Rise of AI-driven Computational MRI: Transforming Radiology with Speed and Precision",
  date: "2026", topic: "MedicalTech Magazine",
  summary: "A perspective on accelerated MRI, learned reconstruction, and the scientific and clinical challenges of AI in radiology.",
  href: "https://themedicaltech.com/the-rise-of-ai-driven-computational-mri-transforming-radiology-with-speed-and-precision/",
}];

export default function BlogPage() {
  return (
    <main className="blog-page academic-writing">
      <AcademicNav />

      <header className="blog-hero shell">
        <p className="eyebrow">Articles & perspectives</p>
        <h1>Writing</h1>
        <div className="blog-intro">
          <p>
            Articles on computational MRI, image reconstruction, and AI in medical imaging.
          </p>
          <span>
            Perspectives for a broader audience, alongside my peer-reviewed research.
          </span>
        </div>
      </header>

      <section className="blog-index shell" aria-labelledby="blog-index-title">
        <div className="blog-index-head">
          <p className="section-label">All writing</p>
          <h2 id="blog-index-title">Latest posts</h2>
        </div>

        {posts.length ? (
          <div className="blog-list">
            {posts.map((post, index) => (
              <a className="blog-card" href={post.href} key={post.href}>
                <span className="blog-number">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <p>{post.topic} · {post.date}</p>
                  <h3>{post.title}</h3>
                  <span>{post.summary}</span>
                </div>
                <b aria-hidden="true">↗</b>
              </a>
            ))}
          </div>
        ) : (
          <div className="blog-empty">
            <p>First post in progress.</p>
            <h3>Thoughtful writing takes a little time.</h3>
            <span>
              New articles will appear here with direct links, publication dates,
              topics, and short summaries.
            </span>
          </div>
        )}
      </section>

      <footer className="blog-footer">
        <div className="shell">
          <p className="section-label">Explore further</p>
          <h2>Related research</h2>
          <div>
            <a href="/projects">View projects →</a>
            <a href="/">Return home ←</a>
          </div>
        </div>
      </footer>
    <AcademicFooter /></main>
  );
}
