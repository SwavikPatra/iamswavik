import React from 'react'
import "../css/card.css"
import "../css/remove-underline.css"
import "../css/text-size.css"

function Certificates() {
  return (
    <section className="skill-section">
      <h3>Certificates</h3>
      <div className="card remove-underline">
        <a href = "https://drive.google.com/file/d/1-THkEMEc2ZCHxg_oIr9Gj8hE0qQ90tLe/view?usp=drive_link" target="_blank" rel="noopener noreferrer"><h5>The Python Bootcamp</h5></a>
      </div>
      <div className="card remove-underline">
        <a href = "https://drive.google.com/file/d/15djuIRrCBfRbFO4krER-PPwQXVOWH5K8/view?usp=drive_link" target="_blank" rel="noopener noreferrer"><h5>The Complete Web Developement Bootcamp</h5></a>
      </div>
      
    </section>
  );
}

export default Certificates