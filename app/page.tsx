import CoinsFishLogo from '@/app/ui/coinsfish-logo';
import Footer from '@/app/ui/footer';
import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';
import Slider from '@/app/ui/_components/slider';
import CoinSlider from '@/app/ui/_components/coin_slider';
import dataSlider from '@/app/ui/_data/slider-data.json';
import dataCoinSlider from '@/app/ui/_data/coin_slider-data.json';
import Accordion from '@/app/ui/_components/accordion';
import ThemeButton from '@/app/ui/_components/ThemeButton';
import { Metadata } from 'next';
import HomeSession from '@/app/ui/_components/HomeSession';
import HeaderSession from '@/app/ui/_components/HeaderSession';

export const metadata: Metadata = {
  title: 'CoinsFish Home Page',
  description:
    'Welcome to CoinsFish. Helps You Receive Payments From Anyone In The World.',
};

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="sticky top-0 z-10 flex h-20 shrink-0 items-center justify-between rounded-lg bg-blue-500 p-4 md:h-20">
        <Link href="/">
          <CoinsFishLogo />
        </Link>
        <div className="flex items-end items-center justify-center gap-2 p-6 text-white">
          <Link href="/about-us" className="hover:underline focus:underline">
            About Us
          </Link>
          <Link href="/contacts" className="hover:underline focus:underline">
            Contacts
          </Link>
          <Link href="/pricing" className="hover:underline focus:underline">
            Pricing
          </Link>
          <HeaderSession />
          <ThemeButton />
        </div>
      </div>

      <div className="mt-4 flex justify-between rounded-lg bg-gray-100 p-4">
        <ul className="flex gap-4">
          <li className="group relative hover:cursor-pointer">
            <Link
              href="/merchant-digital-wallets"
              className="hover:text-blue-800 hover:underline focus:text-blue-800 focus:underline"
            >
              Merchant Digital Wallets
            </Link>
            <ul className="invisible absolute -left-4 min-w-[calc(100%+90px)] rounded-lg bg-white p-4 opacity-0 shadow-lg drop-shadow-[11px_16px_16px_rgba(30,29,28,0.16)] filter backdrop-blur-[115px] group-hover:visible group-hover:opacity-100 group-hover:transition-opacity group-hover:duration-300 group-hover:ease-in-out">
              <li>
                <Link
                  href="/merchant-solution"
                  className="block py-2.5 pl-2.5 pr-[26px] text-sm hover:cursor-pointer hover:text-blue-800 hover:underline"
                >
                  Merchant Digital Wallet Solution
                </Link>
              </li>
              <li>
                <Link
                  href="/available-currencies"
                  className="block py-2.5 pl-2.5 pr-[26px] text-sm hover:cursor-pointer hover:text-blue-800 hover:underline "
                >
                  Available Currencies
                </Link>
              </li>
              <li>
                <Link
                  href="/fees-pricing"
                  className="block py-2.5 pl-2.5 pr-[26px] text-sm hover:cursor-pointer hover:text-blue-800 hover:underline "
                >
                  Fees & Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/solution-comparison"
                  className="block py-2.5 pl-2.5 pr-[26px] text-sm hover:cursor-pointer hover:text-blue-800 hover:underline "
                >
                  Solution Comparison
                </Link>
              </li>
              <li>
                <Link
                  href="/minimum-deposits-withdrawals"
                  className="block py-2.5 pl-2.5 pr-[26px] text-sm hover:cursor-pointer hover:text-blue-800 hover:underline "
                >
                  Minimum Deposits and Withdrawals
                </Link>
              </li>
            </ul>
          </li>

          <li className="group relative hover:cursor-pointer">
            <Link
              href="/enterprise-blockchain-wallets"
              className="hover:text-blue-800 hover:underline focus:text-blue-800 focus:underline"
            >
              Enterprise Blockchain Wallets
            </Link>
            <ul className="invisible absolute -left-4 min-w-[calc(100%+50px)] rounded-lg bg-white p-4 opacity-0 shadow-lg drop-shadow-[11px_16px_46px_rgba(30,29,28,0.16)] filter backdrop-blur-[115px] group-hover:visible group-hover:opacity-100 group-hover:transition-opacity group-hover:duration-300 group-hover:ease-in-out">
              <li>
                <Link
                  href="/enterprise-solution"
                  className="block py-2.5 pl-2.5 pr-[26px] text-sm hover:cursor-pointer hover:text-blue-800 hover:underline "
                >
                  Enterprise Blockchain Wallets Solution
                </Link>
              </li>
              <li>
                <Link
                  href="/available-currencies"
                  className="block py-2.5 pl-2.5 pr-[26px] text-sm hover:cursor-pointer hover:text-blue-800 hover:underline "
                >
                  Available Currencies
                </Link>
              </li>
              <li>
                <Link
                  href="/fees-pricing"
                  className="block py-2.5 pl-2.5 pr-[26px]   text-sm hover:cursor-pointer hover:text-blue-800 hover:underline "
                >
                  Fees & Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/solution-comparison"
                  className="block py-2.5 pl-2.5 pr-[26px] text-sm hover:cursor-pointer hover:text-blue-800 hover:underline "
                >
                  Solution Comparison
                </Link>
              </li>
              <li>
                <Link
                  href="/minimum-deposits-withdrawals"
                  className="block py-2.5 pl-2.5 pr-[26px] text-sm hover:cursor-pointer hover:text-blue-800 hover:underline "
                >
                  Minimum Deposits and Withdrawals
                </Link>
              </li>
            </ul>
          </li>

          <li className="group relative hover:cursor-pointer">
            <Link
              href="/swap-wallets"
              className="hover:text-blue-800 hover:underline focus:text-blue-800 focus:underline"
            >
              Swap Wallets
            </Link>
          </li>
        </ul>

        <div>
          <div className="group relative hover:cursor-pointer">
            <Link
              href="/support"
              className="hover:text-blue-800 hover:underline focus:text-blue-800 focus:underline"
            >
              Support
            </Link>
            <ul className="bg-opacity-98 invisible absolute right-0 min-w-[calc(100%+70px)] rounded-lg bg-white p-4 shadow-lg backdrop-blur-[115px] transition-opacity duration-300 group-hover:visible group-hover:opacity-100">
              <li>
                <Link
                  href="/api"
                  className="block py-2.5 pl-2.5 pr-[26px] text-sm hover:cursor-pointer hover:text-blue-800 hover:underline"
                >
                  API
                </Link>
              </li>
              <li>
                <Link
                  href="/release-notes"
                  className="block py-2.5 pl-2.5 pr-[26px] text-sm hover:cursor-pointer hover:text-blue-800 hover:underline"
                >
                  Release Notes
                </Link>
              </li>
              <li>
                <Link
                  href="/guides"
                  className="block py-2.5 pl-2.5 pr-[26px] text-sm hover:cursor-pointer hover:text-blue-800 hover:underline"
                >
                  Guides (How To)
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-4 flex grow flex-col gap-4 md:flex-row md:gap-10 lg:gap-52">
        <div className="flex flex-col justify-center rounded-lg bg-gray-50 dark:bg-inherit">
          <p className="mb-8 text-[15px] font-medium leading-[150%] text-[#91919e]">
            Digital Assets Processing
          </p>
          <p
            className={`${lusitana.className} text-xl text-gray-800 dark:text-white md:text-3xl md:leading-normal`}
          >
            <strong>Accept Bitcoin Payments with CoinsFish</strong>
          </p>
          <p className="mt-4 text-[24px] font-medium leading-[32px] text-[#3b4048]">
            Send, Store, Exchange and Accept Cryptocurrency.
          </p>

          <HomeSession />
        </div>
        <div className="flex items-center justify-center">
          {/* Add Hero Images Here */}
          <Image
            src="/Main-picture-1-1000x748.png"
            width={1000}
            height={748}
            className="hidden lg:block"
            alt="DesctopMain picture"
            sizes="(max-width: 500px) 500px, (max-width: 800px) 800px, (max-width: 2048px) 1000px"
          />
          <Image
            src="/Main-picture-1-800x599.png"
            width={800}
            height={599}
            className="hidden md:block lg:hidden"
            alt="Tablet picture"
            sizes="(max-width: 500px) 500px, (max-width: 800px) 800px, (max-width: 2048px) 1000px"
          />
          <Image
            src="/Main-picture-1-500x374.png"
            width={500}
            height={374}
            className="block md:hidden"
            alt="Mobile picture"
            sizes="(max-width: 500px) 500px, (max-width: 800px) 800px, (max-width: 2048px) 1000px"
          />
        </div>
      </div>
      {/*<div className="mb-8 mt-4 lg:mb-14">
        <h2 className="text-5xl font-bold">
          What are CoinsFish crypto payment gateway features?
        </h2>
        <h3 className="text-lg">
          No rolling reserves/ Global coverage Zero chargebacks/ Instant
          transactions
        </h3>
      </div>
      <div className="hidden rounded-3xl bg-slate-300 p-8 dark:bg-slate-700 lg:block">
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
            </div>
            <div className="hidden lg:block">
              Automatic conversion of incoming payments into stablecoins will
              protect against cryptocurrency volatility, same as the Withdrawal
              auto-convert feature, that allows you to withdraw your crypto in a
              preferred currency – and both features are completely free to use!
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
            </div>
            <div className="hidden lg:block">
              The support team, that is available in Telegram, by email, right
              on our website in the form of tickets or as a personal manager for
              our merchants, is always there to solve issues and answer your
              customers questions instantly.
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
            </div>
            <div className="hidden lg:block">
              Make mass payouts to thousands of addresses with automatic
              conversion in just one moment.
            </div>
          </div>
          <Link
            href="/"
            className="flex h-16 items-center justify-center rounded-xl border-x border-y border-solid border-gray-700 bg-gray-200 uppercase dark:border-gray-300 dark:bg-gray-700"
          >
            <span>All features</span>
          </Link>
        </div>
      </div>*/}

      {/* Accordion in mobile and tablet */}
      {/*<div className="block rounded-3xl bg-slate-300 p-8 dark:bg-gray-700 lg:hidden">
        <Accordion />
      </div>

      <div className="bg-gray pt-43 pr-82 pb-63 mt-4 max-w-max rounded-3xl bg-[url('/bg_light.png')] bg-right bg-no-repeat">
        <Slider data={dataSlider} />
      </div>
      <div className="pt-43 pr-82 pb-63 mt-4">
        <CoinSlider data={dataCoinSlider} />
      </div>*/}
      <div className="container mx-auto px-4">
        <section className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="flex flex-col items-center">
            <Image
              src="/svg/Icons-2.svg"
              alt="All types of crypto"
              width={50}
              height={50}
            />
            <h3 className="mt-4 text-lg font-semibold">All types of crypto</h3>
            <p className="text-center">
              Coins, StableCoins, Tokens are supported.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/svg/Icons-3.svg"
              alt="Major Blockchains"
              width={50}
              height={50}
            />
            <h3 className="mt-4 text-lg font-semibold">Major Blockchains</h3>
            <p className="text-center">
              Bitcoin, Ethereum, Solana, Binance Smart Chain, Ripple, etc.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/svg/Group.svg"
              alt="Free of Charge"
              width={50}
              height={50}
            />
            <h3 className="mt-4 text-lg font-semibold">Free of Charge</h3>
            <p className="text-center">
              All outgoing transactions, transfers and payouts in crypto are
              free of charge.
            </p>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-bold">Our Products</h2>
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2">
                <h3 className="text-xl font-semibold">
                  Merchant Digital Wallets
                </h3>
                <p className="mt-2">
                  Crypto payment solution for businesses looking to offer
                  customers another method of payment and attract new clients
                  who want to pay with cryptocurrency.
                </p>
                <ul className="mt-4 space-y-2">
                  <li>Seamless payment processing</li>
                  <li>Global market reach</li>
                  <li>Enhanced security</li>
                </ul>
                <Link
                  href="/merchant-digital-wallets"
                  className="mt-4 text-blue-600 hover:underline"
                >
                  Read more
                </Link>
              </div>
              <div className="mt-4 md:mt-0 md:w-1/2">
                <Image
                  src="/path/to/dashboard-screenshot.png"
                  alt="Dashboard Screenshot"
                  width={400}
                  height={300}
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2">
                <h3 className="text-xl font-semibold">
                  Enterprise Blockchain Wallets
                </h3>
                <p className="mt-2">
                  Blockchain wallet solution that lets you get access to all
                  blockchains through a single API. With a single reach you can
                  offer everything: integrating with good blockchain security,
                  use one solution and get access to all blockchains.
                </p>
                <ul className="mt-4 space-y-2">
                  <li>Robust infrastructure tailored for businesses</li>
                  <li>Scalable solution</li>
                  <li>
                    Comprehensive reporting and analytics tools for transactions
                  </li>
                </ul>
                <Link
                  href="/enterprise-blockchain-wallets"
                  className="mt-4 text-blue-600 hover:underline"
                >
                  Read more
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer></Footer>
    </main>
  );
}
