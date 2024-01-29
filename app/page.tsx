import CoinHubLogo from '@/app/ui/coinhub-logo';
import Footer from '@/app/ui/footer';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';
import Slider from '@/app/ui/_components/slider';
import CoinSlider from '@/app/ui/_components/coin_slider';
import dataSlider from '@/app/ui/_data/slider-data.json';
import dataCoinSlider from '@/app/ui/_data/coin_slider-data.json';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-20">
        <Link href="/">
          <CoinHubLogo />
        </Link>
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <p>ACCEPT CRYPTO PAYMENTS WITH</p>
          <p
            className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}
          >
            <strong>COINHUB</strong>
          </p>

          <ul className="flex">
            <li className="mr-5">
              <Link
                href="/login"
                className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
              >
                <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
              </Link>
            </li>
            <li>
              <Link
                href="/signup"
                className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
              >
                <span>Sign Up</span> <ArrowRightIcon className="w-5 md:w-6" />
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Add Hero Images Here */}
          <Image
            src="/hero-desktop.png"
            width={1000}
            height={760}
            //priority="true"
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop version"
          />
          <Image
            src="/hero-mobile.png"
            width={560}
            height={620}
            className="block md:hidden"
            alt="Screenshots of the dashboard project showing mobile version"
          />
        </div>
      </div>
      <div className="mb-8 mt-4 lg:mb-14">
        <h2 className="text-5xl font-bold">
          What are Coinhub crypto payment gateway features?
        </h2>
        <h3 className="text-lg">
          No rolling reserves/ Global coverage Zero chargebacks/ Instant
          transactions
        </h3>
      </div>
      <div className="rounded-3xl bg-slate-300 p-8">
        <div className="border-black-200 flex flex-col lg:grid lg:grid-cols-2 lg:gap-x-9 lg:gap-y-8">
          <div>
            <div className="border-black-200 flex justify-between border-b-2 py-5 lg:border-0">
              <div className="flex items-center gap-3">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="22"
                    fill="none"
                  >
                    <path
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 11.75 9.25 14 13 8.75m-3-7.036a11.96 11.96 0 0 1-8.402 3.285A12 12 0 0 0 1 8.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152C15.054 5 12.15 3.75 10 1.715"
                    ></path>
                  </svg>
                </div>
                <h3>Volatility protection</h3>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                className="lg:hidden"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M5.232 9.36a1 1 0 0 1 1.408-.128L12 13.698l5.36-4.466a1 1 0 0 1 1.28 1.536l-6 5a1 1 0 0 1-1.28 0l-6-5a1 1 0 0 1-.128-1.408"
                  clipRule={'evenodd'}
                ></path>
              </svg>
            </div>
            <div className="hidden lg:block">
              Automatic conversion of incoming payments into stablecoins will
              protect against cryptocurrency volatility, same as the Withdrawal
              auto-convert feature, that allows you to withdraw your crypto in a
              preferred currency вЂ“ and both features are completely free to
              use!
            </div>
          </div>
          <div>
            <div className="border-black-200 flex justify-between border-b-2 py-5 lg:border-0">
              <div className="flex items-center gap-3">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="18"
                    fill="none"
                  >
                    <path
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8.5 3h9.75M8.5 3a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M1.75 3H5.5m3 12h9.75M8.5 15a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H5.5m9-6h3.75M14.5 9a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0M1.75 9h9.75"
                    ></path>
                  </svg>
                </div>
                <h3>Transactions status management</h3>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                className="lg:hidden"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M5.232 9.36a1 1 0 0 1 1.408-.128L12 13.698l5.36-4.466a1 1 0 0 1 1.28 1.536l-6 5a1 1 0 0 1-1.28 0l-6-5a1 1 0 0 1-.128-1.408"
                  clipRule={'evenodd'}
                ></path>
              </svg>
            </div>
            <div className="hidden lg:block">
              Adjust the allowed payment accuracy, view if an invoice has been
              overpaid or underpaid and send an additional invoice to collect a
              remaining amount.
            </div>
          </div>
          <div>
            <div className="border-black-200 flex justify-between border-b-2 py-5 lg:border-0">
              <div className="flex items-center gap-3">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                  >
                    <path
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m18.75 5.25-13.5 13.5M6.75 9a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5M17.25 19.5a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5"
                    ></path>
                  </svg>
                </div>
                <h3>Flexible commissions for each coin</h3>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                className="lg:hidden"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M5.232 9.36a1 1 0 0 1 1.408-.128L12 13.698l5.36-4.466a1 1 0 0 1 1.28 1.536l-6 5a1 1 0 0 1-1.28 0l-6-5a1 1 0 0 1-.128-1.408"
                  clipRule={'evenodd'}
                ></path>
              </svg>
            </div>
            <div className="hidden lg:block">
              Set additional commissions or add a discount for chosen coins.
            </div>
          </div>
          <div>
            <div className="border-black-200 flex justify-between border-b-2 py-5 lg:border-0">
              <div className="flex items-center gap-3">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="20"
                    fill="none"
                  >
                    <path
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19.25 6.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193q-.51.041-1.02.072v3.091l-3-3q-2.031 0-4.02-.163a2.1 2.1 0 0 1-.825-.242m9.345-8.334a2 2 0 0 0-.476-.095 48.6 48.6 0 0 0-8.048 0C9.595 6.51 8.75 7.473 8.75 8.608v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V4.637c0-1.621-1.152-3.026-2.76-3.235A48.5 48.5 0 0 0 10.25 1c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235q.865.113 1.74.194V19l4.155-4.155"
                    ></path>
                  </svg>
                </div>
                <h3>Support team</h3>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                className="lg:hidden"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M5.232 9.36a1 1 0 0 1 1.408-.128L12 13.698l5.36-4.466a1 1 0 0 1 1.28 1.536l-6 5a1 1 0 0 1-1.28 0l-6-5a1 1 0 0 1-.128-1.408"
                  clipRule={'evenodd'}
                ></path>
              </svg>
            </div>
            <div className="hidden lg:block">
              The support team, that is available in Telegram, by email, right
              on our website in the form of tickets or as a personal manager for
              our merchants, is always there to solve issues and answer your
              customers' questions instantly.
            </div>
          </div>
          <div>
            <div className="flex justify-between py-5">
              <div className="flex items-center gap-3">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                  >
                    <path
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14.746 3.836A3 3 0 0 0 12.668 3H6.375c-.497 0-.974.19-1.326.527-.351.338-.549.796-.549 1.273v14.4c0 .477.198.935.55 1.273.35.337.828.527 1.325.527h11.25c.497 0 .974-.19 1.326-.527.351-.338.549-.796.549-1.273V9.679a3 3 0 0 0-.922-2.165zM15.75 12.75h-7.5M15.75 16.5h-7.5M10.5 9H8.25"
                    ></path>
                  </svg>
                </div>
                <h3>Mass payouts</h3>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                className="lg:hidden"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M5.232 9.36a1 1 0 0 1 1.408-.128L12 13.698l5.36-4.466a1 1 0 0 1 1.28 1.536l-6 5a1 1 0 0 1-1.28 0l-6-5a1 1 0 0 1-.128-1.408"
                  clipRule={'evenodd'}
                ></path>
              </svg>
            </div>
            <div className="hidden lg:block">
              Make mass payouts to thousands of addresses with automatic
              conversion in just one moment.
            </div>
          </div>
          <Link
            href="/"
            className="flex h-16 items-center justify-center rounded-xl bg-gray-200 uppercase"
          >
            <span>All features</span>
          </Link>
        </div>
      </div>

      <div className="bg-gray pt-43 pr-82 pb-63 mt-4 max-w-max rounded-3xl bg-[url('/bg_light.png')] bg-right bg-no-repeat">
        <Slider data={dataSlider} />
      </div>
      <div className="pt-43 pr-82 pb-63 mt-4">
        <CoinSlider data={dataCoinSlider} />
      </div>
      <Footer></Footer>
    </main>
  );
}
