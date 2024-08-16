import Image from 'next/image';
import Link from 'next/link';
import {
  CheckIcon,
  XMarkIcon,
  ArrowLongRightIcon,
  ArrowRightIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/outline';
import Header from '@/app/ui/_components/Header';
import Footer from '@/app/ui/footer';
import dataSliderCryptocurrencyMerchantDigitalWallets from '@/app/ui/_data/SliderCryptocurrencyMerchantDigitalWallets.json';
import SliderCryptocurrencyMerchantDigitalWallets from '@/app/ui/_components/SliderCryptocurrencyMerchantDigitalWallets';
import dataSliderCryptoPaymentServiceProvider from '@/app/ui/_data/SliderCryptoPaymentServiceProvider.json';
import SliderCryptoPaymentServiceProvider from '@/app/ui/_components/SliderCryptoPaymentServiceProvider';
import CryptocurrencyOutstandingFeatures from '@/app/ui/_components/CryptocurrencyOutstandingFeatures';
import CryptocurrencyPaymentPage from '@/app/ui/_data/CryptocurrencyPaymentPage.json';
import AMLComplianceTransactionsChecking from '@/app/ui/_components/AMLComplianceTransactionsChecking';
import CryptocurrencyBackOffice from '@/app/ui/_components/CryptocurrencyBackOffice';
import CryptocurrencySecureAndSafe from '@/app/ui/_components/CryptocurrencySecureAndSafe';
import CryptocurrencyFAQ from '@/app/ui/_components/CryptocurrencyFAQ';

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
                  href="/signup"
                  className="mt-[56px] flex w-full max-w-[201px] items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
                >
                  Open account
                  <ArrowRightIcon className="w-5" />
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
                  className="lazy resize-v2 w-full max-w-full"
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
                  className="lazy resize-v2 w-full max-w-full"
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
                  className="lazy mb-[24px] h-[50px] w-[50px] object-contain"
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
                  className="lazy mb-[24px] h-[50px] w-[50px] object-contain"
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
                  className="lazy mb-[24px] h-[50px] w-[50px] object-contain"
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
                  className="lazy mb-[24px] h-[50px] w-[50px] object-contain"
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
                  className="lazy mb-[24px] h-[50px] w-[50px] object-contain"
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
                  className="lazy mb-[24px] h-[50px] w-[50px] object-contain"
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
                  className="lazy mb-[24px] h-[50px] w-[50px] object-contain"
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
                  className="lazy mb-[24px] h-[50px] w-[50px] object-contain"
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
                  className="lazy mb-[24px] h-[50px] w-[50px] object-contain"
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
          <div className="container mx-auto w-full max-w-[1356px] p-0">
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
          <div className="container mx-auto w-full max-w-[1356px] p-0">
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
                  {CryptocurrencyPaymentPage.map((item) => (
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
                  ))}
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
        <section className="bg-white pb-[150px]">
          <div className="container mx-auto w-full max-w-[1356px] p-0">
            <div className="block_box_with_list_row align-center flex justify-between">
              <div className="block_box_with_list_row_left w-full max-w-[45%]">
                <div className="section_top_parth mb-12 w-full max-w-[580px]">
                  <h2 className="mb-8 text-3xl font-semibold leading-[48px]">
                    Fully Compliant with Your Regulator!
                  </h2>
                  <p className="text-base font-normal leading-[26px] text-gray-700">
                    Stay compliant by tracking the legitimacy of your crypto
                    funds. Crypto analytics enhance due diligence and AML
                    compliance procedures for every business dealing in
                    cryptocurrency.
                  </p>
                </div>
                <div className="block_box_with_list_row_left_images mt-12">
                  <h5 className="mb-6 text-base font-medium leading-[25px] text-gray-500">
                    Integrated with:
                  </h5>
                  <div className="align-center flex gap-[28px]">
                    <Image
                      className="lazy w-[178px]"
                      decoding="async"
                      loading="lazy"
                      width={0}
                      height={0}
                      src="/svg/Chainalysis-logo-1.svg"
                      alt="Chainalysis-logo 1"
                      title="Chainalysis-logo 1"
                    />
                    <Image
                      className="lazy w-[178px]"
                      decoding="async"
                      loading="lazy"
                      width={0}
                      height={0}
                      src="/svg/Group-48095601.svg"
                      alt="Group 48095601"
                      title="Group 48095601"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full max-w-[50%]">
                <div className="mb-[26px] flex items-center">
                  <ArrowLongRightIcon className="w-7 text-blue-500" />
                  <p className="ml-[15px] text-[15px] font-medium leading-[22px]">
                    Сomply with CTF regulations
                  </p>
                </div>
                <div className="mb-[26px] flex items-center">
                  <ArrowLongRightIcon className="w-7 text-blue-500" />
                  <p className="ml-[15px] text-[15px] font-medium leading-[22px]">
                    In-depth case by case investigations
                  </p>
                </div>
                <div className="mb-[26px] flex items-center">
                  <ArrowLongRightIcon className="w-7 text-blue-500" />
                  <p className="ml-[15px] text-[15px] font-medium leading-[22px]">
                    Monitor and control over risky transactions
                  </p>
                </div>
                <div className="mb-[26px] flex items-center">
                  <ArrowLongRightIcon className="w-7 text-blue-500" />
                  <p className="ml-[15px] text-[15px] font-medium leading-[22px]">
                    Identify high-risk activities automatically
                  </p>
                </div>
                <div className="mb-[26px] flex items-center">
                  <ArrowLongRightIcon className="w-7 text-blue-500" />
                  <p className="ml-[15px] text-[15px] font-medium leading-[22px]">
                    Identify all criminal activity on the blockchain
                  </p>
                </div>
                <div className="mb-[26px] flex items-center">
                  <ArrowLongRightIcon className="w-7 text-blue-500" />
                  <p className="ml-[15px] text-[15px] font-medium leading-[22px]">
                    Track ransomware payments
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <AMLComplianceTransactionsChecking />
        <CryptocurrencyBackOffice />
        <section className="block_scheme white_section pb-[150px]">
          <div className="container mx-auto w-full max-w-[1356px] p-0">
            <div className="section_top_parth mb-[90px] w-full max-w-[580px]">
              <h2 className="mb-[32px] text-[36px] font-bold leading-[48px]">
                The Best API Solution
              </h2>
              <p className="section_top_parth_description text-base font-normal leading-[26px] text-gray-700">
                Fast integration with ease via Rest API. Our state-of-the-art
                technology enables you to integrate invoicing and handle
                acquiring and transfers the exact way you need it.
              </p>
            </div>
          </div>
          <div className="container mx-auto w-full max-w-[1356px] p-0">
            <div className="svg_scheme flex justify-center">
              <div className="svg_scheme_container resize-v2-wrapper">
                <Image
                  className="lazy resize-v2 w-full max-w-full"
                  decoding="async"
                  loading="lazy"
                  src="https://coinsbuy.com/app/uploads/2023/06/Frame-48095742.svg"
                  alt="API Solution"
                  title="API Solution"
                  width={0}
                  height={0}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="block_box_with_list right_down white_section pb-[150px]">
          <div className="container mx-auto w-full max-w-[1356px] p-0">
            <div className="block_box_with_list_row flex justify-between">
              <div className="block_box_with_list_row_left w-full max-w-[45%]">
                <div className="section_top_parth">
                  <h2 className="mb-[32px] text-[36px] font-bold leading-[48px]">
                    Staging / Sandbox Environment for your integration
                  </h2>
                  <p className="section_top_parth_description text-base font-normal leading-[26px] text-gray-700">
                    Testing is a major part of the Coinsbuy integration process
                    which helps eliminate any potential problems before going
                    live.
                  </p>
                </div>
              </div>
              <div className="block_box_with_list_row_right flex w-full max-w-[50%] flex-col gap-4 pt-[32px]">
                <div className="block_box_with_list_row_right_top flex justify-between">
                  <div className="block_box_with_list_row_right_top_left mb-[40px]">
                    <h3 className="mb-[4px] text-[24px] font-semibold leading-[36px] text-[#1d2127]">
                      Sandbox
                    </h3>
                    <p className="mt-2 text-[15px] font-medium leading-[22.5px] text-[#5f5f6a]">
                      Get quick access to our solutions.
                    </p>
                  </div>
                  <div className="block_box_with_list_row_right_top_right">
                    <Link
                      className="flex w-full max-w-full items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
                      target="_blank"
                      href="/signup"
                    >
                      Register &amp; Try
                      <ArrowRightIcon className="w-5" />
                    </Link>
                  </div>
                </div>
                <div className="block_box_with_list_row_right_item flex items-center gap-2">
                  <ArrowLongRightIcon className="w-7 text-blue-500" />
                  <p className="text-base">
                    Our solution comes with a staging environment for all your
                    testing needs.
                  </p>
                </div>
                <div className="block_box_with_list_row_right_item flex items-center gap-2">
                  <ArrowLongRightIcon className="w-7 text-blue-500" />
                  <p className="text-base">
                    Test any new integrations or functionality on a staging
                    environment before publishing the changes to a production
                    one.
                  </p>
                </div>
                <div className="block_box_with_list_row_right_item flex items-center gap-2">
                  <ArrowLongRightIcon className="w-7 text-blue-500" />
                  <p className="text-base">
                    Test any financial operations on a staging environment
                    before doing them on production with real financial
                    instruments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="block_scheme white_section pb-[150px]">
          <div className="container mx-auto w-full max-w-[1356px] p-0">
            <div className="section_top_parth mb-[90px] w-full max-w-[580px]">
              <h2 className="mb-[32px] text-[36px] font-bold leading-[48px]">
                High-Performance Software Infrastructure
              </h2>
              <p className="section_top_parth_description text-base font-normal leading-[26px] text-gray-700">
                Our infrastructure operates on multiple servers across several
                data centres ensuring super-fast data delivery and the lowest
                possible latency. We have redundant hosting and load-balanced
                environments to&nbsp;ensure maximum reliability.
              </p>
            </div>
          </div>
          <div className="container mx-auto w-full max-w-[1356px] p-0">
            <div className="svg_scheme flex justify-center">
              <div className="svg_scheme_container resize-v2-wrapper">
                <Image
                  className="lazy resize-v2 w-full max-w-full"
                  decoding="async"
                  loading="lazy"
                  src="/svg/Frame-48095778-1.svg"
                  alt="High-Performance Software Infrastructure"
                  title="High-Performance Software Infrastructure"
                  width={0}
                  height={0}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="block_textbox_dynamic_slider white_section pb-[150px]">
          <div className="container mx-auto w-full max-w-[1356px] p-0">
            <div className="block_textbox_dynamic_slider_row block_business_model_slider_row mb-[-56px] ml-0 mr-0 flex flex-wrap justify-between">
              <div className="block_textbox_dynamic_slider_box mb-[56px] w-full max-w-[32%]">
                <h4 className="mb-[16px] text-[24px] font-semibold">
                  IP Whitelists &amp; Permissions
                </h4>
                <p className="text-base font-normal leading-[26px] text-gray-700">
                  Whitelist settings mean that you can allow connection only to
                  the specific IPs (access to API). Permission settings give you
                  the flexibility to differentiate your employees’ rights
                  including roles like “view only” and “withdrawals with
                  confirmation”.
                </p>
              </div>
              <div className="block_textbox_dynamic_slider_box mb-[56px] w-full max-w-[32%]">
                <h4 className="mb-[16px] text-[24px] font-semibold">
                  Scalable and Secure Servers
                </h4>
                <p className="text-base font-normal leading-[26px] text-gray-700">
                  Our infrastructure incorporates various layers of security and
                  scalability with loadbalancers across several data centres,
                  ensuring the stability of the whole system and the lowest
                  possible latency.
                </p>
              </div>
              <div className="block_textbox_dynamic_slider_box mb-[56px] w-full max-w-[32%]">
                <h4 className="mb-[16px] text-[24px] font-semibold">
                  Security Patches and Upgrades
                </h4>
                <p className="text-base font-normal leading-[26px] text-gray-700">
                  Periodic updates and patches enable you to consistently
                  maintain security as well as increase and optimise the
                  system’s functionality.
                </p>
              </div>
              <div className="block_textbox_dynamic_slider_box mb-[56px] w-full max-w-[32%]">
                <h4 className="mb-[16px] text-[24px] font-semibold">
                  Backups &amp; Storage
                </h4>
                <p className="text-base font-normal leading-[26px] text-gray-700">
                  Backups in combination with a distributed file system with no
                  single point of failure provide the ultimate guarantee against
                  loss of data.
                </p>
              </div>
              <div className="block_textbox_dynamic_slider_box mb-[56px] w-full max-w-[32%]">
                <h4 className="mb-[16px] text-[24px] font-semibold">
                  Secure API Access
                </h4>
                <p className="text-base font-normal leading-[26px] text-gray-700">
                  Our API endpoints are encrypted through SSL so user traffic is
                  secured when data is requested. We require that our clients
                  check the API callback requests for maximum security.
                </p>
              </div>
              <div className="block_textbox_dynamic_slider_box mb-[56px] w-full max-w-[32%]">
                <h4 className="mb-[16px] text-[24px] font-semibold">
                  WAF &amp; Anti-DDoS
                </h4>
                <p className="text-base font-normal leading-[26px] text-gray-700">
                  Application-level protection with a web application firewall,
                  continuous monitoring, and automatic mitigation of network
                  attack risks.
                </p>
              </div>
            </div>
          </div>
        </section>
        <CryptocurrencySecureAndSafe />
        <section className="block_technical_support white_section pb-[150px]">
          <div className="container mx-auto w-full max-w-[1356px] p-0">
            <div className="block_technical_support_row flex items-center justify-between">
              <div className="block_technical_support_row_left w-full max-w-[45%]">
                <div className="section_top_parth mb-[40px] w-full max-w-[580px]">
                  <h2 className="mb-[32px] text-[36px] font-bold leading-[48px]">
                    Technical Support and Availability
                  </h2>
                  <p className="section_top_parth_description mb-2 text-base font-normal leading-[26px] text-gray-700">
                    Our professional customer service team is always available
                    to help with any queries. Feel free to get in touch.
                  </p>
                </div>
                <Link
                  className="b2b_link tangerine_link group flex items-center space-x-2 text-[#204bdb] hover:text-[#204bdb]"
                  target="_blank"
                  href="/signup"
                >
                  Get Support
                  <ChevronRightIcon className="ml-2 h-4 w-4 transform text-blue-600 transition-transform duration-300 ease-in-out group-hover:translate-x-2" />
                </Link>
              </div>
              <div className="block_technical_support_row_right w-full max-w-[45%] text-[94px] font-semibold leading-[135px] text-[#204bdb]">
                <p>24/7/365</p>
              </div>
            </div>
          </div>
        </section>
        <section className="block_linksbox_section white_section pb-[150px] pt-0">
          <div className="container mx-auto w-full max-w-[1356px]">
            <h2 className="mb-[84px] text-[36px] font-bold leading-[48px]">
              More useful links
            </h2>
            <div className="block_linksbox block_linksbox_alignstart flex w-full flex-wrap justify-start gap-9">
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
                href="/minimum-deposits-withdrawals"
                className="short_box block_linksbox_single group mb-4 w-full max-w-33% transform rounded-lg border border-gray-200 p-8 transition-transform duration-300 ease-in-out hover:border-[#204bdb] hover:bg-gray-100 "
              >
                <h4 className="mb-3 text-lg font-semibold text-[#262e39]">
                  Minimum Deposits
                </h4>
                <p className="b2b_link mb-0 mt-6 flex items-center text-sm text-[#91919e] transition-transform duration-300 ease-in-out group-hover:text-[#204bdb]">
                  Explore
                  <ChevronRightIcon className="ml-2 h-4 w-4 transform transition-transform duration-300 ease-in-out group-hover:translate-x-2" />
                </p>
              </Link>
            </div>
          </div>
        </section>
        <CryptocurrencyFAQ />
      </main>
      <Footer />
    </>
  );
};

export default CryptoCurrencyPaymentGateway;
