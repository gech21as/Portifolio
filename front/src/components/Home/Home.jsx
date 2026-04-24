import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import "./Home.css";
import profile from "../../assets/pic.jpg";

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
          <p className="greeting">
            {greeting} <span>Welcome to my portfolio</span>
          </p>
          <p className="hero-label">Portfolio</p>
          <h1>Getahun Asefa</h1>
          <h2 className="hero-role">
            Computer Engineering Student with Interests in Full-Stack Development and Data Communication & Networking
          </h2>
          <p className="hero-summary">
            I build responsive web applications and practical data
            communication and networking solutions with a strong focus on
            clarity, usability, reliability, and steady technical growth.
          </p>

          <div className="hero-highlights">
            <span>Based in Ethiopia</span>
            <span>Open to internships</span>
            <span>Focused on full-stack development and data communication & networking</span>
          </div>

          <button className="explore-btn" type="button">
            <Link to="about" smooth duration={500} offset={-50}>
              Explore Portfolio
            </Link>
          </button>
        </div>

        <div className="home-image">
          <div className="image-frame">
            <img src={profile} alt="Portrait of Getahun Asefa" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
