import Image from 'next/image';
import Link from 'next/link';
import {
  CheckIcon,
  XMarkIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/outline';
import Header from '@/app/ui/_components/Header';
import Footer from '@/app/ui/footer';

import React from 'react';

const CompareSection: React.FC = () => {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <Header />
      <section className="block_compare py-[150px]">
        <div className="container mx-auto">
          <div className="block_compare_top mb-[90px] mt-8 flex items-center justify-start">
            <h2 className="mb-0 mr-[48px] text-[38px] font-semibold leading-[48px]">
              Compare our Solutions
            </h2>
            <div className="block_compare_top_right mt-4 flex items-center">
              <p className="block_compare_top_right_info mr-4">
                Get help choosing.
              </p>
              <Link
                className="b2b_link group flex items-center text-blue-600"
                href="/contact-us/"
              >
                Contact a Specialist
                <ChevronRightIcon className="ml-2 h-4 w-4 transform text-blue-600 transition-transform duration-300 ease-in-out group-hover:translate-x-2" />
              </Link>
            </div>
          </div>
          <div className="block_compare_head flex w-full max-w-full pb-[20px]">
            <div className="block_compare_head_items block_compare_head_item-1 w-full max-w-[232px] pl-[10px] text-[16px] font-normal leading-[24px]">
              <p>Features</p>
            </div>
            <div className="block_compare_head_items block_compare_head_item-2 w-full max-w-[276px] pl-[10px] text-[16px] font-normal leading-[24px]">
              <p> </p>
            </div>
            <div className="block_compare_head_items block_compare_head_item-3 w-full max-w-[152px] pl-[10px] text-center text-[16px] font-normal leading-[24px]">
              <p>Merchant Wallet</p>
            </div>
            <div className="block_compare_head_items block_compare_head_item-4 w-full max-w-[152px] pl-[10px] text-center text-[16px] font-normal leading-[24px]">
              <p>Enterprise Wallet</p>
            </div>
            <div className="block_compare_head_items block_compare_head_item-5 w-full max-w-full pl-[10px] text-[16px] font-normal leading-[24px]">
              <p>Comments</p>
            </div>
          </div>
          <div className="block_compare_table pl-[10px]">
            <div className="block_compare_table_box flex w-full max-w-full border-t border-[#ecedf2] pt-[20px]">
              <div className="block_compare_table_title w-full max-w-[232px]">
                <h4 className="m-0 text-base font-medium leading-6 text-[#1d2127]">
                  Client Type
                </h4>
              </div>
              <div className="block_compare_table_row flex w-full max-w-full flex-col">
                <div className="block_compare_table_row_group flex w-full max-w-full items-start border-b border-[#ecedf2] pb-[20px]">
                  <div className="block_compare_table_row_item block_compare_table_row-1 w-full max-w-[276px]">
                    <p className="pl-4 text-base font-normal leading-6 text-[#3b4048]">
                      Personal
                    </p>
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-2 flex w-full max-w-[152px] justify-center">
                    <XMarkIcon className="h-6 w-6 text-gray-400" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-3 flex w-full max-w-[152px] justify-center">
                    <XMarkIcon className="h-6 w-6 text-gray-400" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-4 flex w-full max-w-full">
                    <p className="pl-4 text-sm font-normal leading-[21px] text-[#5f5f6a]">
                      Account Type for individuals
                    </p>
                  </div>
                </div>
                <div className="block_compare_table_row_group flex w-full max-w-full items-start border-y border-[#ecedf2] py-[20px]">
                  <div className="block_compare_table_row_item block_compare_table_row-1 w-full max-w-[276px]">
                    <p className="pl-4 text-base font-normal leading-6 text-[#3b4048]">
                      Business
                    </p>
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-2 flex w-full max-w-[152px] justify-center">
                    <CheckIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-3 flex w-full max-w-[152px] justify-center">
                    <CheckIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-4 flex w-full max-w-full">
                    <p className="pl-4 text-sm font-normal leading-[21px] text-[#5f5f6a]">
                      Corporate Account Type
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="block_compare_table_box flex w-full max-w-full border-t border-[#ecedf2] pt-[20px]">
              <div className="block_compare_table_title w-full max-w-[232px]">
                <h4 className="m-0 text-base font-medium leading-6 text-[#1d2127]">
                  Models
                </h4>
              </div>
              <div className="block_compare_table_row flex w-full max-w-full flex-col">
                <div className="block_compare_table_row_group flex w-full max-w-full items-start border-b border-[#ecedf2] pb-[20px]">
                  <div className="block_compare_table_row_item block_compare_table_row-1 w-full max-w-[276px]">
                    <p className="pl-4 text-base font-normal leading-6 text-[#3b4048]">
                      Crypto/Crypto
                    </p>
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-2 flex w-full max-w-[152px] justify-center">
                    <CheckIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-3 flex w-full max-w-[152px] justify-center">
                    <CheckIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-4 flex w-full max-w-full">
                    <p className="pl-4 text-sm font-normal leading-[21px] text-[#5f5f6a]">
                      Crypto exchanged to crypto model
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="block_compare_table_box flex w-full max-w-full border-t border-[#ecedf2] pt-[20px]">
              <div className="block_compare_table_title w-full max-w-[232px]">
                <h4 className="m-0 text-base font-medium leading-6 text-[#1d2127]">
                  Settlements
                </h4>
              </div>
              <div className="block_compare_table_row flex w-full max-w-full flex-col">
                <div className="block_compare_table_row_group flex w-full max-w-full items-start border-b border-[#ecedf2] pb-[20px]">
                  <div className="block_compare_table_row_item block_compare_table_row-1 w-full max-w-[276px]">
                    <p className="pl-4 text-base font-normal leading-6 text-[#3b4048]">
                      Crypto
                    </p>
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-2 flex w-full max-w-[152px] justify-center">
                    <CheckIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-3 flex w-full max-w-[152px] justify-center">
                    <CheckIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-4 flex w-full max-w-full">
                    <p className="pl-4 text-sm font-normal leading-[21px] text-[#5f5f6a]">
                      Settlement currency – crypto: coin, stableсoin or token
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="block_compare_table_box flex w-full max-w-full border-t border-[#ecedf2] pt-[20px]">
              <div className="block_compare_table_title w-full max-w-[232px]">
                <h4 className="m-0 text-base font-medium leading-6 text-[#1d2127]">
                  Cryptocurrencies
                </h4>
              </div>
              <div className="block_compare_table_row flex w-full max-w-full flex-col">
                <div className="block_compare_table_row_group flex w-full max-w-full items-start border-b border-[#ecedf2] pb-[20px]">
                  <div className="block_compare_table_row_item block_compare_table_row-1 w-full max-w-[276px]">
                    <p className="pl-4 text-base font-normal leading-6 text-[#3b4048]">
                      Coins
                    </p>
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-2 flex w-full max-w-[152px] justify-center">
                    <XMarkIcon className="h-6 w-6 text-gray-400" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-3 flex w-full max-w-[152px] justify-center">
                    <XMarkIcon className="h-6 w-6 text-gray-400" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-4 flex w-full max-w-full">
                    <p className="pl-4 text-sm font-normal leading-[21px] text-[#5f5f6a]">
                      Major Coins available on the market today{' '}
                    </p>
                  </div>
                </div>
                <div className="block_compare_table_row_group flex w-full max-w-full items-start border-y border-[#ecedf2] py-[20px]">
                  <div className="block_compare_table_row_item block_compare_table_row-1 w-full max-w-[276px]">
                    <p className="pl-4 text-base font-normal leading-6 text-[#3b4048]">
                      Stablecoins
                    </p>
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-2 flex w-full max-w-[152px] justify-center">
                    <CheckIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-3 flex w-full max-w-[152px] justify-center">
                    <CheckIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-4 flex w-full max-w-full">
                    <p className="pl-4 text-sm font-normal leading-[21px] text-[#5f5f6a]">
                      Major Stablecoins available on the market today
                    </p>
                  </div>
                </div>
                <div className="block_compare_table_row_group flex w-full max-w-full items-start border-y border-[#ecedf2] py-[20px]">
                  <div className="block_compare_table_row_item block_compare_table_row-1 w-full max-w-[276px]">
                    <p className="pl-4 text-base font-normal leading-6 text-[#3b4048]">
                      Tokens
                    </p>
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-2 flex w-full max-w-[152px] justify-center">
                    <CheckIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-3 flex w-full max-w-[152px] justify-center">
                    <CheckIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-4 flex w-full max-w-full">
                    <p className="pl-4 text-sm font-normal leading-[21px] text-[#5f5f6a]">
                      Major tokens taken by Capitalisation, Trading Volume,
                      number of Transactions & more
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="block_compare_table_box flex w-full max-w-full border-t border-[#ecedf2] pt-[20px]">
              <div className="block_compare_table_title w-full max-w-[232px]">
                <h4 className="m-0 text-base font-medium leading-6 text-[#1d2127]">
                  Smart Token Collection
                </h4>
              </div>
              <div className="block_compare_table_row flex w-full max-w-full flex-col">
                <div className="block_compare_table_row_group flex w-full max-w-full items-start border-b border-[#ecedf2] pb-[20px]">
                  <div className="block_compare_table_row_item block_compare_table_row-1 w-full max-w-[276px]">
                    <p className="pl-4 text-base font-normal leading-6 text-[#3b4048]">
                      Tokens Smart Funds Collection system
                    </p>
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-2 flex w-full max-w-[152px] justify-center">
                    <XMarkIcon className="h-6 w-6 text-gray-400" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-3 flex w-full max-w-[152px] justify-center">
                    <CheckIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-4 flex w-full max-w-full">
                    <p className="pl-4 text-sm font-normal leading-[21px] text-[#5f5f6a]">
                      STC system used to collect tokens from deposit addresses
                    </p>
                  </div>
                </div>
                <div className="block_compare_table_row_group flex w-full max-w-full items-start border-y border-[#ecedf2] py-[20px]">
                  <div className="block_compare_table_row_item block_compare_table_row-1 w-full max-w-[276px]">
                    <p className="pl-4 text-base font-normal leading-6 text-[#3b4048]">
                      Coins Smart Funds Collection system
                    </p>
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-2 flex w-full max-w-[152px] justify-center">
                    <XMarkIcon className="h-6 w-6 text-gray-400" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-3 flex w-full max-w-[152px] justify-center">
                    <CheckIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-4 flex w-full max-w-full">
                    <p className="pl-4 text-sm font-normal leading-[21px] text-[#5f5f6a]">
                      STC system used to collect coins from deposit addresses
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="block_compare_table_box flex w-full max-w-full border-t border-[#ecedf2] pt-[20px]">
              <div className="block_compare_table_title w-full max-w-[232px]">
                <h4 className="m-0 text-base font-medium leading-6 text-[#1d2127]">
                  Services
                </h4>
              </div>
              <div className="block_compare_table_row flex w-full max-w-full flex-col">
                <div className="block_compare_table_row_group flex w-full max-w-full items-start border-b border-[#ecedf2] pb-[20px]">
                  <div className="block_compare_table_row_item block_compare_table_row-1 w-full max-w-[276px]">
                    <p className="pl-4 text-base font-normal leading-6 text-[#3b4048]">
                      Accept
                    </p>
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-2 flex w-full max-w-[152px] justify-center">
                    <CheckIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-3 flex w-full max-w-[152px] justify-center">
                    <CheckIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-4 flex w-full max-w-full">
                    <p className="pl-4 text-sm font-normal leading-[21px] text-[#5f5f6a]">
                      Accept сryptoсurrency payments
                    </p>
                  </div>
                </div>
                <div className="block_compare_table_row_group flex w-full max-w-full items-start border-y border-[#ecedf2] py-[20px]">
                  <div className="block_compare_table_row_item block_compare_table_row-1 w-full max-w-[276px]">
                    <p className="pl-4 text-base font-normal leading-6 text-[#3b4048]">
                      Send
                    </p>
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-2 flex w-full max-w-[152px] justify-center">
                    <CheckIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-3 flex w-full max-w-[152px] justify-center">
                    <CheckIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-4 flex w-full max-w-full">
                    <p className="pl-4 text-sm font-normal leading-[21px] text-[#5f5f6a]">
                      Send сryptoсurrency payments
                    </p>
                  </div>
                </div>
                <div className="block_compare_table_row_group flex w-full max-w-full items-start border-y border-[#ecedf2] py-[20px]">
                  <div className="block_compare_table_row_item block_compare_table_row-1 w-full max-w-[276px]">
                    <p className="pl-4 text-base font-normal leading-6 text-[#3b4048]">
                      Hold
                    </p>
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-2 flex w-full max-w-[152px] justify-center">
                    <CheckIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-3 flex w-full max-w-[152px] justify-center">
                    <CheckIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-4 flex w-full max-w-full">
                    <p className="pl-4 text-sm font-normal leading-[21px] text-[#5f5f6a]">
                      Save/Hold сryptoсurrency
                    </p>
                  </div>
                </div>
                <div className="block_compare_table_row_group flex w-full max-w-full items-start border-y border-[#ecedf2] py-[20px]">
                  <div className="block_compare_table_row_item block_compare_table_row-1 w-full max-w-[276px]">
                    <p className="pl-4 text-base font-normal leading-6 text-[#3b4048]">
                      Exchange
                    </p>
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-2 flex w-full max-w-[152px] justify-center">
                    <CheckIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-3 flex w-full max-w-[152px] justify-center">
                    <XMarkIcon className="h-6 w-6 text-gray-400" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-4 flex w-full max-w-full">
                    <p className="pl-4 text-sm font-normal leading-[21px] text-[#5f5f6a]">
                      Instant exchange сryptoсurrency of deposits/payouts
                      to/from the wallet
                    </p>
                  </div>
                </div>
                <div className="block_compare_table_row_group flex w-full max-w-full items-start border-y border-[#ecedf2] py-[20px]">
                  <div className="block_compare_table_row_item block_compare_table_row-1 w-full max-w-[276px]">
                    <p className="pl-4 text-base font-normal leading-6 text-[#3b4048]">
                      On-Chain Exchange
                    </p>
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-2 flex w-full max-w-[152px] justify-center">
                    <XMarkIcon className="h-6 w-6 text-gray-400" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-3 flex w-full max-w-[152px] justify-center">
                    <CheckIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-4 flex w-full max-w-full">
                    <p className="pl-4 text-sm font-normal leading-[21px] text-[#5f5f6a]">
                      Actual exchange, two blockchain transfers (send and
                      receive) involved
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="block_compare_table_box flex w-full max-w-full border-t border-[#ecedf2] pt-[20px]">
              <div className="block_compare_table_title w-full max-w-[232px]">
                <h4 className="m-0 text-base font-medium leading-6 text-[#1d2127]">
                  Payouts
                </h4>
              </div>
              <div className="block_compare_table_row flex w-full max-w-full flex-col">
                <div className="block_compare_table_row_group flex w-full max-w-full items-start border-b border-[#ecedf2] pb-[20px]">
                  <div className="block_compare_table_row_item block_compare_table_row-1 w-full max-w-[276px]">
                    <p className="pl-4 text-base font-normal leading-6 text-[#3b4048]">
                      Automatic payouts
                    </p>
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-2 flex w-full max-w-[152px] justify-center">
                    <CheckIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-3 flex w-full max-w-[152px] justify-center">
                    <CheckIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-4 flex w-full max-w-full">
                    <p className="pl-4 text-sm font-normal leading-[21px] text-[#5f5f6a]">
                      Automatic payouts using API
                    </p>
                  </div>
                </div>
                <div className="block_compare_table_row_group flex w-full max-w-full items-start border-y border-[#ecedf2] py-[20px]">
                  <div className="block_compare_table_row_item block_compare_table_row-1 w-full max-w-[276px]">
                    <p className="pl-4 text-base font-normal leading-6 text-[#3b4048]">
                      Payouts with Approval
                    </p>
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-2 flex w-full max-w-[152px] justify-center">
                    <CheckIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-3 flex w-full max-w-[152px] justify-center">
                    <CheckIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-4 flex w-full max-w-full">
                    <p className="pl-4 text-sm font-normal leading-[21px] text-[#5f5f6a]">
                      Payouts that should be triggered only after approval
                    </p>
                  </div>
                </div>
                <div className="block_compare_table_row_group flex w-full max-w-full items-start border-y border-[#ecedf2] py-[20px]">
                  <div className="block_compare_table_row_item block_compare_table_row-1 w-full max-w-[276px]">
                    <p className="pl-4 text-base font-normal leading-6 text-[#3b4048]">
                      Payouts Custom Speed
                    </p>
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-2 flex w-full max-w-[152px] justify-center">
                    <CheckIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-3 flex w-full max-w-[152px] justify-center">
                    <CheckIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-4 flex w-full max-w-full">
                    <p className="pl-4 text-sm font-normal leading-[21px] text-[#5f5f6a]">
                      Fast, Medium, Low & Custom speed configurable payouts
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="block_compare_table_box flex w-full max-w-full border-t border-[#ecedf2] pt-[20px]">
              <div className="block_compare_table_title w-full max-w-[232px]">
                <h4 className="m-0 text-base font-medium leading-6 text-[#1d2127]">
                  Features
                </h4>
              </div>
              <div className="block_compare_table_row flex w-full max-w-full flex-col">
                <div className="block_compare_table_row_group flex w-full max-w-full items-start border-b border-[#ecedf2] pb-[20px]">
                  <div className="block_compare_table_row_item block_compare_table_row-1 w-full max-w-[276px]">
                    <p className="pl-4 text-base font-normal leading-6 text-[#3b4048]">
                      Multilingual Interface
                    </p>
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-2 flex w-full max-w-[152px] justify-center">
                    <CheckIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-3 flex w-full max-w-[152px] justify-center">
                    <CheckIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-4 flex w-full max-w-full">
                    <p className="pl-4 text-sm font-normal leading-[21px] text-[#5f5f6a]">
                      System interface translated into multiple languages
                    </p>
                  </div>
                </div>
                <div className="block_compare_table_row_group flex w-full max-w-full items-start border-y border-[#ecedf2] py-[20px]">
                  <div className="block_compare_table_row_item block_compare_table_row-1 w-full max-w-[276px]">
                    <p className="pl-4 text-base font-normal leading-6 text-[#3b4048]">
                      Role-Based System Access
                    </p>
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-2 flex w-full max-w-[152px] justify-center">
                    <CheckIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-3 flex w-full max-w-[152px] justify-center">
                    <CheckIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-4 flex w-full max-w-full">
                    <p className="pl-4 text-sm font-normal leading-[21px] text-[#5f5f6a]">
                      System access based on roles/groups
                    </p>
                  </div>
                </div>
                <div className="block_compare_table_row_group flex w-full max-w-full items-start border-y border-[#ecedf2] py-[20px]">
                  <div className="block_compare_table_row_item block_compare_table_row-1 w-full max-w-[276px]">
                    <p className="pl-4 text-base font-normal leading-6 text-[#3b4048]">
                      Detailed statistics & Reports
                    </p>
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-2 flex w-full max-w-[152px] justify-center">
                    <CheckIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-3 flex w-full max-w-[152px] justify-center">
                    <CheckIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-4 flex w-full max-w-full">
                    <p className="pl-4 text-sm font-normal leading-[21px] text-[#5f5f6a]">
                      Detailed transactions statistics & downloadable reports in
                      XLSX or CSV formats
                    </p>
                  </div>
                </div>
                <div className="block_compare_table_row_group flex w-full max-w-full items-start border-y border-[#ecedf2] py-[20px]">
                  <div className="block_compare_table_row_item block_compare_table_row-1 w-full max-w-[276px]">
                    <p className="pl-4 text-base font-normal leading-6 text-[#3b4048]">
                      Custom Minimum Transfer Amount
                    </p>
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-2 flex w-full max-w-[152px] justify-center">
                    <CheckIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-3 flex w-full max-w-[152px] justify-center">
                    <CheckIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-4 flex w-full max-w-full">
                    <p className="pl-4 text-sm font-normal leading-[21px] text-[#5f5f6a]">
                      Ability to set minimum accepted/collected amount per
                      currency
                    </p>
                  </div>
                </div>
                <div className="block_compare_table_row_group flex w-full max-w-full items-start border-y border-[#ecedf2] py-[20px]">
                  <div className="block_compare_table_row_item block_compare_table_row-1 w-full max-w-[276px]">
                    <p className="pl-4 text-base font-normal leading-6 text-[#3b4048]">
                      Email Wallets Events Notifications
                    </p>
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-2 flex w-full max-w-[152px] justify-center">
                    <CheckIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-3 flex w-full max-w-[152px] justify-center">
                    <CheckIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-4 flex w-full max-w-full">
                    <p className="pl-4 text-sm font-normal leading-[21px] text-[#5f5f6a]">
                      Email notifications in regards to deposits or payouts
                    </p>
                  </div>
                </div>
                <div className="block_compare_table_row_group flex w-full max-w-full items-start border-y border-[#ecedf2] py-[20px]">
                  <div className="block_compare_table_row_item block_compare_table_row-1 w-full max-w-[276px]">
                    <p className="pl-4 text-base font-normal leading-6 text-[#3b4048]">
                      Wallets Access Rights
                    </p>
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-2 flex w-full max-w-[152px] justify-center">
                    <CheckIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-3 flex w-full max-w-[152px] justify-center">
                    <CheckIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-4 flex w-full max-w-full">
                    <p className="pl-4 text-sm font-normal leading-[21px] text-[#5f5f6a]">
                      Role-based access per wallet
                    </p>
                  </div>
                </div>
                <div className="block_compare_table_row_group flex w-full max-w-full items-start border-y border-[#ecedf2] py-[20px]">
                  <div className="block_compare_table_row_item block_compare_table_row-1 w-full max-w-[276px]">
                    <p className="pl-4 text-base font-normal leading-6 text-[#3b4048]">
                      Real-time exchange rates
                    </p>
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-2 flex w-full max-w-[152px] justify-center">
                    <CheckIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-3 flex w-full max-w-[152px] justify-center">
                    <CheckIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-4 flex w-full max-w-full">
                    <p className="pl-4 text-sm font-normal leading-[21px] text-[#5f5f6a]">
                      Exchange rates in real-time using api or directly from
                      admin area
                    </p>
                  </div>
                </div>
                <div className="block_compare_table_row_group flex w-full max-w-full items-start border-y border-[#ecedf2] py-[20px]">
                  <div className="block_compare_table_row_item block_compare_table_row-1 w-full max-w-[276px]">
                    <p className="pl-4 text-base font-normal leading-6 text-[#3b4048]">
                      Dark & Light Themes
                    </p>
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-2 flex w-full max-w-[152px] justify-center">
                    <CheckIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-3 flex w-full max-w-[152px] justify-center">
                    <CheckIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-4 flex w-full max-w-full">
                    <p className="pl-4 text-sm font-normal leading-[21px] text-[#5f5f6a]">
                      Dark or light admin theme switch
                    </p>
                  </div>
                </div>
                <div className="block_compare_table_row_group flex w-full max-w-full items-start border-y border-[#ecedf2] py-[20px]">
                  <div className="block_compare_table_row_item block_compare_table_row-1 w-full max-w-[276px]">
                    <p className="pl-4 text-base font-normal leading-6 text-[#3b4048]">
                      Alerts system
                    </p>
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-2 flex w-full max-w-[152px] justify-center">
                    <CheckIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-3 flex w-full max-w-[152px] justify-center">
                    <CheckIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-4 flex w-full max-w-full">
                    <p className="pl-4 text-sm font-normal leading-[21px] text-[#5f5f6a]">
                      System Alerts
                    </p>
                  </div>
                </div>
                <div className="block_compare_table_row_group flex w-full max-w-full items-start border-y border-[#ecedf2] py-[20px]">
                  <div className="block_compare_table_row_item block_compare_table_row-1 w-full max-w-[276px]">
                    <p className="pl-4 text-base font-normal leading-6 text-[#3b4048]">
                      Address Book
                    </p>
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-2 flex w-full max-w-[152px] justify-center">
                    <CheckIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-3 flex w-full max-w-[152px] justify-center">
                    <CheckIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-4 flex w-full max-w-full">
                    <p className="pl-4 text-sm font-normal leading-[21px] text-[#5f5f6a]">
                      Address Book for saving addresses for later use
                    </p>
                  </div>
                </div>
                <div className="block_compare_table_row_group flex w-full max-w-full items-start border-y border-[#ecedf2] py-[20px]">
                  <div className="block_compare_table_row_item block_compare_table_row-1 w-full max-w-[276px]">
                    <p className="pl-4 text-base font-normal leading-6 text-[#3b4048]">
                      Custom Labels
                    </p>
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-2 flex w-full max-w-[152px] justify-center">
                    <CheckIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-3 flex w-full max-w-[152px] justify-center">
                    <CheckIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-4 flex w-full max-w-full">
                    <p className="pl-4 text-sm font-normal leading-[21px] text-[#5f5f6a]">
                      Ability to set custom labels per wallet, per currency
                    </p>
                  </div>
                </div>
                <div className="block_compare_table_row_group flex w-full max-w-full items-start border-y border-[#ecedf2] py-[20px]">
                  <div className="block_compare_table_row_item block_compare_table_row-1 w-full max-w-[276px]">
                    <p className="pl-4 text-base font-normal leading-6 text-[#3b4048]">
                      Direct Wallet Deposits
                    </p>
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-2 flex w-full max-w-[152px] justify-center">
                    <XMarkIcon className="h-6 w-6 text-gray-400" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-3 flex w-full max-w-[152px] justify-center">
                    <CheckIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-4 flex w-full max-w-full">
                    <p className="pl-4 text-sm font-normal leading-[21px] text-[#5f5f6a]">
                      Direct depositing option into the wallet to avoid creating
                      invoices
                    </p>
                  </div>
                </div>
                <div className="block_compare_table_row_group flex w-full max-w-full items-start border-y border-[#ecedf2] py-[20px]">
                  <div className="block_compare_table_row_item block_compare_table_row-1 w-full max-w-[276px]">
                    <p className="pl-4 text-base font-normal leading-6 text-[#3b4048]">
                      Tracking IDs
                    </p>
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-2 flex w-full max-w-[152px] justify-center">
                    <CheckIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-3 flex w-full max-w-[152px] justify-center">
                    <CheckIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-4 flex w-full max-w-full">
                    <p className="pl-4 text-sm font-normal leading-[21px] text-[#5f5f6a]">
                      Tracking IDs to identify payer
                    </p>
                  </div>
                </div>
                <div className="block_compare_table_row_group flex w-full max-w-full items-start border-y border-[#ecedf2] py-[20px]">
                  <div className="block_compare_table_row_item block_compare_table_row-1 w-full max-w-[276px]">
                    <p className="pl-4 text-base font-normal leading-6 text-[#3b4048]">
                      Customised number of confirmations
                    </p>
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-2 flex w-full max-w-[152px] justify-center">
                    <CheckIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-3 flex w-full max-w-[152px] justify-center">
                    <CheckIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-4 flex w-full max-w-full">
                    <p className="pl-4 text-sm font-normal leading-[21px] text-[#5f5f6a]">
                      Ability set custom number of confirmations to trigger
                      callbacks
                    </p>
                  </div>
                </div>
                <div className="block_compare_table_row_group flex w-full max-w-full items-start border-y border-[#ecedf2] py-[20px]">
                  <div className="block_compare_table_row_item block_compare_table_row-1 w-full max-w-[276px]">
                    <p className="pl-4 text-base font-normal leading-6 text-[#3b4048]">
                      Customised minimum deposit amount
                    </p>
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-2 flex w-full max-w-[152px] justify-center">
                    <CheckIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-3 flex w-full max-w-[152px] justify-center">
                    <CheckIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-4 flex w-full max-w-full">
                    <p className="pl-4 text-sm font-normal leading-[21px] text-[#5f5f6a]">
                      Ability set custom amount for deposits
                    </p>
                  </div>
                </div>
                <div className="block_compare_table_row_group flex w-full max-w-full items-start border-y border-[#ecedf2] py-[20px]">
                  <div className="block_compare_table_row_item block_compare_table_row-1 w-full max-w-[276px]">
                    <p className="pl-4 text-base font-normal leading-6 text-[#3b4048]">
                      Customised Callbacks
                    </p>
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-2 flex w-full max-w-[152px] justify-center">
                    <CheckIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-3 flex w-full max-w-[152px] justify-center">
                    <CheckIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-4 flex w-full max-w-full">
                    <p className="pl-4 text-sm font-normal leading-[21px] text-[#5f5f6a]">
                      Callback URLs with additional parameters
                    </p>
                  </div>
                </div>
                <div className="block_compare_table_row_group flex w-full max-w-full items-start border-y border-[#ecedf2] py-[20px]">
                  <div className="block_compare_table_row_item block_compare_table_row-1 w-full max-w-[276px]">
                    <p className="pl-4 text-base font-normal leading-6 text-[#3b4048]">
                      Release notes & updates
                    </p>
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-2 flex w-full max-w-[152px] justify-center">
                    <CheckIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-3 flex w-full max-w-[152px] justify-center">
                    <CheckIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-4 flex w-full max-w-full">
                    <p className="pl-4 text-sm font-normal leading-[21px] text-[#5f5f6a]">
                      Latest updates & releases feed
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="block_compare_table_box flex w-full max-w-full border-t border-[#ecedf2] pt-[20px]">
              <div className="block_compare_table_title w-full max-w-[232px]">
                <h4 className="m-0 text-base font-medium leading-6 text-[#1d2127]">
                  Security
                </h4>
              </div>
              <div className="block_compare_table_row flex w-full max-w-full flex-col">
                <div className="block_compare_table_row_group flex w-full max-w-full items-start border-b border-[#ecedf2] pb-[20px]">
                  <div className="block_compare_table_row_item block_compare_table_row-1 w-full max-w-[276px]">
                    <p className="pl-4 text-base font-normal leading-6 text-[#3b4048]">
                      2FA
                    </p>
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-2 flex w-full max-w-[152px] justify-center">
                    <CheckIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-3 flex w-full max-w-[152px] justify-center">
                    <CheckIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-4 flex w-full max-w-full">
                    <p className="pl-4 text-sm font-normal leading-[21px] text-[#5f5f6a]">
                      Two Factor Authentication option
                    </p>
                  </div>
                </div>
                <div className="block_compare_table_row_group flex w-full max-w-full items-start border-y border-[#ecedf2] py-[20px]">
                  <div className="block_compare_table_row_item block_compare_table_row-1 w-full max-w-[276px]">
                    <p className="pl-4 text-base font-normal leading-6 text-[#3b4048]">
                      DDos Protection
                    </p>
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-2 flex w-full max-w-[152px] justify-center">
                    <CheckIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-3 flex w-full max-w-[152px] justify-center">
                    <CheckIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-4 flex w-full max-w-full">
                    <p className="pl-4 text-sm font-normal leading-[21px] text-[#5f5f6a]">
                      Protection against DDos attacks
                    </p>
                  </div>
                </div>
                <div className="block_compare_table_row_group flex w-full max-w-full items-start border-y border-[#ecedf2] py-[20px]">
                  <div className="block_compare_table_row_item block_compare_table_row-1 w-full max-w-[276px]">
                    <p className="pl-4 text-base font-normal leading-6 text-[#3b4048]">
                      Notification System
                    </p>
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-2 flex w-full max-w-[152px] justify-center">
                    <CheckIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-3 flex w-full max-w-[152px] justify-center">
                    <CheckIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-4 flex w-full max-w-full">
                    <p className="pl-4 text-sm font-normal leading-[21px] text-[#5f5f6a]">
                      Events/Notification system when some action needed to be
                      taken
                    </p>
                  </div>
                </div>
                <div className="block_compare_table_row_group flex w-full max-w-full items-start border-y border-[#ecedf2] py-[20px]">
                  <div className="block_compare_table_row_item block_compare_table_row-1 w-full max-w-[276px]">
                    <p className="pl-4 text-base font-normal leading-6 text-[#3b4048]">
                      Wallet activity monitoring
                    </p>
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-2 flex w-full max-w-[152px] justify-center">
                    <CheckIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-3 flex w-full max-w-[152px] justify-center">
                    <CheckIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-4 flex w-full max-w-full">
                    <p className="pl-4 text-sm font-normal leading-[21px] text-[#5f5f6a]">
                      Operation list history under the wallet
                    </p>
                  </div>
                </div>
                <div className="block_compare_table_row_group flex w-full max-w-full items-start border-y border-[#ecedf2] py-[20px]">
                  <div className="block_compare_table_row_item block_compare_table_row-1 w-full max-w-[276px]">
                    <p className="pl-4 text-base font-normal leading-6 text-[#3b4048]">
                      Authorisation logging
                    </p>
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-2 flex w-full max-w-[152px] justify-center">
                    <CheckIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-3 flex w-full max-w-[152px] justify-center">
                    <CheckIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-4 flex w-full max-w-full">
                    <p className="pl-4 text-sm font-normal leading-[21px] text-[#5f5f6a]">
                      Authorisation logging list
                    </p>
                  </div>
                </div>
                <div className="block_compare_table_row_group flex w-full max-w-full items-start border-y border-[#ecedf2] py-[20px]">
                  <div className="block_compare_table_row_item block_compare_table_row-1 w-full max-w-[276px]">
                    <p className="pl-4 text-base font-normal leading-6 text-[#3b4048]">
                      AML/KYT
                    </p>
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-2 flex w-full max-w-[152px] justify-center">
                    <CheckIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-3 flex w-full max-w-[152px] justify-center">
                    <CheckIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-4 flex w-full max-w-full">
                    <p className="pl-4 text-sm font-normal leading-[21px] text-[#5f5f6a]">
                      Know Your Transaction check to identify fraudulent
                      transactions
                    </p>
                  </div>
                </div>
                <div className="block_compare_table_row_group flex w-full max-w-full items-start border-y border-[#ecedf2] py-[20px]">
                  <div className="block_compare_table_row_item block_compare_table_row-1 w-full max-w-[276px]">
                    <p className="pl-4 text-base font-normal leading-6 text-[#3b4048]">
                      Secure fund storage
                    </p>
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-2 flex w-full max-w-[152px] justify-center">
                    <CheckIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-3 flex w-full max-w-[152px] justify-center">
                    <CheckIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-4 flex w-full max-w-full">
                    <p className="pl-4 text-sm font-normal leading-[21px] text-[#5f5f6a]">
                      Secure crypto storage/cold storage
                    </p>
                  </div>
                </div>
                <div className="block_compare_table_row_group flex w-full max-w-full items-start border-y border-[#ecedf2] py-[20px]">
                  <div className="block_compare_table_row_item block_compare_table_row-1 w-full max-w-[276px]">
                    <p className="pl-4 text-base font-normal leading-6 text-[#3b4048]">
                      Security Patches & Updates
                    </p>
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-2 flex w-full max-w-[152px] justify-center">
                    <CheckIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-3 flex w-full max-w-[152px] justify-center">
                    <CheckIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-4 flex w-full max-w-full">
                    <p className="pl-4 text-sm font-normal leading-[21px] text-[#5f5f6a]">
                      Frequent nodes updates and monitoring
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="block_compare_table_box flex w-full max-w-full border-t border-[#ecedf2] pt-[20px]">
              <div className="block_compare_table_title w-full max-w-[232px]">
                <h4 className="m-0 text-base font-medium leading-6 text-[#1d2127]">
                  Invoices
                </h4>
              </div>
              <div className="block_compare_table_row flex w-full max-w-full flex-col">
                <div className="block_compare_table_row_group flex w-full max-w-full items-start border-b border-[#ecedf2] pb-[20px]">
                  <div className="block_compare_table_row_item block_compare_table_row-1 w-full max-w-[276px]">
                    <p className="pl-4 text-base font-normal leading-6 text-[#3b4048]">
                      CoinsBuy Payment Page/Invoice
                    </p>
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-2 flex w-full max-w-[152px] justify-center">
                    <CheckIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-3 flex w-full max-w-[152px] justify-center">
                    <CheckIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-4 flex w-full max-w-full">
                    <p className="pl-4 text-sm font-normal leading-[21px] text-[#5f5f6a]">
                      Invoice generated on CoinsBuy side
                    </p>
                  </div>
                </div>
                <div className="block_compare_table_row_group flex w-full max-w-full items-start border-y border-[#ecedf2] py-[20px]">
                  <div className="block_compare_table_row_item block_compare_table_row-1 w-full max-w-[276px]">
                    <p className="pl-4 text-base font-normal leading-6 text-[#3b4048]">
                      Custom Payment Page/Invoice
                    </p>
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-2 flex w-full max-w-[152px] justify-center">
                    <CheckIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-3 flex w-full max-w-[152px] justify-center">
                    <CheckIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-4 flex w-full max-w-full">
                    <p className="pl-4 text-sm font-normal leading-[21px] text-[#5f5f6a]">
                      Invoice generated on client’s side
                    </p>
                  </div>
                </div>
                <div className="block_compare_table_row_group flex w-full max-w-full items-start border-y border-[#ecedf2] py-[20px]">
                  <div className="block_compare_table_row_item block_compare_table_row-1 w-full max-w-[276px]">
                    <p className="pl-4 text-base font-normal leading-6 text-[#3b4048]">
                      Real-time transaction monitor
                    </p>
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-2 flex w-full max-w-[152px] justify-center">
                    <CheckIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-3 flex w-full max-w-[152px] justify-center">
                    <CheckIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-4 flex w-full max-w-full">
                    <p className="pl-4 text-sm font-normal leading-[21px] text-[#5f5f6a]">
                      Real-time check for transactions statuses
                    </p>
                  </div>
                </div>
                <div className="block_compare_table_row_group flex w-full max-w-full items-start border-y border-[#ecedf2] py-[20px]">
                  <div className="block_compare_table_row_item block_compare_table_row-1 w-full max-w-[276px]">
                    <p className="pl-4 text-base font-normal leading-6 text-[#3b4048]">
                      Select payment currency from the list
                    </p>
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-2 flex w-full max-w-[152px] justify-center">
                    <CheckIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-3 flex w-full max-w-[152px] justify-center">
                    <XMarkIcon className="h-6 w-6 text-gray-400" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-4 flex w-full max-w-full">
                    <p className="pl-4 text-sm font-normal leading-[21px] text-[#5f5f6a]">
                      Possibility to select payment currencies on the CoinsBuy
                      payment page
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="block_compare_table_box flex w-full max-w-full border-t border-[#ecedf2] pt-[20px]">
              <div className="block_compare_table_title w-full max-w-[232px]">
                <h4 className="m-0 text-base font-medium leading-6 text-[#1d2127]">
                  Integration
                </h4>
              </div>
              <div className="block_compare_table_row flex w-full max-w-full flex-col">
                <div className="block_compare_table_row_group flex w-full max-w-full items-start border-b border-[#ecedf2] pb-[20px]">
                  <div className="block_compare_table_row_item block_compare_table_row-1 w-full max-w-[276px]">
                    <p className="pl-4 text-base font-normal leading-6 text-[#3b4048]">
                      API
                    </p>
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-2 flex w-full max-w-[152px] justify-center">
                    <CheckIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-3 flex w-full max-w-[152px] justify-center">
                    <CheckIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-4 flex w-full max-w-full">
                    <p className="pl-4 text-sm font-normal leading-[21px] text-[#5f5f6a]">
                      Feature-reach API
                    </p>
                  </div>
                </div>
                <div className="block_compare_table_row_group flex w-full max-w-full items-start border-y border-[#ecedf2] py-[20px]">
                  <div className="block_compare_table_row_item block_compare_table_row-1 w-full max-w-[276px]">
                    <p className="pl-4 text-base font-normal leading-6 text-[#3b4048]">
                      Guides & Documentation
                    </p>
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-2 flex w-full max-w-[152px] justify-center">
                    <CheckIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-3 flex w-full max-w-[152px] justify-center">
                    <CheckIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-4 flex w-full max-w-full">
                    <p className="pl-4 text-sm font-normal leading-[21px] text-[#5f5f6a]">
                      Guides on how the system works, integration examples
                    </p>
                  </div>
                </div>
                <div className="block_compare_table_row_group flex w-full max-w-full items-start border-y border-[#ecedf2] py-[20px]">
                  <div className="block_compare_table_row_item block_compare_table_row-1 w-full max-w-[276px]">
                    <p className="pl-4 text-base font-normal leading-6 text-[#3b4048]">
                      Full white-label integration
                    </p>
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-2 flex w-full max-w-[152px] justify-center">
                    <CheckIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-3 flex w-full max-w-[152px] justify-center">
                    <CheckIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-4 flex w-full max-w-full">
                    <p className="pl-4 text-sm font-normal leading-[21px] text-[#5f5f6a]">
                      Integration made on client side without even showing
                      CoinsBuy branding
                    </p>
                  </div>
                </div>
                <div className="block_compare_table_row_group flex w-full max-w-full items-start border-y border-[#ecedf2] py-[20px]">
                  <div className="block_compare_table_row_item block_compare_table_row-1 w-full max-w-[276px]">
                    <p className="pl-4 text-base font-normal leading-6 text-[#3b4048]">
                      Sandbox Account
                    </p>
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-2 flex w-full max-w-[152px] justify-center">
                    <CheckIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-3 flex w-full max-w-[152px] justify-center">
                    <XMarkIcon className="h-6 w-6 text-gray-400" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-4 flex w-full max-w-full">
                    <p className="pl-4 text-sm font-normal leading-[21px] text-[#5f5f6a]">
                      Test account to play with before going live
                    </p>
                  </div>
                </div>
              </div>
            </div>{' '}
            <div className="block_compare_table_box flex w-full max-w-full border-t border-[#ecedf2] pt-[20px]">
              <div className="block_compare_table_title w-full max-w-[232px]">
                <h4 className="m-0 text-base font-medium leading-6 text-[#1d2127]">
                  Support
                </h4>
              </div>
              <div className="block_compare_table_row flex w-full max-w-full flex-col">
                <div className="block_compare_table_row_group flex w-full max-w-full items-start border-b border-[#ecedf2] pb-[20px]">
                  <div className="block_compare_table_row_item block_compare_table_row-1 w-full max-w-[276px]">
                    <p className="pl-4 text-base font-normal leading-6 text-[#3b4048]">
                      24/7 Technical Support
                    </p>
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-2 flex w-full max-w-[152px] justify-center">
                    <CheckIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-3 flex w-full max-w-[152px] justify-center">
                    <CheckIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-4 flex w-full max-w-full">
                    <p className="pl-4 text-sm font-normal leading-[21px] text-[#5f5f6a]">
                      Technical support available 24/7
                    </p>
                  </div>
                </div>
                <div className="block_compare_table_row_group flex w-full max-w-full items-start border-y border-[#ecedf2] py-[20px]">
                  <div className="block_compare_table_row_item block_compare_table_row-1 w-full max-w-[276px]">
                    <p className="pl-4 text-base font-normal leading-6 text-[#3b4048]">
                      Personal Account Manager
                    </p>
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-2 flex w-full max-w-[152px] justify-center">
                    <CheckIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-3 flex w-full max-w-[152px] justify-center">
                    <CheckIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="block_compare_table_row_item block_compare_table_row-4 flex w-full max-w-full">
                    <p className="pl-4 text-sm font-normal leading-[21px] text-[#5f5f6a]">
                      Personal account manager who will guide you through all
                      the processes
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="block_linksbox_section white_section pb-[150px] pt-0">
        <div className="container mx-auto w-full max-w-[1356px]">
          <div className="block_linksbox block_linksbox_alignstart flex w-full flex-wrap justify-center gap-9">
            <Link
              href="/available-currencies"
              className="short_box block_linksbox_single group mb-4 w-full max-w-33% transform rounded-lg border border-gray-200 p-8 transition-transform duration-300 ease-in-out hover:border-[#204bdb] hover:bg-gray-100"
            >
              <h4 className="mb-3 text-lg font-semibold text-[#262e39]">
                Available Currencies
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
    </main>
  );
};

export default CompareSection;
