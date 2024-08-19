import Link from 'next/link';
import { ChevronRightIcon } from '@heroicons/react/24/outline';

const TechnicalSupportAndAvailability = () => {
  return (
    <section className="block_technical_support white_section pb-[150px]">
      <div className="container mx-auto w-full max-w-[1356px] p-0">
        <div className="block_technical_support_row flex items-center justify-between">
          <div className="block_technical_support_row_left w-full max-w-[45%]">
            <div className="section_top_parth mb-[40px] w-full max-w-[580px]">
              <h2 className="mb-[32px] text-[36px] font-bold leading-[48px]">
                Technical Support and Availability
              </h2>
              <p className="section_top_parth_description mb-2 text-base font-normal leading-[26px] text-gray-700">
                Our professional customer service team is always available to
                help with any queries. Feel free to get in touch.
              </p>
            </div>
            <Link
              className="b2b_link tangerine_link group flex items-center space-x-2 text-[#204bdb] hover:text-[#204bdb]"
              target="_blank"
              href="/signup"
            >
              Get Support
              <ChevronRightIcon className="ml-2 h-4 w-4 transform text-blue-600 transition-transform duration-300 ease-in-out group-hover:translate-x-2" />
            </Link>
          </div>
          <div className="block_technical_support_row_right w-full max-w-[45%] text-[94px] font-semibold leading-[135px] text-[#204bdb]">
            <p>24/7/365</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSupportAndAvailability;
