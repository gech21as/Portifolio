import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaNetworkWired, FaMobileAlt, FaHeadset, FaGithub, FaServer, FaVideo } from "react-icons/fa";
import { SiMongodb, SiTypescript, SiFigma } from "react-icons/si";
import "./About.css";

const About = () => {
  const skillCategories = [
    {
      category: "Software & Web Development",
      skills: [
        { name: "JavaScript", icon: <FaJs />, color: "#f7df1e", bg: "rgba(247, 223, 30, 0.1)" },
        { name: "TypeScript", icon: <SiTypescript />, color: "#3178c6", bg: "rgba(49, 120, 198, 0.1)" },
        { name: "React / Web", icon: <FaReact />, color: "#61dafb", bg: "rgba(97, 218, 251, 0.15)" },
        { name: "Node.js / Express", icon: <FaNodeJs />, color: "#339933", bg: "rgba(51, 153, 51, 0.1)" },
        { name: "MongoDB", icon: <SiMongodb />, color: "#47a248", bg: "rgba(71, 162, 72, 0.1)" }
      ]
    },
    {
      category: "Networking & IT Support",
      skills: [
        { name: "Data Communication", icon: <FaNetworkWired />, color: "#0066cc", bg: "rgba(0, 102, 204, 0.1)" },
        { name: "Cisco Packet Tracer", icon: <FaServer />, color: "#049fd9", bg: "rgba(4, 159, 217, 0.1)" },
        { name: "IT Support & Troubleshooting", icon: <FaHeadset />, color: "#e91e63", bg: "rgba(233, 30, 99, 0.1)" }
      ]
    },
    {
      category: "Mobile & Tools",
      skills: [
        { name: "React Native / Mobile", icon: <FaMobileAlt />, color: "#61dafb", bg: "rgba(97, 218, 251, 0.15)" },
        { name: "Git & GitHub", icon: <FaGithub />, color: "#181717", bg: "rgba(24, 23, 23, 0.1)" },
        { name: "UI/UX Design", icon: <SiFigma />, color: "#f24e1e", bg: "rgba(242, 78, 30, 0.1)" },
        { name: "Video Editing (CapCut)", icon: <FaVideo />, color: "#ff5722", bg: "rgba(255, 87, 34, 0.1)" }
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
                I am <strong>Getahun Asefa</strong>, a motivated and detail-oriented Computer Engineering graduate
                from Bahir Dar Institute of Technology, Bahir Dar University (BIT), specializing in full-stack web
                development, data communication &amp; networking, and practical IT support. I enjoy turning
                complex problems into elegant, user-friendly digital applications.
              </p>
              <p style={{ marginTop: "1rem" }}>
                During my B.Sc. studies, I completed a 3-month industrial attachment at the Development Bank of Ethiopia (DBE) Head Office, located in Kazanchis, Addis Ababa. There, I actively worked with their IT support and network maintenance teams, assisting in troubleshooting networks, configuring switches, diagnosing hardware malfunctions, and resolving software/systems issues.
              </p>
              <p style={{ marginTop: "1rem" }}>
                My approach is driven by key principles: code clarity, reliable network architecture, responsive user support, 
                and a commitment to continuous learning in an ever-evolving tech landscape.
              </p>
            </div>

            <div className="about-card education-card">
              <h3>Education &amp; Experience</h3>
              <div className="timeline">
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <span className="timeline-date">2022 - 2026 (Graduated)</span>
                    <h4>B.Sc. in Computer Engineering</h4>
                    <p className="timeline-institution">Bahir Dar Institute of Technology, Bahir Dar University (BIT)</p>
                    <p style={{ fontSize: "0.88rem", color: "#475569", marginTop: "0.25rem" }}>
                      GPA: <strong>3.57/4.00</strong> | Exit Exam Result: <strong>78.75/100</strong>
                    </p>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <span className="timeline-date">2025 (3 Months)</span>
                    <h4>IT Support &amp; Network Intern</h4>
                    <p className="timeline-institution">Development Bank of Ethiopia (DBE) Head Office — Kazanchis, Addis Ababa</p>
                    <p style={{ fontSize: "0.88rem", color: "#475569", marginTop: "0.25rem", lineHeight: "1.5" }}>
                      Served in the IT Support and Networking team. Diagnosed hardware and software malfunctions, maintained Local Area Networks, set up user workstations, and assisted in active network troubleshooting and configuration tasks.
                    </p>
                  </div>
                </div>
                
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <span className="timeline-date">2018 - 2021</span>
                    <h4>Secondary &amp; Preparatory Education</h4>
                    <p className="timeline-institution">Chacha Secondary and Preparatory School</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Languages & Leadership Card */}
            <div className="about-card leadership-card" style={{ marginTop: "2rem" }}>
              <h3>Leadership &amp; Languages</h3>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", marginTop: "1rem" }}>
                <div>
                  <h4 style={{ fontSize: "0.9rem", color: "#64748b", textTransform: "uppercase", letterSpacing: "0.05em", margin: "0 0 0.5rem" }}>Languages</h4>
                  <p style={{ margin: 0, fontSize: "0.95rem" }}>🇪🇹 <strong>Amharic</strong> (Native)</p>
                  <p style={{ margin: "0.25rem 0 0", fontSize: "0.95rem" }}>🇬🇧 <strong>English</strong> (Professional)</p>
                </div>
                <div>
                  <h4 style={{ fontSize: "0.9rem", color: "#64748b", textTransform: "uppercase", letterSpacing: "0.05em", margin: "0 0 0.5rem" }}>Leadership</h4>
                  <ul style={{ paddingLeft: "1.1rem", margin: 0, fontSize: "0.88rem", color: "#475569", lineHeight: "1.4" }}>
                    <li>Member of BIT Discipline &amp; Good Governance Committee</li>
                    <li>Active in Student Clubs &amp; Academic Events</li>
                  </ul>
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

              <a href="/cv/Getahun Asefa Weldetsadik CV.pdf" download className="cv-btn">
                Download My CV <span className="cv-arrow">↓</span>
              </a>
            </div>

            {/* Certifications & Trainings Card */}
            <div className="about-card cert-card" style={{ marginTop: "2rem" }}>
              <h3>Certifications &amp; Trainings</h3>
              <ul className="cert-list" style={{ listStyleType: "none", padding: 0, margin: "1rem 0 0" }}>
                <li style={{ padding: "0.6rem 0", borderBottom: "1px solid rgba(148, 163, 184, 0.15)", fontSize: "0.95rem" }}>
                  🏆 <strong>Safaricom Gebeya Talent Program</strong>
                </li>
                <li style={{ padding: "0.6rem 0", borderBottom: "1px solid rgba(148, 163, 184, 0.15)", fontSize: "0.95rem" }}>
                  💻 <strong>5 Million Ethiopian Coders Program</strong>
                </li>
                <li style={{ padding: "0.6rem 0", borderBottom: "1px solid rgba(148, 163, 184, 0.15)", fontSize: "0.95rem" }}>
                  🎓 <strong>Employability &amp; Job Readiness Training</strong>
                </li>
                <li style={{ padding: "0.6rem 0", borderBottom: "1px solid rgba(148, 163, 184, 0.15)", fontSize: "0.95rem" }}>
                  🏪 <strong>KTS (Knowledge Techno Store) Training</strong>
                </li>
                <li style={{ padding: "0.6rem 0", fontSize: "0.95rem" }}>
                  ⚖️ <strong>Discipline &amp; Good Governance at BIT</strong>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
