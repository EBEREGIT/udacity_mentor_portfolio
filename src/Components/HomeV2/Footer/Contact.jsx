import React from "react";
import Content from "./Content";
import { ImWhatsapp, ImEnvelop } from "react-icons/im";
import { BiPhoneCall } from "react-icons/bi";

export default function Contact() {
  return (
    <>
      <Content
        heading={"Contact us"}
        icon1={<ImWhatsapp />}
        icon2={<BiPhoneCall />}
        icon3={<ImEnvelop />}
        title1={"08011223344"}
        title2={"08055667788"}
        title3={"samsoneberenjoku@gmail.com"}
        link1="https://wa.me/2348011223344"
        link2="tel:2348055667788"
        link3="mailto:samsoneberenjoku@gmail.com"
      />
    </>
  );
}
