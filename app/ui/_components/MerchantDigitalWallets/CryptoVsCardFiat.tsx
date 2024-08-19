import { CheckIcon, XMarkIcon } from '@heroicons/react/24/outline';

const CryptoVsCardFiat = () => {
  return (
    <section className="block_crypto_card white_section pb-[150px]">
      <div className="container mx-auto w-full w-full max-w-[1356px] p-0">
        <div className="section_top_parth mb-[90px] w-full max-w-[580px]">
          <h2 className="leading-12 mb-8 text-3xl font-bold">
            Crypto vs Cards/Fiat
          </h2>
          <p className="section_top_parth_description text-base font-normal leading-7">
            Crypto payments have many advantages compared with traditional Fiat
            payment methods. See the facts for yourself!
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
          </div>
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
          </div>
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
          </div>
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
          </div>
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
          </div>
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
          </div>
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
          </div>
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
          </div>
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
          </div>
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
          </div>
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
          </div>
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
  );
};

export default CryptoVsCardFiat;
