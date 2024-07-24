import React, { useRef, useState } from "react";
import Image from "next/image";
import { Text, Button, dataPertanyaan, H1, H3, H5 } from "@/components";
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

export function Qna() {
  const [swiperIndex, setSwiperIndex] = useState(0);
  const swiperRef: any = useRef();
  return (
    <>
      <div className="relative -z-0 h-full w-full bg-primary-300 p-[24px]">
        <H1 className="pt-[24px] text-center font-urbanist font-bold text-white">
          Ruang Tanya Jawab
        </H1>
        <div className="z-0 flex flex-col items-center justify-center overflow-hidden lg:flex-row">
          <Image
            src="/image.png"
            alt=""
            height={700}
            width={700}
            className="relative -z-[100]"
          />
          <div className="relative z-[100] h-full w-full overflow-hidden">
            <Image
              src="/image.png"
              width={50}
              height={50}
              alt=""
              className={`absolute bottom-0 left-[43%] z-40 hidden -rotate-90 hover:cursor-pointer lg:block ${
                swiperIndex == 0 ? "opacity-50" : ""
              }`}
              onClick={() => swiperRef.current?.slidePrev()}
            />
            <Swiper
              onBeforeInit={(swiper) => (swiperRef.current = swiper)}
              onSlideChange={(swiper) => setSwiperIndex(swiper.realIndex)}
              className="mx-12 my-12 h-[75%]"
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
                  <div key={i}>
                    <SwiperSlide className="flex h-fit w-fit items-center justify-center text-center">
                      <div className="mx-3 flex h-[250px] w-fit flex-col items-center justify-between rounded-[50px] bg-white p-[24px]">
                        <H5
                          size="lg"
                          className="text-center font-urbanist font-bold"
                        >
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
              className={`absolute bottom-0 left-[52%] z-40 hidden rotate-90 hover:cursor-pointer lg:block ${
                swiperIndex == dataPertanyaan.length - 1 ? "opacity-50" : ""
              }`}
              onClick={() => swiperRef.current?.slideNext()}
            />
          </div>
        </div>
        <div className="mx-auto block text-center">
          <H3 className="mb-[10px] font-urbanist">Lihat lebih banyak</H3>
          <Button
            size="md"
            text="Kirim Pertanyaan"
            color="secondary-300"
            className="mb-[64px]"
          />
        </div>
      </div>
    </>
  );
}
