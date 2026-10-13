import type {Metadata} from 'next';
import {AcademicNav,AcademicFooter,scholar} from '../academic-components';
import PublicationBrowser from './publication-browser';
export const metadata:Metadata={title:'Publications — Aniket Pramanik',description:'Journal articles, conference papers, meeting abstracts, patents, and dissertation by Aniket Pramanik.'};
export default function PublicationsPage(){return <main className="academic-home"><AcademicNav /><header className="academic-page-header shell"><p className="academic-eyebrow">Research bibliography</p><h1>Publications</h1><p>Image reconstruction, computational MRI, industrial CT, and earlier research in communications and signal processing.</p><a href={scholar} target="_blank" rel="noreferrer">Google Scholar profile ↗</a></header><PublicationBrowser /><AcademicFooter /></main>;}
