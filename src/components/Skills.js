import React from 'react';
import "../css/text-size.css"

const SkillSection = () => {
  return (
    <section className="skill-section">
      <h3>Skills</h3>
      <div className="card">
        <h5>Programming Languages</h5>
        <p className="p-x-small">C++, Python, Java, C, JavaScript</p>
      </div>
      <div className="card">
        <h5>Frontend Technologies</h5>
        <p className="p-x-small">HTML, CSS, React.js, jQuery</p>
      </div>
      <div className="card">
        <h5>Backend Technologies</h5>
        <p className="p-x-small">Node.js, Express.js, Django, RESTfull API</p>
      </div>
      <div className="card">
        <h5>Database Systems</h5>
        <p className="p-x-small">MySQL, MongoDB</p>
      </div>
      <div className="card">
        <h5>Version Control</h5>
        <p className="p-x-small">Git</p>
      </div>
      <div className="card">
        <h5>Operating System</h5>
        <p className="p-x-small">Linux, Windows</p>
      </div>
      <div className="card">
        <h5>Course Works</h5>
        <p className="p-x-small"> Operating System, DBMS, Computer Networking, Data Structures and Algorithms</p>
      </div>
      <div className="card">
        <h5>Soft Skills</h5>
        <p className="p-x-small">Communication, Problem-Solving, Time Management, Team player</p>
      </div>
      
      <div className="card">
        <h5>Areas of Interest</h5>
        <p className="p-x-small"> Web Development, Software Development, Cloud Computing</p>
      </div>
    </section>
  );
};

export default SkillSection;
