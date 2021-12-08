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
      <h2>Varieties of Healthy-good for-you-foods</h2>

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
        {/* 1 */}
        <SwiperSlide>
          <img
            src="https://res.cloudinary.com/dsepncuj8/image/upload/v1638605685/OOMA%20KITCHEN/OOMA_Special_Jollof_Rice_Gallery_ojyk9v.jpg"
            alt="Kitchen Staff Slicing Vegetables"
          />
        </SwiperSlide>

        {/* 2 */}
        <SwiperSlide>
          <img
            src="https://res.cloudinary.com/dsepncuj8/image/upload/v1638605685/OOMA%20KITCHEN/OOMA_Special_Salad_Gallery_mbnrpc.jpg"
            alt="Nkwobi in her right sense. Get a taste!"
          />
        </SwiperSlide>

        {/* 3 */}
        <SwiperSlide>
          <img
            src="https://res.cloudinary.com/dsepncuj8/image/upload/v1638605685/OOMA%20KITCHEN/Ukwa_Plantain_and_beef_2_Gallery_daguvd.jpg"
            alt="Your Meal Now In Your Hands. Let's Plan It!"
          />
        </SwiperSlide>

        {/* 4 */}
        <SwiperSlide>
          <img
            src="https://res.cloudinary.com/dsepncuj8/image/upload/v1638605685/OOMA%20KITCHEN/Fisher_Man_Okra_Soup_Gallery_aucy4o.jpg"
            alt="Okra, Egwusi, Orah, Onugbu are all available. Make The call!"
          />
        </SwiperSlide>

        {/* 5 */}
        <SwiperSlide>
          <img
            src="https://res.cloudinary.com/dsepncuj8/image/upload/v1638605685/OOMA%20KITCHEN/Breakfast_Gallery_lehl6y.jpg"
            alt="Only The Best Chef Will Prepare Your Meals. What Will You Love For Your Next Meal?"
          />
        </SwiperSlide>
      </Swiper>
    </main>
  );
}
