import React from "react";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import { useState } from "react";

export default function BackToTop() {
  const [state, setState] = useState(null);

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      setState(true);
    } else {
      setState(false);
    }
  }

  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return (
    <>
      <button
        className="btn_green"
        onClick={() => topFunction()}
        id="back_to_top"
        title="Go to top"
        style={{ display: state ? "block" : "none" }}
      >
        <KeyboardArrowUpIcon style={{ fontSize: 40 }} />
      </button>
    </>
  );
}
