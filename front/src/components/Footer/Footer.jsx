import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.jpg";
import {
  FaGithub,
  FaLinkedin,
  FaTelegram,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Left Section */}
        <div className="footer-left">
          <h3 className="footer-logo">Getahun Asefa</h3>
          <p>Full Stack Developer | React | Node.js | MongoDB</p>
          <p>
            Email: 
            <a href="mailto:getahunasefa277@gmail.com">
              <strong className="email-g">getahunasefa277@gmail.com</strong>
            </a>
          </p>

          <p>phone: <strong>+251921624752</strong></p>
        </div>

        {/* Right Section - Social Links */}
        <div className="footer-right">
          <h4>Follow Me</h4>
          <div className="social-links">
            <a href="https://github.com/gech21as/" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://t.me/gech21as/" target="_blank" rel="noreferrer">
              <FaTelegram />
            </a>
            <a href="https://web.facebook.com/getahun.asefa.568" target="_blank" rel="noreferrer">
              <FaFacebook />
            </a>
            <a href="https://instagram.com/" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
            <a href="https://www.youtube.com/@gech21as" target="_blank" rel="noreferrer">
              <FaYoutube />
            </a>
            <a href="https://wa.me/" target="_blank" rel="noreferrer">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="footer-bottom">
        <p>© {currentYear} Getahun Asefa. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
