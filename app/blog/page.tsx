import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — Aniket Pramanik",
  description:
    "Writing on computational imaging, computer vision, inverse problems, and human-centered AI.",
};

type BlogPost = {
  title: string;
  date: string;
  topic: string;
  summary: string;
  href: string;
};

// Add future posts here; the page will automatically render each one as a link.
const posts: BlogPost[] = [];

export default function BlogPage() {
  return (
    <main className="blog-page">
      <nav className="nav shell" aria-label="Blog navigation">
        <a className="brand" href="/" aria-label="Aniket Pramanik, home">AP<span>.</span></a>
        <div className="navlinks">
          <a href="/">Home</a>
          <a href="/projects">Projects</a>
          <a href="/#research">Research</a>
          <a href="https://scholar.google.com/citations?user=8z5UYtoAAAAJ&hl=en" target="_blank" rel="noreferrer">Scholar ↗</a>
        </div>
      </nav>

      <header className="blog-hero shell">
        <p className="eyebrow">Notes · ideas · perspectives</p>
        <h1>Research,<br /><em>in plain language.</em></h1>
        <div className="blog-intro">
          <p>
            Essays and working notes on computational imaging, computer vision,
            inverse problems, and how people collaborate with intelligent systems.
          </p>
          <span>
            A growing index of articles connecting technical ideas with the
            questions that motivate them.
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
          <h2>Until then,<br /><em>see the research.</em></h2>
          <div>
            <a href="/projects">View projects →</a>
            <a href="/">Return home ←</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
