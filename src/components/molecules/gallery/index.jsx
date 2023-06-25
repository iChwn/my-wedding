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
import { FreeMode, Navigation, Thumbs } from "swiper";
import { WeddingImage } from "assets/image";

export default function App() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="relative w-full rounded-md overflow-hidden md:h-auto h-[450px] md:aspect-square">
      <Swiper
        style={{
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
          <img alt="" src={WeddingImage.WeddingPhoto1} />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="" src={WeddingImage.WeddingPhoto2} />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="" src={WeddingImage.WeddingPhoto3} />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="" src={WeddingImage.WeddingPhoto6} />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="" src={WeddingImage.WeddingPhoto5} />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="" src={WeddingImage.WeddingPhoto4} />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="" src={WeddingImage.WeddingPhoto9} />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="" src={WeddingImage.WeddingPhoto7} />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="" src={WeddingImage.WeddingPhoto8} />
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
          <img alt="" src={WeddingImage.WeddingPhoto1} />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="" src={WeddingImage.WeddingPhoto2} />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="" src={WeddingImage.WeddingPhoto3} />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="" src={WeddingImage.WeddingPhoto6} />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="" src={WeddingImage.WeddingPhoto5} />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="" src={WeddingImage.WeddingPhoto4} />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="" src={WeddingImage.WeddingPhoto9} />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="" src={WeddingImage.WeddingPhoto7} />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="" src={WeddingImage.WeddingPhoto8} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}