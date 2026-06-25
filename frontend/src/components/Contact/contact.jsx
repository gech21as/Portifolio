import React, { useState } from "react";
import "./Contact.css";
import {
  FaPaperPlane,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaBriefcase,
} from "react-icons/fa";

/**
 * ✅ FIXED: must match Vite env variable name
 */
const API_BASE_URL = import.meta.env.VITE_API_URL;

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
                value={formData.message}
                onChange={handleChange}
                disabled={loading}
              />
              {errors.message && (
                <span className="error">{errors.message}</span>
              )}
            </div>

            <button type="submit" disabled={loading}>
              {loading ? (
                "Sending..."
              ) : (
                <>
                  Send Message <FaPaperPlane />
                </>
              )}
            </button>
          </form>
        </div>

        <div className="contact-card contact-right">
          <h3>Let's Work Together</h3>

          <div className="contact-info-list">
            <div>
              <FaEnvelope />
              <a href="mailto:getahunasefa277@gmail.com">
                getahunasefa277@gmail.com
              </a>
            </div>

            <div>
              <FaPhoneAlt />
              <a href="tel:+251921624752">+251 921 624 752</a>
            </div>

            <div>
              <FaMapMarkerAlt />
              <span>Ethiopia</span>
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