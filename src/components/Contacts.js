import React from 'react';
import "../css/contacts.css";

function Contacts() {
  return (
    <div className="center-content">
      <div className="contact-item">
        <div className="contacts">
          <img src ={`${process.env.PUBLIC_URL}/img/logo/phone.png`} className="contact-icon" alt= "phone"/>
        </div>
        <div className="contact">+91-9777853386</div>
      </div>
      
      

      <div className="contact-item">
        <hr style={{ border: "1px solid ", margin: "20px 0px" }} />
        <div className="contacts mail">
        <img src ={`${process.env.PUBLIC_URL}/img/logo/mail.png`} className="contact-icon" alt= "phone"/>
        </div>
        <div className="contact">kunuswavik@gmail.com</div>
      </div>
    </div>
  );
}

export default Contacts;
