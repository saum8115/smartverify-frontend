import { useState } from 'react';
import { ArrowUpRight, ChevronDown, CheckCircle2, Menu, X, UserRoundCheck, HandCoins, Wallet, SearchCheck, FileCheck2, Handshake, BriefcaseBusiness, Database, Landmark, FileSearch, ContactRound, FileX2, BookOpen, Files, ShieldCheck, Truck, MonitorCheck, Facebook, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo.asset.json';
import hero from '@/assets/hero.asset.json';
import mobileUan from '@/assets/mobile-uan.asset.json';
import basic from '@/assets/uan-basic.asset.json';
import advanced from '@/assets/uan-advanced.asset.json';
import tds from '@/assets/tds.asset.json';
import combined from '@/assets/combined.asset.json';
import industries from '@/assets/industries.asset.json';
import cta from '@/assets/cta.asset.json';

const problems = [
  [UserRoundCheck, 'Slow HR Verification', 'Phone calls and unanswered emails can delay employment checks for days.'],
  [HandCoins, 'Easy-to-edit income proof', 'Payslips and documents can be manipulated, making fraud harder to detect.'],
  [Wallet, 'Delayed loan disbursals', 'Verification bottlenecks slow down lending decisions and customer onboarding.'],
  [SearchCheck, 'Lost candidates', 'Staffing agencies risk losing candidates to competitors with faster hiring processes.'],
  [FileCheck2, 'Incomplete income verification', "Payslips and bank statements don’t confirm where someone actually works."],
  [Handshake, 'Need for trusted records', 'Businesses need reliable employment and income data that applicants cannot alter.'],
] as const;
const steps = [
  [BriefcaseBusiness, 'Fetch employment records', 'Access UAN/EPFO records to verify employer details, joining and exit dates, and PF contribution history.'],
  [Database, 'Verify income data', 'Use employer-submitted TDS filings to retrieve available quarterly income information.'],
  [Landmark, 'Get structured results', 'Receive clean, machine-readable JSON that can plug directly into lending, onboarding, and HR workflows.'],
  [FileSearch, 'Test before going live', 'Use sandbox access to test the integration before connecting to live traffic.'],
] as const;
const apis = [
  { image: mobileUan.url, tag: 'Find UAN', title: 'Mobile to UAN Check', points: ['Find UAN using a registered mobile number', 'Useful when the applicant doesn’t know their UAN', 'Creates the starting point for deeper verification'] },
  { image: basic.url, tag: 'Verify Basic Employment', title: 'UAN Basic V3 / V4', points: ['Confirm whether an active UAN exists', 'Retrieve basic employer information', 'Quickly validate an applicant’s employment record'] },
  { image: advanced.url, tag: 'Verify Employment History', title: 'UAN Advanced V3 / V4', points: ['Access complete employment history', 'Get joining and exit dates with employer details', 'View PF contribution periods and amounts'] },
  { image: tds.url, tag: 'Validate Income', title: 'TDS Quarterly API', points: ['Verify income through employer-filed TDS returns', 'Get quarterly income information', 'Reduce reliance on editable income documents'] },
  { image: combined.url, tag: 'Build a Complete Profile', title: 'Combine UAN + TDS Verification', points: ['Connect employment and income data', 'Create a more complete applicant profile', 'Support lending, hiring, onboarding, and background checks'] },
];
const audiences = [
  [Landmark, 'Lenders & NBFCs', 'Verify income and employment before loan approval.'],
  [ContactRound, 'Staffing & Recruitment', 'Confirm candidate employment history faster.'],
  [Files, 'Banks & Card Issuers', 'Validate income beyond applicant-provided payslips.'],
  [ShieldCheck, 'Gig & Logistics Platforms', 'Verify worker employment during onboarding.'],
  [MonitorCheck, 'Insurance Providers', 'Validate employment and income for applications and claims.'],
] as const;
const benefits = [
  [ContactRound, 'Faster onboarding', 'Results return in seconds, so hiring and loan decisions don’t stall on a callback that may never come.'],
  [FileX2, 'Fewer forged documents', 'Data comes from EPFO and tax records, not files an applicant can edit.'],
  [BookOpen, 'Less manual work', 'No chasing reference numbers or waiting on another company’s HR desk.'],
  [Files, 'Cleaner audit trails', 'Structured JSON responses are easy to log and reference if a decision gets questioned later.'],
] as const;
const questions = [
  ['What is UAN verification, and why does it matter for employment checks?', 'UAN verification checks an applicant’s employment records using their Universal Account Number. It helps validate employer details and employment history against EPFO records.'],
  ['Is there a way to verify income without contacting the applicant’s employer?', 'The TDS Quarterly API uses employer-filed TDS returns to retrieve available quarterly income information, without a manual call to the employer.'],
  ['What is the difference between the UAN Basic and UAN Advanced APIs?', 'UAN Basic validates an active UAN and basic employer information. UAN Advanced provides employment history, joining and exit dates, and PF contribution periods and amounts.'],
  ['How to use the TDS Quarterly API for income verification?', 'Use the TDS Quarterly API to retrieve available employer-filed income data and combine it with employment verification for a more complete applicant profile.'],
  ['How fast do these verification APIs return results?', 'These APIs are designed to return results in seconds. Availability and response times depend on the underlying records and service.'],
  ['How is SmartVerify different from other verification providers?', 'SmartVerify brings employment and income verification together with structured responses for lending, hiring, and onboarding workflows.'],
];
const nav = [
  ['Products', [['Employee & Income Verification', 'apis'], ['UAN Verification', 'apis'], ['TDS Quarterly API', 'apis']]],
  ['Industries', [['Lenders & NBFCs', 'industries'], ['Staffing & Recruitment', 'industries'], ['Insurance Providers', 'industries']]],
  ['Use case', [['Employment checks', 'process'], ['Income verification', 'process'], ['Onboarding', 'benefits']]],
  ['Resources', [['API Documentation', 'apis'], ['FAQs', 'faq']]],
] as const;

function scrollToSection(id: string) { document.getElementById(id)?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block: 'start' }); }

