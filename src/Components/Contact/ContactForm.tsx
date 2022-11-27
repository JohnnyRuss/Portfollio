import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";

interface ContactFormType {}

const ContactForm: React.FC<ContactFormType> = (props) => {
  const { t } = useTranslation();
  const formRef = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAIL_JS_SERVICE_ID!,
        process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID!,
        formRef.current!,
        process.env.REACT_APP_EMAIL_JS_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          formRef.current?.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form className="contact__form" onSubmit={sendEmail} ref={formRef}>
      <input
        className="inp__field inp__input"
        name="user_name"
        type="text"
        placeholder={t("contact_form_name") || ""}
      />
      <input
        className="inp__field inp__input"
        type="text"
        name="user_subject"
        placeholder={t("contact_form_subject") || ""}
      />
      <input
        className="inp__field inp__input"
        type="email"
        name="user_email"
        placeholder={t("contact_form_email") || ""}
      />
      <textarea
        className="inp__field inp__input-text"
        placeholder={t("contact_form_message") || ""}
        name="message"
      />
      <button type="submit" className="send__email-btn">
        {t("contact_form_send_btn")}
      </button>
    </form>
  );
};

export default ContactForm;
