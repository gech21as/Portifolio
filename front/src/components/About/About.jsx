import React, { useEffect } from "react";
import "./About.css";
import bg from "../../assets/bg.jpg"; // Your background image
import Footer from "../../components/Footer/Footer.jsx";
const About = () => {
  useEffect(() => {
    // Simple animation for skill bars or fade-in effect
    const skillBars = document.querySelectorAll(".skill-bar span");
    skillBars.forEach((bar, index) => {
      setTimeout(() => {
        bar.style.width = bar.dataset.progress;
        bar.style.transition = "width 1.5s ease-in-out";
      }, index * 300);
    });
  }, []);

  return (
    <div id ="about"
      // className="about"
      // style={{
      //   backgroundImage: `url(${bg})`,
      // }}
    >
      <div className="overlay"></div>

      <div className="about-content">
        {/* Introduction Section */}
        <div className="intro">
          <h1>About Me</h1>
          <p>
          Hello, I’m <strong>Getahun Asefa</strong> , a passionate Full Stack Developer specializing in React, Node.js, and MongoDB.
          I build dynamic, responsive, and scalable web applications with a strong focus on performance and user experience.
          In addition, I have basic knowledge of video editing, using tools such as CapCut and Canva to create simple and engaging visual content.
          </p>
        </div>

        {/* Education Section */}
        <div className="education">
          <h2>
            🎓 Education
          </h2>
          <ul>
            <li><strong>University:</strong>
                <li>
                      Bachelor of Science in Computer Engineering
                </li>
                <li>
                      Bahir Dar University
                </li>
                <li>
                      Currently a 5th-year student
                </li>
            </li>           
             <li>
              <strong>Secondary & Preparatory Education:</strong>
                <li>
                  Chacha Secondary and Preparatory School

                </li>
                <li>
                    from the year of 2010 – 2014 in Ethiopian Calendar
                </li>
            </li>

          </ul>
        </div>

        {/* Skills Section */}
        <div className="skills">
          <h2>Skills</h2>
          <div className="skill-bar">
            <span data-progress="30%"></span>
            <p>React</p>
          </div>
          <div className="skill-bar">
            <span data-progress="15%"></span>
            <p>Node.js</p>
          </div>
          <div className="skill-bar">
            <span data-progress="10%"></span>
            <p>MongoDB</p>
          </div>
        </div>
        <a
            href="/cv/Getahun_Asefa_CV.pdf"
            download
            className="cv-btn"
            >
            📄 Download My CV
        </a>

      </div>
    </div>
  );
};

export default About;
