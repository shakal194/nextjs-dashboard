import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

import dataSliderCryptocurrencyMerchantDigitalWallets from '@/app/ui/_data/MerchantDigitalWallets/SliderCryptocurrencyMerchantDigitalWallets.json';
import SliderCryptocurrencyMerchantDigitalWallets from '@/app/ui/_components/MerchantDigitalWallets/SliderCryptocurrencyMerchantDigitalWallets';

const MerchantDigitalWallets = () => {
  return (
    <section className="block_hero white_section py-[150px]">
      <div className="container mx-auto w-full max-w-[1356px] p-0">
        <div className="block_hero_row z-2 relative flex items-center justify-between">
          <div className="block_hero_row_text_box w-full max-w-[544px]">
            <h1 className="mb-8 text-[48px] font-bold leading-[69px]">
              Merchant Digital Wallets
            </h1>
            <h4 className="section_description mt-4 text-lg">
              A solution enabling businesses to accept crypto payments in all
              major coins and exchange it all into Coins or Stablecoins.
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
    </section>
  );
};

export default MerchantDigitalWallets;
