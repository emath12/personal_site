import ThemeToggle from "./ThemeToggle.tsx";

export default function Layout({ children }) {
  return (
    <div className="site">
      <header className="site-header">
        <div className="wrapper">
          <nav className="site-nav">
            <ThemeToggle />
          </nav>
        </div>
      </header>

      <main className="page-content">
        <div className="wrapper">{children}</div>
      </main>

      <footer className="site-footer">
        <div className="wrapper">
          <span>© {new Date().getFullYear()} Ethan Mathieu</span>
          <span>Views here are my own.</span>
        </div>
      </footer>
    </div>
  );
}
