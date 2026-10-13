import type {Metadata} from 'next';
import {AcademicNav,AcademicFooter} from '../academic-components';
import {studies} from './project-studies';

export const metadata:Metadata={title:'Research projects — Aniket Pramanik',description:'Paper figures and clear explanations of monotone operator learning, ENSURE, Deep-SLR, 2.5D CT reconstruction, and O-MoDL.'};
type PaperFigure = (typeof studies)[number]['methodFigure'];
function Figure({figure,manuscript,kind}:{figure:PaperFigure;manuscript:string;kind:'method'|'evidence'}){
  const src=`/paper-figures/${figure.file}.png`;
  return <figure className={`paper-figure paper-figure-${kind}`} id={figure.file}>
    <div className="paper-figure-image"><a href={src} target="_blank" rel="noreferrer" aria-label={`Open full-size ${figure.label}: ${figure.alt}`}><img src={src} alt={figure.alt} width={figure.width} height={figure.height} loading="lazy" /></a></div>
    <figcaption><strong>{figure.label}.</strong> {figure.caption}<span className="paper-figure-links"><a href={src} target="_blank" rel="noreferrer">Open full-size figure ↗</a><a href={`${manuscript}#page=${figure.page}`} target="_blank" rel="noreferrer">Figure in the paper ↗</a></span><span className="paper-mobile-hint">Swipe across wide figures to compare panels.</span></figcaption>
  </figure>;
}

export default function ProjectsPage(){return <main className="academic-home paper-projects"><AcademicNav />
  <header className="academic-page-header shell" id="top-of-projects"><p className="academic-eyebrow">Selected research</p><h1>Research projects</h1><p>How the methods work, what the experiments show, and where the results apply.</p><nav className="paper-project-index" aria-label="Jump to a project">{studies.map((p,i)=><a href={`#${p.id}`} key={p.id}><span>0{i+1}</span>{p.shortName}</a>)}</nav></header>
  {studies.map((p,i)=><article className="paper-study shell" id={p.id} key={p.id}>
    <header className="paper-study-header"><p className="academic-eyebrow">0{i+1} / {p.year} / {p.venue}</p><h2>{p.title}</h2><p className="paper-takeaway">{p.takeaway}</p></header>
    <div className="paper-method-layout"><div className="paper-explanation"><h3>The problem</h3><p>{p.why}</p><h3>The approach</h3><ol>{p.steps.map(step=><li key={step}>{step}</li>)}</ol></div><div><p className="paper-figure-heading">The method in the paper</p><Figure figure={p.methodFigure} manuscript={p.manuscript} kind="method" /></div></div>
    <section className="paper-evidence"><h3>What the experiments show</h3><p>{p.findings}</p><p className="paper-reading-guide"><strong>How to read the figure.</strong> {p.lookFor}</p><Figure figure={p.evidenceFigure} manuscript={p.manuscript} kind="evidence" /></section>
    <div className="paper-scope"><h3>Scope of the result</h3><p>{p.scope}</p></div>
    <footer className="paper-citation"><p>{p.citation}</p><div><a href={p.paper} target="_blank" rel="noreferrer">Publication ↗</a><a href={p.manuscript} target="_blank" rel="noreferrer">Read the full manuscript ↗</a><a href="#top-of-projects">Back to project list ↑</a></div></footer>
  </article>)}
  <div className="shell paper-projects-end"><a href="/publications">Full bibliography →</a><a href="/">About my research →</a></div><AcademicFooter /></main>;}
