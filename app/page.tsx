import Header from '@/app/ui/_components/Header';
import Footer from '@/app/ui/footer';
import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';
import { Metadata } from 'next';
import HomeSession from '@/app/ui/_components/HomeSession';
import HomeOurProducts from '@/app/ui/_components/HomeOurProducts';
import HomeUseCasesSection from '@/app/ui/_components/HomeUseCasesSection';
import HaveAQuestion from '@/app/ui/_components/HaveAQuestion';

export const metadata: Metadata = {
  title: 'CoinsFish Home Page',
  description:
    'Welcome to CoinsFish. Helps You Receive Payments From Anyone In The World.',
};

export default function Page() {
  return (
    <div className="relative min-h-screen">
      <Header />
      <main className="flex min-h-screen flex-col p-6">
        <div className="mt-4 flex justify-between rounded-lg bg-gray-100 p-4">
          <ul className="flex gap-4">
            <li className="group relative hover:cursor-pointer">
              <Link
                href="/cryptocurrency-payment-gateway"
                className="transition-all delay-200 duration-300 ease-in-out hover:border-b hover:border-blue-800 hover:text-blue-800 focus:border-b focus:border-blue-800 focus:text-blue-800"
              >
                Merchant Digital Wallets
              </Link>
              <ul className="invisible absolute -left-4 min-w-[calc(100%+90px)] rounded-lg bg-white p-4 opacity-0 shadow-lg drop-shadow-[11px_16px_16px_rgba(30,29,28,0.16)] filter backdrop-blur-[115px] transition delay-200 duration-300 ease-in-out group-hover:visible group-hover:opacity-100">
                <li>
                  <Link
                    href="/cryptocurrency-payment-gateway"
                    className="block py-2.5 pl-2.5 pr-[26px] text-sm transition-all delay-200 duration-300 ease-in-out hover:cursor-pointer hover:font-bold hover:text-blue-800"
                  >
                    Merchant Digital Wallet Solution
                  </Link>
                </li>
                <li>
                  <Link
                    href="/available-currencies"
                    className="block py-2.5 pl-2.5 pr-[26px] text-sm transition-all delay-200 duration-300 ease-in-out hover:cursor-pointer hover:font-bold hover:text-blue-800"
                  >
                    Available Currencies
                  </Link>
                </li>
                <li>
                  <Link
                    href="/fees-pricing"
                    className="block py-2.5 pl-2.5 pr-[26px] text-sm transition-all delay-200 duration-300 ease-in-out hover:cursor-pointer hover:font-bold hover:text-blue-800"
                  >
                    Fees & Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/crypto-processing-solutions-comparison"
                    className="block py-2.5 pl-2.5 pr-[26px] text-sm transition-all delay-200 duration-300 ease-in-out hover:cursor-pointer hover:font-bold hover:text-blue-800"
                  >
                    Solution Comparison
                  </Link>
                </li>
                <li>
                  <Link
                    href="/minimum-deposits-withdrawals"
                    className="block py-2.5 pl-2.5 pr-[26px] text-sm transition-all delay-200 duration-300 ease-in-out hover:cursor-pointer hover:font-bold hover:text-blue-800"
                  >
                    Minimum Deposits and Withdrawals
                  </Link>
                </li>
              </ul>
            </li>
            <li className="group relative hover:cursor-pointer">
              <Link
                href="/cryptocurrency-wallets"
                className="transition-all delay-200 duration-300 ease-in-out hover:border-b hover:border-blue-800 hover:text-blue-800 focus:border-b focus:border-blue-800 focus:text-blue-800"
              >
                Enterprise Blockchain Wallets
              </Link>
              <ul className="invisible absolute -left-4 min-w-[calc(100%+90px)] rounded-lg bg-blue-500 bg-white p-4 opacity-0 shadow-lg drop-shadow-[11px_16px_46px_rgba(30,29,28,0.16)] filter backdrop-blur-[115px] transition delay-200 duration-300 ease-in-out group-hover:visible group-hover:opacity-100">
                <li>
                  <Link
                    href="/cryptocurrency-wallets"
                    className="block py-2.5 pl-2.5 pr-[26px] text-sm transition-all delay-200 duration-300 ease-in-out hover:cursor-pointer hover:cursor-pointer hover:font-bold hover:text-blue-800"
                  >
                    Enterprise Blockchain Wallets Solution
                  </Link>
                </li>
                <li>
                  <Link
                    href="/available-currencies"
                    className="block py-2.5 pl-2.5 pr-[26px] text-sm transition-all delay-200 duration-300 ease-in-out hover:cursor-pointer hover:cursor-pointer hover:font-bold hover:text-blue-800"
                  >
                    Available Currencies
                  </Link>
                </li>
                <li>
                  <Link
                    href="/fees-pricing"
                    className="block py-2.5 pl-2.5 pr-[26px] text-sm transition-all delay-200 duration-300 ease-in-out hover:cursor-pointer hover:font-bold hover:text-blue-800"
                  >
                    Fees & Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/crypto-processing-solutions-comparison"
                    className="block py-2.5 pl-2.5 pr-[26px] text-sm transition-all delay-200 duration-300 ease-in-out hover:cursor-pointer hover:font-bold hover:text-blue-800"
                  >
                    Solution Comparison
                  </Link>
                </li>
                <li>
                  <Link
                    href="/minimum-deposits-withdrawals"
                    className="block py-2.5 pl-2.5 pr-[26px] text-sm transition-all delay-200 duration-300 ease-in-out hover:cursor-pointer hover:font-bold hover:text-blue-800"
                  >
                    Minimum Deposits and Withdrawals
                  </Link>
                </li>
              </ul>
            </li>
            <li className="group relative hover:cursor-pointer">
              <Link
                href="/swap-wallets"
                className="transition-all delay-200 duration-300 ease-in-out hover:border-b hover:border-blue-800 hover:text-blue-800 focus:border-b focus:border-blue-800 focus:text-blue-800"
              >
                Swap Wallets
              </Link>
            </li>
          </ul>
          <div>
            <div className="group relative hover:cursor-pointer">
              <Link
                href="/support"
                className="transition-all delay-200 duration-300 ease-in-out hover:border-b hover:border-blue-800 hover:text-blue-800 focus:border-b focus:border-blue-800 focus:text-blue-800"
              >
                Support
              </Link>
              <ul className="bg-opacity-98 invisible absolute right-0 min-w-[calc(100%+70px)] rounded-lg bg-white p-4 opacity-0 shadow-lg backdrop-blur-[115px] transition-all delay-200 duration-300 ease-in-out group-hover:visible group-hover:opacity-100">
                <li>
                  <Link
                    href="/api"
                    className="block py-2.5 pl-2.5 pr-[26px] text-sm transition-all delay-200 duration-300 ease-in-out hover:cursor-pointer hover:font-bold hover:text-blue-800"
                  >
                    API
                  </Link>
                </li>
                <li>
                  <Link
                    href="/release-notes"
                    className="block py-2.5 pl-2.5 pr-[26px] text-sm transition-all delay-200 duration-300 ease-in-out hover:cursor-pointer hover:font-bold hover:text-blue-800"
                  >
                    Release Notes
                  </Link>
                </li>
                <li>
                  <Link
                    href="/guides"
                    className="block py-2.5 pl-2.5 pr-[26px] text-sm transition-all delay-200 duration-300 ease-in-out hover:cursor-pointer hover:font-bold hover:text-blue-800"
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
            <Image
              src="/Main-picture-1-1000x748.png"
              priority={true}
              width={1000}
              height={748}
              className="hidden lg:block"
              alt="DesctopMain picture"
              sizes="(max-width: 500px) 500px, (max-width: 800px) 800px, (max-width: 2048px) 1000px"
            />
            <Image
              src="/Main-picture-1-800x599.png"
              priority={true}
              width={800}
              height={599}
              className="hidden md:block lg:hidden"
              alt="Tablet picture"
              sizes="(max-width: 500px) 500px, (max-width: 800px) 800px, (max-width: 2048px) 1000px"
            />
            <Image
              src="/Main-picture-1-500x374.png"
              priority={true}
              width={500}
              height={374}
              className="block md:hidden"
              alt="Mobile picture"
              sizes="(max-width: 500px) 500px, (max-width: 800px) 800px, (max-width: 2048px) 1000px"
            />
          </div>
        </div>
        <div className="container mx-auto px-4">
          <section className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center">
              <Image
                className="lazy h-[50px] w-[50px]"
                src="/svg/Icons-2.svg"
                alt="All types of crypto"
                width={0}
                height={0}
              />
              <h3 className="mt-4 text-lg font-semibold">
                All types of crypto
              </h3>
              <p className="text-center">
                Coins, StableCoins, Tokens are supported.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                className="lazy h-[50px] w-[50px]"
                src="/svg/Icons-3.svg"
                alt="Major Blockchains"
                width={0}
                height={0}
              />
              <h3 className="mt-4 text-lg font-semibold">Major Blockchains</h3>
              <p className="text-center">
                Bitcoin, Ethereum, Solana, Binance Smart Chain, Ripple, etc.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                className="lazy h-[50px] w-[50px]"
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
          <HomeOurProducts />
          <HomeUseCasesSection />
          <HaveAQuestion />
        </div>
        <Footer />
      </main>
    </div>
  );
}
