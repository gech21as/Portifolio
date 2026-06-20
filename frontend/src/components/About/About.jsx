import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaNetworkWired, FaMobileAlt } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import "./About.css";

const About = () => {
  const skillCategories = [
    {
      category: "Frontend Development",
      skills: [
        { name: "HTML", icon: <FaHtml5 />, color: "#f16529", bg: "rgba(241, 101, 41, 0.1)" },
        { name: "CSS", icon: <FaCss3Alt />, color: "#2965f1", bg: "rgba(41, 101, 241, 0.1)" },
        { name: "JavaScript", icon: <FaJs />, color: "#f7df1e", bg: "rgba(247, 223, 30, 0.1)" },
        { name: "React", icon: <FaReact />, color: "#61dafb", bg: "rgba(97, 218, 251, 0.15)" }
      ]
    },
    {
      category: "Backend & Databases",
      skills: [
        { name: "Node.js / Express.js", icon: <FaNodeJs />, color: "#339933", bg: "rgba(51, 153, 51, 0.1)" },
        { name: "MongoDB", icon: <SiMongodb />, color: "#47a248", bg: "rgba(71, 162, 72, 0.1)" }
      ]
    },
    {
      category: "Specialized & Mobile",
      skills: [
        { name: "Data Communication & Networking", icon: <FaNetworkWired />, color: "#0066cc", bg: "rgba(0, 102, 204, 0.1)" },
        { name: "React Native", icon: <FaMobileAlt />, color: "#61dafb", bg: "rgba(97, 218, 251, 0.15)" }
      ]
    }
  ];

  return (
    <section id="about" className="about">
      <div className="overlay"></div>

      <div className="about-content">
        <div className="about-header">
          <p className="about-label">My Story</p>
          <h2 className="section-title">About Me</h2>
        </div>

        <div className="about-grid">
          {/* Left Column: Story & Education */}
          <div className="about-left-col">
            <div className="about-card intro-card">
              <h3>Who I Am</h3>
              <p>
                I am <strong>Getahun Asefa</strong>, a Computer Engineering graduate
                from Bahir Dar University (June 2026), specializing in full-stack web
                development and data communication &amp; networking. I enjoy turning
                complex problems into elegant, user-friendly digital applications.
              </p>
              <p style={{ marginTop: "1rem" }}>
                My approach is driven by key principles: code clarity, reliable network architecture, 
                and a commitment to continuous learning in an ever-evolving tech landscape.
              </p>
            </div>

            <div className="about-card education-card">
              <h3>Education</h3>
              <div className="timeline">
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <span className="timeline-date">Graduated June 2026</span>
                    <h4>B.Sc. in Computer Engineering</h4>
                    <p className="timeline-institution">Bahir Dar University</p>
                  </div>
                </div>
                
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <span className="timeline-date">2010 - 2014 E.C.</span>
                    <h4>Secondary &amp; Preparatory Education</h4>
                    <p className="timeline-institution">Chacha Secondary and Preparatory School</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Skills */}
          <div className="about-right-col">
            <div className="about-card skills-card">
              <h3>Core Skills</h3>
              <p className="skills-intro">
                Technologies and frameworks I actively use to develop responsive applications and networks:
              </p>
              
              <div className="skills-list-vertical">
                {skillCategories.map((cat, idx) => (
                  <div key={idx} className="skill-group">
                    <h4>{cat.category}</h4>
                    <div className="skills-tags-wrap">
                      {cat.skills.map((skill, sIdx) => (
                        <div key={sIdx} className="skill-tag-item">
                          <div 
                            className="skill-tag-icon" 
                            style={{ color: skill.color, backgroundColor: skill.bg }}
                          >
                            {skill.icon}
                          </div>
                          <span className="skill-tag-name">{skill.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="skills-note-box">
                <p>
                  <strong>Currently focused on:</strong> Deepening my backend knowledge in API architecture, database optimization, and cloud deployments.
                </p>
              </div>

              <a href="/cv/Getahun_Asefa_CV.pdf" download className="cv-btn">
                Download My CV <span className="cv-arrow">↓</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
