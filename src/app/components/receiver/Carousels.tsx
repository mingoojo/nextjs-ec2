"use client"

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, Autoplay, Pagination } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "../../css/carousels.module.css"
import Image from "next/image";

type CarouselsProps = {
  slideData:{
    id: string,
    text: string,
    image: string,
  }[]
}

export default function Carousels({ slideData }:CarouselsProps) {
  SwiperCore.use([Navigation, Scrollbar, Autoplay, Pagination]);
  return (
    <div className={styles.carouselBox}>
      <Swiper
        className={styles.swiperBox}
        loop={true} // 슬라이드 루프
        spaceBetween={50} // 슬라이스 사이 간격
        slidesPerView={1} // 보여질 슬라이스 수
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: true, // 사용자 상호작용시 슬라이더 일시 정지 비활성
        }}
      >
        {slideData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className={styles.swiperItemBox}>
              <div className={styles.swiperTitie}>
                <p>{slide.text}</p>
              </div>
              <Image width='470' height="570" priority={true} src={`/images/${slide.image}`} alt="image"/>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}