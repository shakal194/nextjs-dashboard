'use client';

import React from 'react';

import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface Slide {
  id: number;
  title: string;
  description: string;
}

interface SliderProps {
  data: Slide[];
}

const SliderCryptocurrency: React.FC<SliderProps> = ({ data }) => {
  return (
    <div className="to-white-100 w-full rounded-3xl bg-gradient-to-r from-gray-100">
      <Swiper
        //navigation
        pagination={{
          type: 'bullets',
          clickable: true,
          dynamicBullets: true,
          el: '.custom-pagination',
        }}
        autoplay={true}
        loop={true}
        slidesPerView={4}
        spaceBetween={30}
        modules={[Autoplay, Navigation, Pagination]}
        className="custom-slider !py-4"
      >
        {data.map(({ id, title, description }) => (
          <SwiperSlide key={id}>
            <div
              key={id}
              className="block_hero_slider_item h-[150px] rounded bg-white p-4 shadow-md"
            >
              <h4 className="text-xl font-semibold">{title}</h4>
              <p className="mt-2">{description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="custom-pagination relative mt-5 flex justify-center"></div>
    </div>
  );
};

export default SliderCryptocurrency;
