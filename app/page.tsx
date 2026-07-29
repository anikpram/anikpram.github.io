const links = {
  scholar: "https://scholar.google.com/citations?user=8z5UYtoAAAAJ&hl=en",
  github: "https://github.com/anikpram",
  linkedin: "https://www.linkedin.com/in/aniket-pramanik-15b27378/",
  email: "mailto:aniketpramanik16@gmail.com",
};

const research = [
  {
    number: "01",
    title: "MRI-guided radiotherapy",
    copy: "Fast, motion-aware imaging methods that make adaptive treatment guidance more precise and clinically practical.",
  },
  {
    number: "02",
    title: "Computational MRI",
    copy: "Model-driven reconstruction that combines imaging physics with modern optimization and learned priors.",
  },
  {
    number: "03",
    title: "AI for medical imaging",
    copy: "Robust learning systems for reconstruction, segmentation, and decision support across MRI and CT.",
  },
];

const work = [
  {
    year: "2021",
    tag: "MRI reconstruction · segmentation",
    title: "Image Domain Deep-SLR",
    copy: "A structured deep-learning approach for joint reconstruction and segmentation of parallel MRI.",
    note: "ISMRM Summa Cum Laude Merit Award",
    href: "https://archive.ismrm.org/2021/0393.html",
  },
  {
    year: "2019",
    tag: "Model-based deep learning",
    title: "Off-the-grid model based deep learning",
    copy: "A continuous-domain model-based framework for learning compact, interpretable image representations.",
    note: "IEEE ISBI Best Machine Learning Paper",
    href: "https://arxiv.org/abs/1812.10747",
  },
  {
    year: "Open source",
    tag: "Research software",
    title: "Reproducible imaging methods",
    copy: "Implementations of Deep-SLR, O-MODL, cardiac cine MRI segmentation, and operator-learning research.",
    note: "Available on GitHub",
    href: "https://github.com/anikpram?tab=repositories",
  },
];

export default function Home() {
  return (
    <main>
      <nav className="nav shell" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Aniket Pramanik, home">
          AP<span>.</span>
        </a>
        <div className="navlinks">
          <a href="#research">Research</a>
          <a href="#work">Selected work</a>
          <a href="#experience">Experience</a>
          <a href={links.scholar} target="_blank" rel="noreferrer">Scholar ↗</a>
        </div>
      </nav>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Research scientist · New York City</p>
          <h1>
            Imaging the future
            <br />
            <em>of precision care.</em>
          </h1>
          <p className="lede">
            I’m Aniket Pramanik, a medical imaging researcher building fast,
            robust computational methods for MRI-guided radiotherapy.
          </p>
          <div className="actions">
            <a className="button primary" href="#work">Explore my work</a>
            <a className="button text" href={links.email}>Get in touch <span>↗</span></a>
          </div>
        </div>
        <div className="portrait-wrap">
          <div className="portrait-frame">
            <img src="/aniket-pramanik.png" alt="Portrait of Aniket Pramanik" />
          </div>
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <p className="portrait-label">
            Medical Physics
            <span>Memorial Sloan Kettering Cancer Center</span>
          </p>
        </div>
        <div className="scroll-note" aria-hidden="true">Scroll to discover <span>↓</span></div>
      </section>

      <section className="statement">
        <div className="shell statement-inner">
          <p className="section-label">The focus</p>
          <p className="big-statement">
            Bridging <em>imaging physics</em> and artificial intelligence to
            see more clearly, reconstruct more rapidly, and guide treatment
            with confidence.
          </p>
        </div>
      </section>

      <section className="section shell" id="research">
        <header className="section-head">
          <p className="section-label">Research directions</p>
          <h2>Where computation<br />meets the clinic.</h2>
        </header>
        <div className="research-grid">
          {research.map((item) => (
            <article className="research-card" key={item.number}>
              <span>{item.number}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section work-section" id="work">
        <div className="shell">
          <header className="section-head row">
            <div>
              <p className="section-label">Selected work</p>
              <h2>Methods with<br />measurable impact.</h2>
            </div>
            <a className="inline-link" href={links.scholar} target="_blank" rel="noreferrer">
              All publications on Scholar ↗
            </a>
          </header>
          <div className="work-list">
            {work.map((item) => (
              <a className="work-card" href={item.href} target="_blank" rel="noreferrer" key={item.title}>
                <div className="work-meta"><span>{item.year}</span><span>{item.tag}</span></div>
                <div className="work-main"><h3>{item.title}</h3><p>{item.copy}</p></div>
                <div className="work-note"><span>{item.note}</span><b>↗</b></div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section shell" id="experience">
        <header className="section-head">
          <p className="section-label">Path so far</p>
          <h2>Across disciplines,<br />toward better images.</h2>
        </header>
        <div className="timeline">
          <article>
            <div><span>Present</span><i /></div>
            <div><h3>Research Fellow · Medical Physics</h3><p>Memorial Sloan Kettering Cancer Center · New York</p></div>
            <p>MRI-guided radiotherapy, computational MRI, and AI/ML for treatment guidance.</p>
          </article>
          <article>
            <div><span>Postdoctoral</span><i /></div>
            <div><h3>Postdoctoral Research Associate</h3><p>Oak Ridge National Laboratory · Tennessee</p></div>
            <p>High-resolution CT reconstruction for additively manufactured components.</p>
          </article>
          <article>
            <div><span>PhD</span><i /></div>
            <div><h3>Electrical &amp; Computer Engineering</h3><p>University of Iowa · Iowa City</p></div>
            <p>Computational imaging research under the supervision of Prof. Mathews Jacob.</p>
          </article>
        </div>
      </section>

      <section className="aside">
        <div className="shell aside-grid">
          <div>
            <p className="section-label">Beyond the lab</p>
            <h2>Long runs.<br />Good songs.<br />New ideas.</h2>
          </div>
          <p>
            Creative work needs room to breathe. Outside research, I run trails
            and half marathons, and occasionally record songs—pursuits that keep
            curiosity, endurance, and play in balance.
          </p>
        </div>
      </section>

      <footer className="footer">
        <div className="shell footer-top">
          <p className="section-label">Let’s connect</p>
          <h2>Have an idea worth<br /><em>seeing through?</em></h2>
          <a className="circle-link" href={links.email} aria-label="Email Aniket Pramanik">↗</a>
        </div>
        <div className="shell footer-bottom">
          <p>© {new Date().getFullYear()} Aniket Pramanik</p>
          <div>
            <a href={links.scholar} target="_blank" rel="noreferrer">Google Scholar</a>
            <a href={links.github} target="_blank" rel="noreferrer">GitHub</a>
            <a href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </main>
  );
}
