import React from "react";
import { Carousel } from "react-responsive-carousel";
import EachHeroSlide from "./HeroSlider/EachHeroSlide";

export default function HeroSlider() {
  return (
    <div id="hero-slider">
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
        <EachHeroSlide
          desktopImage="https://res.cloudinary.com/dsepncuj8/image/upload/v1636653422/OOMA%20KITCHEN/Slider_1_kuxewd.jpg"
          alt="OOMA Kitchen"
          p1="Your digital personal and family"
          p2="chef."
          p3=""
        />

        <EachHeroSlide
          desktopImage="https://res.cloudinary.com/dsepncuj8/image/upload/v1636653423/OOMA%20KITCHEN/Slider_2_nvcgds.jpg"
          alt="Live Healthier"
          p1="Get a personalized meal plan,"
          p2="with unique recipes that fits your"
          p3="lifestyle."
        />
      </Carousel>
    </div>
  );
}
