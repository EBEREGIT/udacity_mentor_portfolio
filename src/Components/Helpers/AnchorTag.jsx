import React from "react";

export default function AnchorTag({ icon, title, link }) {
  return (
    <>
      <a href={link}>
        <span>{icon}</span>
        <span>{title}</span>
      </a>
    </>
  );
}
