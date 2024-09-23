import React from 'react';
import "../css/text-size.css";
import "../App.css";

function Experiences() {
  return (
    <div>
      <div className="experience-section">
        <h3>Experience</h3>
        
        <div className="card">
          <h5>Software Developer Intern (Python, Flask, Fast API, Celery)</h5>
          <p className="p-x-small">DataFoundary</p>
          <p className="p-x-small">August 2024 - Present</p>
          <ul className="p-x-small">
            <li>Built and developed backend APIs using <strong>Flask</strong> and integrated <strong>MongoDB</strong> for efficient audit management and data storage, handling sensitive medical field data.</li>
            <li>Designed and implemented <strong>asynchronous APIs</strong> and background tasks using <strong>FastAPI</strong> and <strong>Celery</strong>, utilizing <strong>Redis</strong> as an in-memory database for improved performance and scalability.</li>
            <li>Leveraged <strong>Git</strong> for version control and <strong>Docker</strong> for containerization to facilitate collaboration within the development team, ensuring smooth integration of code changes across <strong>14 team members</strong>.</li>
          </ul>
        </div>
        
        {/* You can add more experience cards here if needed, if you got more experience*/}
      </div>
    </div>
  );
  
}

export default Experiences;

// test comment
// another test comment
