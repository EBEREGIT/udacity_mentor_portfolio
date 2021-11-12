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
          alt="Live Healthier"
        />

        <EachHeroSlide
          desktopImage="https://res.cloudinary.com/dsepncuj8/image/upload/v1636653423/OOMA%20KITCHEN/Slider_2_nvcgds.jpg"
          alt="Food and Delivery"
        />
      </Carousel>
    </div>
  );
}
