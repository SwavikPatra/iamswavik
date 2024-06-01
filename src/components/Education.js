import React from 'react'
import "../css/text-size.css"
import "../App.css"

function Education() {
  return (
    <div>
        <div className="education-section">
        <h3>Education</h3>
        <div className="card">
          <h5>Master of Technology in Computer Science & Engeneering</h5>
          <p className="p-x-small">National Institute of Technology, Warangal, Telangana, India</p>
          <p className="p-x-small">2022 - 2024</p>
        </div>

        <div className="card">
          <h5>Master in Computer Application</h5>
          <p className="p-x-small">Ravenshaw University, Cuttack, Odisha, India</p>
          <p className="p-x-small">2017 - 2020</p>
        </div>

        <div className="card">
          <h5>Bachelor of Science in Computer Science</h5>
          <p className="p-x-small">College of Basic Science & Humanities, Bhubaneswar, Odisha, India</p>
          <p className="p-x-small">2014 - 2017</p>
        </div>

        <div className="card">
        <h5>11th and 12th Grades (Higher Secondary)</h5>
        <p className="p-x-small">Council Of Higher Secondary Education, Odisha, India</p>
        <p className="p-x-small">College of Basic Science & Humanities, Bhubaneswar, Odisha, India</p>
        <p className="p-x-small">2011 - 2013</p>
      </div>
      </div>
    </div>
  )
}

export default Education