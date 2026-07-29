import React, { useEffect, useState } from "react";
import "./Home.css";
import profile from "../../assets/pic.jpg";
import { FaCode, FaNetworkWired, FaMapMarkerAlt, FaBriefcase, FaHeadset } from "react-icons/fa";

const Home = () => {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const hour = new Date().getHours();

    if (hour < 12) setGreeting("Good morning");
    else if (hour < 18) setGreeting("Good afternoon");
    else setGreeting("Good evening");
  }, []);

  return (
    <section id="home" className="home">
      <div className="home-bg-shape shape-one"></div>
      <div className="home-bg-shape shape-two"></div>
      <div className="home-grid"></div>

      <div className="home-content">
        <div className="home-text">
          <div className="status-badge">
            <span className="status-dot"></span>
            <span className="status-text">{greeting} • Open for Opportunities</span>
          </div>

          <h1>Getahun Asefa</h1>
          
          <h2 className="hero-role">
            Computer Engineer <span className="role-divider">|</span> Full-Stack Developer
          </h2>
          
          <p className="hero-summary">
            Computer Engineering graduate with hands-on experience in IT Support teams, specializing in building responsive web applications and designing reliable networking systems.
          </p>

          <div className="hero-highlights">
            <span className="highlight-item">
              <FaMapMarkerAlt className="highlight-icon" />
              Based in Ethiopia
            </span>
            <span className="highlight-item">
              <FaCode className="highlight-icon" />
              Full-Stack Web Development
            </span>
            <span className="highlight-item">
              <FaHeadset className="highlight-icon" />
              IT Support &amp; Troubleshooting
            </span>
            <span className="highlight-item">
              <FaNetworkWired className="highlight-icon" />
              Networking &amp; Infrastructure
            </span>
          </div>

          <button 
            className="explore-btn" 
            type="button"
            onClick={(e) => {
              e.preventDefault();
              const element = document.getElementById("about");
              if (element) {
                const offset = 70;
                const bodyRect = document.body.getBoundingClientRect().top;
                const elementRect = element.getBoundingClientRect().top;
                const elementPosition = elementRect - bodyRect;
                const offsetPosition = elementPosition - offset;

                window.scrollTo({
                  top: offsetPosition,
                  behavior: "smooth"
                });
              }
            }}
          >
            Explore Portfolio <span className="btn-arrow">→</span>
          </button>
        </div>

        <div className="home-image">
          <div className="image-glow"></div>
          <div className="image-frame">
            <img src={profile} alt="Portrait of Getahun Asefa" />
            
            {/* Floating Tech Badges */}
            <div className="floating-badge badge-code">
              <div className="badge-icon"><FaCode /></div>
              <div className="badge-text">
                <span className="badge-title">Full-Stack</span>
                <span className="badge-sub">Web & Mobile</span>
              </div>
            </div>
            
            <div className="floating-badge badge-net">
              <div className="badge-icon"><FaNetworkWired /></div>
              <div className="badge-text">
                <span className="badge-title">Networking</span>
                <span className="badge-sub">Infrastructure</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
