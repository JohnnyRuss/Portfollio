import React, { useRef, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";

import { FormContainer } from "./styles/form.styles";

const ContactForm: React.FC = () => {
  const { t } = useTranslation();
  const formRef = useRef<HTMLFormElement | null>(null);
  const [showMsg, setShowMsg] = useState(false);

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
          formRef.current?.reset();
          setShowMsg(true);
        },
        (error) => {
          // console.log(error.text);
        }
      );
  };

  useEffect(() => {
    if (!showMsg) return;

    setTimeout(() => {
      setShowMsg(false);
    }, 8500);
  }, [showMsg]);

  return (
    <FormContainer onSubmit={sendEmail} ref={formRef}>
      <input
        className="inp__field inp__input"
        name="user_name"
        type="text"
        required
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
        required
        placeholder={t("contact_form_email") || ""}
      />
      <textarea
        className="inp__field inp__input-text"
        placeholder={t("contact_form_message") || ""}
        required
        name="message"
      />
      <div className="form__footer">
        <button type="submit" className="send__email-btn">
          {t("contact_form_send_btn")}
        </button>
        {showMsg && <p className="success__msg">{t("email_success_msg")}</p>}
      </div>
    </FormContainer>
  );
};

export default ContactForm;
