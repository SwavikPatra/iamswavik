import React from 'react';
import "../css/contacts.css";
// import phone from "/img/logo/phone.png"
// import mail from "/img/logo/mail.png"

function Contacts() {
  return (
    <div className="center-content">
      <div className="contact-item">
        <div className="contacts">
          <img src ="/img/logo/phone.png" className="contact-icon" alt= "phonee"/>
        </div>
        <h1>+91-9777853386</h1>
      </div>
      
      

      <div className="contact-item">
        <hr style={{ border: "1px solid ", margin: "20px 0px" }} />
        <div className="contacts mail">
        <img src ="/img/logo/mail.png" className="contact-icon" alt= "phonee"/>
        </div>
        <h1>kunuswavik@gmail.com</h1>
      </div>
    </div>
  );
}

export default Contacts;
