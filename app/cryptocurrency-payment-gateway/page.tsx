import Image from 'next/image';
import Link from 'next/link';
import { CheckIcon, XMarkIcon } from '@heroicons/react/24/outline';
import Header from '@/app/ui/_components/Header';
import Footer from '@/app/ui/footer';
import { Button } from '@/app/ui/button';
import dataSliderCryptocurrencyMerchantDigitalWallets from '@/app/ui/_data/SliderCryptocurrencyMerchantDigitalWallets.json';
import SliderCryptocurrencyMerchantDigitalWallets from '@/app/ui/_components/SliderCryptocurrencyMerchantDigitalWallets';
import dataSliderCryptoPaymentServiceProvider from '@/app/ui/_data/SliderCryptoPaymentServiceProvider.json';
import SliderCryptoPaymentServiceProvider from '@/app/ui/_components/SliderCryptoPaymentServiceProvider';
import CryptocurrencyOutstandingFeatures from '@/app/ui/_components/CryptocurrencyOutstandingFeatures';
import CryptocurrencyMerchantDigitalWalletsPaymentPage from '@/app/ui/_data/CryptocurrencyMerchantDigitalWalletsPaymentPage.json';

const CryptoCurrencyPaymentGateway = () => {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col p-6">
        <section className="block_hero white_section py-[150px]">
          <div className="container mx-auto w-full max-w-[1356px] p-0">
            <div className="block_hero_row z-2 relative flex items-center justify-between">
              <div className="block_hero_row_text_box w-full max-w-[544px]">
                <h1 className="mb-8 text-[48px] font-bold leading-[69px]">
                  Merchant Digital Wallets
                </h1>
                <h4 className="section_description mt-4 text-lg">
                  A solution enabling businesses to accept crypto payments in
                  all major coins and exchange it all into Coins or Stablecoins.
                </h4>
                <Link
                  className="b2b-btn-arrow external_links_checked mt-14 mt-4 inline-block text-blue-500 hover:underline"
                  target="_blank"
                  href="http://coinsfish.com/login"
                  rel="noopener noreferrer"
                >
                  <Button>Open Account</Button>

                  <svg
                    width="6"
                    height="10"
                    viewBox="0 0 6 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-2 inline-block"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5.59491 5.856C6.01714 5.46083 6.01714 4.79096 5.59492 4.39579L2.13024 1.15308C1.83566 0.877377 1.37774 0.877377 1.08317 1.15308C0.759918 1.45562 0.759639 1.96837 1.08256 2.27126L4.12595 5.1259L1.08256 7.98053C0.75964 8.28342 0.759918 8.79617 1.08317 9.09871C1.37774 9.37442 1.83566 9.37442 2.13024 9.09871L5.59491 5.856Z"
                      fill="#F3F3F3"
                    />
                  </svg>
                </Link>
              </div>
              <div className="block_hero_row_image_box max-w-[660px] p-4">
                <Image
                  className="lazy aspect-[413/269] h-[500px] w-full"
                  decoding="async"
                  priority={true}
                  src="/svg/Main-Screen_Merchants.svg"
                  alt="Main Screen Merchants"
                  title="Main Screen Merchants"
                  width={0}
                  height={0}
                />
              </div>
            </div>
          </div>
          <div className="container mx-auto w-full max-w-[1356px] p-0">
            <SliderCryptocurrencyMerchantDigitalWallets
              data={dataSliderCryptocurrencyMerchantDigitalWallets}
            />
          </div>
        </section>{' '}
        <section className="block_scheme_list white_section pb-[150px]">
          <div className="container mx-auto w-full max-w-[1356px] p-0">
            <h2 className="mb-4 text-4xl font-bold">Perfectly works with</h2>
            <div className="block_scheme_list_items -mx-4 mb-[89px] flex flex-wrap justify-between">
              <p className="relative mx-[15px] my-[5px] rounded pl-6 before:absolute before:left-0 before:top-1/2 before:h-[1px] before:w-full before:max-w-[14px] before:-translate-y-1/2 before:transform before:bg-[#4744f4]">
                Forex &amp; Crypto Brokers
              </p>
              <p className="relative mx-[15px] my-[5px] rounded pl-6 before:absolute before:left-0 before:top-1/2 before:h-[1px] before:w-full before:max-w-[14px] before:-translate-y-1/2 before:transform before:bg-[#4744f4]">
                Marketplaces
              </p>
              <p className="relative mx-[15px] my-[5px] rounded pl-6 before:absolute before:left-0 before:top-1/2 before:h-[1px] before:w-full before:max-w-[14px] before:-translate-y-1/2 before:transform before:bg-[#4744f4]">
                Service Providers
              </p>
              <p className="relative mx-[15px] my-[5px] rounded pl-6 before:absolute before:left-0 before:top-1/2 before:h-[1px] before:w-full before:max-w-[14px] before:-translate-y-1/2 before:transform before:bg-[#4744f4]">
                Gaming
              </p>
              <p className="relative mx-[15px] my-[5px] rounded pl-6 before:absolute before:left-0 before:top-1/2 before:h-[1px] before:w-full before:max-w-[14px] before:-translate-y-1/2 before:transform before:bg-[#4744f4]">
                Regulated Gambling
              </p>
              <p className="relative mx-[15px] my-[5px] rounded pl-6 before:absolute before:left-0 before:top-1/2 before:h-[1px] before:w-full before:max-w-[14px] before:-translate-y-1/2 before:transform before:bg-[#4744f4]">
                Consulting
              </p>
              <p className="relative mx-[15px] my-[5px] rounded pl-6 before:absolute before:left-0 before:top-1/2 before:h-[1px] before:w-full before:max-w-[14px] before:-translate-y-1/2 before:transform before:bg-[#4744f4]">
                E-commerce
              </p>
            </div>
            <div className="svg_scheme flex justify-center">
              <div className="svg_scheme_container resize-v2-wrapper">
                <Image
                  className="lazy resize-v2 m-w-full w-full"
                  decoding="async"
                  loading="lazy"
                  priority={false}
                  sizes="100vw"
                  src="/svg/Perfectly-works-with_merchants-1.svg"
                  alt="Perfectly works with merchants"
                  width={0}
                  height={0}
                />
              </div>
            </div>
          </div>
        </section>{' '}
        <section className="block_crypto_card white_section pb-[150px]">
          <div className="container mx-auto w-full w-full max-w-[1356px] p-0">
            <div className="section_top_parth mb-[90px] w-full max-w-[580px]">
              <h2 className="leading-12 mb-8 text-3xl font-bold">
                Crypto vs Cards/Fiat
              </h2>
              <p className="section_top_parth_description text-base font-normal leading-7">
                Crypto payments have many advantages compared with traditional
                Fiat payment methods. See the facts for yourself!
              </p>
            </div>
          </div>
          <div className="container mx-auto w-full w-full max-w-[1356px] p-0">
            <div className="block_crypto_card_table">
              <div className="block_crypto_card_table_thead flex border-b border-[#204bdb] p-[14px] text-sm font-normal leading-[22px] text-[#3d3d3d]">
                <div className="block_crypto_card_table_item first:max-w-1/2 flex items-center first:w-full first:justify-start">
                  <p className="dark:text-slate-400">Features</p>
                </div>
                <div className="block_crypto_card_table_item flex w-full max-w-[18%] justify-center">
                  <p className="dark:text-slate-400">Major Coins</p>
                </div>
                <div className="block_crypto_card_table_item flex w-full max-w-[18%] justify-center">
                  <p className="dark:text-slate-400">Stablecoins</p>
                </div>
                <div className="block_crypto_card_table_item flex w-full max-w-[18%] justify-center">
                  <p className="dark:text-slate-400">Fiat Payments</p>
                </div>
              </div>
              <div className="block_crypto_card_table_trow flex justify-between border-b border-[#ddd] p-[20px_14px]">
                <div className="block_crypto_card_table_item first:max-w-1/2 first:w-full first:justify-start">
                  <p className="text-base font-medium leading-[26px] text-[#1d2127] dark:text-slate-100 dark:text-slate-100">
                    Decentralisation
                  </p>
                </div>
                <div className="block_crypto_card_table_item flex w-full max-w-[18%] items-center justify-center">
                  <div className="block_crypto_card_table_item_blured_icon">
                    <CheckIcon className="h-6 w-6 text-blue-500 dark:text-sky-400 dark:text-sky-400" />
                  </div>
                </div>
                <div className="block_crypto_card_table_item flex w-full max-w-[18%] items-center justify-center">
                  <div className="block_crypto_card_table_item_blured_icon">
                    <XMarkIcon className="h-6 w-6 text-gray-500 dark:text-slate-100" />
                  </div>
                </div>
                <div className="block_crypto_card_table_item relative flex w-full max-w-[18%] items-center justify-center">
                  <div className="block_crypto_card_table_item_blured_icon">
                    <XMarkIcon className="h-6 w-6 text-gray-500 dark:text-slate-100" />
                  </div>
                </div>
              </div>{' '}
              <div className="block_crypto_card_table_trow flex justify-between border-b border-[#ddd] p-[20px_14px]">
                <div className="block_crypto_card_table_item first:max-w-1/2 first:w-full first:justify-start">
                  <p className="text-base font-medium leading-[26px] text-[#1d2127] dark:text-slate-100">
                    Fast and Secure
                  </p>
                </div>
                <div className="block_crypto_card_table_item relative flex w-full max-w-[18%] items-center justify-center">
                  <div className="block_crypto_card_table_item_blured_icon">
                    <CheckIcon className="h-6 w-6 text-blue-500 dark:text-sky-400" />
                  </div>
                </div>
                <div className="block_crypto_card_table_item relative flex w-full max-w-[18%] items-center justify-center">
                  <div className="block_crypto_card_table_item_blured_icon">
                    <CheckIcon className="h-6 w-6 text-blue-500 dark:text-sky-400" />
                  </div>
                </div>
                <div className="block_crypto_card_table_item relative flex w-full max-w-[18%] items-center justify-center">
                  <div className="block_crypto_card_table_item_blured_icon">
                    <CheckIcon className="h-6 w-6 text-blue-500 dark:text-sky-400" />
                  </div>
                </div>
              </div>{' '}
              <div className="block_crypto_card_table_trow flex justify-between border-b border-[#ddd] p-[20px_14px]">
                <div className="block_crypto_card_table_item first:max-w-1/2 first:w-full first:justify-start">
                  <p className="text-base font-medium leading-[26px] text-[#1d2127] dark:text-slate-100">
                    No Rolling Reserve
                  </p>
                </div>
                <div className="block_crypto_card_table_item relative flex w-full max-w-[18%] items-center justify-center">
                  <div className="block_crypto_card_table_item_blured_icon">
                    <CheckIcon className="h-6 w-6 text-blue-500 dark:text-sky-400" />
                  </div>
                </div>
                <div className="block_crypto_card_table_item relative flex w-full max-w-[18%] items-center justify-center">
                  <div className="block_crypto_card_table_item_blured_icon">
                    <CheckIcon className="h-6 w-6 text-blue-500 dark:text-sky-400" />
                  </div>
                </div>
                <div className="block_crypto_card_table_item relative flex w-full max-w-[18%] items-center justify-center">
                  <div className="block_crypto_card_table_item_blured_icon">
                    <XMarkIcon className="h-6 w-6 text-gray-500 dark:text-slate-100" />
                  </div>
                </div>
              </div>{' '}
              <div className="block_crypto_card_table_trow flex justify-between border-b border-[#ddd] p-[20px_14px]">
                <div className="block_crypto_card_table_item first:max-w-1/2 first:w-full first:justify-start">
                  <p className="text-base font-medium leading-[26px] text-[#1d2127] dark:text-slate-100">
                    Low Cost
                  </p>
                </div>
                <div className="block_crypto_card_table_item relative flex w-full max-w-[18%] items-center justify-center">
                  <div className="block_crypto_card_table_item_blured_icon">
                    <CheckIcon className="h-6 w-6 text-blue-500 dark:text-sky-400" />
                  </div>
                </div>
                <div className="block_crypto_card_table_item relative flex w-full max-w-[18%] items-center justify-center">
                  <div className="block_crypto_card_table_item_blured_icon">
                    <CheckIcon className="h-6 w-6 text-blue-500 dark:text-sky-400" />
                  </div>
                </div>
                <div className="block_crypto_card_table_item relative flex w-full max-w-[18%] items-center justify-center">
                  <div className="block_crypto_card_table_item_blured_icon">
                    <XMarkIcon className="h-6 w-6 text-gray-500 dark:text-slate-100" />
                  </div>
                </div>
              </div>{' '}
              <div className="block_crypto_card_table_trow flex justify-between border-b border-[#ddd] p-[20px_14px]">
                <div className="block_crypto_card_table_item first:max-w-1/2 first:w-full first:justify-start">
                  <p className="text-base font-medium leading-[26px] text-[#1d2127] dark:text-slate-100">
                    Easy Account Opening
                  </p>
                </div>
                <div className="block_crypto_card_table_item relative flex w-full max-w-[18%] items-center justify-center">
                  <div className="block_crypto_card_table_item_blured_icon">
                    <CheckIcon className="h-6 w-6 text-blue-500 dark:text-sky-400" />
                  </div>
                </div>
                <div className="block_crypto_card_table_item relative flex w-full max-w-[18%] items-center justify-center">
                  <div className="block_crypto_card_table_item_blured_icon">
                    <CheckIcon className="h-6 w-6 text-blue-500 dark:text-sky-400" />
                  </div>
                </div>
                <div className="block_crypto_card_table_item relative flex w-full max-w-[18%] items-center justify-center">
                  <div className="block_crypto_card_table_item_blured_icon">
                    <XMarkIcon className="h-6 w-6 text-gray-500 dark:text-slate-100" />
                  </div>
                </div>
              </div>{' '}
              <div className="block_crypto_card_table_trow flex justify-between border-b border-[#ddd] p-[20px_14px]">
                <div className="block_crypto_card_table_item first:max-w-1/2 first:w-full first:justify-start">
                  <p className="text-base font-medium leading-[26px] text-[#1d2127] dark:text-slate-100">
                    Transparency
                  </p>
                </div>
                <div className="block_crypto_card_table_item relative flex w-full max-w-[18%] items-center justify-center">
                  <div className="block_crypto_card_table_item_blured_icon">
                    <CheckIcon className="h-6 w-6 text-blue-500 dark:text-sky-400" />
                  </div>
                </div>
                <div className="block_crypto_card_table_item relative flex w-full max-w-[18%] items-center justify-center">
                  <div className="block_crypto_card_table_item_blured_icon">
                    <CheckIcon className="h-6 w-6 text-blue-500 dark:text-sky-400" />
                  </div>
                </div>
                <div className="block_crypto_card_table_item relative flex w-full max-w-[18%] items-center justify-center">
                  <div className="block_crypto_card_table_item_blured_icon">
                    <XMarkIcon className="h-6 w-6 text-blue-500 dark:text-sky-400" />
                  </div>
                </div>
              </div>{' '}
              <div className="block_crypto_card_table_trow flex justify-between border-b border-[#ddd] p-[20px_14px]">
                <div className="block_crypto_card_table_item first:max-w-1/2 first:w-full first:justify-start">
                  <p className="text-base font-medium leading-[26px] text-[#1d2127] dark:text-slate-100">
                    Fast Settlement
                  </p>
                </div>
                <div className="block_crypto_card_table_item relative flex w-full max-w-[18%] items-center justify-center">
                  <div className="block_crypto_card_table_item_blured_icon">
                    <CheckIcon className="h-6 w-6 text-gray-500 dark:text-slate-100" />
                  </div>
                </div>
                <div className="block_crypto_card_table_item relative flex w-full max-w-[18%] items-center justify-center">
                  <div className="block_crypto_card_table_item_blured_icon">
                    <CheckIcon className="h-6 w-6 text-blue-500 dark:text-sky-400" />
                  </div>
                </div>
                <div className="block_crypto_card_table_item relative flex w-full max-w-[18%] items-center justify-center">
                  <div className="block_crypto_card_table_item_blured_icon">
                    <XMarkIcon className="h-6 w-6 text-gray-500 dark:text-slate-100" />
                  </div>
                </div>
              </div>{' '}
              <div className="block_crypto_card_table_trow flex justify-between border-b border-[#ddd] p-[20px_14px]">
                <div className="block_crypto_card_table_item first:max-w-1/2 first:w-full first:justify-start">
                  <p className="text-base font-medium leading-[26px] text-[#1d2127] dark:text-slate-100">
                    No Risk of Fraud Card Usage
                  </p>
                </div>
                <div className="block_crypto_card_table_item relative flex w-full max-w-[18%] items-center justify-center">
                  <div className="block_crypto_card_table_item_blured_icon">
                    <CheckIcon className="h-6 w-6 text-blue-500 dark:text-sky-400" />
                  </div>
                </div>
                <div className="block_crypto_card_table_item relative flex w-full max-w-[18%] items-center justify-center">
                  <div className="block_crypto_card_table_item_blured_icon">
                    <CheckIcon className="h-6 w-6 text-blue-500 dark:text-sky-400" />
                  </div>
                </div>
                <div className="block_crypto_card_table_item relative flex w-full max-w-[18%] items-center justify-center">
                  <div className="block_crypto_card_table_item_blured_icon">
                    <XMarkIcon className="h-6 w-6 text-gray-500 dark:text-slate-100" />
                  </div>
                </div>
              </div>{' '}
              <div className="block_crypto_card_table_trow flex justify-between border-b border-[#ddd] p-[20px_14px]">
                <div className="block_crypto_card_table_item first:max-w-1/2 first:w-full first:justify-start">
                  <p className="text-base font-medium leading-[26px] text-[#1d2127] dark:text-slate-100">
                    Instant Payouts
                  </p>
                </div>
                <div className="block_crypto_card_table_item relative flex w-full max-w-[18%] items-center justify-center">
                  <div className="block_crypto_card_table_item_blured_icon">
                    <CheckIcon className="h-6 w-6 text-blue-500 dark:text-sky-400" />
                  </div>
                </div>
                <div className="block_crypto_card_table_item relative flex w-full max-w-[18%] items-center justify-center">
                  <div className="block_crypto_card_table_item_blured_icon">
                    <CheckIcon className="h-6 w-6 text-blue-500 dark:text-sky-400" />
                  </div>
                </div>
                <div className="block_crypto_card_table_item relative flex w-full max-w-[18%] flex-nowrap items-center justify-center">
                  <div className="block_crypto_card_table_item_blured_icon flex items-center">
                    <CheckIcon className="h-6 w-6 text-blue-500 dark:text-sky-400" />{' '}
                    /{' '}
                    <XMarkIcon className="h-6 w-6 text-gray-500 dark:text-slate-100" />
                  </div>
                </div>
              </div>{' '}
              <div className="block_crypto_card_table_trow flex justify-between border-b border-[#ddd] p-[20px_14px]">
                <div className="block_crypto_card_table_item first:max-w-1/2 first:w-full first:justify-start">
                  <p className="text-base font-medium leading-[26px] text-[#1d2127] dark:text-slate-100">
                    No Volatility Risks
                  </p>
                </div>
                <div className="block_crypto_card_table_item relative flex w-full max-w-[18%] items-center justify-center">
                  <div className="block_crypto_card_table_item_blured_icon">
                    <XMarkIcon className="h-6 w-6 text-gray-500 dark:text-slate-100" />
                  </div>
                </div>
                <div className="block_crypto_card_table_item relative flex w-full max-w-[18%] items-center justify-center">
                  <div className="block_crypto_card_table_item_blured_icon">
                    <CheckIcon className="h-6 w-6 text-blue-500 dark:text-sky-400" />
                  </div>
                </div>
                <div className="block_crypto_card_table_item relative flex w-full max-w-[18%] items-center justify-center">
                  <div className="block_crypto_card_table_item_blured_icon">
                    <CheckIcon className="h-6 w-6 text-blue-500 dark:text-sky-400" />
                  </div>
                </div>
              </div>{' '}
              <div className="block_crypto_card_table_trow flex justify-between border-b border-[#ddd] p-[20px_14px]">
                <div className="block_crypto_card_table_item first:max-w-1/2 first:w-full first:justify-start">
                  <p className="text-base font-medium leading-[26px] text-[#1d2127] dark:text-slate-100">
                    Regulated
                  </p>
                </div>
                <div className="block_crypto_card_table_item relative flex w-full max-w-[18%] items-center justify-center">
                  <div className="block_crypto_card_table_item_blured_icon">
                    <XMarkIcon className="h-6 w-6 text-gray-500 dark:text-slate-100" />
                  </div>
                </div>
                <div className="block_crypto_card_table_item relative flex w-full max-w-[18%] items-center justify-center">
                  <div className="block_crypto_card_table_item_blured_icon flex items-center">
                    <CheckIcon className="h-6 w-6 text-blue-500 dark:text-sky-400" />{' '}
                    /{' '}
                    <XMarkIcon className="h-6 w-6 text-gray-500 dark:text-slate-100" />
                  </div>
                </div>
                <div className="block_crypto_card_table_item relative flex w-full max-w-[18%] items-center justify-center">
                  <div className="block_crypto_card_table_item_blured_icon flex items-center">
                    <CheckIcon className="h-6 w-6 text-blue-500 dark:text-sky-400" />{' '}
                    /{' '}
                    <XMarkIcon className="h-6 w-6 text-gray-500 dark:text-slate-100" />
                  </div>
                </div>
              </div>{' '}
              <div className="block_crypto_card_table_trow flex justify-between border-b border-[#ddd] p-[20px_14px]">
                <div className="block_crypto_card_table_item first:max-w-1/2 first:w-full first:justify-start">
                  <p className="text-base font-medium leading-[26px] text-[#1d2127] dark:text-slate-100">
                    Transaction Limits
                  </p>
                </div>
                <div className="block_crypto_card_table_item relative flex w-full max-w-[18%] items-center justify-center text-sm font-normal leading-[22px] text-[#204bdb]">
                  <div className="block_crypto_card_table_item_blured_icon">
                    <p className="dark:text-sky-400">No limits</p>
                  </div>
                </div>
                <div className="block_crypto_card_table_item relative flex w-full max-w-[18%] items-center justify-center text-sm font-normal leading-[22px] text-[#204bdb]">
                  <div className="block_crypto_card_table_item_blured_icon">
                    <p className="dark:text-sky-400">No limits</p>
                  </div>
                </div>
                <div className="block_crypto_card_table_item relative flex w-full max-w-[18%] items-center justify-center text-sm font-normal leading-[22px] text-[#999999]">
                  <div className="block_crypto_card_table_item_blured_icon">
                    <p className="dark:text-slate-100">Restrictions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="block_scheme white_section pb-[150px]">
          <div className="container mx-auto w-full w-full max-w-[1356px] p-0">
            <div className="section_top_parth mb-[90px] w-full max-w-[580px]">
              <h2 className="mb-8 text-[36px] font-bold leading-[48px]">
                Settlements
              </h2>
              <p className="section_top_parth_description text-[16px] font-normal leading-[26px] text-[#3b4048] dark:text-white">
                We provide secure settlement options and statements in all the
                main cryptocurrencies and stablecoins.
              </p>
            </div>
          </div>
          <div className="container mx-auto w-full w-full max-w-[1356px] p-0">
            <div className="svg_scheme">
              <div className="svg_scheme_container resize-v2-wrapper">
                <Image
                  className="lazy resize-v2 m-w-full h-[500px] w-[500px]"
                  decoding="async"
                  loading="lazy"
                  width={0}
                  height={0}
                  src="/svg/Avaliable-Settlements.svg"
                  alt="Avaliable Settlements"
                  title="Avaliable Settlements"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="block_textbox_slider white_section pb-[150px]">
          <div className="container mx-auto w-full w-full max-w-[1356px] p-0">
            <div className="section_top_parth mb-[90px] w-full max-w-[580px]">
              <h2 className="mb-8 text-[36px] font-bold leading-[48px]">
                Crypto Payment Service Provider
              </h2>
              <p className="section_top_parth_description text-[16px] font-normal leading-[26px] text-[#3b4048] dark:text-white">
                Send, Receive, Store, Exchange and Accept cryptocurrencies
                in&nbsp;minutes with an industry-leading payments provider.
              </p>
            </div>
          </div>
          <div className="container mx-auto w-full w-full max-w-[1356px] p-0">
            <SliderCryptoPaymentServiceProvider
              data={dataSliderCryptoPaymentServiceProvider}
            />
          </div>
        </section>
        <section className="block_business_model white_section pb-[150px]">
          <div className="container mx-auto w-full max-w-[1356px] p-0">
            <div className="section_top_parth mb-[90px] w-full max-w-[580px]">
              <h2 className="mb-8 text-4xl font-bold">
                Crypto Processing Tailored for All Types of Business Model
              </h2>
              <p className="section_top_parth_description">
                Crypto processing is perfect for any business model and can be
                easily integrated into your existing operations or set up as a
                brand new service. We cover everyone from Forex and Crypto
                brokers to gaming!
              </p>
            </div>
          </div>
          <div className="container mx-auto w-full max-w-[1356px] p-0">
            <div className="block_business_model_slider_row flex flex-wrap justify-between">
              <div className="block_business_model_slider_row_single mb-[56px] w-full max-w-[300px]">
                <Image
                  className="lazy max-h-[50px]object-contain mb-[24px] max-h-[50px] max-w-[50px]"
                  decoding="async"
                  loading="lazy"
                  width={0}
                  height={0}
                  src="/svg/Icons-6.svg"
                  alt="Icons"
                  title="Icons"
                />
                <h4 className="mb-[8px] text-[18px] font-semibold leading-[27px] tracking-normal text-[#3b4048] dark:text-white">
                  E-commerce
                </h4>
                <p className="dark:text-slate-300">
                  The world of e-commerce has experienced massive growth. Reap
                  the benefits of the huge online market by accepting crypto
                  payments.
                </p>
              </div>
              <div className="block_business_model_slider_row_single mb-[56px] w-full max-w-[300px]">
                <Image
                  className="lazy mb-[24px] max-h-[50px] max-w-[50px] object-contain"
                  decoding="async"
                  loading="lazy"
                  width={0}
                  height={0}
                  src="/svg/Icons-7.svg"
                  alt="Icons"
                  title="Icons"
                />
                <h4 className="mb-[8px] text-[18px] font-semibold leading-[27px] tracking-normal text-[#3b4048] dark:text-white">
                  FOREX &amp; CFD Brokers
                </h4>
                <p className="dark:text-slate-300">
                  Attract new clients by offering them a way to top up their
                  accounts with many different cryptocurrencies.
                </p>
              </div>
              <div className="block_business_model_slider_row_single mb-[56px] w-full max-w-[300px]">
                <Image
                  className="lazy mb-[24px] max-h-[50px] max-w-[50px] object-contain"
                  decoding="async"
                  loading="lazy"
                  width={0}
                  height={0}
                  src="/svg/Icons-8.svg"
                  alt="Icons"
                  title="Icons"
                />
                <h4 className="mb-[8px] text-[18px] font-semibold leading-[27px] tracking-normal text-[#3b4048] dark:text-white">
                  Marketplaces
                </h4>
                <p className="dark:text-slate-300">
                  There are many platforms used by businesses to sell their
                  products or services. Offering crypto payments to customers is
                  now the advantage.
                </p>
              </div>
              <div className="block_business_model_slider_row_single mb-[56px] w-full max-w-[300px]">
                <Image
                  className="lazy mb-[24px] max-h-[50px] max-w-[50px] object-contain"
                  decoding="async"
                  loading="lazy"
                  width={0}
                  height={0}
                  src="/svg/Icons-9.svg"
                  alt="Icons"
                  title="Icons"
                />
                <h4 className="mb-[8px] text-[18px] font-semibold leading-[27px] tracking-normal text-[#3b4048] dark:text-white">
                  Gaming
                </h4>
                <p className="dark:text-slate-300">
                  Online gaming is massively popular. Payment systems for the
                  gaming industry should ideally offer users the chance to play
                  using crypto.
                </p>
              </div>
              <div className="block_business_model_slider_row_single mb-[56px] w-full max-w-[300px]">
                <Image
                  className="lazy mb-[24px] max-h-[50px] max-w-[50px] object-contain"
                  decoding="async"
                  loading="lazy"
                  width={0}
                  height={0}
                  src="/svg/Icons-10.svg"
                  alt="Icons"
                  title="Icons"
                />
                <h4 className="mb-[8px] text-[18px] font-semibold leading-[27px] tracking-normal text-[#3b4048] dark:text-white">
                  Gambling
                </h4>
                <p className="dark:text-slate-300">
                  The global online gambling industry is worth billions of
                  dollars. Crypto payments are part for the course.
                </p>
              </div>
              <div className="block_business_model_slider_row_single mb-[56px] w-full max-w-[300px]">
                <Image
                  className="lazy mb-[24px] max-h-[50px] max-w-[50px] object-contain"
                  decoding="async"
                  loading="lazy"
                  width={0}
                  height={0}
                  src="/svg/Icons-11.svg"
                  alt="Icons"
                  title="Icons"
                />
                <h4 className="mb-[8px] text-[18px] font-semibold leading-[27px] tracking-normal text-[#3b4048] dark:text-white">
                  Hedge / Investment Fund
                </h4>
                <p className="dark:text-slate-300">
                  Hedge / Investment funds can generate hundreds of millions of
                  dollars in management and performance fees. Crypto payments
                  are an obvious choice.
                </p>
              </div>
              <div className="block_business_model_slider_row_single mb-[56px] w-full max-w-[300px]">
                <Image
                  className="lazy mb-[24px] max-h-[50px] max-w-[50px] object-contain"
                  decoding="async"
                  loading="lazy"
                  width={0}
                  height={0}
                  src="/svg/Icons-12.svg"
                  alt="Icons"
                  title="Icons"
                />
                <h4 className="mb-[8px] text-[18px] font-semibold leading-[27px] tracking-normal text-[#3b4048] dark:text-white">
                  Travel Industry
                </h4>
                <p className="dark:text-slate-300">
                  The travel industry is a growing sector. With increasing
                  bookings now made online, it makes financial sense to accept
                  crypto payments.
                </p>
              </div>
              <div className="block_business_model_slider_row_single mb-[56px] w-full max-w-[300px]">
                <Image
                  className="lazy mb-[24px] max-h-[50px] max-w-[50px] object-contain"
                  decoding="async"
                  loading="lazy"
                  width={0}
                  height={0}
                  src="/svg/Icons-13.svg"
                  alt="Icons"
                  title="Icons"
                />
                <h4 className="mb-[8px] text-[18px] font-semibold leading-[27px] tracking-normal text-[#3b4048] dark:text-white">
                  Legal and Consulting Services
                </h4>
                <p className="dark:text-slate-300">
                  Everything now is regulated by contracts and legal agreements.
                  Experts in that area are in demand. Provide your clients a way
                  to pay for your services in crypto.
                </p>
              </div>
              <div className="block_business_model_slider_row_single mb-[56px] w-full max-w-[300px]">
                <Image
                  className="lazy mb-[24px] max-h-[50px] max-w-[50px] object-contain"
                  decoding="async"
                  loading="lazy"
                  width={0}
                  height={0}
                  src="/svg/Icons-14.svg"
                  alt="Icons"
                  title="Icons"
                />
                <h4 className="mb-[8px] text-[18px] font-semibold leading-[27px] tracking-normal text-[#3b4048] dark:text-white">
                  Marketing Agencies
                </h4>
                <p className="dark:text-slate-300">
                  Marketing agencies are in demand as ever. Attract new clients
                  by accepting payments in cryptocurrencies.
                </p>
              </div>
            </div>
          </div>
        </section>
        <CryptocurrencyOutstandingFeatures />
        <section className="block_textbox_dynamic_slider white_section pb-[150px]">
          <div className="container mx-auto">
            <div className="block_textbox_dynamic_slider_row block_business_model_slider_row grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              <div className="block_textbox_dynamic_slider_box rounded-md bg-white p-4 dark:bg-transparent dark:bg-transparent dark:shadow-sm dark:shadow-slate-50">
                <h4 className="mb-4 text-[24px] font-semibold leading-[36px] dark:text-slate-100">
                  Global
                </h4>
                <p className="text-[15px] font-normal leading-[24px] text-[#5f5f6a] dark:text-slate-400">
                  Send, store, exchange and accept digital&nbsp;payments
                  anytime, virtually&nbsp;anywhere across the globe.
                </p>
              </div>
              <div className="block_textbox_dynamic_slider_box rounded-md bg-white p-4 dark:bg-transparent dark:bg-transparent dark:shadow-sm dark:shadow-slate-50">
                <h4 className="leading-[36px mb-4 text-[24px] font-semibold dark:text-slate-100">
                  No Chargebacks
                </h4>
                <p className="text-[15px] font-normal leading-[24px] text-[#5f5f6a] dark:text-slate-400">
                  A transparent and straightforward service. Blockchain
                  transactions are irreversible with no&nbsp;chargebacks and no
                  recurring fees nor hidden charges.
                </p>
              </div>
              <div className="block_textbox_dynamic_slider_box rounded-md bg-white p-4 dark:bg-transparent dark:bg-transparent dark:shadow-sm dark:shadow-slate-50">
                <h4 className="leading-[36px mb-4 text-[24px] font-semibold dark:text-slate-100">
                  Independent
                </h4>
                <p className="text-[15px] font-normal leading-[24px] text-[#5f5f6a] dark:text-slate-400">
                  The absence of third parties involved in transactions means
                  there is no need to depend&nbsp;on&nbsp;banks
                  and&nbsp;governments.
                </p>
              </div>
              <div className="block_textbox_dynamic_slider_box rounded-md bg-white p-4 dark:bg-transparent dark:bg-transparent dark:shadow-sm dark:shadow-slate-50">
                <h4 className="leading-[36px mb-4 text-[24px] font-semibold dark:text-slate-100">
                  Secure
                </h4>
                <p className="text-[15px] font-normal leading-[24px] text-[#5f5f6a] dark:text-slate-400">
                  Protection from DDoS attacks, full data encryption and
                  blockchain transparency, coupled&nbsp;with secure checkout.
                </p>
              </div>
              <div className="block_textbox_dynamic_slider_box rounded-md bg-white p-4 dark:bg-transparent dark:bg-transparent dark:shadow-sm dark:shadow-slate-50">
                <h4 className="leading-[36px mb-4 text-[24px] font-semibold dark:text-slate-100">
                  Unlimited
                </h4>
                <p className="text-[15px] font-normal leading-[24px] text-[#5f5f6a] dark:text-slate-400">
                  Any amount may be transferred in accordance with your
                  requirements. There are no restrictions in terms of
                  upper-limits.
                </p>
              </div>
              <div className="block_textbox_dynamic_slider_box rounded-md bg-white p-4 dark:bg-transparent dark:bg-transparent dark:shadow-sm dark:shadow-slate-50">
                <h4 className="leading-[36px mb-4 text-[24px] font-semibold dark:text-slate-100">
                  Fast as Lightning
                </h4>
                <p className="text-[15px] font-normal leading-[24px] text-[#5f5f6a] dark:text-slate-400">
                  Take advantage of faster, worldwide transactions that are not
                  possible with traditional bank payments.
                </p>
              </div>
              <div className="block_textbox_dynamic_slider_box rounded-md bg-white p-4 dark:bg-transparent dark:bg-transparent dark:shadow-sm dark:shadow-slate-50">
                <h4 className="leading-[36px mb-4 text-[24px] font-semibold dark:text-slate-100">
                  Easy integration
                </h4>
                <p className="text-[15px] font-normal leading-[24px] text-[#5f5f6a] dark:text-slate-400">
                  We offer hassle-free integration of cryptocurrency payments
                  into your system through API. Our experts will help you
                  through this process.
                </p>
              </div>
              <div className="block_textbox_dynamic_slider_box rounded-md bg-white p-4 dark:bg-transparent dark:bg-transparent dark:shadow-sm dark:shadow-slate-50">
                <h4 className="leading-[36px mb-4 text-[24px] font-semibold dark:text-slate-100">
                  No Rolling Reserve
                </h4>
                <p className="text-[15px] font-normal leading-[24px] text-[#5f5f6a] dark:text-slate-400">
                  With no rolling reserve, you don’t need to freeze a percentage
                  of your money since there is no central authority or
                  chargebacks.
                </p>
              </div>
              <div className="block_textbox_dynamic_slider_box rounded-md bg-white p-4 dark:bg-transparent dark:bg-transparent dark:shadow-sm dark:shadow-slate-50">
                <h4 className="leading-[36px mb-4 text-[24px] font-semibold dark:text-slate-100">
                  KYT
                </h4>
                <p className="text-[15px] font-normal leading-[24px] text-[#5f5f6a] dark:text-slate-400">
                  Integration of a KYT cryptocurrency compliance service helps
                  to prevent money laundering and other activities of an illicit
                  nature.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="block_box_opacity white_section pb-[150px]">
          <div className="container mx-auto">
            {' '}
            <div className="block_box_opacity_row flex w-full max-w-full justify-between">
              <div className="block_box_opacity_row_left w-full max-w-[45%] p-4">
                <div className="section_top_parth mb-8 mb-[90px] w-full max-w-[580px]">
                  <h2 className="mb-4 text-[36px] font-semibold leading-[48px] dark:text-slate-100">
                    Payment Page
                  </h2>
                  <p className="section_top_parth_description text-[16px] font-normal leading-[26px] text-[#3b4048] dark:text-slate-400">
                    A highly-responsive payment page with live data. All you
                    need is at your fingertips to create and send your customers
                    detailed invoices.
                  </p>
                </div>
                <div className="block_box_opacity_row_inner flex w-full max-w-full flex-row flex-wrap justify-between">
                  {CryptocurrencyMerchantDigitalWalletsPaymentPage.map(
                    (item) => (
                      <div
                        key={item.id}
                        className="block_box_opacity_row_box group relative mb-[72px] w-full max-w-[45%] cursor-pointer border-t-[1px] border-[#f0f0f0] opacity-80 transition-all delay-300 duration-300 ease-in-out hover:border-[#204bdb] hover:opacity-100 dark:border-slate-800"
                      >
                        <h4 className="mb-2 mt-[25px] text-[18px] font-semibold leading-[27px] text-[#3b4048]">
                          {item.title}
                        </h4>
                        <p className="text-[15px] font-normal leading-[24px] text-[#5f5f6a] dark:text-slate-400">
                          {item.description}
                        </p>
                      </div>
                    ),
                  )}
                </div>
              </div>
              <div className="block_box_opacity_row_right relative max-h-[779px] w-full max-w-[48.7%] p-4">
                <div className="block_box_opacity_row_right_item full_image opacity-100">
                  <Image
                    src="/Currency-Selection-662x800.png"
                    alt="Currency Selection"
                    title="Currency Selection"
                    width={662}
                    height={800}
                    className="rounded-md"
                    sizes="(max-width: 414px) 414px, (max-width: 662px) 662px, (max-width: 828px) 828px, (max-width: 1242px) 1242px, (max-width: 1272px) 1272px"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default CryptoCurrencyPaymentGateway;
