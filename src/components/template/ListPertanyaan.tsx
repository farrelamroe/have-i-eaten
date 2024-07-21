import React, { useRef, useState } from "react";
import Image from "next/image";
import { Text, Button, H5, dataPertanyaan } from "@/components";
import {
  Swiper,
  SwiperSlide,
  // Navigation,
  // Pagination,
  // EffectCoverflow,
  // Autoplay,
} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-coverflow";

export function ListPertanyaan() {
  const [swiperIndex, setSwiperIndex] = useState(0);
  const swiperRef: any = useRef();
  return (
    <>
      <Image
        src="/image.png"
        width={50}
        height={50}
        alt=""
        className={`relative top-[50%] z-40 hidden -rotate-90 hover:cursor-pointer lg:block ${
          swiperIndex == 0 ? "opacity-50" : ""
        }`}
        onClick={() => swiperRef.current?.slidePrev()}
      />
      <Swiper
        onBeforeInit={(swiper: any) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setSwiperIndex(swiper.realIndex)}
        className="my-6"
        // modules={[Navigation, Pagination, EffectCoverflow, Autoplay]}
        slidesPerView={1}
        spaceBetween={0}
        grabCursor={true}
        // effect="coverflow"
        coverflowEffect={{
          scale: 0,
          rotate: 0,
          stretch: 0,
          depth: 0,
          slideShadows: false,
        }}
        // autoplay={{
        //   delay: 2500,
        // }}
        direction="horizontal"
        centeredSlides={true}
        breakpoints={{
          640: {
            coverflowEffect: {
              scale: 1,
              rotate: 0,
              stretch: 0,
              depth: 100,
              slideShadows: false,
            },
            direction: "horizontal",
            slidesPerView: 3,
            spaceBetween: 0,
            centeredSlides: true,
          },
          1024: {
            coverflowEffect: {
              scale: 1,
              rotate: 0,
              stretch: 0,
              depth: 100,
              slideShadows: false,
            },
            direction: "horizontal",
            slidesPerView: 3,
            spaceBetween: 0,
            centeredSlides: true,
          },
        }}
      >
        {dataPertanyaan.map(({ pertanyaan }, i) => {
          return (
            <div
              className="relative h-full w-full overflow-hidden bg-primary-200 text-white"
              key={i}
            >
              <SwiperSlide className="h-fit w-fit text-center">
                <div className="flex h-[250px] max-w-[250px] flex-col justify-between rounded-[50px] bg-white p-[24px]">
                  <H5 size="lg" className="text-center font-urbanist font-bold">
                    Pertanyaan:
                  </H5>
                  <Text size="lg" className="tect-center font-urbanist">
                    {pertanyaan}
                  </Text>
                  <Button
                    size="xs"
                    text="Lihat jawaban"
                    color="primary-400"
                    className="mx-auto block"
                  />
                </div>
              </SwiperSlide>
            </div>
          );
        })}
      </Swiper>
      <Image
        src="/image.png"
        width={50}
        height={50}
        alt=""
        className={`relative top-[50%] z-40 hidden rotate-90 hover:cursor-pointer lg:block ${
          swiperIndex == dataPertanyaan.length - 1 ? "opacity-50" : ""
        }`}
        onClick={() => swiperRef.current?.slideNext()}
      />
    </>
  );
}
