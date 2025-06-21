import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaMoon, FaSun } from "react-icons/fa";
import "./Navbar.css"; // Use styles from the first Navbar

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className={`nav-container ${darkMode ? "dark" : ""}`}>
      <div className="nav-inner">
        {/* Logo */}
        <Link to="/" className="nav-logo" onClick={() => setIsMenuOpen(false)}>
          <img
            src="../../public/file_000000008d4061f7add12faa0f359db9.jpg"
            alt="Logo"
            className="nav-logo-img"
          />
          <span className="firebrik-text">Sparcx</span>
        </Link>

        {/* Desktop Links */}
        <ul className="nav-links-desktop">
          <li><Link to="/" className={location.pathname === "/" ? "active" : ""}>Home</Link></li>
          <li><Link to="/projects" className={location.pathname === "/projects" ? "active" : ""}>Our Work</Link></li>
          <li><Link to="/about" className={location.pathname === "/about" ? "active" : ""}>About Us </Link></li>
          <li><Link to="/services" className={location.pathname === "/services" ? "active" : ""}>Services</Link></li>
          <li><Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>Contact Us</Link></li>
    
        </ul>

        {/* Mobile Menu Button */}
        <button
          className={`nav-toggle-btn ${isMenuOpen ? "open" : ""}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation"
        >
          <div className="nav-toggle-bar"></div>
          <div className="nav-toggle-bar"></div>
          <div className="nav-toggle-bar"></div>
        </button>
      </div>

      {/* Mobile Sidebar */}
      <div className={`nav-sidebar ${isMenuOpen ? "open" : ""}`}>
        <ul className="nav-links-mobile">
          <li><Link to="/" onClick={() => setIsMenuOpen(false)} className={location.pathname === "/" ? "active" : ""}>Home</Link></li>
          <li><Link to="/projects" onClick={() => setIsMenuOpen(false)} className={location.pathname === "/projects" ? "active" : ""}>Our Work</Link></li>
          <li><Link to="/about" onClick={() => setIsMenuOpen(false)} className={location.pathname === "/about" ? "active" : ""}>About Us</Link></li>
          <li><Link to="/services" onClick={() => setIsMenuOpen(false)} className={location.pathname === "/services" ? "active" : ""}>Services</Link></li>
          <li><Link to="/contact" onClick={() => setIsMenuOpen(false)} className={location.pathname === "/contact" ? "active" : ""}>Contact Us</Link></li>

        </ul>
      </div>
    </nav>
  );
};

export default Navbar;