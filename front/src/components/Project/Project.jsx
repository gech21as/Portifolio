import React from "react";
import "./Project.css";
import proj1 from "../../assets/project1.png";
import proj2 from "../../assets/project2.jpg";

const Project = () => {
  const projects = [
    {
      id: 1,
      category: "Networking Project",
      title: "Network Extension and Redundant Switch Implementation",
      description:
        "Designed and extended a campus network to a nearby building using VLANs, inter-VLAN routing, EtherChannel, and STP to improve reliability, segmentation, and performance.",
      highlights: ["VLAN Design", "Inter-VLAN Routing", "STP and EtherChannel"],
      image: proj1,
    },
    {
      id: 2,
      category: "Web and Mobile System",
      title: "Secure Mobile and Web-Based Access System for Heritage Books",
      description:
        "Developed a secure digital access platform to help preserve and manage heritage books through mobile and web interfaces with a focus on accessibility and long-term protection.",
      highlights: ["Digital Preservation", "Secure Access", "Cross-Platform Experience"],
      image: proj2,
    },
  ];

  return (
    <section className="projects">
      <div className="projects-header">
        <p className="projects-label">Selected Work</p>
        <h2 className="section-title">Projects</h2>
        <p className="projects-intro">
          These projects reflect my interest in solving practical problems
          through software, systems design, and user-focused development.
        </p>
      </div>

      <div className="project-grid">
        {projects.map((project, index) => (
          <article className="project-card" key={project.id}>
            <div className="project-image-wrap">
              <img src={project.image} alt={project.title} />
            </div>

            <div className="project-info">
              <div className="project-meta">
                <span className="project-number">0{index + 1}</span>
                <span className="project-category">{project.category}</span>
              </div>

              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="project-tags">
                {project.highlights.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Project;
