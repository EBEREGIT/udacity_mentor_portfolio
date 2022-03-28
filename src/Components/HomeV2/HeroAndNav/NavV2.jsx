import React, { useContext } from "react";
import { HelperContext } from "../../../Context/Helper";

export default function NavV2() {
  const { scrolled } = useContext(HelperContext);

  return (
    <>
      <section id="nav" className={scrolled ? "nav_scroll" : ""}>
        <a href="/">
          <img
            src={
              scrolled
                ? "https://play-lh.googleusercontent.com/IqrjpOUFUeWIzSDh6CvMz1Ad-jSAri04-M6dftiIqcMSo4jwaSlYwSwUU8lJR3FrIUw=s360-rw"
                : "https://res.cloudinary.com/byterestaurant/image/upload/v1638041535/ooma%20web/ooma_logo_3_hjbssd.png"
            }
            alt="site identity"
          />
        </a>

        <aside>
          <a href="/">Meal plans</a>
          <a href="/">Our meals</a>
          <a href="/">Contact us</a>
        </aside>
      </section>
    </>
  );
}
