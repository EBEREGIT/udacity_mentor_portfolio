import React from "react";
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
            src="https://res.cloudinary.com/dsepncuj8/image/upload/v1636653422/OOMA%20KITCHEN/kitchen_2_r6inho.jpg"
            alt="Kitchen Staff Slicing Vegetables"
          />
          <p>Kitchen Staff Slicing Vegetables.</p>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://res.cloudinary.com/dsepncuj8/image/upload/v1636653422/OOMA%20KITCHEN/Slider_1_kuxewd.jpg"
            alt="Nkwobi in her right sense. Get a taste!"
          />
          <p>Nkwobi in her right sense. Get a taste!</p>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://res.cloudinary.com/dsepncuj8/image/upload/v1636653422/OOMA%20KITCHEN/App_Web_ibyaiq.png"
            alt="Your Meal Now In Your Hands. Let's Plan It!"
          />
          <p>Your Meal Now In Your Hands. Let's Plan It!</p>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://res.cloudinary.com/dsepncuj8/image/upload/v1636654062/OOMA%20KITCHEN/Achieve_a_Healthier_Lifestyle_2_q3ko03.jpg"
            alt="Okra, Egwusi, Orah, Onugbu are all available. Make The call!"
          />
          <p>Okra, Egwusi, Orah, Onugbu are all available. Make The call!</p>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://res.cloudinary.com/dsepncuj8/image/upload/v1636653422/OOMA%20KITCHEN/At_OOMA_Kitchen_lpipor.jpg"
            alt="Only The Best Chef Will Prepare Your Meals. What Will You Love For Your Next Meal?"
          />
          <p>
            Only The Best Chef Will Prepare Your Meals. What Will You Love For
            Your Next Meal?
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://res.cloudinary.com/dsepncuj8/image/upload/v1636653423/OOMA%20KITCHEN/Slider_2_nvcgds.jpg"
            alt="Eat Proper, Stay Healthy. OOMA Now At Your Door Step To Help!"
          />
          <p>Eat Proper, Stay Healthy. OOMA Now At Your Door Step To Help!</p>
        </SwiperSlide>
      </Swiper>
    </main>
  );
}
