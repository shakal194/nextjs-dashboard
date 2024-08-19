import dataSliderCryptoPaymentServiceProvider from '@/app/ui/_data/MerchantDigitalWallets/SliderCryptoPaymentServiceProvider.json';
import SliderCryptoPaymentServiceProvider from '@/app/ui/_components/MerchantDigitalWallets/SliderCryptoPaymentServiceProvider';

const CryptoPaymentServiceProvider = () => {
  return (
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
  );
};

export default CryptoPaymentServiceProvider;
