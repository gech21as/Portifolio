import React from "react";
import "./Project.css";
import proj1 from "../../assets/project1.png";
import proj2 from "../../assets/project2.jpg";
import proj3 from "../../assets/project3.jpg";

const Project = () => {
  const projects = [
    {
      id: 1,
      title: "Network Extension and Redundant Switch Implementation",
      description:
        "Extended a campus network to a nearby building and implemented VLANs, inter-VLAN routing, EtherChannel, and STP to improve redundancy and performance.",
      image: proj1,
    },
    {
      id: 2,
      title: "Secure Mobile and Web-Based Access System for Heritage Books",
      description:
        "Developed a secure digital system that allows users to access and preserve ancient and historical books using mobile and web platforms.", 
      image: proj2,
    },
    {
      id: 3,
      title: "AI Disease Detection System",
      description:
        "Built an AI-powered backend for detecting disease types from image and text data using Node.js and deep learning models.",
      image: proj3,
    },
  ];

  return (
    <section className="projects">
      <h2 className="section-title">My Projects</h2>
      <div className="project-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <img src={project.image} alt={project.title} />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
