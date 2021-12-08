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
          desktopImage="https://res.cloudinary.com/dsepncuj8/image/upload/v1637060538/OOMA%20KITCHEN/New_Slider_1_Web_zprwp3.jpg"
          mobileImage="https://res.cloudinary.com/dsepncuj8/image/upload/v1637060540/OOMA%20KITCHEN/New_Slider_1_Mobile_qsdwel.jpg"
          alt="OOMA Kitchen"
          p1="Your digital personal and family"
          p2="chef."
          p3=""
        />

        <EachHeroSlide
          desktopImage="https://res.cloudinary.com/dsepncuj8/image/upload/v1636653423/OOMA%20KITCHEN/Slider_2_nvcgds.jpg"
          mobileImage="https://res.cloudinary.com/dsepncuj8/image/upload/v1637060543/OOMA%20KITCHEN/New_Slider_2_Mobile_fbdq92.jpg"
          alt="Live Healthier"
          p1="Get a personalized meal plan,"
          p2="with unique recipes that fits your"
          p3="lifestyle."
        />
      </Carousel>
    </div>
  );
}
