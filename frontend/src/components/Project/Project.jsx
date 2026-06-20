import React, { useState } from "react";
import "./Project.css";
import { projectsData } from "../../data/projects";

const ProjectImageSlider = ({ video, images, image, title }) => {
  // Combine video and images into a single list of media items
  const mediaList = [];

  const imageList = Array.isArray(images)
    ? images
    : images
    ? [images]
    : image
    ? [image]
    : [];

  // Add images first so the first image is the default cover view
  imageList.forEach((img) => {
    mediaList.push({ type: "image", url: img });
  });

  // Add video at the end of the media carousel list
  if (video) {
    mediaList.push({ type: "video", url: video });
  }

  const [currentIndex, setCurrentIndex] = useState(0);

  if (mediaList.length === 0) {
    return <div className="project-image-placeholder">No Media Available</div>;
  }

  // If there's only 1 item in total, render it directly without navigation controls
  if (mediaList.length === 1) {
    const item = mediaList[0];
    return (
      <div className="project-image-slider">
        <div className="slide">
          {item.type === "video" ? (
            <video 
              src={item.url} 
              controls 
              muted 
              playsInline 
            />
          ) : (
            <img src={item.url} alt={title} />
          )}
        </div>
      </div>
    );
  }

  const handlePrev = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? mediaList.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === mediaList.length - 1 ? 0 : prev + 1));
  };

  const handleDotClick = (e, index) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex(index);
  };

  return (
    <div className="project-image-slider">
      <div 
        className="slider-wrapper" 
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {mediaList.map((item, idx) => (
          <div className="slide" key={idx}>
            {item.type === "video" ? (
              <video 
                src={item.url} 
                controls 
                muted 
                playsInline 
              />
            ) : (
              <img src={item.url} alt={`${title} - View ${idx + 1}`} />
            )}
          </div>
        ))}
      </div>

      <button 
        className="slider-btn prev" 
        onClick={handlePrev} 
        aria-label="Previous slide"
        type="button"
      >
        &#10094;
      </button>
      <button 
        className="slider-btn next" 
        onClick={handleNext} 
        aria-label="Next slide"
        type="button"
      >
        &#10095;
      </button>

      <div className="slider-dots">
        {mediaList.map((_, idx) => (
          <button
            key={idx}
            className={`slider-dot ${idx === currentIndex ? "active" : ""}`}
            onClick={(e) => handleDotClick(e, idx)}
            aria-label={`Go to slide ${idx + 1}`}
            type="button"
          />
        ))}
      </div>
    </div>
  );
};

const Project = () => {
  const projects = projectsData;

  return (
    <section id="projects" className="projects">
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
              <ProjectImageSlider video={project.video} images={project.images} title={project.title} />
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
