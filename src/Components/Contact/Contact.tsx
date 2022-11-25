import React from "react";
import { ContactContainer } from "./contact.styled";
import ContactDetails from "./ContactDetails";
import ContactForm from "./ContactForm";

interface ContactType {}

const Contact: React.FC<ContactType> = (props) => {
  return (
    <ContactContainer id="contact">
      <ContactDetails />
      <ContactForm />
    </ContactContainer>
  );
};

export default Contact;
