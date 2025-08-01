import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaMoon, FaSun } from "react-icons/fa";
import "./Navbar.css";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Our Work", path: "/projects" },
    { label: "About Us", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Contact Us", path: "/contact" },
  ];

  return (
    <nav className={`navbar ${darkMode ? "dark" : ""}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={() => setIsMenuOpen(false)}>
          <img src="/file_000000008d4061f7add12faa0f359db9.jpg" alt="Logo" />
          <span>Sparcx Solutions</span>
        </Link>

        <ul className="navbar-links desktop">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={location.pathname === link.path ? "active" : ""}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="navbar-actions">
          <button className="dark-mode-toggle" onClick={toggleDarkMode}>
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
          <button
            className={`menu-toggle ${isMenuOpen ? "open" : ""}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      <ul className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
        {navLinks.map((link) => (
          <li key={link.path}>
            <Link
              to={link.path}
              onClick={() => setIsMenuOpen(false)}
              className={location.pathname === link.path ? "active" : ""}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
