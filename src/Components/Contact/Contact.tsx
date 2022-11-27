import React from "react";
import { ContactContainer } from "./styles/contact.styled";
import ContactDetails from "./ContactDetails";
import ContactForm from "./ContactForm";


const Contact: React.FC = () => {
  return (
    <ContactContainer id="contact">
      <ContactDetails />
      <ContactForm />
    </ContactContainer>
  );
};

export default Contact;
