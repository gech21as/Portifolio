import React from "react";
import "./Footer.css";
import {
  FaGithub,
  FaLinkedin,
  FaTelegram,
  FaFacebook,
  FaYoutube,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaArrowUp
} from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const yOffset = -70;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({
        top: y,
        behavior: "smooth"
      });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Brand Info */}
          <div className="footer-brand">
            <h3 className="footer-logo"><span>Getahun</span>Asefa</h3>
            <p className="footer-tagline">
              Computer Engineering Graduate | Full-Stack Developer &amp; IT Support Specialist | Data Communication &amp; Networking
            </p>
            <div className="social-links">
              <a href="https://github.com/gech21as/" target="_blank" rel="noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/getahun-asefa" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="https://t.me/gech21as/" target="_blank" rel="noreferrer" aria-label="Telegram">
                <FaTelegram />
              </a>
              <a href="https://web.facebook.com/getahun.asefa.568" target="_blank" rel="noreferrer" aria-label="Facebook">
                <FaFacebook />
              </a>
              <a href="https://www.youtube.com/@gech21as" target="_blank" rel="noreferrer" aria-label="YouTube">
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-nav">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home" onClick={(e) => handleScroll(e, "home")}>Home</a></li>
              <li><a href="#about" onClick={(e) => handleScroll(e, "about")}>About</a></li>
              <li><a href="#projects" onClick={(e) => handleScroll(e, "projects")}>Projects</a></li>
              <li><a href="#contact" onClick={(e) => handleScroll(e, "contact")}>Contact</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="footer-contact-info">
            <h4>Get In Touch</h4>
            <div className="contact-details">
              <div className="contact-detail-item">
                <FaEnvelope className="contact-detail-icon" />
                <a href="mailto:getahunasefa277@gmail.com">getahunasefa277@gmail.com</a>
              </div>
              <div className="contact-detail-item">
                <FaPhoneAlt className="contact-detail-icon" />
                <a href="tel:+251921624752">+251 921 624 752</a>
              </div>
              <div className="contact-detail-item">
                <FaMapMarkerAlt className="contact-detail-icon" />
                <span>Ethiopia</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Getahun Asefa. All rights reserved.</p>
          <a href="#top" className="back-to-top" onClick={scrollToTop} aria-label="Back to Top">
            <FaArrowUp />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
