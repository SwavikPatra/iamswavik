import React, { useState } from 'react';
import "../css/card.css"
import "../css/full-stack-projects.css"
import "../css/text-size.css"

const projects = [
  

  {
    title: "News-API",
    technologies: "React, HTML, CSS",
    date: "February 2024",
    details: "Created a ReactJS website using news api from newsapi.org showcasing frontend development skills. Present a user-friendly interface with responsive design for seamless access across devices. Demonstrate proficiency in frontend development, emphasizing state management, API integration, and responsive design principles.",
    githubLink: "https://github.com/SwavikPatra/NewsAPI/tree/master",
    images: [
      `${process.env.PUBLIC_URL}/img/newsapi/s1.png`
    ]
  },
  // Add more projects here...
];

function FrontendProjects() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div className="projects-container">
      {/* <h2>Full-stack Projects</h2> */}
      <ul className="projects-list">
        {projects.map((project, index) => (
          <li key={index} className="project-item card">
            <h3>{project.title}</h3>
            <p className="p-x-small"><strong>Technologies Used:</strong> {project.technologies}</p>
            <p className="p-x-small"><strong>Date Created:</strong> {project.date}</p>
            <p className="p-x-small"><strong>Details:</strong> {project.details}</p>
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub Link</a>
            <div className="project-images">
              {project.images.map((image, imgIndex) => (
                <img 
                  key={imgIndex} 
                  src={image} 
                  alt={`${project.title} Screenshot ${imgIndex + 1}`} 
                  className="project-image" 
                  onClick={() => openLightbox(image)} 
                />
              ))}
            </div>
          </li>
        ))}
      </ul>

      {selectedImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <img src={selectedImage} alt="Full Size" className="lightbox-image" />
        </div>
      )}
    </div>
  );
}

export default FrontendProjects;
