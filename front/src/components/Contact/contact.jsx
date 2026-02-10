import React, { useState } from "react";
import "./Contact.css";
import { FaPaperPlane } from "react-icons/fa";

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
      const response = await fetch("http://localhost:5000/api/contact", {
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
    } catch (error) {
      showToast("Server not reachable. Try again later.", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact">
      <div className="contact-container">

        {/* LEFT SIDE — FORM */}
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
              {errors.email && (
                <span className="error">{errors.email}</span>
              )}
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
              {loading ? "Sending..." : (
                <>
                  <FaPaperPlane /> Send Message
                </>
              )}
            </button>
          </form>
        </div>

        {/* RIGHT SIDE — DESCRIPTION */}
        <div className="contact-right">
          <h3>Let’s Work Together</h3>
          <p>
            Feel free to reach out for any questions, ideas, or collaboration
            opportunities. I’m always open to discussing new projects and
            creative solutions.
          </p>
          <p>
            If you have a project in mind or need help bringing your idea to
            life, don’t hesitate to contact me. for any inquiries, please use the form and there is my phone number and email address at the footer section.
          </p>
          <p className="contact-note">
            💡 <strong>Tip:</strong> Include your goals, timeline, and
            expectations for a faster response.
          </p>
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
