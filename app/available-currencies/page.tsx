'use client';

import Header from '@/app/ui/_components/Header';
import Footer from '@/app/ui/footer';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import HomeSession from '@/app/ui/_components/HomeSession';
import { ChevronRightIcon } from '@heroicons/react/24/solid';

const AvailableCurrenciesSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (tabIndex: number, hash: string) => {
    setActiveTab(tabIndex);

    // Изменяем URL, добавив якорь без перезагрузки и скролла
    window.history.pushState(null, '', hash);
  };

  // Обработка активного таба при загрузке страницы в зависимости от URL
  useEffect(() => {
    const hash = window.location.hash;
    if (hash === '#currency_table_1') {
      setActiveTab(1);
    } else {
      setActiveTab(0);
    }
  }, []);

  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col p-6">
        <section className="block__available-currencies white_section flex w-full max-w-full flex-col pb-40 pt-12">
          <div className="container mx-auto w-full max-w-[1356px] px-4">
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
                  onClick={() => handleTabClick(0, '#currency_table_0')}
                  id="currency_table_0"
                >
                  Merchant Digital Wallets
                </div>
                <div
                  className={`block__available-currencies__tabs__header__item solid #ededed whitespace-nowrap border-b-2 bg-transparent p-[20px_32px] text-[18px] font-normal leading-[22px] text-[#91919e] text-[#999] no-underline transition ease-out ${activeTab === 1 ? 'active custom-gradient border-[#204bdb] bg-gradient-to-t from-[rgba(32,75,219,0.1)] to-[rgba(32,75,219,0)] text-[#204bdb]' : ''}`}
                  data-model="1"
                  onClick={() => handleTabClick(1, '#currency_table_1')}
                  id="currency_table_1"
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
                      </h4>
                      <div className="crypto_table_main flex w-full max-w-full flex-col">
                        <div className="block__available-currencies__tabs__content__table__group__rows">
                          <div className="block__available-currencies__tabs__content__table__group__rows_scroller">
                            <div className="row first_row flex flex-nowrap justify-start border-b border-t-0 border-[#ededed] pb-3 pt-3">
                              <div className="row__col octopus mr-5 flex-[0_1_144px] flex-col justify-start gap-2 text-xs text-xs font-normal font-normal leading-5 leading-[18px] text-[#1d2127] dark:text-[#a9a9a9]">
                                №
                              </div>
                              <div className="row__col octopus mr-5 flex-[0_1_144px] flex-col justify-start gap-2 text-xs text-xs font-normal font-normal leading-5 leading-[18px] text-[#1d2127] dark:text-[#a9a9a9]">
                                Alpha
                              </div>
                              <div className="row__col octopus mr-5 flex-[0_1_144px] flex-col justify-start gap-2 text-xs text-xs font-normal font-normal leading-5 leading-[18px] text-[#1d2127] dark:text-[#a9a9a9]">
                                Alias
                              </div>
                              <div className="row__col octopus mr-5 flex-[0_1_144px] flex-col justify-start gap-2 text-xs text-xs font-normal font-normal leading-5 leading-[18px] text-[#1d2127] dark:text-[#a9a9a9]">
                                Name
                              </div>
                              <div className="row__col octopus mr-5 flex-[0_1_144px] flex-col justify-start gap-2 text-xs text-xs font-normal font-normal leading-5 leading-[18px] text-[#1d2127] dark:text-[#a9a9a9]">
                                Blockchain
                              </div>
                              <div className="row__col octopus mr-5 flex-[0_1_144px] flex-col justify-start gap-2 text-xs text-xs font-normal font-normal leading-5 leading-[18px] text-[#1d2127] dark:text-[#a9a9a9]">
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
                            </div>
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
                      </h4>
                      <div className="crypto_table_main flex w-full max-w-full flex-col">
                        <div className="block__available-currencies__tabs__content__table__group__rows">
                          <div className="block__available-currencies__tabs__content__table__group__rows_scroller">
                            <div className="row first_row flex flex-nowrap justify-start border-b border-t-0 border-[#ededed] pb-3 pt-3">
                              <div className="row__col octopus mr-5 flex-[0_1_144px] flex-col justify-start gap-2 text-xs text-xs font-normal font-normal leading-5 leading-[18px] text-[#1d2127] dark:text-[#a9a9a9]">
                                №
                              </div>
                              <div className="row__col octopus mr-5 flex-[0_1_144px] flex-col justify-start gap-2 text-xs text-xs font-normal font-normal leading-5 leading-[18px] text-[#1d2127] dark:text-[#a9a9a9]">
                                Alpha
                              </div>
                              <div className="row__col octopus mr-5 flex-[0_1_144px] flex-col justify-start gap-2 text-xs text-xs font-normal font-normal leading-5 leading-[18px] text-[#1d2127] dark:text-[#a9a9a9]">
                                Alias
                              </div>
                              <div className="row__col octopus mr-5 flex-[0_1_144px] flex-col justify-start gap-2 text-xs text-xs font-normal font-normal leading-5 leading-[18px] text-[#1d2127] dark:text-[#a9a9a9]">
                                Name
                              </div>
                              <div className="row__col octopus mr-5 flex-[0_1_144px] flex-col justify-start gap-2 text-xs text-xs font-normal font-normal leading-5 leading-[18px] text-[#1d2127] dark:text-[#a9a9a9]">
                                Blockchain
                              </div>
                              <div className="row__col octopus mr-5 flex-[0_1_144px] flex-col justify-start gap-2 text-xs text-xs font-normal font-normal leading-5 leading-[18px] text-[#1d2127] dark:text-[#a9a9a9]">
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
                            </div>
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
        </section>
        <section className="block_linksbox_section white_section pb-[70px] pt-0 md:pb-[150px]">
          <div className="container mx-auto w-full max-w-[1356px]">
            <div className="block_linksbox block_linksbox_alignstart flex w-full flex-col flex-wrap justify-start gap-9 md:flex-row">
              <Link
                href="/minimum-deposits-withdrawals"
                className="short_box block_linksbox_single group mb-4 w-full max-w-full transform rounded-lg border border-gray-200 p-8 transition-all delay-200 duration-300 ease-in-out hover:border-[#204bdb] hover:bg-gray-100 dark:hover:bg-gray-600 md:max-w-33%"
              >
                <h4 className="mb-3 text-lg font-semibold text-[#262e39] dark:text-gray-200">
                  Minimum Deposits
                </h4>
                <p className="b2b_link mb-0 mt-6 flex transform items-center text-sm text-[#91919e] transition-all delay-200 duration-300 ease-in-out group-hover:text-[#204bdb] dark:text-blue-400 dark:group-hover:text-blue-200">
                  Explore
                  <ChevronRightIcon className="ml-2 h-4 w-4 transform transition-all delay-200 duration-300 ease-in-out group-hover:translate-x-2" />
                </p>
              </Link>
              <Link
                href="/crypto-processing-solutions-comparison"
                className="short_box block_linksbox_single group mb-4 w-full max-w-full transform rounded-lg border border-gray-200 p-8 transition-all delay-200 duration-300 ease-in-out hover:border-[#204bdb] hover:bg-gray-100 dark:hover:bg-gray-600 md:max-w-33%"
              >
                <h4 className="mb-3 text-lg font-semibold text-[#262e39] dark:text-gray-200">
                  Solutions Comparison
                </h4>
                <p className="b2b_link mb-0 mt-6 flex transform items-center text-sm text-[#91919e] transition-all delay-200 duration-300 ease-in-out group-hover:text-[#204bdb] dark:text-blue-400 dark:group-hover:text-blue-200">
                  Explore
                  <ChevronRightIcon className="ml-2 h-4 w-4 transform transition-all delay-200 duration-300 ease-in-out group-hover:translate-x-2" />
                </p>
              </Link>
              <Link
                href="/fees-pricing"
                className="short_box block_linksbox_single group mb-4 w-full max-w-full transform rounded-lg border border-gray-200 p-8 transition-all delay-200 duration-300 ease-in-out hover:border-[#204bdb] hover:bg-gray-100 dark:hover:bg-gray-600 md:max-w-33%"
              >
                <h4 className="mb-3 text-lg font-semibold text-[#262e39] dark:text-gray-200">
                  Fees &amp; Pricing
                </h4>
                <p className="b2b_link mb-0 mt-6 flex transform items-center text-sm text-[#91919e] transition-all delay-200 duration-300 ease-in-out group-hover:text-[#204bdb] dark:text-blue-400 dark:group-hover:text-blue-200">
                  Explore
                  <ChevronRightIcon className="ml-2 h-4 w-4 transform transition-all delay-200 duration-300 ease-in-out group-hover:translate-x-2" />
                </p>
              </Link>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
};

export default AvailableCurrenciesSection;
