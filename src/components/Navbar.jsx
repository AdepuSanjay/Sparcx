import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaMoon, FaSun } from "react-icons/fa";
import "./Navbar.css";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className={`nav-container ${darkMode ? "dark" : ""}`}>
      <div className="nav-inner">
        {/* Logo */}
        <Link to="/" className="nav-logo" onClick={() => setIsMenuOpen(false)}>
          <img
            src="/file_000000008d4061f7add12faa0f359db9.jpg"
            alt="Logo"
            className="nav-logo-img"
          />
          <span className="firebrik-text">Sparcx Solutions</span>
        </Link>

        {/* Desktop Links */}
        <ul className="nav-links-desktop">
          {[
            { to: "/", label: "Home" },
            { to: "/projects", label: "Our Work" },
            { to: "/about", label: "About Us" },
            { to: "/services", label: "Services" },
            { to: "/contact", label: "Contact Us" },
          ].map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                className={location.pathname === to ? "active" : ""}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Toggle Button */}
        <button
          className={`nav-toggle-btn ${isMenuOpen ? "open" : ""}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation"
        >
          <div className="nav-toggle-bar" />
          <div className="nav-toggle-bar" />
          <div className="nav-toggle-bar" />
        </button>
      </div>

      {/* Mobile Sidebar */}
      <div className={`nav-sidebar ${isMenuOpen ? "open" : ""}`}>
        <ul className="nav-links-mobile">
          {[
            { to: "/", label: "Home" },
            { to: "/projects", label: "Our Work" },
            { to: "/about", label: "About Us" },
            { to: "/services", label: "Services" },
            { to: "/contact", label: "Contact Us" },
          ].map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                onClick={() => setIsMenuOpen(false)}
                className={location.pathname === to ? "active" : ""}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
