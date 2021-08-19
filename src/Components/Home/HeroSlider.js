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
          desktopImage="https://res.cloudinary.com/dicmb8odi/image/upload/v1612447665/Desktop_slide_image_1_2_spha1l.png"
          alt="Live Healthier"
        />

        <EachHeroSlide
          desktopImage="https://res.cloudinary.com/dicmb8odi/image/upload/v1612447663/Desktop_slide_2_image_vhhmrs.png"
          alt="Food and Delivery"
        />

        <EachHeroSlide
          desktopImage="https://res.cloudinary.com/dicmb8odi/image/upload/v1612447665/Desktop_slide_image_1_2_spha1l.png"
          alt="Live Healthier"
        />

        <EachHeroSlide
          desktopImage="https://res.cloudinary.com/dicmb8odi/image/upload/v1612447663/Desktop_slide_2_image_vhhmrs.png"
          alt="Food and Delivery"
        />

        <EachHeroSlide
          desktopImage="https://res.cloudinary.com/dicmb8odi/image/upload/v1612447665/Desktop_slide_image_1_2_spha1l.png"
          alt="Live Healthier"
        />
      </Carousel>
    </div>
  );
}
