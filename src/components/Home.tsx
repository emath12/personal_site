import Layout from "./Layout.tsx";
import EasterEggs from "./EasterEggs.tsx";

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
      <EasterEggs />
      <section className="hero">
        <h1>Ethan Mathieu</h1>
        <p>
          Distributed Systems Engineer at <strong>Netflix</strong> · Yale CS '25
        </p>
        <div className="pills">
          <a className="pill" href="mailto:ethanmathieu120@gmail.com">
            Email
          </a>
          <a className="pill" href="https://github.com/emath12">
            GitHub
          </a>
          <a className="pill" href="https://www.linkedin.com/in/ethan-mathieu/">
            LinkedIn
          </a>
        </div>
      </section>

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
          resource and memory efficiency, and I've built tools that save
          millions of dollars a year in encoding costs.
        </p>
        <p>
          I graduated from Yale in 2025 with a B.S. in Computer Science with
          Honors and a certificate in Data Science. There, I did research in
          the Yale Efficient Computing Lab, was Vice President of the Yale
          Computer Society, advised the Dean of Engineering, broadcast for Yale
          Sports Radio, and gave campus tours.
        </p>
        <p>
          I mostly work in Go, Java, Python, and Rust, with Kubernetes, Docker,
          and Kafka. Feel free to reach out, I'm{" "}
          <a href="mailto:ethanmathieu120@gmail.com">always happy to chat</a>.
        </p>
      </section>

      <h2 className="section-heading">Writing &amp; press</h2>
      <CardList items={PRESS} />

      <h2 className="section-heading">Projects</h2>
      <CardList items={PROJECTS} />
    </Layout>
  );
}
