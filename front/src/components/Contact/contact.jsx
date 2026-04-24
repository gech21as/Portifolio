import React, { useState } from "react";
import "./Contact.css";
import { FaPaperPlane } from "react-icons/fa";

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
    <section className="contact">
      <div className="contact-container">
        <div className="contact-left">
          <h2>Send Me a Message</h2>

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

            <button type="submit" disabled={loading}>
              {loading ? (
                "Sending..."
              ) : (
                <>
                  <FaPaperPlane /> Send Message
                </>
              )}
            </button>
          </form>
        </div>

        <div className="contact-right">
          <h3>Let&apos;s Work Together</h3>
          <p>
            I welcome conversations about internships, freelance work,
            collaborative projects, and opportunities to keep growing as a
            developer.
          </p>
          <p>
            If you have a project in mind or would like to discuss how I can
            contribute, please use the form or contact me through the email and
            phone number in the footer.
          </p>
          <p className="contact-note">
            <strong>Tip:</strong> Including your goals, timeline, and expected
            scope will help me respond more effectively.
          </p>
        </div>
      </div>

      {toast.show && <div className={`toast ${toast.type}`}>{toast.message}</div>}
    </section>
  );
};

export default Contact;
