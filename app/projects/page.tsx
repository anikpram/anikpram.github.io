import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects — Aniket Pramanik",
  description:
    "Visual project stories spanning model-based deep learning, inverse problems, MRI reconstruction, and unsupervised learning.",
};

const projects = [
  {
    index: "01",
    year: "2023",
    journal: "IEEE Transactions on Computational Imaging",
    title: "Memory-Efficient Model-Based Deep Learning",
    short: "Monotone operator learning for inverse problems with convergence and robustness guarantees.",
    challenge:
      "Modern unrolled reconstruction networks can deliver excellent results, but their memory usage grows with every iteration—making large 3D and dynamic inverse problems difficult to train.",
    method:
      "We formulated reconstruction as a deep-equilibrium problem and constrained the learned score operator to be monotone. The resulting fixed point is unique, stable to perturbations, and substantially more memory efficient.",
    impact:
      "The framework makes theoretically grounded learning practical for high-dimensional imaging problems that exceed the memory limits of conventional unrolled networks.",
    tags: ["Deep equilibrium", "Monotone operators", "Robust inverse problems"],
    media: "monotone-operator-learning",
    paper: "https://doi.org/10.1109/TCI.2023.3252268",
  },
  {
    index: "02",
    year: "2023",
    journal: "IEEE Transactions on Medical Imaging",
    title: "ENSURE",
    short: "Unsupervised training of deep reconstruction algorithms without clean ground truth.",
    challenge:
      "Fully sampled, noise-free training images are often expensive—or physically impossible—to acquire in medical and scientific imaging.",
    method:
      "ENSURE generalizes Stein’s unbiased risk estimation across randomly varying measurement operators, providing a training objective that estimates true reconstruction error from incomplete, noisy observations.",
    impact:
      "Networks trained without clean targets approach supervised reconstruction quality, extending learned reconstruction to data-limited inverse problems.",
    tags: ["Unsupervised learning", "MRI reconstruction", "Risk estimation"],
    media: "ensure",
    paper: "https://doi.org/10.1109/TMI.2022.3224359",
  },
  {
    index: "03",
    year: "2020",
    journal: "IEEE Transactions on Medical Imaging",
    title: "Deep-SLR",
    short: "A deep generalization of structured low-rank algorithms for calibrationless parallel MRI.",
    challenge:
      "Structured low-rank reconstruction is powerful and interpretable, but repeatedly estimating annihilation relations through matrix completion is computationally intensive.",
    method:
      "Deep-SLR learns a nonlinear convolutional filterbank that predicts annihilation relations from imperfect k-space measurements while preserving the physics and structure of the original model.",
    impact:
      "The approach reduces reconstruction time by roughly three orders of magnitude while remaining insensitive to calibration and motion errors.",
    tags: ["Parallel MRI", "Structured low rank", "Calibrationless recovery"],
    media: "deep-slr",
    paper: "https://doi.org/10.1109/TMI.2020.3014581",
  },
  {
    index: "04",
    year: "2021",
    journal: "ISMRM · Summa Cum Laude Merit Award",
    title: "Image Domain Deep-SLR",
    short: "Joint reconstruction and segmentation from undersampled parallel MRI.",
    challenge:
      "Reconstruction artifacts can propagate into downstream segmentation, while independently trained models miss useful feedback between the two tasks.",
    method:
      "An image-domain Deep-SLR reconstruction network and segmentation network are trained end-to-end, allowing anatomical supervision to improve reconstruction and sharper reconstructions to improve segmentation.",
    impact:
      "The joint system reduces overfitting and segmentation error while preserving sharper anatomical detail from highly undersampled measurements.",
    tags: ["Joint learning", "Segmentation", "Parallel MRI"],
    media: "image-domain-deep-slr",
    paper: "https://archive.ismrm.org/2021/0393.html",
  },
  {
    index: "05",
    year: "2019",
    journal: "IEEE ISBI · Best Machine Learning Paper",
    title: "O-MODL",
    short: "Off-the-grid model-based learning of continuous-domain image priors.",
    challenge:
      "Continuous-domain structured low-rank methods handle discretization more naturally than grid-based models, but their iterative self-learning is slow.",
    method:
      "O-MODL unrolls an off-the-grid recovery algorithm and replaces its linear Fourier-domain denoiser with a compact learned nonlinear convolutional network.",
    impact:
      "The model retains explicit data consistency and continuous-domain structure while dramatically reducing reconstruction time and training-data demand.",
    tags: ["Continuous domain", "Fourier learning", "Model-based deep learning"],
    media: "omodl",
    paper: "https://arxiv.org/abs/1812.10747",
  },
];

export default function ProjectsPage() {
  return (
    <main className="projects-page">
      <nav className="nav shell" aria-label="Project navigation">
        <a className="brand" href="/" aria-label="Aniket Pramanik, home">AP<span>.</span></a>
        <div className="navlinks">
          <a href="/">Home</a>
          <a href="/#research">Research</a>
          <a href="/#work">Selected work</a>
          <a href="https://scholar.google.com/citations?user=8z5UYtoAAAAJ&hl=en" target="_blank" rel="noreferrer">Scholar ↗</a>
        </div>
      </nav>

      <header className="projects-hero shell">
        <p className="eyebrow">Selected projects · visual stories</p>
        <h1>Inside the work.</h1>
        <div className="projects-intro">
          <p>
            Five projects exploring how physical models, learned priors, and
            reliable optimization can recover more from less data.
          </p>
          <span>Paper figures are shown with motion treatments for exploration.</span>
        </div>
      </header>

      <div className="project-stories">
        {projects.map((project, i) => (
          <article className="project-story" id={`project-${project.index}`} key={project.title}>
            <div className="shell">
              <header className="project-heading">
                <div className="project-number">{project.index}</div>
                <div>
                  <p className="project-kicker">{project.year} · {project.journal}</p>
                  <h2>{project.title}</h2>
                  <p className="project-short">{project.short}</p>
                </div>
              </header>

              <div className="project-media">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload={i < 2 ? "auto" : "metadata"}
                  poster={`/projects/${project.media}.jpg`}
                  aria-label={`Animated figure study for ${project.title}`}
                >
                  <source src={`/projects/${project.media}.mp4`} type="video/mp4" />
                </video>
                <div className="media-caption">
                  <span>Figure motion study</span>
                  <span>Derived from the published paper</span>
                </div>
              </div>

              <div className="project-details">
                <div><span>Challenge</span><p>{project.challenge}</p></div>
                <div><span>Approach</span><p>{project.method}</p></div>
                <div><span>Impact</span><p>{project.impact}</p></div>
              </div>

              <footer className="project-footer">
                <div>{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                <a href={project.paper} target="_blank" rel="noreferrer">Read the paper ↗</a>
              </footer>
            </div>
          </article>
        ))}
      </div>

      <footer className="projects-end">
        <div className="shell">
          <p className="section-label">Continue exploring</p>
          <h2>Research is a<br /><em>work in motion.</em></h2>
          <div>
            <a href="/">Return home ←</a>
            <a href="https://scholar.google.com/citations?user=8z5UYtoAAAAJ&hl=en" target="_blank" rel="noreferrer">All publications ↗</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
