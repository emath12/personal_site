import Layout from "./Layout.tsx";

const EXPERIENCE = [
  {
    title: "Software Engineer, Distributed Systems",
    org: "Netflix",
    meta: "Aug 2025 – Present · Los Gatos, CA",
    subtitle:
      "Function-as-a-service platform: a Go rewrite of the runtime, cold-start latency, and the migration to native Kubernetes.",
  },
  {
    title: "Software Engineer Intern, Fullstack",
    org: "Netflix",
    meta: "Summer 2024",
    subtitle:
      "Telemetry tooling (React, GraphQL, Java) giving media encoding engineers real-time visibility into pipeline runs.",
  },
  {
    title: "Software Engineer Intern",
    org: "Procter & Gamble",
    meta: "Summer 2023",
    subtitle:
      "A data reconciliation tool (Next.js, FastAPI, BigQuery) for mapping millions of ad spend records.",
  },
  {
    title: "Undergraduate Research Assistant",
    org: "Yale Efficient Computing Lab",
    meta: "Jun 2022 – Jan 2023",
    subtitle: "Optimized transmission paths in a Rust network driver.",
  },
];

const PROJECTS = [
  {
    title: "ymeets",
    link: "https://ymeets.com",
    meta: "React, TypeScript, Firebase",
    subtitle:
      "Scheduling for Yale students, built with a team of 7+ developers.",
  },
  {
    title: "Yale Computer Society website",
    link: "https://www.yalecomputersociety.org",
    meta: "yalecomputersociety.org",
    subtitle: "The website for Yale's student computer science society.",
  },
];

export default function Home() {
  return (
    <Layout>
      <p className="intro">
        Hi, I'm Ethan. I'm a software engineer on distributed systems at
        Netflix, working on our function-as-a-service platform.
      </p>

      <h2 className="section-heading">Experience</h2>
      <ul className="entry-list">
        {EXPERIENCE.map((e) => (
          <li key={e.title + e.org}>
            <span className="entry-meta">{e.meta}</span>
            <h3 className="entry-link">
              {e.title}, {e.org}
            </h3>
            <p className="entry-subtitle">{e.subtitle}</p>
          </li>
        ))}
      </ul>

      <h2 className="section-heading">Projects</h2>
      <ul className="entry-list">
        {PROJECTS.map((p) => (
          <li key={p.title}>
            <span className="entry-meta">{p.meta}</span>
            <a className="entry-link" href={p.link} target="_blank" rel="noreferrer">
              {p.title}
            </a>
            <p className="entry-subtitle">{p.subtitle}</p>
          </li>
        ))}
      </ul>
      <p>
        More on <a href="https://github.com/emath12">GitHub</a>.
      </p>
    </Layout>
  );
}
