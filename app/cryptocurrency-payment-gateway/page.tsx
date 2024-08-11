import Image from 'next/image';
import Header from '@/app/ui/_components/Header';
import Footer from '@/app/ui/footer';
import dataSliderCryptocurrencyMerchantDigitalWallets from '@/app/ui/_data/SliderCryptocurrencyMerchantDigitalWallets.json';
import SliderCryptocurrencyMerchantDigitalWallets from '@/app/ui/_components/SliderCryptocurrencyMerchantDigitalWallets';
import dataSliderCryptoPaymentServiceProvider from '@/app/ui/_data/SliderCryptoPaymentServiceProvider.json';
import SliderCryptoPaymentServiceProvider from '@/app/ui/_components/SliderCryptoPaymentServiceProvider';
import { CheckIcon, XMarkIcon } from '@heroicons/react/24/outline';

const CryptoCurrencyPaymentGateway = () => {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col p-6">
        <section className="block_hero white_section py-[150px]">
          <div className="container mx-auto w-full max-w-[1356px] p-0">
            <div className="block_hero_row flex flex-col items-center md:flex-row">
              <div className="block_hero_row_text_box p-4 md:w-1/2">
                <h1 className="text-4xl font-bold">Merchant Digital Wallets</h1>
                <h4 className="section_description mt-4 text-lg">
                  A solution enabling businesses to accept crypto payments in
                  all major coins and exchange it all into Coins or Stablecoins.
                </h4>
                <a
                  className="b2b-btn-arrow external_links_checked mt-4 inline-block text-blue-500 hover:underline"
                  target="_blank"
                  href="http://business.coinsbuy.com/"
                  rel="noopener noreferrer"
                >
                  Open Account
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
                </a>
              </div>
              <div className="block_hero_row_image_box p-4 md:w-1/2">
                <Image
                  className="lazy w-full"
                  decoding="async"
                  loading="lazy"
                  src="/svg/Main-Screen_Merchants.svg"
                  alt="Main Screen Merchants"
                  title="Main Screen Merchants"
                  width={500}
                  max-width="100%"
                  height={500}
                  style={{
                    width: '100%',
                    height: 'auto',
                  }}
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
        <section className="block_scheme_list white_section py-[150px]">
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
                  className="lazy resize-v2"
                  decoding="async"
                  loading="lazy"
                  fetchPriority="low"
                  sizes="100vw"
                  src="/svg/Perfectly-works-with_merchants-1.svg"
                  alt="Perfectly works with merchants"
                  width={500}
                  max-width="100%"
                  height={500}
                  style={{
                    width: '100%',
                    height: 'auto',
                  }}
                />
              </div>
            </div>
          </div>
        </section>{' '}
        <section className="block_crypto_card white_section py-[150px]">
          <div className="container mx-auto w-full w-full max-w-[1356px] p-0">
            <div className="section_top_parth mb-[90px] w-full max-w-[580px]">
              <h2 className="leading-12 mb-8 text-3xl font-semibold tracking-normal text-[#1d2127]">
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
                  <p>Features</p>
                </div>
                <div className="block_crypto_card_table_item flex w-full max-w-[18%] justify-center">
                  <p>Major Coins</p>
                </div>
                <div className="block_crypto_card_table_item flex w-full max-w-[18%] justify-center">
                  <p>Stablecoins</p>
                </div>
                <div className="block_crypto_card_table_item flex w-full max-w-[18%] justify-center">
                  <p>Fiat Payments</p>
                </div>
              </div>
              <div className="block_crypto_card_table_trow flex justify-between border-b border-[#ddd] p-[20px_14px]">
                <div className="block_crypto_card_table_item first:max-w-1/2 first:w-full first:justify-start">
                  <p className="text-base font-medium leading-[26px] text-[#1d2127]">
                    Decentralisation
                  </p>
                </div>
                <div className="block_crypto_card_table_item flex w-full max-w-[18%] items-center justify-center">
                  <div className="block_crypto_card_table_item_blured_icon">
                    <CheckIcon className="h-6 w-6 text-blue-500" />
                  </div>
                </div>
                <div className="block_crypto_card_table_item flex w-full max-w-[18%] items-center justify-center">
                  <div className="block_crypto_card_table_item_blured_icon">
                    <XMarkIcon className="h-6 w-6 text-gray-500" />
                  </div>
                </div>
                <div className="block_crypto_card_table_item relative flex w-full max-w-[18%] items-center justify-center">
                  <div className="block_crypto_card_table_item_blured_icon">
                    <XMarkIcon className="h-6 w-6 text-gray-500" />
                  </div>
                </div>
              </div>{' '}
              <div className="block_crypto_card_table_trow flex justify-between border-b border-[#ddd] p-[20px_14px]">
                <div className="block_crypto_card_table_item first:max-w-1/2 first:w-full first:justify-start">
                  <p className="text-base font-medium leading-[26px] text-[#1d2127]">
                    Fast and Secure
                  </p>
                </div>
                <div className="block_crypto_card_table_item relative flex w-full max-w-[18%] items-center justify-center">
                  <div className="block_crypto_card_table_item_blured_icon">
                    <CheckIcon className="h-6 w-6 text-blue-500" />
                  </div>
                </div>
                <div className="block_crypto_card_table_item relative flex w-full max-w-[18%] items-center justify-center">
                  <div className="block_crypto_card_table_item_blured_icon">
                    <CheckIcon className="h-6 w-6 text-blue-500" />
                  </div>
                </div>
                <div className="block_crypto_card_table_item relative flex w-full max-w-[18%] items-center justify-center">
                  <div className="block_crypto_card_table_item_blured_icon">
                    <CheckIcon className="h-6 w-6 text-blue-500" />
                  </div>
                </div>
              </div>{' '}
              <div className="block_crypto_card_table_trow flex justify-between border-b border-[#ddd] p-[20px_14px]">
                <div className="block_crypto_card_table_item first:max-w-1/2 first:w-full first:justify-start">
                  <p className="text-base font-medium leading-[26px] text-[#1d2127]">
                    No Rolling Reserve
                  </p>
                </div>
                <div className="block_crypto_card_table_item relative flex w-full max-w-[18%] items-center justify-center">
                  <div className="block_crypto_card_table_item_blured_icon">
                    <CheckIcon className="h-6 w-6 text-blue-500" />
                  </div>
                </div>
                <div className="block_crypto_card_table_item relative flex w-full max-w-[18%] items-center justify-center">
                  <div className="block_crypto_card_table_item_blured_icon">
                    <CheckIcon className="h-6 w-6 text-blue-500" />
                  </div>
                </div>
                <div className="block_crypto_card_table_item relative flex w-full max-w-[18%] items-center justify-center">
                  <div className="block_crypto_card_table_item_blured_icon">
                    <XMarkIcon className="h-6 w-6 text-gray-500" />
                  </div>
                </div>
              </div>{' '}
              <div className="block_crypto_card_table_trow flex justify-between border-b border-[#ddd] p-[20px_14px]">
                <div className="block_crypto_card_table_item first:max-w-1/2 first:w-full first:justify-start">
                  <p className="text-base font-medium leading-[26px] text-[#1d2127]">
                    Low Cost
                  </p>
                </div>
                <div className="block_crypto_card_table_item relative flex w-full max-w-[18%] items-center justify-center">
                  <div className="block_crypto_card_table_item_blured_icon">
                    <CheckIcon className="h-6 w-6 text-blue-500" />
                  </div>
                </div>
                <div className="block_crypto_card_table_item relative flex w-full max-w-[18%] items-center justify-center">
                  <div className="block_crypto_card_table_item_blured_icon">
                    <CheckIcon className="h-6 w-6 text-blue-500" />
                  </div>
                </div>
                <div className="block_crypto_card_table_item relative flex w-full max-w-[18%] items-center justify-center">
                  <div className="block_crypto_card_table_item_blured_icon">
                    <XMarkIcon className="h-6 w-6 text-gray-500" />
                  </div>
                </div>
              </div>{' '}
              <div className="block_crypto_card_table_trow flex justify-between border-b border-[#ddd] p-[20px_14px]">
                <div className="block_crypto_card_table_item first:max-w-1/2 first:w-full first:justify-start">
                  <p className="text-base font-medium leading-[26px] text-[#1d2127]">
                    Easy Account Opening
                  </p>
                </div>
                <div className="block_crypto_card_table_item relative flex w-full max-w-[18%] items-center justify-center">
                  <div className="block_crypto_card_table_item_blured_icon">
                    <CheckIcon className="h-6 w-6 text-blue-500" />
                  </div>
                </div>
                <div className="block_crypto_card_table_item relative flex w-full max-w-[18%] items-center justify-center">
                  <div className="block_crypto_card_table_item_blured_icon">
                    <CheckIcon className="h-6 w-6 text-blue-500" />
                  </div>
                </div>
                <div className="block_crypto_card_table_item relative flex w-full max-w-[18%] items-center justify-center">
                  <div className="block_crypto_card_table_item_blured_icon">
                    <XMarkIcon className="h-6 w-6 text-gray-500" />
                  </div>
                </div>
              </div>{' '}
              <div className="block_crypto_card_table_trow flex justify-between border-b border-[#ddd] p-[20px_14px]">
                <div className="block_crypto_card_table_item first:max-w-1/2 first:w-full first:justify-start">
                  <p className="text-base font-medium leading-[26px] text-[#1d2127]">
                    Transparency
                  </p>
                </div>
                <div className="block_crypto_card_table_item relative flex w-full max-w-[18%] items-center justify-center">
                  <div className="block_crypto_card_table_item_blured_icon">
                    <CheckIcon className="h-6 w-6 text-blue-500" />
                  </div>
                </div>
                <div className="block_crypto_card_table_item relative flex w-full max-w-[18%] items-center justify-center">
                  <div className="block_crypto_card_table_item_blured_icon">
                    <CheckIcon className="h-6 w-6 text-blue-500" />
                  </div>
                </div>
                <div className="block_crypto_card_table_item relative flex w-full max-w-[18%] items-center justify-center">
                  <div className="block_crypto_card_table_item_blured_icon">
                    <XMarkIcon className="h-6 w-6 text-blue-500" />
                  </div>
                </div>
              </div>{' '}
              <div className="block_crypto_card_table_trow flex justify-between border-b border-[#ddd] p-[20px_14px]">
                <div className="block_crypto_card_table_item first:max-w-1/2 first:w-full first:justify-start">
                  <p className="text-base font-medium leading-[26px] text-[#1d2127]">
                    Fast Settlement
                  </p>
                </div>
                <div className="block_crypto_card_table_item relative flex w-full max-w-[18%] items-center justify-center">
                  <div className="block_crypto_card_table_item_blured_icon">
                    <CheckIcon className="h-6 w-6 text-gray-500" />
                  </div>
                </div>
                <div className="block_crypto_card_table_item relative flex w-full max-w-[18%] items-center justify-center">
                  <div className="block_crypto_card_table_item_blured_icon">
                    <CheckIcon className="h-6 w-6 text-blue-500" />
                  </div>
                </div>
                <div className="block_crypto_card_table_item relative flex w-full max-w-[18%] items-center justify-center">
                  <div className="block_crypto_card_table_item_blured_icon">
                    <XMarkIcon className="h-6 w-6 text-gray-500" />
                  </div>
                </div>
              </div>{' '}
              <div className="block_crypto_card_table_trow flex justify-between border-b border-[#ddd] p-[20px_14px]">
                <div className="block_crypto_card_table_item first:max-w-1/2 first:w-full first:justify-start">
                  <p className="text-base font-medium leading-[26px] text-[#1d2127]">
                    No Risk of Fraud Card Usage
                  </p>
                </div>
                <div className="block_crypto_card_table_item relative flex w-full max-w-[18%] items-center justify-center">
                  <div className="block_crypto_card_table_item_blured_icon">
                    <CheckIcon className="h-6 w-6 text-blue-500" />
                  </div>
                </div>
                <div className="block_crypto_card_table_item relative flex w-full max-w-[18%] items-center justify-center">
                  <div className="block_crypto_card_table_item_blured_icon">
                    <CheckIcon className="h-6 w-6 text-blue-500" />
                  </div>
                </div>
                <div className="block_crypto_card_table_item relative flex w-full max-w-[18%] items-center justify-center">
                  <div className="block_crypto_card_table_item_blured_icon">
                    <XMarkIcon className="h-6 w-6 text-gray-500" />
                  </div>
                </div>
              </div>{' '}
              <div className="block_crypto_card_table_trow flex justify-between border-b border-[#ddd] p-[20px_14px]">
                <div className="block_crypto_card_table_item first:max-w-1/2 first:w-full first:justify-start">
                  <p className="text-base font-medium leading-[26px] text-[#1d2127]">
                    Instant Payouts
                  </p>
                </div>
                <div className="block_crypto_card_table_item relative flex w-full max-w-[18%] items-center justify-center">
                  <div className="block_crypto_card_table_item_blured_icon">
                    <CheckIcon className="h-6 w-6 text-blue-500" />
                  </div>
                </div>
                <div className="block_crypto_card_table_item relative flex w-full max-w-[18%] items-center justify-center">
                  <div className="block_crypto_card_table_item_blured_icon">
                    <CheckIcon className="h-6 w-6 text-blue-500" />
                  </div>
                </div>
                <div className="block_crypto_card_table_item relative flex w-full max-w-[18%] flex-nowrap items-center justify-center">
                  <div className="block_crypto_card_table_item_blured_icon flex items-center">
                    <CheckIcon className="h-6 w-6 text-blue-500" /> /{' '}
                    <XMarkIcon className="h-6 w-6 text-gray-500" />
                  </div>
                </div>
              </div>{' '}
              <div className="block_crypto_card_table_trow flex justify-between border-b border-[#ddd] p-[20px_14px]">
                <div className="block_crypto_card_table_item first:max-w-1/2 first:w-full first:justify-start">
                  <p className="text-base font-medium leading-[26px] text-[#1d2127]">
                    No Volatility Risks
                  </p>
                </div>
                <div className="block_crypto_card_table_item relative flex w-full max-w-[18%] items-center justify-center">
                  <div className="block_crypto_card_table_item_blured_icon">
                    <XMarkIcon className="h-6 w-6 text-gray-500" />
                  </div>
                </div>
                <div className="block_crypto_card_table_item relative flex w-full max-w-[18%] items-center justify-center">
                  <div className="block_crypto_card_table_item_blured_icon">
                    <CheckIcon className="h-6 w-6 text-blue-500" />
                  </div>
                </div>
                <div className="block_crypto_card_table_item relative flex w-full max-w-[18%] items-center justify-center">
                  <div className="block_crypto_card_table_item_blured_icon">
                    <CheckIcon className="h-6 w-6 text-blue-500" />
                  </div>
                </div>
              </div>{' '}
              <div className="block_crypto_card_table_trow flex justify-between border-b border-[#ddd] p-[20px_14px]">
                <div className="block_crypto_card_table_item first:max-w-1/2 first:w-full first:justify-start">
                  <p className="text-base font-medium leading-[26px] text-[#1d2127]">
                    Regulated
                  </p>
                </div>
                <div className="block_crypto_card_table_item relative flex w-full max-w-[18%] items-center justify-center">
                  <div className="block_crypto_card_table_item_blured_icon">
                    <XMarkIcon className="h-6 w-6 text-gray-500" />
                  </div>
                </div>
                <div className="block_crypto_card_table_item relative flex w-full max-w-[18%] items-center justify-center">
                  <div className="block_crypto_card_table_item_blured_icon flex items-center">
                    <CheckIcon className="h-6 w-6 text-blue-500" /> /{' '}
                    <XMarkIcon className="h-6 w-6 text-gray-500" />
                  </div>
                </div>
                <div className="block_crypto_card_table_item relative flex w-full max-w-[18%] items-center justify-center">
                  <div className="block_crypto_card_table_item_blured_icon flex items-center">
                    <CheckIcon className="h-6 w-6 text-blue-500" /> /{' '}
                    <XMarkIcon className="h-6 w-6 text-gray-500" />
                  </div>
                </div>
              </div>{' '}
              <div className="block_crypto_card_table_trow flex justify-between border-b border-[#ddd] p-[20px_14px]">
                <div className="block_crypto_card_table_item first:max-w-1/2 first:w-full first:justify-start">
                  <p className="text-base font-medium leading-[26px] text-[#1d2127]">
                    Transaction Limits
                  </p>
                </div>
                <div className="block_crypto_card_table_item relative flex w-full max-w-[18%] items-center justify-center text-sm font-normal leading-[22px] text-[#204bdb]">
                  <div className="block_crypto_card_table_item_blured_icon">
                    <p>No limits</p>
                  </div>
                </div>
                <div className="block_crypto_card_table_item relative flex w-full max-w-[18%] items-center justify-center text-sm font-normal leading-[22px] text-[#204bdb]">
                  <div className="block_crypto_card_table_item_blured_icon">
                    <p>No limits</p>
                  </div>
                </div>
                <div className="block_crypto_card_table_item relative flex w-full max-w-[18%] items-center justify-center text-sm font-normal leading-[22px] text-[#999999]">
                  <div className="block_crypto_card_table_item_blured_icon">
                    <p>Restrictions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="block_scheme white_section py-[150px]">
          <div className="container mx-auto w-full w-full max-w-[1356px] p-0">
            <div className="section_top_parth mb-[90px] w-full max-w-[580px]">
              <h2 className="mb-8 text-[36px] font-semibold leading-[48px] text-[#1d2127]">
                Settlements
              </h2>
              <p className="section_top_parth_description text-[16px] font-normal leading-[26px] text-[#3b4048]">
                We provide secure settlement options and statements in all the
                main cryptocurrencies and stablecoins.
              </p>
            </div>
          </div>
          <div className="container mx-auto w-full w-full max-w-[1356px] p-0">
            <div className="svg_scheme">
              <div className="svg_scheme_container resize-v2-wrapper">
                <Image
                  className="lazy resize-v2"
                  decoding="async"
                  loading="lazy"
                  width={500}
                  max-width="100%"
                  height={500}
                  style={{
                    width: '100%',
                    height: 'auto',
                  }}
                  src="/svg/Avaliable-Settlements.svg"
                  alt="Avaliable Settlements"
                  title="Avaliable Settlements"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="block_textbox_slider white_section py-[150px]">
          <div className="container mx-auto w-full w-full max-w-[1356px] p-0">
            <div className="section_top_parth mb-[90px] w-full max-w-[580px]">
              <h2 className="mb-8 text-[36px] font-semibold leading-[48px] text-[#1d2127]">
                Crypto Payment Service Provider
              </h2>
              <p className="section_top_parth_description text-[16px] font-normal leading-[26px] text-[#3b4048]">
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
        <section className="block_business_model white_section py-[150px]">
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
                  className="lazy mb-[24px] max-w-[50px] object-contain"
                  decoding="async"
                  loading="lazy"
                  width={50}
                  height={50}
                  src="/svg/Icons-6.svg"
                  alt="Icons"
                  title="Icons"
                />
                <h4 className="mb-[8px] text-[18px] font-semibold leading-[27px] tracking-normal text-[#3b4048]">
                  E-commerce
                </h4>
                <p>
                  The world of e-commerce has experienced massive growth. Reap
                  the benefits of the huge online market by accepting crypto
                  payments.
                </p>
              </div>
              <div className="block_business_model_slider_row_single mb-[56px] w-full max-w-[300px]">
                <Image
                  className="lazy mb-[24px] max-w-[50px] object-contain"
                  decoding="async"
                  loading="lazy"
                  width={50}
                  height={50}
                  src="/svg/Icons-7.svg"
                  alt="Icons"
                  title="Icons"
                />
                <h4 className="mb-[8px] text-[18px] font-semibold leading-[27px] tracking-normal text-[#3b4048]">
                  FOREX &amp; CFD Brokers
                </h4>
                <p>
                  Attract new clients by offering them a way to top up their
                  accounts with many different cryptocurrencies.
                </p>
              </div>
              <div className="block_business_model_slider_row_single mb-[56px] w-full max-w-[300px]">
                <Image
                  className="lazy mb-[24px] max-w-[50px] object-contain"
                  decoding="async"
                  loading="lazy"
                  width={50}
                  height={50}
                  src="/svg/Icons-8.svg"
                  alt="Icons"
                  title="Icons"
                />
                <h4 className="mb-[8px] text-[18px] font-semibold leading-[27px] tracking-normal text-[#3b4048]">
                  Marketplaces
                </h4>
                <p>
                  There are many platforms used by businesses to sell their
                  products or services. Offering crypto payments to customers is
                  now the advantage.
                </p>
              </div>
              <div className="block_business_model_slider_row_single mb-[56px] w-full max-w-[300px]">
                <Image
                  className="lazy mb-[24px] max-w-[50px] object-contain"
                  decoding="async"
                  loading="lazy"
                  width={50}
                  height={50}
                  src="/svg/Icons-9.svg"
                  alt="Icons"
                  title="Icons"
                />
                <h4 className="mb-[8px] text-[18px] font-semibold leading-[27px] tracking-normal text-[#3b4048]">
                  Gaming
                </h4>
                <p>
                  Online gaming is massively popular. Payment systems for the
                  gaming industry should ideally offer users the chance to play
                  using crypto.
                </p>
              </div>
              <div className="block_business_model_slider_row_single mb-[56px] w-full max-w-[300px]">
                <Image
                  className="lazy mb-[24px] max-w-[50px] object-contain"
                  decoding="async"
                  loading="lazy"
                  width={50}
                  height={50}
                  src="/svg/Icons-10.svg"
                  alt="Icons"
                  title="Icons"
                />
                <h4 className="mb-[8px] text-[18px] font-semibold leading-[27px] tracking-normal text-[#3b4048]">
                  Gambling
                </h4>
                <p>
                  The global online gambling industry is worth billions of
                  dollars. Crypto payments are part for the course.
                </p>
              </div>
              <div className="block_business_model_slider_row_single mb-[56px] w-full max-w-[300px]">
                <Image
                  className="lazy mb-[24px] max-w-[50px] object-contain"
                  decoding="async"
                  loading="lazy"
                  width={50}
                  height={50}
                  src="/svg/Icons-11.svg"
                  alt="Icons"
                  title="Icons"
                />
                <h4 className="mb-[8px] text-[18px] font-semibold leading-[27px] tracking-normal text-[#3b4048]">
                  Hedge / Investment Fund
                </h4>
                <p>
                  Hedge / Investment funds can generate hundreds of millions of
                  dollars in management and performance fees. Crypto payments
                  are an obvious choice.
                </p>
              </div>
              <div className="block_business_model_slider_row_single mb-[56px] w-full max-w-[300px]">
                <Image
                  className="lazy mb-[24px] max-w-[50px] object-contain"
                  decoding="async"
                  loading="lazy"
                  width={50}
                  height={50}
                  src="/svg/Icons-12.svg"
                  alt="Icons"
                  title="Icons"
                />
                <h4 className="mb-[8px] text-[18px] font-semibold leading-[27px] tracking-normal text-[#3b4048]">
                  Travel Industry
                </h4>
                <p>
                  The travel industry is a growing sector. With increasing
                  bookings now made online, it makes financial sense to accept
                  crypto payments.
                </p>
              </div>
              <div className="block_business_model_slider_row_single mb-[56px] w-full max-w-[300px]">
                <Image
                  className="lazy mb-[24px] max-w-[50px] object-contain"
                  decoding="async"
                  loading="lazy"
                  width={50}
                  height={50}
                  src="/svg/Icons-13.svg"
                  alt="Icons"
                  title="Icons"
                />
                <h4 className="mb-[8px] text-[18px] font-semibold leading-[27px] tracking-normal text-[#3b4048]">
                  Legal and Consulting Services
                </h4>
                <p>
                  Everything now is regulated by contracts and legal agreements.
                  Experts in that area are in demand. Provide your clients a way
                  to pay for your services in crypto.
                </p>
              </div>
              <div className="block_business_model_slider_row_single mb-[56px] w-full max-w-[300px]">
                <Image
                  className="lazy mb-[24px] max-w-[50px] object-contain"
                  decoding="async"
                  loading="lazy"
                  width={50}
                  height={50}
                  src="/svg/Icons-14.svg"
                  alt="Icons"
                  title="Icons"
                />
                <h4 className="mb-[8px] text-[18px] font-semibold leading-[27px] tracking-normal text-[#3b4048]">
                  Marketing Agencies
                </h4>
                <p>
                  Marketing agencies are in demand as ever. Attract new clients
                  by accepting payments in cryptocurrencies.
                </p>
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
