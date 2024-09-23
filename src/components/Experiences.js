import React from 'react';
import "../css/text-size.css";
import "../App.css";

function Experiences() {
  return (
    <div>
      <div className="experience-section">
        <h3>Experience</h3>
        
        <div className="card">
          <h5>Software Developer Intern (NodeJS, ReactJS)</h5>
          <p className="p-x-small">Performalytic</p>
          <p className="p-x-small">May 2023 - July 2023</p>
          <ul className="p-x-small">
            <li>Implemented OAuth and JWT for secure user authentication and authorization in web applications, using bcrypt for password hashing to enhance security.</li>
            <li>Integrated SendGrid API for password reset functionality, ensuring seamless user experience for account recovery.</li>
            <li>Contributed to database architecture and implemented data management solutions using MySQL, performing queries and data manipulations to support application functionalities.</li>
            <li>Utilized Git for version control to facilitate collaboration within the development team, ensuring smooth integration of code changes.</li>
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
