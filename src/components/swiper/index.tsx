"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";

const SwiperCards = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={2}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSlideChange={() => console.log("Slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      className="container"
    >
      <SwiperSlide>
        <div className="h-[400px] bg-gray-200 flex items-center justify-center">
          Slide 1
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="h-[400px] bg-gray-300 flex items-center justify-center">
          Slide 2
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="h-[400px] bg-gray-400 flex items-center justify-center">
          Slide 3
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="h-[400px] bg-gray-500 flex items-center justify-center">
          Slide 4
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperCards;
