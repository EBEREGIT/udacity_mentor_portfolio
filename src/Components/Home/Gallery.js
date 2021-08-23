import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";

// import Swiper core and required modules
import SwiperCore, {
  Autoplay,
  EffectCoverflow,
  Pagination,
  Navigation,
} from "swiper/core";

// install Swiper modules
SwiperCore.use([Autoplay, EffectCoverflow, Pagination, Navigation]);

export default function Gallery() {
  return (
    <main id="home_gallery">
      <h2>Your health and wellbeing comes first</h2>

      <h3>State of the art Kitchen</h3>

      <Swiper
        effect={"coverflow"}
        loop={true}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        autoplay={{
          delay: 2500,
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 5,
          stretch: 0,
          depth: 100,
          modifier: 4,
          slideShadows: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-1.jpg"
            alt="vghjk"
          />
          <p>Food is cooked with utmost care, by our professional chefs.</p>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-2.jpg"
            alt="vghjk"
          />
          <p>Food is cooked with utmost care, by our professional chefs.</p>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-3.jpg"
            alt="ghyjuki"
          />
          <p>Food is cooked with utmost care, by our professional chefs.</p>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-4.jpg"
            alt="ghyjuki"
          />
          <p>Food is cooked with utmost care, by our professional chefs.</p>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-5.jpg"
            alt="ghyjuki"
          />
          <p>Food is cooked with utmost care, by our professional chefs.</p>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-6.jpg"
            alt="ghyjuki"
          />
          <p>Food is cooked with utmost care, by our professional chefs.</p>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-7.jpg"
            alt="dfgds"
          />
          <p>Food is cooked with utmost care, by our professional chefs.</p>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-8.jpg"
            alt="dfgds"
          />
          <p>Food is cooked with utmost care, by our professional chefs.</p>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-9.jpg"
            alt="dfgds"
          />
          <p>Food is cooked with utmost care, by our professional chefs.</p>
        </SwiperSlide>
      </Swiper>
    </main>
  );
}
