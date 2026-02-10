import React from "react";
import Navbar from "./components/navbar_comp/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Project/Project";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/Footer";


const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        {/* Each section has an id for scroll links */}
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
