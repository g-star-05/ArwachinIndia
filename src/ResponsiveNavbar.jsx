import { useState, useEffect } from "react";
import "./navbar.css";
import logo from "./assets/logo.png";

export default function ResponsiveNavbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add background when scrolled
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="nav__inner">
        {/* Logo */}
        <a href="#home" className="brand">
          <img src={logo} alt="Logo" className="brand__img" />
        </a>

        {/* Desktop links */}
        <nav className="links">
          <a className="link" href="#about">HOME</a>
          <a className="link" href="#rooms">ADMISSIONS</a>
          <a className="link" href="#help">LOGIN</a>

          <div className="dropdown">
            <button className="btn">All MENU ▾</button>
            <div className="dropdown__menu">
              <a href="#book-hostel">About Us</a>
              <a href="#book-event">Academics</a>
              <a href="#book-course">Life at AIS</a>
              <a href="#school-visit">Gallery</a>
              <a href="#admission">CBSE Mandatory Public Disclosure</a>
              <a href="#fee-payment">Managing Committee</a>
              <a href="#fee-payment">Careers</a>
              <a href="#fee-payment">Contact Us</a>
            </div>
          </div>
        </nav>

        {/* Hamburger */}
        <button
          className={`toggle ${open ? "open" : ""}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className="bar"></span>
        </button>
      </div>

      {/* Slide-in Menu (right side) */}
      <div className={`overlay ${open ? "show" : ""}`} onClick={() => setOpen(false)}></div>

      <aside className={`side-menu ${open ? "open" : ""}`}>
        <button className="close-btn" onClick={() => setOpen(false)} aria-label="Close menu">
          ×
        </button>

        <a className="side-link" href="#about" onClick={() => setOpen(false)}>About</a>
        <a className="side-link" href="#rooms" onClick={() => setOpen(false)}>Rooms</a>
        <a className="side-link" href="#help" onClick={() => setOpen(false)}>Help</a>

        <details className="side-dropdown">
          <summary>ALL MENU</summary>
          <div className="side-dropdown__menu">
            <a href="#book-hostel" onClick={() => setOpen(false)}>About Us</a>
            <a href="#book-event" onClick={() => setOpen(false)}>Academics</a>
            <a href="#book-course" onClick={() => setOpen(false)}>Life at AIS</a>
            <a href="#school-visit" onClick={() => setOpen(false)}>Life at Gallery</a>
            <a href="#admission" onClick={() => setOpen(false)}>CBSE Mandatory Public Disclosure</a>
            <a href="#fee-payment" onClick={() => setOpen(false)}>Managing Commitee</a>
            <a href="#fee-payment" onClick={() => setOpen(false)}>Careers</a>
            <a href="#fee-payment" onClick={() => setOpen(false)}>Contact Us</a>
          </div>
        </details>
      </aside>
    </header>
  );
}
