import React, { useState } from 'react';
import "../css/projects.css";

import FullstackProjects from "./FullstackProjects.js"
import FrontendProjects from "./FrontendProjects.js"
import AIMLDLProjects from "./AIMLDLProjects.js"


function Bio() {
  const [clickedButton, setClickedButton] = useState('FullstackProjects');

  const handleButtonClick = (button) => {
    setClickedButton(button);
  };

  return (
    <div className="container">
      <div className="home-div size left">
        <div>
          <p>Hi, I'm Swavik.</p>
        </div>
        <div>
          <button 
            className={`text-button ${clickedButton === 'FullstackProjects' ? 'active' : ''}`} 
            onClick={() => handleButtonClick('FullstackProjects')}
          >
            Fullstack Projects
          </button>
        </div>
        <div>
          <button 
            className={`text-button ${clickedButton === 'FrontendProjects' ? 'active' : ''}`} 
            onClick={() => handleButtonClick('FrontendProjects')}
          >
            Fontend Projects
          </button>
        </div>
        <div>
          <button 
            className={`text-button ${clickedButton === 'AIMLDLProjects' ? 'active' : ''}`} 
            onClick={() => handleButtonClick('AIMLDLProjects')}
          >
            AI/ ML/ DL Projects
          </button>
        </div>
        
      </div>
      <div className="home-div sizee vertical-line right">
        { clickedButton === 'FullstackProjects' && <FullstackProjects/>}
        { clickedButton === 'FrontendProjects' && <FrontendProjects/>}
        { clickedButton === 'AIMLDLProjects' && <AIMLDLProjects/>}
      </div>
    </div>
  );
}

export default Bio;
