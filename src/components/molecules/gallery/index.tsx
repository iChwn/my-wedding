import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./custom.scss";

// import required modules
/*@ts-ignore*/
import { FreeMode, Navigation, Thumbs } from "swiper";
import { wedding_image } from "assets/image";

export default function ImageGallery() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="relative w-full rounded-md overflow-hidden md:h-auto h-[450px] md:aspect-square border-2 border-white p-2">
      <Swiper
        style={{
          /*@ts-ignore*/
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <img alt="" src={wedding_image.G1} />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="" src={wedding_image.G2} />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="" src={wedding_image.G3} />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="" src={wedding_image.G4} />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="" src={wedding_image.G5} />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="" src={wedding_image.G6} />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="" src={wedding_image.G7} />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="" src={wedding_image.G8} />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper pb-0"
      >
        <SwiperSlide>
          <img alt="" src={wedding_image.G1} />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="" src={wedding_image.G2} />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="" src={wedding_image.G3} />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="" src={wedding_image.G4} />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="" src={wedding_image.G5} />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="" src={wedding_image.G6} />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="" src={wedding_image.G7} />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="" src={wedding_image.G8} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}