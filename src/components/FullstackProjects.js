import React, { useState } from 'react';
import "../css/card.css"
import "../css/full-stack-projects.css"
import "../css/text-size.css"

const projects = [
  {
    title: "Online Market Place",
    technologies: "Django, HTML, CSS, SQLite",
    date: "January 2022",
    details: "Designed and developed ’Online Market Place’, a user-friendly website for buying and selling Items.\nUser login system by combining the robust Django authentication system with the versatility of OAuth offering users a secure and streamlined login experience.\nSellers can add products with detailed descriptions, images, and prices. Buyers can easily browse products, search, contact to the seller to buy the product.\nBuyer and seller can chat seamlessly in real time. It uses Django channels which uses WebSockets, enabling users to engage in instantaneous and dynamic conversations.",
    githubLink: "https://github.com/SwavikPatra/online-market-place",
    images: [
        `${process.env.PUBLIC_URL}/img/marketplace/s1.png`,
        `${process.env.PUBLIC_URL}/img/marketplace/s2.png`,
        `${process.env.PUBLIC_URL}/img/marketplace/s3.png`,
        `${process.env.PUBLIC_URL}/img/marketplace/s4.png`,
        `${process.env.PUBLIC_URL}/img/marketplace/s5.png`,
        `${process.env.PUBLIC_URL}/img/marketplace/s6.png`,
        `${process.env.PUBLIC_URL}/img/marketplace/s7.png`,
        `${process.env.PUBLIC_URL}/img/marketplace/s8.png`
    ]
},

  {
    title: "Tweeting Site",
    technologies: "HTML, CSS, SendGrid, Bootstrap, SQLite",
    date: "June 2023",
    details: "A Twitter-like site for creating, deleting, and updating posts. Features include a like button, like count, and user registration/login, comments. Used Django Authentication system and for password reset Sendgrid API is used.",
    githubLink: "https://github.com/SwavikPatra/twitter-clone",
    images: [
      `${process.env.PUBLIC_URL}/img/twitter/s1.png`, // Example image paths
      `${process.env.PUBLIC_URL}/img/twitter/s2.png`,
      `${process.env.PUBLIC_URL}/img/twitter/s3.png`
    ]
  },
  // Add more projects here...
];

function FullstackProjects() {
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
      <ul className="projects-list ">
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

export default FullstackProjects;