export function SmartVerify() {
  const [menu, setMenu] = useState<string | null>(null);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [faq, setFaq] = useState<number | null>(null);
  const [dialog, setDialog] = useState(false);
  const [selectedApi, setSelectedApi] = useState<number | null>(null);
  const demo = () => setDialog(true);
  return <>
    <header className="site-header">
      <div className="announcement"><span>10+ years of powering businesses with secure Banking, Payments, Travel, and Verification APIs.</span><Button variant="ghost" className="announcement-button" onClick={demo}>Book A Demo</Button></div>
      <div className="nav-shell"><a href="#" aria-label="SmartVerify home"><img className="brand-logo" src={logo.url} alt="SmartVerify" /></a>
        <nav className={mobileMenu ? 'main-nav is-open' : 'main-nav'} aria-label="Main navigation">
          {nav.map(([label, items]) => <div className="nav-item" key={label}><Button variant="ghost" className="nav-button" aria-expanded={menu === label} onClick={() => setMenu(menu === label ? null : label)}>{label}<ChevronDown /></Button>{menu === label && <div className="nav-dropdown">{items.map(([text, target]) => <Button variant="ghost" key={text} onClick={() => { scrollToSection(target); setMenu(null); setMobileMenu(false); }}>{text}</Button>)}</div>}</div>)}
          <Button className="sales-button" onClick={demo}>Talk to Sales</Button>
        </nav><Button variant="ghost" size="icon" className="mobile-toggle" aria-label={mobileMenu ? 'Close navigation' : 'Open navigation'} onClick={() => setMobileMenu(!mobileMenu)}>{mobileMenu ? <X /> : <Menu />}</Button>
      </div>
    </header>
    <main>
      <section className="hero-section"><div className="content-width hero-layout"><div className="hero-copy"><h1>Employee &amp; Income Verification<br className="desktop-break" /> APIs for Faster Hiring</h1><p>SmartVerify’s Employee &amp; Income Verification APIs replace estimation with data pulled directly from UAN records, EPFO contribution history, and TDS filings. Businesses get a job history and income picture in a short time, and they get it without leaning on the candidate or applicant to hand over anything more.</p><div className="hero-actions"><Button className="documentation-button" onClick={() => scrollToSection('apis')}>View Documentation</Button><DemoButton onClick={demo} /></div></div><img className="hero-visual" src={hero.url} alt="Employee holding a laptop with employment and income verification checks" /></div></section>
      <section className="problem-section"><div className="content-width"><h2>Why Manual Employment<br />Checks Slow Everyone Down</h2><p className="section-intro">Manual verification creates delays, fraud risks, and missed opportunities.</p><div className="problem-grid">{problems.map(([Icon, title, text]) => <article key={title}><Icon className="feature-icon" /><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
      <section id="process" className="section-band"><div className="content-width"><div className="section-heading"><h2>How Our Employee &amp; Income<br />Verification Works</h2><p>Verify employment and income using trusted records with fast, integration-ready results.</p></div><div className="four-column">{steps.map(([Icon, title, text]) => <article key={title}><Icon className="feature-icon" /><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
      <section id="apis" className="section-band api-section"><div className="content-width"><div className="section-heading"><h2>Our APIs Behind Employee &amp;<br />Income Verification</h2><p>A complete verification flow, from finding the employee record to validating income.</p></div><div className="api-list">{apis.map((api, index) => <article className="api-card" key={api.title}><Button variant="ghost" className="api-image-button" aria-label={`View ${api.title} preview`} onClick={() => setSelectedApi(index)}><img src={api.image} alt={`${api.title} dashboard preview`} loading="lazy" /></Button><div><span className="api-tag">{api.tag}</span><h3>{api.title}</h3><ul>{api.points.map(point => <li key={point}><CheckCircle2 />{point}</li>)}</ul></div></article>)}</div></div></section>
      <section id="industries" className="section-band industries-section"><div className="content-width"><h2>Who Actually Uses These APIs</h2><p className="audience-intro">Business Verification APIs work anywhere a company, vendor, or MSME needs to be<br className="desktop-break" /> checked before money or contracts change hands:</p><div className="audience-layout"><div className="audience-list">{audiences.map(([Icon, title, text], i) => <article className={`audience-item audience-${i}`} key={title}><Icon /><div><h3>{title}</h3><p>{text}</p></div></article>)}</div><img className="audience-image" src={industries.url} alt="Verification services for banking, staffing, logistics and insurance" loading="lazy" /></div></div></section>
      <section id="benefits" className="section-band benefits-section"><div className="content-width"><h2>Benefits of Employee &amp;<br />Income Verification APIs</h2><p className="section-intro">Every API in this set returns a straightforward benefit, not just a data field</p><div className="four-column">{benefits.map(([Icon, title, text]) => <article key={title}><Icon className="feature-icon" /><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
      <section className="cta-section"><div className="content-width cta-layout"><div><h2>Get Started with Employee<br />Verification APIs</h2><p>Integration follows the same path as SmartVerify’s other verification APIs: sign up for API access, generate a key, and test each endpoint in the sandbox environment before moving to production. Documentation covers request and response formats for every API listed above, so a developer can have UAN or TDS verification running in a test environment within a day.</p><DemoButton onClick={demo} /></div><img src={cta.url} alt="Secure verification documents" loading="lazy" /></div></section>
      <section id="faq" className="faq-section"><div className="content-width faq-layout"><h2>Frequently Asked<br />Questions</h2><div className="faq-list">{questions.map(([question, answer], index) => <div className="faq-item" key={question}><Button variant="ghost" className="faq-button" aria-expanded={faq === index} aria-controls={`faq-${index}`} onClick={() => setFaq(faq === index ? null : index)}>{question}<ChevronDown className={faq === index ? 'rotate-180' : ''} /></Button>{faq === index && <p id={`faq-${index}`}>{answer}</p>}</div>)}</div></div></section>
    </main>
    <footer><div className="content-width"><div className="footer-grid"><div className="footer-brand"><img className="brand-logo" src={logo.url} alt="SmartVerify" /><p>Extra onboarding steps turn your customers away. SmartVerify’s APIs instantly check identities, documents, and businesses, letting real users pass while blocking fraud.</p></div>{[['Products', 'OCR API PAN', 'Aadhaar OCR API', 'OCR API Check', 'OCR API GST'], ['Industries', 'Fintech', 'B2B SaaS', 'Banking & Financial Services', 'Education', 'Insurance', 'Logistics'], ['Resources', 'Blog', 'FAQs', 'API Documentations'], ['Company', 'About Us', 'Contact Sales']].map(([title, ...items]) => <div className="footer-column" key={title}><h3>{title}</h3>{items.map(item => <Button variant="link" key={item} onClick={() => item === 'Contact Sales' ? demo() : scrollToSection(item === 'FAQs' ? 'faq' : title === 'Industries' ? 'industries' : 'apis')}>{item}</Button>)}</div>)}</div><div className="footer-bottom"><small>Copyright ©2026 SmartVerify</small><div className="social-icons"><Facebook /><span aria-label="X">𝕏</span><Instagram /></div></div></div></footer>
    {dialog && <div className="modal-backdrop" onClick={() => setDialog(false)}><section role="dialog" aria-modal="true" aria-labelledby="demo-title" className="demo-modal" onClick={event => event.stopPropagation()}><Button variant="ghost" size="icon" className="modal-close" aria-label="Close demo request" onClick={() => setDialog(false)}><X /></Button><h2 id="demo-title">Book a Demo</h2><p>Employee &amp; Income Verification APIs</p><form onSubmit={event => event.preventDefault()}><label>Full name<input name="name" autoComplete="name" required /></label><label>Work email<input name="email" type="email" autoComplete="email" required /></label><label>Company<input name="company" autoComplete="organization" required /></label><p className="form-note">Demo requests are not connected yet. Please contact your SmartVerify representative to arrange a demo.</p><Button type="button" onClick={() => setDialog(false)}>Close</Button></form></section></div>}
    {selectedApi !== null && <div className="modal-backdrop" onClick={() => setSelectedApi(null)}><section role="dialog" aria-modal="true" aria-label={apis[selectedApi]?.title} className="preview-modal" onClick={event => event.stopPropagation()}><Button variant="ghost" size="icon" className="modal-close" aria-label="Close API preview" onClick={() => setSelectedApi(null)}><X /></Button><h2>{apis[selectedApi]?.title}</h2><img src={apis[selectedApi]?.image} alt={`${apis[selectedApi]?.title} dashboard`} /></section></div>}
  </>;
}

function DemoButton({ onClick }: { onClick: () => void }) { return <Button className="demo-button" onClick={onClick}>Book a Demo<span><ArrowUpRight /></span></Button>; }