import { Link } from "react-router-dom";

export default function Layout({ children }) {
  return (
    <div className="site">
      <header className="site-header">
        <div className="wrapper">
          <Link className="site-title" to="/">
            Ethan Mathieu
          </Link>
          <nav className="site-nav">
            <Link to="/about">About</Link>
            <Link to="/notes">Notes</Link>
          </nav>
        </div>
      </header>

      <main className="page-content">
        <div className="wrapper">{children}</div>
      </main>

      <footer className="site-footer">
        <div className="wrapper">
          <h2 className="footer-heading">Ethan Mathieu</h2>
          <div className="footer-cols">
            <ul>
              <li>
                <a href="mailto:ethanmathieu120@gmail.com">ethanmathieu120@gmail.com</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="https://github.com/emath12">github.com/emath12</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/ethan-mathieu/">
                  linkedin.com/in/ethan-mathieu
                </a>
              </li>
            </ul>
            <p>
              Software Engineer at Netflix; Yale CS '25. This is my personal
              website. The views here are my own.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
