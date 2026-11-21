import Layout from "./Layout.tsx";
import Yahaha from "./EasterEggs.tsx";
import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi";

const PRESS = [
  {
    title: "Netflix Stratum Media Processing: Automated Container Right-Sizing",
    link: "https://netflixtechblog.com/netflix-stratum-media-processing-automated-container-right-sizing-ddf9aa68a801",
    subtitle:
      "How Netflix safely downsizes containers, with the memory watcher I built as the safety net.",
    tags: ["Netflix Tech Blog"],
  },
  {
    title: "Ethan Mathieu '25: From campus apps to Netflix",
    link: "https://engineering.yale.edu/news-and-events/news/ethan-mathieu-25-campus-apps-netflix",
    subtitle: "A Yale Engineering profile on my path from Yale to Netflix.",
    tags: ["Yale Engineering"],
  },
];

const READING = [
  {
    kind: "Tech",
    title: "Designing Data-Intensive Applications (2nd ed.)",
    author: "Martin Kleppmann & Chris Riccomini",
  },
  {
    kind: "Fiction",
    title: "Babel",
    author: "R. F. Kuang",
  },
  {
    kind: "Non-fiction",
    title: "Liberty or Death: The French Revolution",
    author: "Peter McPhee",
  },
];

const PROJECTS = [
  {
    title: "ymeets",
    link: "https://ymeets.com",
    subtitle:
      "Scheduling for Yale students, built with a team of 7+ developers.",
    tags: ["React", "TypeScript", "Firebase"],
  },
  {
    title: "Yale Computer Society website",
    link: "https://www.yalecomputersociety.org",
    subtitle: "The website for Yale's student computer science society.",
    tags: ["Web"],
  },
];

function CardList({ items }) {
  return (
    <div className="cards">
      {items.map((p) => (
        <a
          key={p.title}
          className="card"
          href={p.link}
          target="_blank"
          rel="noreferrer"
        >
          <h3>{p.title}</h3>
          <p>{p.subtitle}</p>
          <div className="tags">
            {p.tags.map((t) => (
              <span key={t} className="tag">
                {t}
              </span>
            ))}
          </div>
        </a>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <Layout>
      <div className="top">
        <Yahaha />
        <section className="hero">
          <h1>Ethan Mathieu</h1>
          <p>
            Distributed Systems Engineer at <strong>Netflix</strong> · Yale CS '25
          </p>
          <div className="socials">
            <a href="mailto:ethanmathieu120@gmail.com" aria-label="Email" title="Email">
              <FiMail size={20} />
            </a>
            <a href="https://github.com/emath12" aria-label="GitHub" title="GitHub">
              <FiGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/ethan-mathieu/"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <FiLinkedin size={20} />
            </a>
          </div>
        </section>
        <details className="now-reading">
          <summary>Currently reading</summary>
          <ul>
            {READING.map((b) => (
              <li key={b.title} title={`${b.title} by ${b.author}`}>
                <span className="book-kind">{b.kind}</span> {b.title}
              </li>
            ))}
          </ul>
        </details>
      </div>

      <section className="bio">
        <p>Hello, I'm Ethan.</p>
        <p>
          I'm a distributed systems engineer at Netflix. My team owns
          the function-as-a-service platform behind media processing, as well as the
          distributed queue behind{" "}
          <a href="https://netflixtechblog.com/netflix-conductor-a-microservices-orchestrator-2e8d4771bf40">
            Conductor
          </a>
          , Netflix's workflow engine. My main focus is cutting function
          startup latency by writing performant Go and structuring our runtime
          around native Kubernetes components. I also specialize in
          resource efficiency, and I've built tools that save
          millions of dollars a year in encoding costs.
        </p>
        <p>
          I graduated from Yale in 2025 with a B.S. in Computer Science with
          Honors and a certificate in Data Science. There, I did research in
          the Yale Efficient Computing Lab, was Vice President of the Yale
          Computer Society, and advised the Dean of Engineering.
        </p>
        <p>
          I mostly work in Go, Java, and Python, with Kubernetes, Docker,
          and Kafka. Feel free to reach out at{" "}
          <a href="mailto:ethanmathieu120@gmail.com">ethanmathieu120@gmail.com</a>;
          I'm always happy to chat.
        </p>
      </section>

      <h2 className="section-heading">Writing</h2>
      <CardList items={PRESS} />

      <h2 className="section-heading">Projects</h2>
      <CardList items={PROJECTS} />
    </Layout>
  );
}
