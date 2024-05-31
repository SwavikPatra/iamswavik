import React from "react";
import "../css/social.css"; // Import CSS file for styling

function Social() {
  return (
    <div className="social-container">
      <div className="social-item large"></div>
      
      <div className="social-item small">
        <a
          href="https://github.com/SwavikPatra"
          target="_blank"
          rel="noopener noreferrer"
          className="link-with-image"
        >
          <img src="/img/logo/github.png" alt="GitHub" />
        </a>
      </div>
      <div className="social-item small">
        <a
          href="https://www.linkedin.com/in/swavik-patra-140482231/"
          target="_blank"
          rel="noopener noreferrer"
          className="link-with-image"
        >
          <img src="/img/logo/linkedin.png" alt="LinkedIn" />
        </a>
      </div>
      <div className="social-item small">
        <a
          href="https://twitter.com/kunuswavik"
          target="_blank"
          rel="noopener noreferrer"
          className="link-with-image"
        >
          <img src="/img/logo/twitter.png" alt="Twitter" />
        </a>
      </div>
      <div className="social-item small">
        <a
          href="https://leetcode.com/u/Swavik/"
          target="_blank"
          rel="noopener noreferrer"
          className="link-with-image"
        >
          <img src="/img/logo/code.png" alt="LeetCode" />
        </a>
      </div>
      <div className="social-item small">
        <a
          href="https://www.instagram.com/kunuswavik/"
          target="_blank"
          rel="noopener noreferrer"
          className="link-with-image"
        >
          <img src="/img/logo/instagram.png" alt="Instagram" />
        </a>
      </div>
      <div className="social-item large"></div>
    </div>
  );
}

export default Social;
