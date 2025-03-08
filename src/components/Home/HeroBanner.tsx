"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

const HeroBanner = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image
            src="/assets/business.jpg"
            width={1920}
            height={1080}
            alt="Carosel Image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/asets/business.jpg"
            width={1920}
            height={1080}
            alt="Carosel Image"
            priority
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default HeroBanner;
