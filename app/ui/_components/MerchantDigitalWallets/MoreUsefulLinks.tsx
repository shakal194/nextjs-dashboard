import Link from 'next/link';
import { ChevronRightIcon } from '@heroicons/react/24/outline';

const MoreUsefulLinks = () => {
  return (
    <section className="block_linksbox_section white_section pb-[150px] pt-0">
      <div className="container mx-auto w-full max-w-[1356px]">
        <h2 className="mb-[84px] text-[36px] font-bold leading-[48px]">
          More useful links
        </h2>
        <div className="block_linksbox block_linksbox_alignstart flex w-full flex-wrap justify-start gap-9">
          <Link
            href="/available-currencies"
            className="short_box block_linksbox_single group mb-4 w-full max-w-33% transform rounded-lg border border-gray-200 p-8 transition-all delay-200 duration-300 ease-in-out hover:border-[#204bdb] hover:bg-gray-100"
          >
            <h4 className="mb-3 text-lg font-semibold text-[#262e39]">
              Available Currencies
            </h4>
            <p className="b2b_link mb-0 mt-6 flex items-center text-sm text-[#91919e] transition-all delay-200 duration-300 ease-in-out group-hover:text-[#204bdb]">
              Explore
              <ChevronRightIcon className="ml-2 h-4 w-4 transform transition-all delay-200 duration-300 ease-in-out group-hover:translate-x-2" />
            </p>
          </Link>
          <Link
            href="/crypto-processing-solutions-comparison"
            className="short_box block_linksbox_single group mb-4 w-full max-w-33% transform rounded-lg border border-gray-200 p-8 transition-all delay-200 duration-300 ease-in-out hover:border-[#204bdb] hover:bg-gray-100"
          >
            <h4 className="mb-3 text-lg font-semibold text-[#262e39]">
              Solutions Comparison
            </h4>
            <p className="b2b_link mb-0 mt-6 flex items-center text-sm text-[#91919e] transition-all delay-200 duration-300 ease-in-out group-hover:text-[#204bdb]">
              Explore
              <ChevronRightIcon className="ml-2 h-4 w-4 transform transition-all delay-200 duration-300 ease-in-out group-hover:translate-x-2" />
            </p>
          </Link>
          <Link
            href="/minimum-deposits-withdrawals"
            className="short_box block_linksbox_single group mb-4 w-full max-w-33% transform rounded-lg border border-gray-200 p-8 transition-all delay-200 duration-300 ease-in-out hover:border-[#204bdb] hover:bg-gray-100 "
          >
            <h4 className="mb-3 text-lg font-semibold text-[#262e39]">
              Minimum Deposits
            </h4>
            <p className="b2b_link mb-0 mt-6 flex items-center text-sm text-[#91919e] transition-all delay-200 duration-300 ease-in-out group-hover:text-[#204bdb]">
              Explore
              <ChevronRightIcon className="ml-2 h-4 w-4 transform transition-all delay-200 duration-300 ease-in-out group-hover:translate-x-2" />
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MoreUsefulLinks;
