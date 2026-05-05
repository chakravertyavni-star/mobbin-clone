import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="nav-inner">

        <div className="nav-left">
          <div className="logo">Mobbin</div>

          <nav className="nav-links">
            <a href="#">Pricing</a>
            <a href="#">Awards</a>
            <a href="#">Log in</a>
          </nav>
        </div>

        <button className="join-btn">Join for free</button>

        {/* HAMBURGER */}
        <div
          className="menu-toggle"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="mobile-menu">
          <a href="#">Changelog</a>
          <a href="#">Pricing</a>
          <a href="#">Awards</a>
          <a href="#">Careers</a>
          <a href="#">Merch</a>
          <a href="#">Support</a>
          <a href="#">Log in</a>

          <button className="join-btn">Join for free</button>
        </div>
      )}
    </header>
  );
}

export default Navbar;