import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes, FaHome, FaUser, FaProjectDiagram, FaEnvelope } from "react-icons/fa";
import "./Navbar.css";
import logo from "../../assets/Glogo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.getElementById("home");
      if (!homeSection) return;
      setScrolled(window.scrollY > homeSection.offsetHeight * 0.8);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        {/* Logo */}
        <div className="logo">
          <img src={logo} alt="Logo" />
          <h2>
            <span>Getahun</span>Asefa
          </h2>
        </div>

        {/* Hamburger */}
        <div
          className={`menu-icon ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Nav Links */}
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li>
            <Link to="home" smooth duration={500} offset={-70} onClick={closeMenu}>
              <FaHome className="nav-icon" /> Home
            </Link>
          </li>
          <li>
            <Link to="about" smooth duration={500} offset={-70} onClick={closeMenu}>
              <FaUser className="nav-icon" /> About
            </Link>
          </li>
          <li>
            <Link to="projects" smooth duration={500} offset={-70} onClick={closeMenu}>
              <FaProjectDiagram className="nav-icon" /> Projects
            </Link>
          </li>
          <li>
            <Link to="contact" smooth duration={500} offset={-70} onClick={closeMenu}>
              <FaEnvelope className="nav-icon" /> Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
