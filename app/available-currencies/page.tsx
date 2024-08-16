'use client';

import Header from '@/app/ui/_components/Header';
import Footer from '@/app/ui/footer';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import HomeSession from '@/app/ui/_components/HomeSession';
import { ChevronRightIcon } from '@heroicons/react/24/solid';

const AvailableCurrenciesSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <main className="flex min-h-screen flex-col p-6">
      <Header />
      <section className="block__available-currencies white_section flex w-full max-w-full flex-col pb-40 pt-12">
        <div className="container mx-auto px-4">
          <div className="block__available-currencies__heading mb-8 text-center">
            <h1 className="text-3xl font-semibold">
              Available Cryptocurrencies
            </h1>
          </div>
          <div className="block__available-currencies__tabs">
            <div className="block__available-currencies__tabs__header mb-20 flex cursor-pointer">
              <div
                className={`block__available-currencies__tabs__header__item solid #ededed whitespace-nowrap border-b-2 bg-transparent p-[20px_32px] text-[18px] font-normal leading-[22px] text-[#91919e] text-[#999] no-underline transition ease-out ${activeTab === 0 ? 'active custom-gradient border-[#204bdb] bg-gradient-to-t from-[rgba(32,75,219,0.1)] to-[rgba(32,75,219,0)] text-[#204bdb]' : ''}`}
                data-model="0"
                onClick={() => setActiveTab(0)}
              >
                Merchant Digital Wallets
              </div>
              <div
                className={`block__available-currencies__tabs__header__item solid #ededed whitespace-nowrap border-b-2 bg-transparent p-[20px_32px] text-[18px] font-normal leading-[22px] text-[#91919e] text-[#999] no-underline transition ease-out ${activeTab === 1 ? 'active custom-gradient border-[#204bdb] bg-gradient-to-t from-[rgba(32,75,219,0.1)] to-[rgba(32,75,219,0)] text-[#204bdb]' : ''}`}
                data-model="1"
                onClick={() => setActiveTab(1)}
              >
                Enterprise Blockchain Wallets
              </div>
            </div>
            <div className="block__available-currencies__tabs__content">
              {activeTab === 0 && (
                <div
                  className="block__available-currencies__tabs__content__table active"
                  data-model="0"
                  data-license="0"
                >
                  <div className="mb-15 flex w-full max-w-full">
                    <h4 className="mr-9 flex w-full max-w-[197px] justify-between text-xl font-semibold">
                      Coins
                      <span className="hidden text-sm font-normal leading-[155%] text-[#a2a4b0]">
                        Swipe
                        <svg
                          width="30"
                          height="11"
                          viewBox="0 0 30 11"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M29.3903 6.29883C29.6608 6.00057 29.6608 5.54565 29.3903 5.24739L27.108 2.73161C26.8891 2.49029 26.5098 2.49029 26.2909 2.73161C26.1003 2.94171 26.1001 3.26212 26.2905 3.47243L28.3731 5.77311L26.2905 8.07379C26.1001 8.2841 26.1003 8.60451 26.2909 8.81461C26.5098 9.05593 26.8891 9.05593 27.108 8.81461L29.3903 6.29883Z"
                            fill="#A9A9A9"
                          ></path>
                          <path
                            d="M27.9141 5.77344L0.914062 5.77344"
                            stroke="#A9A9A9"
                            strokeLinecap="round"
                          ></path>
                        </svg>
                      </span>
                    </h4>
                    <div className="crypto_table_main flex w-full max-w-full flex-col">
                      <div className="block__available-currencies__tabs__content__table__group__rows">
                        <div className="block__available-currencies__tabs__content__table__group__rows_scroller">
                          <div className="row first_row flex flex-nowrap justify-start border-b border-t-0 border-[#ededed] pb-3 pt-3">
                            <div className="row__col octopus mr-5 flex-[0_1_144px] flex-col justify-start gap-2 text-xs text-xs font-normal font-normal leading-5 leading-[18px] text-[#1d2127] text-[#a9a9a9]">
                              №
                            </div>
                            <div className="row__col octopus mr-5 flex-[0_1_144px] flex-col justify-start gap-2 text-xs text-xs font-normal font-normal leading-5 leading-[18px] text-[#1d2127] text-[#a9a9a9]">
                              Alpha
                            </div>
                            <div className="row__col octopus mr-5 flex-[0_1_144px] flex-col justify-start gap-2 text-xs text-xs font-normal font-normal leading-5 leading-[18px] text-[#1d2127] text-[#a9a9a9]">
                              Alias
                            </div>
                            <div className="row__col octopus mr-5 flex-[0_1_144px] flex-col justify-start gap-2 text-xs text-xs font-normal font-normal leading-5 leading-[18px] text-[#1d2127] text-[#a9a9a9]">
                              Name
                            </div>
                            <div className="row__col octopus mr-5 flex-[0_1_144px] flex-col justify-start gap-2 text-xs text-xs font-normal font-normal leading-5 leading-[18px] text-[#1d2127] text-[#a9a9a9]">
                              Blockchain
                            </div>
                            <div className="row__col octopus mr-5 flex-[0_1_144px] flex-col justify-start gap-2 text-xs text-xs font-normal font-normal leading-5 leading-[18px] text-[#1d2127] text-[#a9a9a9]">
                              Type
                            </div>
                          </div>
                          <div className="row flex-0 m-0 flex w-full max-w-full flex-nowrap items-center justify-start border-b border-[#ededed] pb-3 pt-3">
                            <div className="row__col octopus m-0 mr-5 flex flex-[0_1_144px]  flex-nowrap justify-start text-xs leading-5">
                              1
                            </div>
                            <div className="row__col octopus m-0 mr-5 flex flex-[0_1_144px]  flex-nowrap justify-start text-xs leading-5">
                              <Image
                                loading="lazy"
                                decoding="async"
                                width="17"
                                height="17"
                                src="/svg/bitcoin_dashboard.svg"
                                alt="btc"
                                className="mr-5"
                              />
                              BTC
                            </div>
                            <div className="row__col octopus m-0 mr-5 flex flex-[0_1_144px]  flex-nowrap justify-start text-xs leading-5">
                              –
                            </div>
                            <div className="row__col octopus m-0 mr-5 flex flex-[0_1_144px]  flex-nowrap justify-start text-xs leading-5">
                              Bitcoin
                            </div>
                            <div className="row__col octopus m-0 mr-5 flex flex-[0_1_144px]  flex-nowrap justify-start text-xs leading-5">
                              Bitcoin
                            </div>
                            <div className="row__col octopus m-0 mr-5 flex flex-[0_1_144px]  flex-nowrap justify-start text-xs leading-5">
                              Coin
                            </div>
                          </div>{' '}
                          <div className="row flex-0 m-0 flex w-full max-w-full flex-nowrap justify-start border-b border-[#ededed] pb-3 pt-3">
                            <div className="row__col octopus m-0 mr-5 flex flex-[0_1_144px] flex-nowrap justify-start text-xs leading-5">
                              2
                            </div>
                            <div className="row__col octopus m-0 mr-5 flex flex-[0_1_144px] flex-nowrap justify-start text-xs leading-5">
                              <Image
                                loading="lazy"
                                decoding="async"
                                width="17"
                                height="17"
                                src="/svg/etherium_dashboard.svg"
                                alt="eth"
                                className="mr-5"
                              />
                              ETH
                            </div>
                            <div className="row__col octopus m-0 mr-5 flex flex-[0_1_144px] flex-nowrap justify-start text-xs leading-5">
                              –
                            </div>
                            <div className="row__col octopus m-0 mr-5 flex flex-[0_1_144px] flex-nowrap justify-start text-xs leading-5">
                              Etherium
                            </div>
                            <div className="row__col octopus m-0 mr-5 flex flex-[0_1_144px] flex-nowrap justify-start text-xs leading-5">
                              Etherium
                            </div>
                            <div className="row__col octopus m-0 mr-5 flex flex-[0_1_144px] flex-nowrap justify-start text-xs leading-5">
                              Coin
                            </div>
                          </div>
                          <div className="row flex-0 m-0 flex w-full max-w-full flex-nowrap justify-start border-b border-[#ededed] pb-3 pt-3">
                            <div className="row__col octopus m-0 mr-5 flex flex-[0_1_144px] flex-nowrap justify-start text-xs leading-5">
                              3
                            </div>
                            <div className="row__col octopus m-0 mr-5 flex flex-[0_1_144px] flex-nowrap justify-start text-xs leading-5">
                              <Image
                                loading="lazy"
                                decoding="async"
                                width="17"
                                height="17"
                                src="/svg/tether_dashboard.svg"
                                alt="usdt"
                                className="mr-5"
                              />
                              USDT
                            </div>
                            <div className="row__col octopus m-0 mr-5 flex flex-[0_1_144px] flex-nowrap justify-start text-xs leading-5">
                              –
                            </div>
                            <div className="row__col octopus m-0 mr-5 flex flex-[0_1_144px] flex-nowrap justify-start text-xs leading-5">
                              Tether
                            </div>
                            <div className="row__col octopus m-0 mr-5 flex flex-[0_1_144px] flex-nowrap justify-start text-xs leading-5">
                              Tether
                            </div>
                            <div className="row__col octopus m-0 mr-5 flex flex-[0_1_144px] flex-nowrap justify-start text-xs leading-5">
                              Coin
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {activeTab === 1 && (
                <div
                  className="block__available-currencies__tabs__content__table active"
                  data-model="1"
                  data-license="1"
                >
                  <div className="mb-15 flex w-full max-w-full">
                    <h4 className="mr-9 flex w-full max-w-[197px] justify-between text-xl font-semibold">
                      Coins
                      <span className="hidden text-sm font-normal leading-[155%] text-[#a2a4b0]">
                        Swipe
                        <svg
                          width="30"
                          height="11"
                          viewBox="0 0 30 11"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M29.3903 6.29883C29.6608 6.00057 29.6608 5.54565 29.3903 5.24739L27.108 2.73161C26.8891 2.49029 26.5098 2.49029 26.2909 2.73161C26.1003 2.94171 26.1001 3.26212 26.2905 3.47243L28.3731 5.77311L26.2905 8.07379C26.1001 8.2841 26.1003 8.60451 26.2909 8.81461C26.5098 9.05593 26.8891 9.05593 27.108 8.81461L29.3903 6.29883Z"
                            fill="#A9A9A9"
                          ></path>
                          <path
                            d="M27.9141 5.77344L0.914062 5.77344"
                            stroke="#A9A9A9"
                            strokeLinecap="round"
                          ></path>
                        </svg>
                      </span>
                    </h4>
                    <div className="crypto_table_main flex w-full max-w-full flex-col">
                      <div className="block__available-currencies__tabs__content__table__group__rows">
                        <div className="block__available-currencies__tabs__content__table__group__rows_scroller">
                          <div className="row first_row flex flex-nowrap justify-start border-b border-t-0 border-[#ededed] pb-3 pt-3">
                            <div className="row__col octopus mr-5 flex-[0_1_144px] flex-col justify-start gap-2 text-xs text-xs font-normal font-normal leading-5 leading-[18px] text-[#1d2127] text-[#a9a9a9]">
                              №
                            </div>
                            <div className="row__col octopus mr-5 flex-[0_1_144px] flex-col justify-start gap-2 text-xs text-xs font-normal font-normal leading-5 leading-[18px] text-[#1d2127] text-[#a9a9a9]">
                              Alpha
                            </div>
                            <div className="row__col octopus mr-5 flex-[0_1_144px] flex-col justify-start gap-2 text-xs text-xs font-normal font-normal leading-5 leading-[18px] text-[#1d2127] text-[#a9a9a9]">
                              Alias
                            </div>
                            <div className="row__col octopus mr-5 flex-[0_1_144px] flex-col justify-start gap-2 text-xs text-xs font-normal font-normal leading-5 leading-[18px] text-[#1d2127] text-[#a9a9a9]">
                              Name
                            </div>
                            <div className="row__col octopus mr-5 flex-[0_1_144px] flex-col justify-start gap-2 text-xs text-xs font-normal font-normal leading-5 leading-[18px] text-[#1d2127] text-[#a9a9a9]">
                              Blockchain
                            </div>
                            <div className="row__col octopus mr-5 flex-[0_1_144px] flex-col justify-start gap-2 text-xs text-xs font-normal font-normal leading-5 leading-[18px] text-[#1d2127] text-[#a9a9a9]">
                              Type
                            </div>
                          </div>
                          <div className="row flex-0 m-0 flex w-full max-w-full flex-nowrap items-center justify-start border-b border-[#ededed] pb-3 pt-3">
                            <div className="row__col octopus m-0 mr-5 flex flex-[0_1_144px]  flex-nowrap justify-start text-xs leading-5">
                              1
                            </div>
                            <div className="row__col octopus m-0 mr-5 flex flex-[0_1_144px]  flex-nowrap justify-start text-xs leading-5">
                              <Image
                                loading="lazy"
                                decoding="async"
                                width="17"
                                height="17"
                                src="/svg/bitcoin_dashboard.svg"
                                alt="btc"
                                className="mr-5"
                              />
                              BTC
                            </div>
                            <div className="row__col octopus m-0 mr-5 flex flex-[0_1_144px]  flex-nowrap justify-start text-xs leading-5">
                              –
                            </div>
                            <div className="row__col octopus m-0 mr-5 flex flex-[0_1_144px]  flex-nowrap justify-start text-xs leading-5">
                              Bitcoin
                            </div>
                            <div className="row__col octopus m-0 mr-5 flex flex-[0_1_144px]  flex-nowrap justify-start text-xs leading-5">
                              Bitcoin
                            </div>
                            <div className="row__col octopus m-0 mr-5 flex flex-[0_1_144px]  flex-nowrap justify-start text-xs leading-5">
                              Coin
                            </div>
                          </div>{' '}
                          <div className="row flex-0 m-0 flex w-full max-w-full flex-nowrap justify-start border-b border-[#ededed] pb-3 pt-3">
                            <div className="row__col octopus m-0 mr-5 flex flex-[0_1_144px] flex-nowrap justify-start text-xs leading-5">
                              2
                            </div>
                            <div className="row__col octopus m-0 mr-5 flex flex-[0_1_144px] flex-nowrap justify-start text-xs leading-5">
                              <Image
                                loading="lazy"
                                decoding="async"
                                width="17"
                                height="17"
                                src="/svg/etherium_dashboard.svg"
                                alt="eth"
                                className="mr-5"
                              />
                              ETH
                            </div>
                            <div className="row__col octopus m-0 mr-5 flex flex-[0_1_144px] flex-nowrap justify-start text-xs leading-5">
                              –
                            </div>
                            <div className="row__col octopus m-0 mr-5 flex flex-[0_1_144px] flex-nowrap justify-start text-xs leading-5">
                              Etherium
                            </div>
                            <div className="row__col octopus m-0 mr-5 flex flex-[0_1_144px] flex-nowrap justify-start text-xs leading-5">
                              Etherium
                            </div>
                            <div className="row__col octopus m-0 mr-5 flex flex-[0_1_144px] flex-nowrap justify-start text-xs leading-5">
                              Coin
                            </div>
                          </div>
                          <div className="row flex-0 m-0 flex w-full max-w-full flex-nowrap justify-start border-b border-[#ededed] pb-3 pt-3">
                            <div className="row__col octopus m-0 mr-5 flex flex-[0_1_144px] flex-nowrap justify-start text-xs leading-5">
                              3
                            </div>
                            <div className="row__col octopus m-0 mr-5 flex flex-[0_1_144px] flex-nowrap justify-start text-xs leading-5">
                              <Image
                                loading="lazy"
                                decoding="async"
                                width="17"
                                height="17"
                                src="/svg/tether_dashboard.svg"
                                alt="usdt"
                                className="mr-5"
                              />
                              USDT
                            </div>
                            <div className="row__col octopus m-0 mr-5 flex flex-[0_1_144px] flex-nowrap justify-start text-xs leading-5">
                              –
                            </div>
                            <div className="row__col octopus m-0 mr-5 flex flex-[0_1_144px] flex-nowrap justify-start text-xs leading-5">
                              Tether
                            </div>
                            <div className="row__col octopus m-0 mr-5 flex flex-[0_1_144px] flex-nowrap justify-start text-xs leading-5">
                              Tether
                            </div>
                            <div className="row__col octopus m-0 mr-5 flex flex-[0_1_144px] flex-nowrap justify-start text-xs leading-5">
                              Coin
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>{' '}
      <section className="block_linksbox_section white_section pb-[150px] pt-0">
        <div className="container mx-auto w-full max-w-[1356px]">
          <div className="block_linksbox block_linksbox_alignstart flex w-full flex-wrap justify-start gap-9">
            <Link
              href="/minimum-deposits-withdrawals"
              className="short_box block_linksbox_single group mb-4 w-full max-w-33% transform rounded-lg border border-gray-200 p-8 transition-transform duration-300 ease-in-out hover:border-[#204bdb] hover:bg-gray-100"
            >
              <h4 className="mb-3 text-lg font-semibold text-[#262e39]">
                Minimum Deposits
              </h4>
              <p className="b2b_link mb-0 mt-6 flex items-center text-sm text-[#91919e] transition-transform duration-300 ease-in-out group-hover:text-[#204bdb]">
                Explore
                <ChevronRightIcon className="ml-2 h-4 w-4 transform transition-transform duration-300 ease-in-out group-hover:translate-x-2" />
              </p>
            </Link>
            <Link
              href="/crypto-processing-solutions-comparison"
              className="short_box block_linksbox_single group mb-4 w-full max-w-33% transform rounded-lg border border-gray-200 p-8 transition-transform duration-300 ease-in-out hover:border-[#204bdb] hover:bg-gray-100"
            >
              <h4 className="mb-3 text-lg font-semibold text-[#262e39]">
                Solutions Comparison
              </h4>
              <p className="b2b_link mb-0 mt-6 flex items-center text-sm text-[#91919e] transition-transform duration-300 ease-in-out group-hover:text-[#204bdb]">
                Explore
                <ChevronRightIcon className="ml-2 h-4 w-4 transform transition-transform duration-300 ease-in-out group-hover:translate-x-2" />
              </p>
            </Link>
            <Link
              href="/fees-pricing"
              className="short_box block_linksbox_single group mb-4 w-full max-w-33% transform rounded-lg border border-gray-200 p-8 transition-transform duration-300 ease-in-out hover:border-[#204bdb] hover:bg-gray-100 "
            >
              <h4 className="mb-3 text-lg font-semibold text-[#262e39]">
                Fees &amp; Pricing
              </h4>
              <p className="b2b_link mb-0 mt-6 flex items-center text-sm text-[#91919e] transition-transform duration-300 ease-in-out group-hover:text-[#204bdb]">
                Explore
                <ChevronRightIcon className="ml-2 h-4 w-4 transform transition-transform duration-300 ease-in-out group-hover:translate-x-2" />
              </p>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default AvailableCurrenciesSection;
