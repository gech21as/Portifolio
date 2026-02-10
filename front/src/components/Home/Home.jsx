import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import "./Home.css";
import bg from "../../assets/bg.jpg"; 
import profile from "../../assets/pic.jpg"; 
const Home = () => {
  const [greeting, setGreeting] = useState("");

  // Dynamic greeting
  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting("Good Morning -> ሰላም እንደምን አደርክ/አደርሽ");
    else if (hour < 18) setGreeting("Good Afternoon -> እንደምን ዋልክ/ዋልሽ");
    else setGreeting("Good Evening -> እንደምን አመሸህ/አመሸሽ");
  }, []);

  // Drop effect animation for name letters
  useEffect(() => {
    const letters = document.querySelectorAll(".drop-name span");
    letters.forEach((letter, index) => {
      letter.style.opacity = 0;
      letter.style.transform = "translateY(-50px)";
      setTimeout(() => {
        letter.style.opacity = 1;
        letter.style.transform = "translateY(0)";
        letter.style.transition = "all 0.5s ease";
      }, index * 300); // stagger effect
    });
  }, []);

  return (
    <div
      className="home"
      // style={{
      //   backgroundImage: `url(${bg})`,
      // }}
    >
      <div className="overlay"></div>

      <div className="home-content">
        {/* Left Side - Text */}
        <div className="home-text">
          <h2 className="greeting">{greeting}! 👋</h2>
          <h1>
            <span className="drop-name">
              {/* First Name */}
              {"I ".split("").map((char, i) => (
                <span key={i}>{char}</span>
              ))}
            </span>{" "}
            <span className="drop-name">
              {/* First Name */}
              {"am ".split("").map((char, i) => (
                <span key={i}>{char}</span>
              ))}
            </span>{" "}
            <span className="drop-name">
              {/* First Name */}
              {"Getahun".split("").map((char, i) => (
                <span key={i}>{char}</span>
              ))}
            </span>{" "}
            <span className="drop-name">
              {/* Last Name */}
              {"Asefa".split("").map((char, i) => (
                <span key={i}>{char}</span>
              ))}
            </span>
          </h1>
          <h3>Computer  Engineer</h3>
          {/* <a href="../About/About.jsx"><button className="explore-btn">Explore More</button></a> */}
            <button className="explore-btn">
              <Link to="about" smooth={true} duration={500} offset={-50}>
                Explore More
              </Link>
            </button>

        </div>

        {/* Right Side - Image */}
        <div className="home-image">
          <img src={profile} alt="Getahun Asefa" />
         {/* <div className="image-placeholder">Image Placeholder</div> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
