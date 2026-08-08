import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" id="footer">
      <div className="footer-content container">
        <div className="footer-left">
          <span className="footer-brand">shandyalfrzy</span>
          <span className="footer-copy">© {year} · Crafted with care</span>
        </div>
        <div className="footer-right">
          <a href="#home" className="footer-link">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
