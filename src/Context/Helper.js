// external imports
import React, { createContext, useState } from "react";

// create Helper context to manage Helper here
export const HelperContext = createContext();

export default function HelperContextProvider(props) {
  // set initial state
  const [scrolled, setScrolled] = useState(false);

  const checkScroll = () => {
    window.addEventListener("scroll", function (event) {
        // To listen for event
        event.preventDefault();
    
        if (window.scrollY > 100) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      });
  }

  return (
    <HelperContext.Provider value={{ scrolled, setScrolled, checkScroll }}>
      {props.children}
    </HelperContext.Provider>
  );
}
