import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaHome, FaUser, FaProjectDiagram, FaEnvelope } from "react-icons/fa";
import "./Navbar.css";
import logo from "../../assets/Glogo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = ["home", "about", "projects", "contact"];

    const handleScrollEvent = () => {
      const homeSection = document.getElementById("home");
      if (homeSection) {
        setScrolled(window.scrollY > 50);
      }

      // Detect active section on scroll
      const scrollPosition = window.scrollY + 120; // offset for early highlighting
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScrollEvent);
    // Trigger once on mount to set initial states
    handleScrollEvent();
    
    return () => window.removeEventListener("scroll", handleScrollEvent);
  }, []);

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const yOffset = -70; // navbar offset
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({
        top: y,
        behavior: "smooth"
      });
    }
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        {/* Logo */}
        <div className="logo" onClick={(e) => handleScroll(e, "home")}>
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
            <a 
              href="#home" 
              className={activeSection === "home" ? "active" : ""} 
              onClick={(e) => handleScroll(e, "home")}
            >
              <FaHome className="nav-icon" /> Home
            </a>
          </li>
          <li>
            <a 
              href="#about" 
              className={activeSection === "about" ? "active" : ""} 
              onClick={(e) => handleScroll(e, "about")}
            >
              <FaUser className="nav-icon" /> About
            </a>
          </li>
          <li>
            <a 
              href="#projects" 
              className={activeSection === "projects" ? "active" : ""} 
              onClick={(e) => handleScroll(e, "projects")}
            >
              <FaProjectDiagram className="nav-icon" /> Projects
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              className={activeSection === "contact" ? "active" : ""} 
              onClick={(e) => handleScroll(e, "contact")}
            >
              <FaEnvelope className="nav-icon" /> Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
