import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import Link from 'next/link';
import { Locale, getDictionary } from '@/app/[lang]/dictionaries';

export default async function Footer({ lang }: { lang: Locale }) {
  const intl = await getDictionary(lang);

  return (
    <footer>
      <div className="mt-4 rounded-lg bg-blue-500 p-4 text-white md:flex md:justify-between">
        <div className={`${lusitana.className} self-center leading-none`}>
          <Link href="/">
            <div className="mb-2.5 flex items-center justify-center md:mb-0">
              <GlobeAltIcon className="h-8 w-8 rotate-[15deg] lg:h-12 lg:w-12" />
              <p className="text-[24px] lg:text-[44px]">CoinsFish</p>
            </div>
          </Link>
        </div>
        <div className="text-center sm:flex sm:justify-evenly sm:gap-8 sm:text-left">
          <div className="mb-3.5 sm:mb-0">
            <h3 className="mb-3.5 border-y-2 border-gray-200 font-bold md:text-[1rem] lg:text-2xl">
              {intl.index_footer.company.title}
            </h3>
            <ul className="flex flex-col gap-4 sm:text-[0.5rem] md:text-[0.75rem]">
              <li>
                <Link href="#">{intl.index_footer.company.list[0]}</Link>
              </li>
              <li>
                <Link href="#">{intl.index_footer.company.list[1]}</Link>
              </li>
              <li>
                <Link href="#">{intl.index_footer.company.list[2]}</Link>
              </li>
              <li>
                <Link href="#">{intl.index_footer.company.list[3]}</Link>
              </li>
              <li>
                <Link href="#">{intl.index_footer.company.list[4]}</Link>
              </li>
              <li>
                <Link href="#">{intl.index_footer.company.list[5]}</Link>
              </li>
              <li>
                <Link href="#">{intl.index_footer.company.list[6]}</Link>
              </li>
            </ul>
          </div>
          <div className="mb-3.5 sm:mb-0">
            <h3 className="mb-3.5 border-y-2 border-gray-200 font-bold md:text-[1rem] lg:text-2xl">
              {intl.index_footer.personal.title}
            </h3>
            <ul className="flex flex-col gap-4 sm:text-[0.5rem] md:text-[0.75rem]">
              <li>
                <Link href="#">{intl.index_footer.personal.list[0]}</Link>
              </li>
              <li>
                <Link href="#">{intl.index_footer.personal.list[1]}</Link>
              </li>
              <li>
                <Link href="#">{intl.index_footer.personal.list[2]}</Link>
              </li>
              <li>
                <Link href="#">{intl.index_footer.personal.list[3]}</Link>
              </li>
              <li>
                <Link href="#">{intl.index_footer.personal.list[4]}</Link>
              </li>
              <li>
                <Link href="#">{intl.index_footer.personal.list[5]}</Link>
              </li>
            </ul>
          </div>
          <div className="mb-3.5 sm:mb-0">
            <h3 className="mb-3.5 border-y-2 border-gray-200  font-bold md:text-[1rem] lg:text-2xl">
              {intl.index_footer.bussiness.title}
            </h3>
            <ul className="flex flex-col gap-4 sm:text-[0.5rem] md:text-[0.75rem]">
              <li>
                <Link href="#">{intl.index_footer.bussiness.list[0]}</Link>
              </li>
              <li>
                <Link href="#">{intl.index_footer.bussiness.list[1]}</Link>
              </li>
              <li>
                <Link href="#">{intl.index_footer.bussiness.list[2]}</Link>
              </li>
              <li>
                <Link href="#">{intl.index_footer.bussiness.list[3]}</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3.5 border-y-2 border-gray-200  font-bold md:text-[1rem] lg:text-2xl">
              {intl.index_footer.support.title}
            </h3>
            <ul className="flex flex-col gap-4 sm:text-[0.5rem] md:text-[0.75rem]">
              <li>
                <Link href="#">{intl.index_footer.support.list[0]}</Link>
              </li>
              <li>
                <Link href="#">{intl.index_footer.support.list[1]}</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
