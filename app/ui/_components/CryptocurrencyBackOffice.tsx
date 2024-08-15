'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import features from '@/app/ui/_data/CryptocurrencyBackOffice.json';
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';

const CryptocurrencyBackOffice = () => {
  const [visibleImageBackOfficeIndex, setVisibleImageBackOfficeIndex] =
    useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const targets = Array.from(
        document.querySelectorAll('.js-sticky-trigger-backoffice'),
      );
      targets.forEach((target, index) => {
        const rect = target.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight - 200) {
          setVisibleImageBackOfficeIndex(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const styles = {
    carouselBoxImg: {
      position: 'absolute' as 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      opacity: 0,
      transition: 'opacity 0.4s ease',
    },
    carouselBoxImgVisible: {
      opacity: 1,
    },
  };

  return (
    <section className="block_sticky white_section py-[150px]">
      <div className="container mx-auto w-full max-w-[1356px] p-0">
        <div className="section_top_parth mb-[90px] w-full max-w-[580px]">
          <h2 className="mb-8 text-[36px] font-bold leading-[48px]">
            Back Office
          </h2>
        </div>
      </div>
      <div className="container mx-auto w-full max-w-[1356px] p-0">
        <div className="block_sticky_main js-sticky-change flex justify-between">
          <div className="block_sticky_main_boxes w-full max-w-[700px]">
            {features.map((feature) => (
              <div
                key={feature.id}
                data-number-backoffice={feature.id}
                className="block_sticky_main_boxes_single js-sticky-trigger-backoffice relative flex pb-[300px] pt-6 before:absolute before:top-0 before:h-[1px] before:w-full before:max-w-full before:bg-gradient-to-r before:from-[#204bdb]  before:to-[rgba(255,114,92,0)] before:content-['']"
              >
                <h3 className="mr-9 w-full max-w-[201px] hyphens-auto text-2xl font-semibold leading-9">
                  {feature.title}
                </h3>
                <div className="block_sticky_main_boxes_content flex w-full max-w-[500px]">
                  <div className="w-full text-sm font-normal leading-6 tracking-normal text-[#5f5f6a]">
                    {Array.isArray(feature.description) ? (
                      feature.description.map((desc, index) => (
                        <div
                          key={index}
                          className="mb-[26px] flex items-center"
                        >
                          <ArrowLongRightIcon className="w-7 text-blue-500" />
                          <p className="ml-[15px] text-[15px] font-medium leading-[22px]">
                            {desc}
                          </p>
                        </div>
                      ))
                    ) : (
                      <div>{feature.description}</div>
                    )}
                  </div>
                  <div className="mobile_zone"></div>
                </div>
              </div>
            ))}
          </div>
          <div className="block_sticky_main_carousel sticky top-[25%] max-h-[380px] w-full max-w-[580px] transform overflow-hidden rounded-[16px] shadow-[31px_29.6364px_46px_rgba(30,29,28,.1),29.6364px_29.6364px_46px_rgba(30,29,28,.08)]">
            <div className="block_sticky_main_carousel_box relative h-full w-full">
              {features.map((feature, index) => (
                <div
                  key={feature.id}
                  data-number-backoffice={feature.id}
                  className={`block_sticky_main_carousel_box_img js-sticky-img ease absolute left-0 top-0 h-full w-full transition-opacity duration-75 ${visibleImageBackOfficeIndex === index ? 'opacity-1 visible' : 'invisible opacity-0'}`}
                >
                  <Image
                    src={feature.imgSrc}
                    alt={feature.imgAlt}
                    title={feature.imgTitle}
                    className="lazy h-[380px] w-[580px]"
                    decoding="async"
                    loading="lazy"
                    priority={false}
                    width={0}
                    height={0}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CryptocurrencyBackOffice;
