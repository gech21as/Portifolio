import React, { useState } from "react";
import "./Contact.css";
import { FaPaperPlane, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaBriefcase } from "react-icons/fa";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";

const Contact = () => {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({ message: "", type: "", show: false });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const showToast = (message, type) => {
    setToast({ message, type, show: true });
    setTimeout(() => setToast({ message: "", type: "", show: false }), 3000);
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
      const response = await fetch(`${API_BASE_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        showToast(data.message || "Message sent successfully!", "success");
        setFormData({ email: "", message: "" });
      } else {
        showToast(data.message || "Failed to send message", "error");
      }
    } catch {
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
        {/* Left: Message Form */}
        <div className="contact-card contact-left">
          <h3>Send Me a Message</h3>

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={handleChange}
                disabled={loading}
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="message">Your Message *</label>
              <textarea
                id="message"
                name="message"
                rows="6"
                placeholder="Tell me about your project, ideas, or questions..."
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
                "Sending..."
              ) : (
                <>
                  Send Message <FaPaperPlane className="submit-icon" />
                </>
              )}
            </button>
          </form>
        </div>

        {/* Right: Work Together info */}
        <div className="contact-card contact-right">
          <h3>Let's Work Together</h3>
          <p className="contact-desc">
            I welcome conversations about internships, freelance work,
            collaborative projects, and opportunities to keep growing as a
            developer.
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
                <span className="info-value">Ethiopia</span>
              </div>
            </div>
          </div>

          <div className="contact-note-box">
            <div className="note-icon-wrapper">
              <FaBriefcase />
            </div>
            <p>
              <strong>Tip:</strong> Including your goals, timeline, and expected
              scope will help me respond more effectively.
            </p>
          </div>
        </div>
      </div>

      {toast.show && <div className={`toast ${toast.type}`}>{toast.message}</div>}
    </section>
  );
};

export default Contact;
