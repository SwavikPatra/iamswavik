import React from 'react';
import "../css/contacts.css";

function Contacts() {
  return (
    <div className="center-content">
      <div className="contact-item">
        <div className="contacts">
          <img src ={`${process.env.PUBLIC_URL}/img/logo/phone.png`} className="contact-icon" alt= "phonee"/>
        </div>
        <p>+91-9777853386</p>
      </div>
      
      

      <div className="contact-item">
        <hr style={{ border: "1px solid ", margin: "20px 0px" }} />
        <div className="contacts mail">
        <img src ={`${process.env.PUBLIC_URL}/img/logo/mail.png`} className="contact-icon" alt= "phonee"/>
        </div>
        <p>kunuswavik@gmail.com</p>
      </div>
    </div>
  );
}

export default Contacts;
