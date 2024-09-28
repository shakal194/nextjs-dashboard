'use client';

import Header from '@/app/ui/_components/Header';
import Footer from '@/app/ui/footer';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import HomeSession from '@/app/ui/_components/HomeSession';
import { ChevronRightIcon } from '@heroicons/react/24/solid';

const MinimumDepositsWithdrawals = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col p-6">
        <section className="block__crypto-table white_section flex w-full max-w-full flex-col pb-40 pt-12">
          <div className="container mx-auto px-4">
            <div className="block__crypto-table__heading mb-8 text-center">
              <h1 className="text-3xl font-semibold">
                Minimum Deposits & Withdrawals
              </h1>
            </div>
            <div className="block__crypto-table__tabs mb-[72px]">
              <div className="block__crypto-table__tabs__header mb-20 flex cursor-pointer">
                <div
                  className={`block__crypto-table__tabs__header__item solid #ededed whitespace-nowrap border-b-2 bg-transparent p-[20px_32px] text-[18px] font-normal leading-[22px] text-[#91919e] text-[#999] no-underline transition ease-out ${activeTab === 0 ? 'active custom-gradient border-[#204bdb] bg-gradient-to-t from-[rgba(32,75,219,0.1)] to-[rgba(32,75,219,0)] text-[#204bdb]' : ''}`}
                  data-model="0"
                  onClick={() => setActiveTab(0)}
                >
                  Merchant Digital Wallets
                </div>
                <div
                  className={`block__crypto-table__tabs__header__item solid #ededed whitespace-nowrap border-b-2 bg-transparent p-[20px_32px] text-[18px] font-normal leading-[22px] text-[#91919e] text-[#999] no-underline transition ease-out ${activeTab === 1 ? 'active custom-gradient border-[#204bdb] bg-gradient-to-t from-[rgba(32,75,219,0.1)] to-[rgba(32,75,219,0)] text-[#204bdb]' : ''}`}
                  data-model="1"
                  onClick={() => setActiveTab(1)}
                >
                  Enterprise Blockchain Wallets
                </div>
              </div>
              <div className="block__crypto-table__tabs__content">
                {activeTab === 0 && (
                  <div
                    className="block__crypto-table__tabs__content__table active"
                    data-model="0"
                    data-license="0"
                  >
                    <div className="mb-15 flex w-full max-w-full">
                      <h4 className="mr-9 flex w-full max-w-[197px] justify-between text-xl font-semibold">
                        Coins
                      </h4>
                      <div className="crypto_table_main flex w-full max-w-full flex-col">
                        <div className="block__crypto-table__tabs__content__table__group__rows">
                          <div className="block__crypto-table__tabs__content__table__group__rows_scroller">
                            <div className="row first_row flex flex-nowrap justify-start border-b border-t-0 border-[#ededed] pb-3 pt-3">
                              <div className="row__col octopus mr-5 flex-[0_1_144px] flex-col justify-start gap-2 text-xs text-xs font-normal font-normal leading-5 leading-[18px] text-[#1d2127] text-[#a9a9a9]">
                                №
                              </div>
                              <div className="row__col octopus mr-5 flex-[0_1_144px] flex-col justify-start gap-2 text-xs text-xs font-normal font-normal leading-5 leading-[18px] text-[#1d2127] text-[#a9a9a9]">
                                Name
                              </div>
                              <div className="row__col octopus mr-5 flex-[0_1_144px] flex-col justify-start gap-2 text-xs text-xs font-normal font-normal leading-5 leading-[18px] text-[#1d2127] text-[#a9a9a9]">
                                Blockchain
                              </div>
                              <div className="row__col octopus mr-5 flex-[0_1_144px] flex-col justify-start gap-2 text-xs text-xs font-normal font-normal leading-5 leading-[18px] text-[#1d2127] text-[#a9a9a9]">
                                Deposit / Payout, min*
                              </div>
                              <div className="row__col octopus mr-5 flex-[0_1_144px] flex-col justify-start gap-2 text-xs text-xs font-normal font-normal leading-5 leading-[18px] text-[#1d2127] text-[#a9a9a9]">
                                Default** сonfirmations, min
                              </div>
                              <div className="row__col octopus mr-5 flex-[0_1_144px] flex-col justify-start gap-2 text-xs text-xs font-normal font-normal leading-5 leading-[18px] text-[#1d2127] text-[#a9a9a9]">
                                Message, for Payout
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
                                Bitcoin
                              </div>
                              <div className="row__col octopus m-0 mr-5 flex flex-[0_1_144px]  flex-nowrap justify-start text-xs leading-5">
                                Bitcoin
                              </div>
                              <div className="row__col octopus m-0 mr-5 flex flex-[0_1_144px]  flex-nowrap justify-start text-xs leading-5">
                                0.0001
                              </div>
                              <div className="row__col octopus m-0 mr-5 flex flex-[0_1_144px]  flex-nowrap justify-start text-xs leading-5">
                                3
                              </div>
                              <div className="row__col octopus m-0 mr-5 flex flex-[0_1_144px]  flex-nowrap justify-start text-xs leading-5">
                                -
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
                                Ethereum
                              </div>
                              <div className="row__col octopus m-0 mr-5 flex flex-[0_1_144px] flex-nowrap justify-start text-xs leading-5">
                                Ethereum
                              </div>
                              <div className="row__col octopus m-0 mr-5 flex flex-[0_1_144px] flex-nowrap justify-start text-xs leading-5">
                                0.002
                              </div>
                              <div className="row__col octopus m-0 mr-5 flex flex-[0_1_144px] flex-nowrap justify-start text-xs leading-5">
                                3
                              </div>
                              <div className="row__col octopus m-0 mr-5 flex flex-[0_1_144px] flex-nowrap justify-start text-xs leading-5">
                                -
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
                                Tether
                              </div>
                              <div className="row__col octopus m-0 mr-5 flex flex-[0_1_144px] flex-nowrap justify-start text-xs leading-5">
                                Tether
                              </div>
                              <div className="row__col octopus m-0 mr-5 flex flex-[0_1_144px] flex-nowrap justify-start text-xs leading-5">
                                0.0002
                              </div>
                              <div className="row__col octopus m-0 mr-5 flex flex-[0_1_144px] flex-nowrap justify-start text-xs leading-5">
                                3
                              </div>
                              <div className="row__col octopus m-0 mr-5 flex flex-[0_1_144px] flex-nowrap justify-start text-xs leading-5">
                                -
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
                    className="block__crypto-table__tabs__content__table active"
                    data-model="0"
                    data-license="0"
                  >
                    <div className="mb-15 flex w-full max-w-full">
                      <h4 className="mr-9 flex w-full max-w-[197px] justify-between text-xl font-semibold">
                        Coins
                      </h4>
                      <div className="crypto_table_main flex w-full max-w-full flex-col">
                        <div className="block__crypto-table__tabs__content__table__group__rows">
                          <div className="block__crypto-table__tabs__content__table__group__rows_scroller">
                            <div className="row first_row flex flex-nowrap justify-start border-b border-t-0 border-[#ededed] pb-3 pt-3">
                              <div className="row__col octopus mr-5 flex-[0_1_144px] flex-col justify-start gap-2 text-xs text-xs font-normal font-normal leading-5 leading-[18px] text-[#1d2127] text-[#a9a9a9]">
                                №
                              </div>
                              <div className="row__col octopus mr-5 flex-[0_1_144px] flex-col justify-start gap-2 text-xs text-xs font-normal font-normal leading-5 leading-[18px] text-[#1d2127] text-[#a9a9a9]">
                                Name
                              </div>
                              <div className="row__col octopus mr-5 flex-[0_1_144px] flex-col justify-start gap-2 text-xs text-xs font-normal font-normal leading-5 leading-[18px] text-[#1d2127] text-[#a9a9a9]">
                                Blockchain
                              </div>
                              <div className="row__col octopus mr-5 flex-[0_1_144px] flex-col justify-start gap-2 text-xs text-xs font-normal font-normal leading-5 leading-[18px] text-[#1d2127] text-[#a9a9a9]">
                                Deposit / Payout, min*
                              </div>
                              <div className="row__col octopus mr-5 flex-[0_1_144px] flex-col justify-start gap-2 text-xs text-xs font-normal font-normal leading-5 leading-[18px] text-[#1d2127] text-[#a9a9a9]">
                                Default** сonfirmations, min
                              </div>
                              <div className="row__col octopus mr-5 flex-[0_1_144px] flex-col justify-start gap-2 text-xs text-xs font-normal font-normal leading-5 leading-[18px] text-[#1d2127] text-[#a9a9a9]">
                                Message, for Payout
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
                                Bitcoin
                              </div>
                              <div className="row__col octopus m-0 mr-5 flex flex-[0_1_144px]  flex-nowrap justify-start text-xs leading-5">
                                Bitcoin
                              </div>
                              <div className="row__col octopus m-0 mr-5 flex flex-[0_1_144px]  flex-nowrap justify-start text-xs leading-5">
                                0.0001
                              </div>
                              <div className="row__col octopus m-0 mr-5 flex flex-[0_1_144px]  flex-nowrap justify-start text-xs leading-5">
                                3
                              </div>
                              <div className="row__col octopus m-0 mr-5 flex flex-[0_1_144px]  flex-nowrap justify-start text-xs leading-5">
                                -
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
                                Ethereum
                              </div>
                              <div className="row__col octopus m-0 mr-5 flex flex-[0_1_144px] flex-nowrap justify-start text-xs leading-5">
                                Ethereum
                              </div>
                              <div className="row__col octopus m-0 mr-5 flex flex-[0_1_144px] flex-nowrap justify-start text-xs leading-5">
                                0.002
                              </div>
                              <div className="row__col octopus m-0 mr-5 flex flex-[0_1_144px] flex-nowrap justify-start text-xs leading-5">
                                3
                              </div>
                              <div className="row__col octopus m-0 mr-5 flex flex-[0_1_144px] flex-nowrap justify-start text-xs leading-5">
                                -
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
                                Tether
                              </div>
                              <div className="row__col octopus m-0 mr-5 flex flex-[0_1_144px] flex-nowrap justify-start text-xs leading-5">
                                Tether
                              </div>
                              <div className="row__col octopus m-0 mr-5 flex flex-[0_1_144px] flex-nowrap justify-start text-xs leading-5">
                                0.0002
                              </div>
                              <div className="row__col octopus m-0 mr-5 flex flex-[0_1_144px] flex-nowrap justify-start text-xs leading-5">
                                3
                              </div>
                              <div className="row__col octopus m-0 mr-5 flex flex-[0_1_144px] flex-nowrap justify-start text-xs leading-5">
                                -
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
            <div className="crypto-table__tables__table mb-[72px]">
              <div className="crypto-table__tables__table__text__wrap mx-auto ml-[197px] max-w-[800px]">
                <div className="crypto-table__tables__table__text">
                  <p className="mb-4 text-[12px] text-[#A2A4B0]">
                    Any deposit or payout sent by mistake on another blockchain
                    or to an incompatible address may result in the loss of
                    funds forever. If a deposit is made to the address of the
                    smart contract, then these funds cannot be returned, even
                    for a fee. When withdrawing funds sent by mistake to a
                    deposit of another blockchain, our fee can be $100 for coins
                    and from $200 for tokens.
                  </p>
                  <p className="mb-4 text-[12px] text-[#A2A4B0]">
                    * Unlike the Blockchain Wallet model, you cannot change the
                    standard values of the amounts for deposits and payouts. If
                    an amount less than this value is sent to the deposit, then
                    such a deposit will not be taken into account.
                  </p>
                  <p className="mb-4 text-[12px] text-[#A2A4B0]">
                    ** For each deposit or payout, you can specify the
                    individual number of confirmations, upon reaching which the
                    callback will be sent to the URL if it was specified when
                    creating the request.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="container mx-auto w-full max-w-[1356px]">
            <div className="block_linksbox block_linksbox_alignstart flex w-full flex-wrap justify-start gap-9">
              <Link
                href="/available-currencies"
                className="short_box block_linksbox_single group mb-4 w-full max-w-33% transform rounded-lg border border-gray-200 p-8 transition-transform duration-300 ease-in-out hover:border-[#204bdb] hover:bg-gray-100"
              >
                <h4 className="mb-3 text-lg font-semibold text-[#262e39]">
                  Available Сurrencies
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
    </>
  );
};

export default MinimumDepositsWithdrawals;
