'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import features from '@/app/ui/_data/CryptocurrencyFAQ.json';

const CryptocurrencyFAQ = () => {
  //const [visibleImageIndex, setVisibleImageIndex] = useState<number>(0);

  /*useEffect(() => {
    const handleScroll = () => {
      const targets = Array.from(
        document.querySelectorAll('.js-sticky-trigger-secure-and-safe'),
      );
      targets.forEach((target, index) => {
        const rect = target.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight - 200) {
          setVisibleImageIndex(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);*/

  return (
    <section className="block_sticky white_section py-[150px]">
      <div className="container mx-auto w-full max-w-[1356px] p-0">
        <div className="section_top_parth mb-[90px] w-full max-w-[580px]">
          <h2 className="mb-8 text-[36px] font-bold leading-[48px]">FAQs</h2>
          <p className="text-base font-normal leading-[26px] text-gray-700">
            Have a question? An encyclopedia of useful information regarding our
            products and services.
          </p>
        </div>
      </div>
      <div className="container mx-auto w-full max-w-[1356px] p-0">
        <div className="block_faq_row">
          <div className="mr-9 w-full hyphens-auto text-[24px] font-semibold leading-[36px]">
            {features.map((feature) => {
              const parts = feature.answer.split(
                /(<a href='\/fees-pricing\/'>here<\/a>)/g,
              );
              return (
                <div
                  key={feature.id}
                  data-number={feature.id}
                  className="block_sticky_main_boxes_single js-sticky-trigger-secure-and-safe relative flex justify-between pb-[72px] pt-[24px] before:absolute before:top-0 before:h-[1px] before:w-full before:max-w-full before:bg-[#204bdb] before:content-['']"
                >
                  <h3>{feature.question}</h3>
                  <div className="block_faq_row_answer flex w-full max-w-[47%] text-[15px] font-normal leading-[24px] tracking-normal text-[#5f5f6a]">
                    <p>
                      {parts.map((part, index) =>
                        part === "<a href='/fees-pricing/'>here</a>" ? (
                          <Link
                            key={index}
                            href="/fees-pricing"
                            className="border-b hover:cursor-pointer hover:border-blue-700 hover:text-blue-700"
                          >
                            here
                          </Link>
                        ) : (
                          part
                        ),
                      )}
                    </p>
                    <div className="mobile_zone"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CryptocurrencyFAQ;
