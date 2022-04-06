import React from "react";
import Content from "./Content";

export default function Resources() {
  return (
    <>
      <Content
        heading={"Resources"}
        title1={"Resume"}
        title2={"Contact"}
        title3={"About"}
        link1="/resume"
        link2="/contact"
        link3="/about"
      />
    </>
  );
}
