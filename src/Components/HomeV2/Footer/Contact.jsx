import React from "react";
import Content from "./Content";
import { ImEnvelop } from "react-icons/im";
import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai";

export default function Contact() {
  return (
    <>
      <Content
        heading={"Contact us"}
        icon1={<AiFillLinkedin />}
        icon2={<AiFillTwitterCircle />}
        icon3={<ImEnvelop />}
        title1={"Linkedin"}
        title2={"Twitter"}
        title3={"samsoneberenjoku@gmail.com"}
        link1="https://www.linkedin.com/in/samson-ebere-njoku-profile/"
        link2="https://twitter.com/eberetwit"
        link3="mailto:samsoneberenjoku@gmail.com"
      />
    </>
  );
}
