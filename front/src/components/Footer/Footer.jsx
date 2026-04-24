import React from "react";
import "./Footer.css";
import {
  FaGithub,
  FaLinkedin,
  FaTelegram,
  FaFacebook,
  FaYoutube,
} from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <p className="footer-label">Let&apos;s Connect</p>
          <h3 className="footer-logo">Getahun Asefa</h3>
          <p className="footer-role">
            Computer Engineering Student | Aspiring Full-Stack Developer |
            Data Communication & Networking Enthusiast
          </p>
          <p className="footer-item">
            <span>Email</span>
            <a href="mailto:getahunasefa277@gmail.com">
              <strong className="email-g"> getahunasefa277@gmail.com</strong>
            </a>
          </p>

          <p className="footer-item">
            <span>Phone</span> <strong>+251921624752</strong>
          </p>
        </div>

        <div className="footer-right">
          <h4>Connect With Me</h4>
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
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Getahun Asefa. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
