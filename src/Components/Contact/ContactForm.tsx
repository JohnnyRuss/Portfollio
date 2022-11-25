import React from "react";
import { useTranslation } from "react-i18next";

interface ContactFormType {}

const ContactForm: React.FC<ContactFormType> = (props) => {
  const { t } = useTranslation();

  return (
    <form className="contact__form">
      <input
        className="inp__field inp__input"
        type="text"
        placeholder={t("contact_form_name") || ""}
      />
      <input
        className="inp__field inp__input"
        type="text"
        placeholder={t("contact_form_subject") || ""}
      />
      <input
        className="inp__field inp__input"
        type="text"
        placeholder={t("contact_form_email") || ""}
      />
      <textarea
        className="inp__field inp__input-text"
        placeholder={t("contact_form_message") || ""}
      />
      <button type="submit" className="send__email-btn">
        {t("contact_form_send_btn")}
      </button>
    </form>
  );
};

export default ContactForm;
