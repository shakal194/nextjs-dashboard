import Image from 'next/image';

const CryptoWalletsTailored = () => {
  return (
    <section className="block_business_model white_section pb-[150px]">
      <div className="container mx-auto w-full max-w-[1356px] p-0">
        <div className="section_top_parth mb-[90px] w-full max-w-[580px]">
          <h2 className="mb-8 text-4xl font-bold">
            Crypto Wallets Tailored for Each Type of Business
          </h2>
          <p className="section_top_parth_description">
            Set up, configure and use cryptocurrency wallets for your business
            with ease. Our crypto wallets are easy to customise. We cover
            different types of businesses including Forex/Crypto brokers,
            Exchanges and Token issuers.
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
              src="/svg/Icons.svg"
              alt="Icons"
              title="Icons"
            />
            <h4 className="mb-[8px] text-[18px] font-semibold leading-[27px] tracking-normal text-[#3b4048] dark:text-white">
              Multi-Asset Brokers
            </h4>
            <p className="dark:text-slate-300">
              Add crypto as an additional asset to your platform as well as
              allow your clients a way to top up their accounts with crypto!
            </p>
          </div>
          <div className="block_business_model_slider_row_single mb-[56px] w-full max-w-[300px]">
            <Image
              className="lazy mb-[24px] h-[50px] w-[50px] object-contain"
              decoding="async"
              loading="lazy"
              width={0}
              height={0}
              src="/svg/Icons-1.svg"
              alt="Icons"
              title="Icons"
            />
            <h4 className="mb-[8px] text-[18px] font-semibold leading-[27px] tracking-normal text-[#3b4048] dark:text-white">
              Crypto Brokers
            </h4>
            <p className="dark:text-slate-300">
              Offer your clients an opportunity to trade and deposit many
              different cryptocurrencies.
            </p>
          </div>
          <div className="block_business_model_slider_row_single mb-[56px] w-full max-w-[300px]">
            <Image
              className="lazy mb-[24px] h-[50px] w-[50px] object-contain"
              decoding="async"
              loading="lazy"
              width={0}
              height={0}
              src="/svg/Icons-2 (1).svg"
              alt="Icons"
              title="Icons"
            />
            <h4 className="mb-[8px] text-[18px] font-semibold leading-[27px] tracking-normal text-[#3b4048] dark:text-white">
              Converters
            </h4>
            <p className="dark:text-slate-300">
              Provide your clients with an ability to convert their crypto and
              fiat to any of the accepted currencies. Our solution offers
              user-friendly interface and industry leading exchange rates!
            </p>
          </div>
          <div className="block_business_model_slider_row_single mb-[56px] w-full max-w-[300px]">
            <Image
              className="lazy mb-[24px] h-[50px] w-[50px] object-contain"
              decoding="async"
              loading="lazy"
              width={0}
              height={0}
              src="/svg/Icons-3 (1).svg"
              alt="Icons"
              title="Icons"
            />
            <h4 className="mb-[8px] text-[18px] font-semibold leading-[27px] tracking-normal text-[#3b4048] dark:text-white">
              Margin Exchanges
            </h4>
            <p className="dark:text-slate-300">
              Allow your clients to make spot purchases and sales of
              cryptocurrencies using margin. Coinsbuy has all the functionality
              needed to implement it!
            </p>
          </div>
          <div className="block_business_model_slider_row_single mb-[56px] w-full max-w-[300px]">
            <Image
              className="lazy mb-[24px] h-[50px] w-[50px] object-contain"
              decoding="async"
              loading="lazy"
              width={0}
              height={0}
              src="/svg/Icons-4.svg"
              alt="Icons"
              title="Icons"
            />
            <h4 className="mb-[8px] text-[18px] font-semibold leading-[27px] tracking-normal text-[#3b4048] dark:text-white">
              Crypto Exchanges (CEX)
            </h4>
            <p className="dark:text-slate-300">
              The core mechanism behind every exchange. Our gateway provides the
              technology to handle all your crypto transactions.
            </p>
          </div>
          <div className="block_business_model_slider_row_single mb-[56px] w-full max-w-[300px]">
            <Image
              className="lazy mb-[24px] h-[50px] w-[50px] object-contain"
              decoding="async"
              loading="lazy"
              width={0}
              height={0}
              src="/svg/Icons-5.svg"
              alt="Icons"
              title="Icons"
            />
            <h4 className="mb-[8px] text-[18px] font-semibold leading-[27px] tracking-normal text-[#3b4048] dark:text-white">
              Mobile Wallet Apps
            </h4>
            <p className="dark:text-slate-300">
              Coinsbuy can be easily integrated with any mobile app. Offer your
              clients a way to securely store cryptocurrencies, tokens and
              stablecoins.
            </p>
          </div>
          <div className="block_business_model_slider_row_single empty_box mb-[56px] w-full max-w-[300px]"></div>
          <div className="block_business_model_slider_row_single empty_box mb-[56px] w-full max-w-[300px]"></div>
        </div>
      </div>
    </section>
  );
};

export default CryptoWalletsTailored;
