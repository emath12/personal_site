import ThemeToggle from "./ThemeToggle.tsx";
import { MusicPlayer } from "./EasterEggs.tsx";

export default function Layout({ children }) {
  return (
    <div className="site">
      <header className="site-header">
        <div className="wrapper">
          <nav className="site-nav">
            <MusicPlayer />
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
