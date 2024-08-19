import Image from 'next/image';
import CryptocurrencyPaymentPage from '@/app/ui/_data/MerchantDigitalWallets/CryptocurrencyPaymentPage.json';

const PaymentPage = () => {
  return (
    <section className="block_box_opacity white_section pb-[150px]">
      <div className="container mx-auto w-full max-w-[1356px] p-0">
        <div className="block_box_opacity_row flex w-full max-w-full justify-between">
          <div className="block_box_opacity_row_left w-full max-w-[45%] p-4">
            <div className="section_top_parth mb-8 mb-[90px] w-full max-w-[580px]">
              <h2 className="mb-4 text-[36px] font-semibold leading-[48px] dark:text-slate-100">
                Payment Page
              </h2>
              <p className="section_top_parth_description text-[16px] font-normal leading-[26px] text-[#3b4048] dark:text-slate-400">
                A highly-responsive payment page with live data. All you need is
                at your fingertips to create and send your customers detailed
                invoices.
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
  );
};

export default PaymentPage;
