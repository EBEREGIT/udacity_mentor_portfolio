import React from "react";
import { Carousel } from "react-responsive-carousel";

export default function Hero() {
  return (
    <section id="hero">
      <img
        src="https://res.cloudinary.com/dsepncuj8/image/upload/v1648193107/Figma%20Wbsite%20Images/Your_digital_Family_Chef_fbg8gw.png"
        alt="intro shape"
      />
      <p>... YOUR DIGITAL FAMILY CHEF</p>

      <Carousel
        autoPlay="true"
        infiniteLoop="true"
        showThumbs="false"
        showStatus="false"
        stopOnHover="true"
        useKeyboardArrows="true"
        swipeable="true"
        emulateTouch="true"
      >
        <Content1 />
        <Content2 />
        <Content3 />
      </Carousel>
    </section>
  );
}

function Content1() {
  return (
    <aside>
      <h1>VARIETIES OF</h1>
      <h1>
        <span>GOOD-FOR-YOU</span> MEALS
      </h1>
    </aside>
  );
}

function Content2() {
  return (
    <aside>
      <h1>Super </h1>
      <h1>
        <span>convenient</span>
      </h1>
    </aside>
  );
}

function Content3() {
  return (
    <aside>
      <h1>Sourced from</h1>
      <h1>
        <span>reliable </span> partners
      </h1>

      <h1>
        and
        <span> prepared fresh </span>
      </h1>
    </aside>
  );
}
