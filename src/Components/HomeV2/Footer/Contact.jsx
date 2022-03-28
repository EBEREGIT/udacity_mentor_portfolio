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
        title1={"08067723579"}
        title2={"08067723579"}
        title3={"support@ooma.kitchen"}
        link1="https://wa.me/2348067723579"
        link2="tel:2348101234567"
        link3="mailto:support@ooma.kitchen"
      />
    </>
  );
}
