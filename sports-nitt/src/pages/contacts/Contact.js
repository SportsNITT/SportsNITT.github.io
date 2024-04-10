import React from "react";
import Footer from "../../components/Footer";
import NavbarMain from "../../components/Navbar";
import ContactCard from "./contactCard";
import sasContactDetails from "./sasContactDetails";
import coreContactDetails from "./coreContactDetails";
import { colors } from "../../utils/colors";

import "./contact.css"

export default function Contact() {
  return (
    <div
      style={{
        textAlign: "center",
        height: "",
        scrollBehavior: "smooth",
        backgroundColor: colors.primary,
      }}
    >
      <NavbarMain />
      <div
        style={{
          marginTop: "60px",
          padding:"20px",
          marginBottom: "50px",
        }}
      >
        <p
          style={{
            color: colors.secondary,

            fontWeight: "800",
          }}
          className="contact-card-header"
        >
          CONTACTS
        </p>
        <p
          style={{
            color: "white",
            fontWeight: "600",
          }}
          className="contact-card-title"
        >
          SPORTS CORE'23
        </p>
        <div
            className="contact-div"
        >
            {coreContactDetails.map(person =>(
                <ContactCard imgName={person.photo}  name={person.name} position={person.position}   phone={person.phone}/>
            ))}
            
        </div>
        <p
          style={{
            color: "white",
            marginTop: "150px",
            fontWeight: "600",
          }}
          className="contact-card-title"
        >
          Students Activity and Sports Officer
        </p>
        <div
            className="contact-div sas-contact-div"
        >
            {sasContactDetails.map(person =>(
                <ContactCard imgName={person.photo}  name={person.name} position={person.position}   phone={person.phone}/>
            ))}
            
        </div>
       
      </div>
      <Footer />
    </div>
  );
}
