import React, { useEffect } from "react";
import "./About.css";

const About = () => {
  useEffect(() => {
    const skillBars = document.querySelectorAll(".skill-bar span");

    skillBars.forEach((bar, index) => {
      setTimeout(() => {
        bar.style.width = bar.dataset.progress;
        bar.style.transition = "width 1.5s ease-in-out";
      }, index * 300);
    });
  }, []);

  return (
    <div id="about" className="about">
      <div className="overlay"></div>

      <div className="about-content">
        <div className="intro">
          <h1>About Me</h1>
          <p>
            I am <strong>Getahun Asefa</strong>, a Computer Engineering student
            at Bahir Dar University with a growing focus on full-stack web
            development and data communication & networking. I enjoy turning
            ideas into practical, user-friendly applications and strengthening
            my skills through real projects in frontend development, backend
            integration, data communication & networking, and problem solving.
          </p>
        </div>

        <div className="education">
          <h2>Education</h2>
          <ul>
            <li>
              <strong>Bahir Dar University</strong>
              <ul>
                <li>Bachelor of Science in Computer Engineering</li>
                <li>Fifth-year student</li>
              </ul>
            </li>
            <li>
              <strong>Secondary and Preparatory Education</strong>
              <ul>
                <li>Chacha Secondary and Preparatory School</li>
                <li>2010 to 2014 in the Ethiopian calendar</li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="skills">
          <h2>Core Skills</h2>
          <p className="skills-intro">
            A summary of the technologies and areas I am actively building with
            through academic work and personal projects.
          </p>
          <div className="skill-bar" data-progress-label="82%">
            <span data-progress="82%"></span>
            <p>HTML</p>
          </div>
          <div className="skill-bar" data-progress-label="78%">
            <span data-progress="78%"></span>
            <p>CSS</p>
          </div>
          <div className="skill-bar" data-progress-label="72%">
            <span data-progress="72%"></span>
            <p>JavaScript</p>
          </div>
          <div className="skill-bar" data-progress-label="75%">
            <span data-progress="75%"></span>
            <p>React</p>
          </div>
          <div className="skill-bar" data-progress-label="68%">
            <span data-progress="68%"></span>
            <p>Node.js / Express.js</p>
          </div>
          <div className="skill-bar" data-progress-label="70%">
            <span data-progress="70%"></span>
            <p>Data Communication & Networking</p>
          </div>
          <div className="skill-bar" data-progress-label="60%">
            <span data-progress="60%"></span>
            <p>MongoDB</p>
          </div>
          <div className="skill-bar" data-progress-label="45%">
            <span data-progress="45%"></span>
            <p>React Native</p>
          </div>
          <p className="skills-note">
            I am currently deepening my experience in API development, database
            design, data communication & networking, and production-ready
            deployment practices.
          </p>
        </div>

        <a href="/cv/Getahun_Asefa_CV.pdf" download className="cv-btn">
          Download My CV
        </a>
      </div>
    </div>
  );
};

export default About;
