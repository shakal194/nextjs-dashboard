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
      <section className="block__deposits white_section flex w-full max-w-full flex-col pb-40 pt-12">
        <div className="container mx-auto w-full max-w-[1356px] px-4">
          <div className="block__deposits__heading mb-8 text-center">
            <h1 className="text-3xl font-semibold">Know Your Fees</h1>
          </div>
          <div className="block_deposits_first_row mb-20 flex w-full max-w-full border-b border-gray-200 pb-5">
            <h2 className="heading_h3 mb-[-20px] w-full max-w-[197px] pr-9 text-[20px] font-semibold leading-[32px]">
              One-time fee
            </h2>
            <p className="block_deposits_first_row_element block_deposits_first_row_element-2 flex w-full max-w-[340px] items-center pr-4 text-[16px] font-medium leading-[25px] text-[#1d2127]">
              One fee including all types of the wallets supported
            </p>
            <p className="block_deposits_first_row_element block_deposits_first_row_element-3 flex w-full max-w-[391px] items-center pr-4 text-[14px] font-normal leading-[22px] text-[#494949]">
              Onboarding Fee (Compliance + Screening + Setup)
            </p>
            <p className="block_deposits_first_row_element block_deposits_first_row_element-4 flex w-full max-w-[100px] items-center text-[14px] font-bold leading-[22px] text-[#494949]">
              $ 500
            </p>
          </div>
          <div className="block__deposits__tabs">
            <div className="block__deposits__tabs__header mb-20 flex cursor-pointer">
              <div
                className={`block__deposits__tabs__header__item solid #ededed whitespace-nowrap border-b-2 bg-transparent p-[20px_32px] text-[18px] font-normal leading-[22px] text-[#91919e] text-[#999] no-underline transition ease-out ${activeTab === 0 ? 'active custom-gradient border-[#204bdb] bg-gradient-to-t from-[rgba(32,75,219,0.1)] to-[rgba(32,75,219,0)] text-[#204bdb]' : ''}`}
                data-model="0"
                onClick={() => setActiveTab(0)}
              >
                Merchant Digital Wallets
              </div>
              <div
                className={`block__deposits__tabs__header__item solid #ededed whitespace-nowrap border-b-2 bg-transparent p-[20px_32px] text-[18px] font-normal leading-[22px] text-[#91919e] text-[#999] no-underline transition ease-out ${activeTab === 1 ? 'active custom-gradient border-[#204bdb] bg-gradient-to-t from-[rgba(32,75,219,0.1)] to-[rgba(32,75,219,0)] text-[#204bdb]' : ''}`}
                data-model="1"
                onClick={() => setActiveTab(1)}
              >
                Enterprise Blockchain Wallets
              </div>
            </div>
            <div className="block__deposits__tabs__content">
              {activeTab === 0 && (
                <div
                  className="block__deposits__tabs__content__table active"
                  data-model="0"
                  data-license="0"
                >
                  <div className="tab-content__item_table mb-20 flex w-full max-w-full">
                    <div className="tab-content__item_table_title mr-9 w-full max-w-[197px]">
                      <h5 className="heading_h3 text-[20px] font-semibold leading-[32px]">
                        Digital Wallet Accounts*
                      </h5>
                    </div>
                    <div className="tab-content__item_table_body w-full max-w-[1124px] border-b border-gray-200">
                      <div className="tab-content__item_table_body_row flex w-full max-w-full justify-between">
                        <div className="firs-coll w-full max-w-[340px] px-0 py-[16px] text-[16px] font-medium">
                          <p className="block_deposits_first_row_element block_deposits_first_row_element-2 flex w-full max-w-[340px] items-center pr-4 text-[16px] font-medium leading-[25px] text-[#1d2127]">
                            Open your account in
                          </p>
                        </div>
                        <div className="colls flex w-full flex-col">
                          <div className="linews_row flex w-full">
                            <div className="line w-full">
                              <div className="cell min-h[21px] -mb-1 flex h-full flex-col px-0 py-[16px] font-bold">
                                <div className="item text-[14px] leading-[155%] text-[#494949]">
                                  USD, EUR USDT, USDC, TUSD, EURC, BTC
                                </div>
                              </div>
                            </div>
                            <div className="line w-full">
                              <div className="cell min-h[21px] -mb-1 flex h-full flex-col px-0 py-[16px] font-bold">
                                <div className="item text-[14px] leading-[155%] text-[#494949]"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-content__item_table mb-15 mb-[60px] flex w-full max-w-full">
                    <div className="tab-content__item_table_title mr-[36px] w-full max-w-[197px]">
                      <h5 className="text-[20px] font-semibold leading-[32px]">
                        Processing Fee**
                      </h5>
                    </div>
                    <div className="tab-content__item_table_body flex w-full max-w-[1124px] flex-col">
                      <div className="row-title">
                        <span className="text-[18px] font-semibold leading-[150%] text-[#204bdb]">
                          For Coins
                        </span>
                      </div>
                      <div className="tab-content__item_table_body_row uniq_table relative flex justify-between border-b border-[#ededed] before:absolute before:left-0 before:top-[20%] before:h-[1px] before:w-full before:bg-[#ededed] before:content-['']">
                        <div className="firs-coll w-full max-w-[340px] py-[16px] pt-[74px] text-[16px] font-medium text-[#1d2127]">
                          <span className="font-inter text-[18px] font-semibold leading-[150%]">
                            Incoming Transactions
                          </span>
                        </div>
                        <div className="colls flex w-full flex-col">
                          <div className="titles_row flex">
                            <div className="titles_row_item w-full max-w-[391px] py-[16px] text-[14px] font-normal leading-[22px] text-[#494949]">
                              Turnover
                            </div>
                            <div className="titles_row_item w-full max-w-[391px] py-[16px] text-[14px] font-normal leading-[22px] text-[#494949]">
                              Commission
                            </div>
                          </div>
                          <div className="linews_row flex">
                            <div className="line flex w-full flex-col">
                              <div className="cell mb-[-1px] flex h-full min-h-[21px] border-b border-[#ededed] py-[16px] font-bold">
                                <div className="item text-[14px] leading-[155%] text-[#494949]">
                                  &gt; $ 5 mln
                                </div>
                              </div>
                              <div className="cell mb-[-1px] flex h-full min-h-[21px] border-b border-[#ededed] py-[16px] font-bold">
                                <div className="item text-[14px] leading-[155%] text-[#494949]">
                                  $ 3 – 5 mln
                                </div>
                              </div>
                              <div className="cell mb-[-1px] flex h-full min-h-[21px] border-b border-[#ededed] py-[16px] font-bold">
                                <div className="item text-[14px] leading-[155%] text-[#494949]">
                                  $ 1 – 3 mln
                                </div>
                              </div>
                              <div className="cell mb-[-1px] flex h-full min-h-[21px] border-b border-[#ededed] py-[16px] font-bold">
                                <div className="item text-[14px] leading-[155%] text-[#494949]">
                                  &lt; $ 1 mln
                                </div>
                              </div>
                            </div>
                            <div className="line flex w-full flex-col">
                              <div className="cell mb-[-1px] flex h-full min-h-[21px] border-b border-[#ededed] py-[16px]">
                                <div className="item text-[14px] leading-[155%]">
                                  0.25%
                                </div>
                              </div>
                              <div className="cell mb-[-1px] flex h-full min-h-[21px] border-b border-[#ededed] py-[16px]">
                                <div className="item text-[14px] leading-[155%]">
                                  0.3%
                                </div>
                              </div>
                              <div className="cell mb-[-1px] flex h-full min-h-[21px] border-b border-[#ededed] py-[16px]">
                                <div className="item text-[14px] leading-[155%]">
                                  0.35%
                                </div>
                              </div>
                              <div className="cell mb-[-1px] flex h-full min-h-[21px] border-b border-[#ededed] py-[16px]">
                                <div className="item text-[14px] leading-[155%]">
                                  0.4%
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-content__item_table_body_row flex justify-between border-b border-[#ededed]">
                        <div className="firs-coll w-full max-w-[340px] py-[16px] text-[16px] font-medium text-[#1d2127]">
                          <span className="font-inter text-[18px] font-semibold leading-[150%]">
                            Outgoing Transactions
                          </span>
                        </div>
                        <div className="colls flex w-full flex-col">
                          <div className="linews_row flex">
                            <div className="line flex w-full flex-col">
                              <div className="cell mb-[-1px] flex h-full min-h-[21px] py-[16px] font-bold">
                                <div className="item text-[14px] leading-[155%] text-[#494949]">
                                  Free of Charge
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-content__item_table_body_row uniq_table relative flex justify-between border-b border-[#ededed]">
                        <div className="firs-coll w-full max-w-[340px] py-[16px] text-[16px] font-medium text-[#1d2127]">
                          <span className="font-inter text-[18px] font-semibold leading-[150%]">
                            Crypto Settlement
                          </span>
                        </div>
                        <div className="colls flex w-full flex-col">
                          <div className="linews_row flex">
                            <div className="line flex w-full flex-col">
                              <div className="cell mb-[-1px] flex h-full min-h-[21px] py-[16px]">
                                <div className="item text-[14px] font-bold leading-[155%] text-[#494949]">
                                  Immediate
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-content__item_table_body_row uniq_table relative flex justify-between border-b border-[#ededed]">
                        <div className="firs-coll w-full max-w-[340px] py-[16px] text-[16px] font-medium text-[#1d2127]">
                          <span className="font-inter text-[18px] font-semibold leading-[150%]">
                            Fiat Settlement
                          </span>
                        </div>
                        <div className="colls flex w-full flex-col">
                          <div className="linews_row flex">
                            <div className="line flex w-full flex-col">
                              <div className="cell mb-[-1px] flex h-full min-h-[21px] py-[16px]">
                                <div className="item text-[14px] font-bold leading-[155%] text-[#494949]">
                                  T+1
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-content__item_table mb-15 mb-[60px] flex w-full max-w-full">
                    <div className="tab-content__item_table_title mr-[36px] w-full max-w-[197px]"></div>
                    <div className="tab-content__item_table_body flex w-full max-w-[1124px] flex-col">
                      <div className="row-title">
                        <span className="text-[18px] font-semibold leading-[150%] text-[#204bdb]">
                          For StableCoins & Tokens
                        </span>
                      </div>
                      <div className="tab-content__item_table_body_row uniq_table relative flex justify-between border-b border-[#ededed] before:absolute before:left-0 before:top-[20%] before:h-[1px] before:w-full before:bg-[#ededed] before:content-['']">
                        <div className="firs-coll w-full max-w-[340px] py-[16px] pt-[74px] text-[16px] font-medium text-[#1d2127]">
                          <span className="font-inter text-[18px] font-semibold leading-[150%]">
                            Incoming Transactions
                          </span>
                        </div>
                        <div className="colls flex w-full flex-col">
                          <div className="titles_row flex">
                            <div className="titles_row_item w-full max-w-[391px] py-[16px] text-[14px] font-normal leading-[22px] text-[#494949]">
                              Turnover
                            </div>
                            <div className="titles_row_item w-full max-w-[391px] py-[16px] text-[14px] font-normal leading-[22px] text-[#494949]">
                              Commission
                            </div>
                          </div>
                          <div className="linews_row flex">
                            <div className="line flex w-full flex-col">
                              <div className="cell mb-[-1px] flex h-full min-h-[21px] border-b border-[#ededed] py-[16px] font-bold">
                                <div className="item text-[14px] leading-[155%] text-[#494949]">
                                  &gt; $ 5 mln
                                </div>
                              </div>
                              <div className="cell mb-[-1px] flex h-full min-h-[21px] border-b border-[#ededed] py-[16px] font-bold">
                                <div className="item text-[14px] leading-[155%] text-[#494949]">
                                  $ 3 – 5 mln
                                </div>
                              </div>
                              <div className="cell mb-[-1px] flex h-full min-h-[21px] border-b border-[#ededed] py-[16px] font-bold">
                                <div className="item text-[14px] leading-[155%] text-[#494949]">
                                  $ 1 – 3 mln
                                </div>
                              </div>
                              <div className="cell mb-[-1px] flex h-full min-h-[21px] border-b border-[#ededed] py-[16px] font-bold">
                                <div className="item text-[14px] leading-[155%] text-[#494949]">
                                  &lt; $ 1 mln
                                </div>
                              </div>
                            </div>
                            <div className="line flex w-full flex-col">
                              <div className="cell mb-[-1px] flex h-full min-h-[21px] border-b border-[#ededed] py-[16px]">
                                <div className="item text-[14px] leading-[155%]">
                                  0.25%
                                </div>
                              </div>
                              <div className="cell mb-[-1px] flex h-full min-h-[21px] border-b border-[#ededed] py-[16px]">
                                <div className="item text-[14px] leading-[155%]">
                                  0.3%
                                </div>
                              </div>
                              <div className="cell mb-[-1px] flex h-full min-h-[21px] border-b border-[#ededed] py-[16px]">
                                <div className="item text-[14px] leading-[155%]">
                                  0.35%
                                </div>
                              </div>
                              <div className="cell mb-[-1px] flex h-full min-h-[21px] border-b border-[#ededed] py-[16px]">
                                <div className="item text-[14px] leading-[155%]">
                                  0.4%
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-content__item_table_body_row flex justify-between border-b border-[#ededed]">
                        <div className="firs-coll w-full max-w-[340px] py-[16px] text-[16px] font-medium text-[#1d2127]">
                          <span className="font-inter text-[18px] font-semibold leading-[150%]">
                            Outgoing Transactions
                          </span>
                        </div>
                        <div className="colls flex w-full flex-col">
                          <div className="linews_row flex">
                            <div className="line flex w-full flex-col">
                              <div className="cell mb-[-1px] flex h-full min-h-[21px] py-[16px] font-bold">
                                <div className="item text-[14px] leading-[155%] text-[#494949]">
                                  Free of Charge
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-content__item_table_body_row uniq_table relative flex justify-between border-b border-[#ededed]">
                        <div className="firs-coll w-full max-w-[340px] py-[16px] text-[16px] font-medium text-[#1d2127]">
                          <span className="font-inter text-[18px] font-semibold leading-[150%]">
                            Crypto Settlement
                          </span>
                        </div>
                        <div className="colls flex w-full flex-col">
                          <div className="linews_row flex">
                            <div className="line flex w-full flex-col">
                              <div className="cell mb-[-1px] flex h-full min-h-[21px] py-[16px]">
                                <div className="item text-[14px] font-bold leading-[155%] text-[#494949]">
                                  Immediate
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-content__item_table_body_row uniq_table relative flex justify-between border-b border-[#ededed]">
                        <div className="firs-coll w-full max-w-[340px] py-[16px] text-[16px] font-medium text-[#1d2127]">
                          <span className="font-inter text-[18px] font-semibold leading-[150%]">
                            Fiat Settlement
                          </span>
                        </div>
                        <div className="colls flex w-full flex-col">
                          <div className="linews_row flex">
                            <div className="line flex w-full flex-col">
                              <div className="cell mb-[-1px] flex h-full min-h-[21px] py-[16px]">
                                <div className="item text-[14px] font-bold leading-[155%] text-[#494949]">
                                  T+1
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-content__item_table mb-15 mb-[60px] flex w-full max-w-full">
                    <div className="tab-content__item_table_title mr-[36px] w-full max-w-[197px]"></div>
                    <div className="tab-content__item_table_body flex w-full max-w-[1124px] flex-col">
                      <div className="row-title">
                        <span className="text-[18px] font-semibold leading-[150%] text-[#204bdb]">
                          Minimum Commissions
                        </span>
                      </div>
                      <div className="tab-content__item_table_body_row uniq_table relative flex justify-between border-b border-[#ededed]">
                        <div className="firs-coll w-full max-w-[340px] py-[16px] text-[16px] font-medium text-[#1d2127]">
                          <span className="font-inter text-[18px] font-semibold leading-[150%]">
                            Per blockchain
                          </span>
                        </div>
                        <div className="colls flex w-full flex-col">
                          <div className="linews_row flex">
                            <div className="line flex w-full flex-col">
                              <div className="cell mb-[-1px] flex h-full min-h-[21px] border-b border-[#ededed] py-[16px] font-bold">
                                <div className="item text-[14px] leading-[155%] text-[#494949]">
                                  ETH
                                </div>
                              </div>
                              <div className="cell mb-[-1px] flex h-full min-h-[21px] border-b border-[#ededed] py-[16px] font-bold">
                                <div className="item text-[14px] leading-[155%] text-[#494949]">
                                  BTC
                                </div>
                              </div>
                              <div className="cell mb-[-1px] flex h-full min-h-[21px] border-b border-[#ededed] py-[16px] font-bold">
                                <div className="item text-[14px] leading-[155%] text-[#494949]">
                                  Tether
                                </div>
                              </div>
                            </div>
                            <div className="line flex w-full flex-col">
                              <div className="cell mb-[-1px] flex h-full min-h-[21px] border-b border-[#ededed] py-[16px]">
                                <div className="item text-[14px] leading-[155%]">
                                  8$
                                </div>
                              </div>
                              <div className="cell mb-[-1px] flex h-full min-h-[21px] border-b border-[#ededed] py-[16px]">
                                <div className="item text-[14px] leading-[155%]">
                                  0,1$
                                </div>
                              </div>
                              <div className="cell mb-[-1px] flex h-full min-h-[21px] border-b border-[#ededed] py-[16px]">
                                <div className="item text-[14px] leading-[155%]">
                                  ???
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-content__item_table mb-[72px]">
                    <div className="tab-content__item_table_body mx-auto ml-[197px] max-w-[800px]">
                      <div className="tab-content__item_table_body_descr">
                        <p className="mb-4 text-[12px] text-[#A2A4B0]">
                          * Digital Wallet accounts are functional for deposits
                          and withdrawals with conversion, meaning that the
                          Sender can process BTC and it will be settled in USDT,
                          which can be subsequently sent in the corresponding
                          currency.
                        </p>
                        <p className="mb-4 text-[12px] text-[#A2A4B0]">
                          ** Active Commission Ladder makes our services even
                          more cost effective. The higher the processing
                          volume*, the lesser the commission is applied
                          according to the ladder. Active ladder is comprised of
                          tiers which are calculated by volume* per calendar
                          month. For example the initial default commission is
                          set at 0.4% on all the incoming coin deposits
                          according to the first tier. Once the deposits exceed
                          $1 million, the processing commission decreases to
                          0.35% and so on, as per the ladder. In the beginning
                          of the next month the default commission is set again
                          and the volume needs to be calculated from the
                          beginning.
                        </p>
                        <p className="mb-4 text-[12px] text-[#A2A4B0]">
                          The volume itself is comprised of all the deposits and
                          is calculated in USD at the moment of each transaction
                          confirmation by the blockchain.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {activeTab === 1 && (
                <div
                  className="block__deposits__tabs__content__table active"
                  data-model="0"
                  data-license="0"
                >
                  <div className="tab-content__item_table mb-15 mb-[60px] flex w-full max-w-full">
                    <div className="tab-content__item_table_title mr-[36px] w-full max-w-[197px]">
                      <h5 className="text-[20px] font-semibold leading-[32px]">
                        Processing Fee**
                      </h5>
                    </div>
                    <div className="tab-content__item_table_body flex w-full max-w-[1124px] flex-col">
                      <div className="row-title border-b border-[#ededed] pb-[33px]">
                        <span className="text-[18px] font-semibold leading-[150%] text-[#204bdb]">
                          For Coins, Stableсoins & Tokens
                        </span>
                      </div>
                      <div className="tab-content__item_table_body_row uniq_table relative flex justify-between border-b border-[#ededed]">
                        <div className="firs-coll w-full max-w-[340px] py-[16px] text-[16px] font-medium text-[#1d2127]">
                          <span className="font-inter text-[18px] font-semibold leading-[150%]">
                            Incoming Transactions
                          </span>
                        </div>
                        <div className="colls flex w-full flex-col">
                          <div className="titles_row flex"></div>
                          <div className="linews_row flex">
                            <div className="line flex w-full flex-col">
                              <div className="cell mb-[-1px] flex h-full min-h-[21px] border-b border-[#ededed] py-[16px]">
                                <div className="item text-[14px] leading-[155%]">
                                  0.05%
                                </div>
                              </div>
                              <div className="cell mb-[-1px] flex h-full min-h-[21px] border-b border-[#ededed] py-[16px]">
                                <div className="item text-[14px] leading-[155%]">
                                  0.1%
                                </div>
                              </div>
                              <div className="cell mb-[-1px] flex h-full min-h-[21px] border-b border-[#ededed] py-[16px]">
                                <div className="item text-[14px] leading-[155%]">
                                  0.15%
                                </div>
                              </div>
                              <div className="cell mb-[-1px] flex h-full min-h-[21px] border-b border-[#ededed] py-[16px]">
                                <div className="item text-[14px] leading-[155%]">
                                  0.2%
                                </div>
                              </div>
                              <div className="cell mb-[-1px] flex h-full min-h-[21px] border-b border-[#ededed] py-[16px]">
                                <div className="item text-[14px] leading-[155%]">
                                  0.25%
                                </div>
                              </div>
                              <div className="cell mb-[-1px] flex h-full min-h-[21px] border-b border-[#ededed] py-[16px]">
                                <div className="item text-[14px] leading-[155%]">
                                  0.3%
                                </div>
                              </div>
                            </div>
                            <div className="line flex w-full flex-col">
                              <div className="cell mb-[-1px] flex h-full min-h-[21px] border-b border-[#ededed] py-[16px] font-bold">
                                <div className="item text-[14px] leading-[155%] text-[#494949]">
                                  &gt; $ 20 mln
                                </div>
                              </div>
                              <div className="cell mb-[-1px] flex h-full min-h-[21px] border-b border-[#ededed] py-[16px] font-bold">
                                <div className="item text-[14px] leading-[155%] text-[#494949]">
                                  $ 10 – 20 mln
                                </div>
                              </div>
                              <div className="cell mb-[-1px] flex h-full min-h-[21px] border-b border-[#ededed] py-[16px] font-bold">
                                <div className="item text-[14px] leading-[155%] text-[#494949]">
                                  $ 5 – 10 mln
                                </div>
                              </div>
                              <div className="cell mb-[-1px] flex h-full min-h-[21px] border-b border-[#ededed] py-[16px] font-bold">
                                <div className="item text-[14px] leading-[155%] text-[#494949]">
                                  $ 3 – 5 mln
                                </div>
                              </div>
                              <div className="cell mb-[-1px] flex h-full min-h-[21px] border-b border-[#ededed] py-[16px] font-bold">
                                <div className="item text-[14px] leading-[155%] text-[#494949]">
                                  $ 1 – 3 mln
                                </div>
                              </div>
                              <div className="cell mb-[-1px] flex h-full min-h-[21px] border-b border-[#ededed] py-[16px] font-bold">
                                <div className="item text-[14px] leading-[155%] text-[#494949]">
                                  &lt; $ 1 mln
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-content__item_table_body_row flex justify-between border-b border-[#ededed]">
                        <div className="firs-coll w-full max-w-[340px] py-[16px] text-[16px] font-medium text-[#1d2127]">
                          <span className="font-inter text-[18px] font-semibold leading-[150%]">
                            Outgoing Transactions
                          </span>
                        </div>
                        <div className="colls flex w-full flex-col">
                          <div className="linews_row flex">
                            <div className="line flex w-full flex-col">
                              <div className="cell mb-[-1px] flex h-full min-h-[21px] py-[16px] font-bold">
                                <div className="item text-[14px] leading-[155%] text-[#494949]">
                                  Free of Charge
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-content__item_table_body_row uniq_table relative flex justify-between border-b border-[#ededed]">
                        <div className="firs-coll w-full max-w-[340px] py-[16px] text-[16px] font-medium text-[#1d2127]">
                          <span className="font-inter text-[18px] font-semibold leading-[150%]">
                            Settlement
                          </span>
                        </div>
                        <div className="colls flex w-full flex-col">
                          <div className="linews_row flex">
                            <div className="line flex w-full flex-col">
                              <div className="cell mb-[-1px] flex h-full min-h-[21px] py-[16px]">
                                <div className="item text-[14px] font-bold leading-[155%] text-[#494949]">
                                  Immediate
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-content__item_table mb-15 mb-[60px] flex w-full max-w-full">
                    <div className="tab-content__item_table_title mr-[36px] w-full max-w-[197px]"></div>
                    <div className="tab-content__item_table_body flex w-full max-w-[1124px] flex-col">
                      <div className="row-title">
                        <span className="text-[18px] font-semibold leading-[150%] text-[#204bdb]">
                          For Tokens
                        </span>
                      </div>
                      <div className="tab-content__item_table_body_row uniq_table relative flex justify-between border-b border-[#ededed] before:absolute before:left-0 before:top-[20%] before:h-[1px] before:w-full before:bg-[#ededed] before:content-['']">
                        <div className="firs-coll w-full max-w-[340px] py-[16px] pt-[74px] text-[16px] font-medium text-[#1d2127]">
                          <span className="font-inter text-[18px] font-semibold leading-[150%]">
                            Incoming Transactions
                          </span>
                        </div>
                        <div className="colls flex w-full flex-col">
                          <div className="titles_row flex">
                            <div className="titles_row_item w-full max-w-[391px] py-[16px] text-[14px] font-normal leading-[22px] text-[#494949]">
                              Turnover
                            </div>
                            <div className="titles_row_item w-full max-w-[391px] py-[16px] text-[14px] font-normal leading-[22px] text-[#494949]">
                              Commission
                            </div>
                          </div>
                          <div className="linews_row flex">
                            <div className="line flex w-full flex-col">
                              <div className="cell mb-[-1px] flex h-full min-h-[21px] border-b border-[#ededed] py-[16px]">
                                <div className="item text-[14px] leading-[155%]">
                                  0.15%
                                </div>
                              </div>
                            </div>
                            <div className="line flex w-full flex-col">
                              <div className="cell mb-[-1px] flex h-full min-h-[21px] border-b border-[#ededed] py-[16px] font-bold">
                                <div className="item text-[14px] leading-[155%] text-[#494949]">
                                  No tiers
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-content__item_table_body_row flex justify-between border-b border-[#ededed]">
                        <div className="firs-coll w-full max-w-[340px] py-[16px] text-[16px] font-medium text-[#1d2127]">
                          <span className="font-inter text-[18px] font-semibold leading-[150%]">
                            Outgoing Transactions
                          </span>
                        </div>
                        <div className="colls flex w-full flex-col">
                          <div className="linews_row flex">
                            <div className="line flex w-full flex-col">
                              <div className="cell mb-[-1px] flex h-full min-h-[21px] py-[16px] font-bold">
                                <div className="item text-[14px] leading-[155%] text-[#494949]">
                                  Free of Charge
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-content__item_table_body_row uniq_table relative flex justify-between border-b border-[#ededed]">
                        <div className="firs-coll w-full max-w-[340px] py-[16px] text-[16px] font-medium text-[#1d2127]">
                          <span className="font-inter text-[18px] font-semibold leading-[150%]">
                            Crypto Settlement
                          </span>
                        </div>
                        <div className="colls flex w-full flex-col">
                          <div className="linews_row flex">
                            <div className="line flex w-full flex-col">
                              <div className="cell mb-[-1px] flex h-full min-h-[21px] py-[16px]">
                                <div className="item text-[14px] font-bold leading-[155%] text-[#494949]">
                                  Immediate
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-content__item_table mb-[72px]">
                    <div className="tab-content__item_table_body mx-auto ml-[197px] max-w-[800px]">
                      <div className="tab-content__item_table_body_descr">
                        <p className="mb-4 text-[12px] text-[#A2A4B0]">
                          ** Active Commission Ladder makes our services even
                          more cost effective. The higher the processing
                          volume*, the lesser the commission is applied
                          according to the ladder. Active ladder is comprised of
                          tiers which are calculated by volume* per calendar
                          month. For example the initial default commission is
                          set at 0.3% on all the incoming deposits according to
                          the first tier. Once the transaction volume* exceeds
                          $1 million, the processing commission decreases to
                          0.25% and so on, as per the ladder.In the beginning of
                          the next month the default commission is set again and
                          the volume needs to be calculated from the
                          beginning.Please be aware that blockchain aggregation
                          fee for every cryptocurrency is on the client side!
                        </p>
                        <p className="mb-4 text-[12px] text-[#A2A4B0]">
                          The volume itself is comprised of all the deposits and
                          is calculated in USD at the moment of each transaction
                          confirmation by the blockchain.
                        </p>
                        <p className="mb-4 text-[12px] text-[#A2A4B0]">
                          * Smart Token Collection (STC) For tokens based on
                          ERC20, Bep-20, TRC20 you are able to generate
                          unlimited number of deposit addresses. Whenever you
                          receive an incoming transaction on any of these
                          addresses the funds must be collected on the main
                          wallet address from which all the withdrawals are done
                          otherwise token balance will be spread among multiple
                          deposit addresses and you won’t be able to do anything
                          with them. The aggregation of tokens requires payment
                          of a blockchain fee in the parent currency (ETH, BSC,
                          TRX) making the whole process cumbersome and
                          ineffective. Luckily thanks to our STC you don’t need
                          to worry about depositing parent currency on a deposit
                          address. The aggregation fee is paid from the Smart
                          Contract that is deployed on the main address during
                          wallet activation. Thus you don’t need to pay the
                          blockchain fees twice and your deposit addresses will
                          have only token balances with zero balance in parent
                          coin. However you need to keep an eye on parent
                          currency balance you have on your main wallet address.
                        </p>
                        <p className="mb-4 text-[12px] text-[#A2A4B0]">
                          Currencies like Ripple, Stellar etc. requires
                          activation fee for every newly created wallet address.
                        </p>
                        <p className="mb-4 text-[12px] text-[#A2A4B0]">
                          STC – is our unique feature – Smart Contract that
                          generates deposit addresses (salt addresses) based on
                          the main wallet and automatically aggregates all
                          incoming deposits from deposit addresses to the main
                          wallet address where the Smart Contract is installed.
                        </p>
                        <p className="mb-4 text-[12px] text-[#A2A4B0]">
                          We use the onboarding fee for wallet activation. That
                          includes setting up the Smart Contract for ETH, BSC
                          and TRX. Few other currencies (i.e. XRP, XLM and BNB)
                          require activation fee based on the blockchain.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      <section className="block_linksbox_section white_section pb-[150px] pt-0">
        <div className="container mx-auto w-full max-w-[1356px]">
          <div className="block_linksbox block_linksbox_alignstart flex w-full flex-wrap justify-start gap-9">
            <Link
              href="/available-currencies"
              className="short_box block_linksbox_single group mb-4 w-full max-w-33% transform rounded-lg border border-gray-200 p-8 transition-transform duration-300 ease-in-out hover:border-[#204bdb] hover:bg-gray-100"
            >
              <h4 className="mb-3 text-lg font-semibold text-[#262e39]">
                Available Currencies for Digital Wallet Solution
              </h4>
              <p className="b2b_link mb-0 mt-6 flex items-center text-sm text-[#91919e] transition-transform duration-300 ease-in-out group-hover:text-[#204bdb]">
                Explore
                <ChevronRightIcon className="ml-2 h-4 w-4 transform transition-transform duration-300 ease-in-out group-hover:translate-x-2" />
              </p>
            </Link>
            <Link
              href="/available-currencies"
              className="short_box block_linksbox_single group mb-4 w-full max-w-33% transform rounded-lg border border-gray-200 p-8 transition-transform duration-300 ease-in-out hover:border-[#204bdb] hover:bg-gray-100"
            >
              <h4 className="mb-3 text-lg font-semibold text-[#262e39]">
                Available Currencies for Blockchain Wallet Solution
              </h4>
              <p className="b2b_link mb-0 mt-6 flex items-center text-sm text-[#91919e] transition-transform duration-300 ease-in-out group-hover:text-[#204bdb]">
                Explore
                <ChevronRightIcon className="ml-2 h-4 w-4 transform transition-transform duration-300 ease-in-out group-hover:translate-x-2" />
              </p>
            </Link>
            <Link
              href="/minimum-deposits-withdrawals"
              className="short_box block_linksbox_single group mb-4 w-full max-w-33% transform rounded-lg border border-gray-200 p-8 transition-transform duration-300 ease-in-out hover:border-[#204bdb] hover:bg-gray-100 "
            >
              <h4 className="mb-3 text-lg font-semibold text-[#262e39]">
                Minimum Deposits recommendations per currency
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
