import Layout from "./Layout.tsx";

// Subjects without a link are listed but not clickable yet.
const SUBJECTS = [
  {
    title: "Machine Learning Basics",
    link: "https://feline-litter-029.notion.site/CS-381-Introduction-to-Machine-Learning-3031895131db40218e906aa3c9fe9a62?pvs=4",
  },
  { title: "Linear Algebra", link: undefined },
  { title: "Database Systems", link: undefined },
  { title: "Natural Language Processing Basics", link: undefined },
  { title: "Data Structures", link: undefined },
  { title: "Algorithms", link: undefined },
];

export default function Notes() {
  return (
    <Layout>
      <h1 className="page-heading">Notes</h1>
      <p>Notes from what I've studied, at Yale and otherwise.</p>
      <ul className="entry-list">
        {SUBJECTS.map((s) => (
          <li key={s.title}>
            {s.link ? (
              <a className="entry-link" href={s.link} target="_blank" rel="noreferrer">
                {s.title}
              </a>
            ) : (
              <>
                <span className="entry-link">{s.title}</span>
                <span className="entry-meta">Coming soon</span>
              </>
            )}
          </li>
        ))}
      </ul>
    </Layout>
  );
}
