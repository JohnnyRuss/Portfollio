import React from "react";
import { ImMobile, ImFacebook, ImLocation2 } from "react-icons/im";
import { HiOutlineMail } from "react-icons/hi";
import { useTranslation } from "react-i18next";

import contact from "../../lib/contact.json";

interface ContactDetailsType {}

const ContactDetails: React.FC<ContactDetailsType> = (props) => {
  const { t } = useTranslation();

  return (
    <div className="contact__details">
      <p className="contact__heading">
        <span>contact</span>
      </p>
      <div className="details__box">
        <p>
          <span>
            <ImMobile />
          </span>
          <span>{contact.mobile}</span>
        </p>
        <p>
          <span>
            <HiOutlineMail />
          </span>
          <span>{contact.email}</span>
        </p>
        <p>
          <span>
            <ImFacebook />
          </span>
          <a href={contact.facebook} target="_blank">
            {t("contact_visit_me")}
          </a>
        </p>
        <p>
          <span>
            <ImLocation2 />
          </span>
          <span>{t("contact_location")}</span>
        </p>
      </div>
    </div>
  );
};

export default ContactDetails;
