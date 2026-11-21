import Layout from "./Layout.tsx";

export default function About() {
  return (
    <Layout>
      <h1 className="page-heading">About</h1>
      <p>Hello, I'm Ethan.</p>
      <p>
        I'm a software engineer on Netflix's distributed systems team, working
        on our function-as-a-service platform. I've rewritten its runtime in
        Go, worked on cutting cold-start and queue-to-container latency, and
        I'm helping lead the platform's migration to native Kubernetes. Before
        that, I built a memory watcher that let us safely downsize containers,
        and I interned at Netflix on media encoding telemetry and at Procter
        &amp; Gamble on data tooling.
      </p>
      <p>
        I graduated from Yale in 2025 with a B.S. in Computer Science with
        Honors and a certificate in Data Science. There, I did research in the
        Yale Efficient Computing Lab, was Vice President of the Yale Computer
        Society, advised the Dean of Engineering, broadcast for Yale Sports
        Radio, and gave campus tours.
      </p>
      <p>
        I mostly work in Go, Java, Python, and Rust, with Kubernetes, Docker,
        and Kafka.
      </p>
      <p>Feel free to reach out using the links below.</p>
    </Layout>
  );
}
