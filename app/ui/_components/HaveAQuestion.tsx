import Image from 'next/image';
import Link from 'next/link';
import {
  UserIcon,
  UserPlusIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/solid';

const HaveAQuestion = () => {
  return (
    <section className="hquestion py-[150px]">
      <div className="hquestion__container container mx-auto flex w-full max-w-[1356px] gap-20">
        <div className="hquestion__head w-[464px] flex-none">
          <h2 className="hquestion__title m-0 p-0 text-3xl font-semibold leading-[135%] text-[#1d2127]">
            Have a question?
          </h2>
          <div className="hquestion__subtitle mt-8 text-base leading-[160%] text-[#1d2127]">
            Explore our solutions or you can contact us through ticket system
            and contact form. Feel free to get in touch.
          </div>
        </div>
        <div className="hquestion__list flex w-[740px] flex-none gap-20">
          <div className="hquestion__list__item flex w-[312px] flex-none flex-col">
            <div className="icon mb-[31px]">
              <UserIcon className="h-[50px] w-[50px] text-yellow-600" />
            </div>
            <div className="title pt-1 text-lg font-semibold leading-[150%] text-[#3d3d3d]">
              For existing clients
            </div>
            <div className="text pt-2 text-sm leading-[160%] text-[#91919e]">
              If you already have an account please use our ticket system.
            </div>
            <Link
              href="/signup"
              className="b2b_link external_links_checked group mt-4 flex items-center text-blue-500 transition-transform duration-300 ease-in-out hover:text-blue-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get 24/7 Support
              <ChevronRightIcon className="ml-2 h-4 w-4 transform transition-transform duration-300 ease-in-out group-hover:translate-x-2" />
            </Link>
          </div>

          <div className="hquestion__list__item flex w-[312px] flex-none flex-col">
            <div className="icon mb-[31px]">
              <UserPlusIcon className="h-[50px] w-[50px] text-blue-600" />
            </div>
            <div className="title pt-1 text-lg font-semibold leading-[150%] text-[#3d3d3d]">
              For new clients or partners
            </div>
            <div className="text pt-2 text-sm leading-[160%] text-[#91919e]">
              Please leave your inquiry and our Business Development Team will
              contact you shortly.
            </div>
            <Link
              href="/signup"
              className="b2b_link js-popup-open group mt-4 flex items-center text-blue-500 transition-transform duration-300 ease-in-out hover:text-blue-700"
            >
              Contact BD Team
              <ChevronRightIcon className="ml-2 h-4 w-4 transform transition-transform duration-300 ease-in-out group-hover:translate-x-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HaveAQuestion;
