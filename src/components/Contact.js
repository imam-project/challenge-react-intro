// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from "react";
import "./contact.css";

const Contact = ({ data }) => {
  return (
    <div className="card">
      <div className="contact">
        <img src={data.photo} alt="pict" />
        <div className="description">
          <h4>{data.name}</h4>
          <p>{data.phone}</p>
          <p>{data.email}</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
