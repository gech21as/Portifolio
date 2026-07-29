import React, { useState } from "react";
import "./Contact.css";
import {
  FaPaperPlane,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaBriefcase,
  FaGithub,
  FaLinkedin,
  FaTelegram,
  FaFacebook,
  FaYoutube,
} from "react-icons/fa";

/**
 * ✅ Dynamically fall back to proxy in development, use env var in production
 */
const API_BASE_URL = import.meta.env.DEV ? "" : (import.meta.env.VITE_API_URL || "");

const Contact = () => {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({
    message: "",
    type: "",
    show: false,
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const showToast = (message, type) => {
    setToast({ message, type, show: true });
    setTimeout(
      () => setToast({ message: "", type: "", show: false }),
      3000
    );
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      showToast("Please fix the errors", "error");
      return;
    }

    setLoading(true);

    try {
      /**
       * ✅ FIXED API CALL
       */
      const response = await fetch(
        `${API_BASE_URL}/api/contact`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        showToast(
          data.message || "Message sent successfully!",
          "success"
        );
        setFormData({ email: "", message: "" });
      } else {
        showToast(data.message || "Failed to send message", "error");
      }
    } catch (err) {
      showToast("Server not reachable. Try again later.", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="overlay"></div>

      <div className="contact-header">
        <p className="contact-label">Get in Touch</p>
        <h2 className="section-title">Contact</h2>
      </div>

      <div className="contact-container">
        <div className="contact-card contact-left">
          <h3>Send Me a Message</h3>

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label>Email Address *</label>
              <input
                type="email"
                name="email"
                placeholder="youremail@example.com"
                value={formData.email}
                onChange={handleChange}
                disabled={loading}
              />
              {errors.email && (
                <span className="error">{errors.email}</span>
              )}
            </div>

            <div className="form-group">
              <label>Your Message *</label>
              <textarea
                name="message"
                rows="6"
                placeholder="Hi Getahun, I'd like to reach out regarding..."
                value={formData.message}
                onChange={handleChange}
                disabled={loading}
              />
              {errors.message && (
                <span className="error">{errors.message}</span>
              )}
            </div>

            <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? (
                <span className="btn-spinner-text">
                  <span className="spinner"></span> Sending...
                </span>
              ) : (
                <>
                  Send Message <FaPaperPlane className="submit-icon" />
                </>
              )}
            </button>
          </form>
        </div>

        <div className="contact-card contact-right">
          <h3>Let's Work Together</h3>
          <p className="contact-desc">
            Whether you want to discuss a new software project, ask about computer networking architectures, or just connect, feel free to reach out. I'll get back to you as soon as possible!
          </p>

          <div className="contact-info-list">
            <div className="info-item">
              <div className="info-icon-wrapper">
                <FaEnvelope />
              </div>
              <div className="info-text">
                <span className="info-title">Email</span>
                <a href="mailto:getahunasefa277@gmail.com" className="info-value">
                  getahunasefa277@gmail.com
                </a>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon-wrapper">
                <FaPhoneAlt />
              </div>
              <div className="info-text">
                <span className="info-title">Phone</span>
                <a href="tel:+251921624752" className="info-value">
                  +251 921 624 752
                </a>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon-wrapper">
                <FaMapMarkerAlt />
              </div>
              <div className="info-text">
                <span className="info-title">Location</span>
                <span className="info-value">Addis Ababa, Ethiopia</span>
              </div>
            </div>
          </div>

          <div className="contact-note-box">
            <div className="note-icon-wrapper">
              <FaBriefcase />
            </div>
            <p>
              I am open to software engineering positions, front-end/back-end roles, and networking opportunities.
            </p>
          </div>

          <div className="contact-socials">
            <h4>Find Me On</h4>
            <div className="social-bubbles">
              <a
                href="https://github.com/gech21as/"
                target="_blank"
                rel="noreferrer"
                className="social-bubble github"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/getahun-asefa"
                target="_blank"
                rel="noreferrer"
                className="social-bubble linkedin"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://t.me/gech21as/"
                target="_blank"
                rel="noreferrer"
                className="social-bubble telegram"
                aria-label="Telegram"
              >
                <FaTelegram />
              </a>
              <a
                href="https://web.facebook.com/getahun.asefa.568"
                target="_blank"
                rel="noreferrer"
                className="social-bubble facebook"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.youtube.com/@gech21as"
                target="_blank"
                rel="noreferrer"
                className="social-bubble youtube"
                aria-label="YouTube"
              >
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
      </div>

      {toast.show && (
        <div className={`toast ${toast.type}`}>
          {toast.message}
        </div>
      )}
    </section>
  );
};

export default Contact;