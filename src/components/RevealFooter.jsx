import "./RevealFooter.css";

export default function RevealFooter() {
  return (
    <div className="wrapper">

      {/* MAIN PAGE */}
      <div className="content">
        <div className="fake-content">
          
        </div>
      </div>

      {/* SPACER (IMPORTANT) */}
      <div className="footer-spacer" />

      {/* FOOTER (REVEALS ON SCROLL) */}
      <footer className="footer-reveal">

        <div className="footer-inner">
          <div className="footer-left">
            <div className="logo">M</div>
            <p>Design better digital experiences with Mobbin.</p>
          </div>

          <div className="footer-links">
            <div>
              <p>Explore</p>
              <span>Glossary</span>
              <span>Pricing</span>
              <span>Changelog</span>
              <span>Blog</span>
              <span>Colors</span>
            </div>

            <div>
              <p>Contact</p>
              <span>Help center</span>
              <span>Careers</span>
              <span>Merch</span>
              <span>X (Twitter)</span>
              <span>LinkedIn</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© Mobbin 2018–2026. All rights reserved</span>
          <div>
            <span>Privacy policy</span>
            <span>Terms</span>
          </div>
        </div>

      </footer>

    </div>
  );
}