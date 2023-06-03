import React from "react";
import useStore from "../../store/store";

import { DetailsContainer } from "./styles/details.styles";
import { ImMobile, ImFacebook, ImLocation2 } from "react-icons/im";
import { HiOutlineMail } from "react-icons/hi";
import { useTranslation } from "react-i18next";

const ContactDetails: React.FC = () => {
  const contact = useStore((state) => state.contact);
  const { t } = useTranslation();

  return (
    <DetailsContainer>
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
          <a href={contact.facebook} target="_blank" rel="noreferrer">
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
    </DetailsContainer>
  );
};

export default ContactDetails;
