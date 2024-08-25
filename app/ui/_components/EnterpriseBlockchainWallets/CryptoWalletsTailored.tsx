import Image from 'next/image';
import useCasesEnterpriseBlockchainWallets from '@/app/ui/_data/EnterpriseBlockchainWallets/CryptoWalletsTailored.json';

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
        {useCasesEnterpriseBlockchainWallets.map((useCase, index) => (
          <div
            key={index}
            className={`use-cases__row row-use-cases flex-start mb-8 flex flex-wrap ${index !== useCasesEnterpriseBlockchainWallets.length - 1 ? 'pb-4' : ''}`}
          >
            <div className="row-use-cases__list flex flex-[74.5%] flex-wrap items-start justify-between gap-4">
              {useCase.items.map((item, idx) => (
                <div
                  key={idx}
                  className="row-use-cases__item flex-33% visible scale-100 p-4 py-6 pb-8 pt-6 opacity-100 transition duration-1000"
                >
                  <div className="icon mb-[24px]">
                    <Image
                      className="lazy"
                      decoding="async"
                      loading="lazy"
                      fetchPriority="low"
                      src={item.imgSrc}
                      alt={item.imgAlt}
                      width={50}
                      height={50}
                    />
                  </div>
                  <div className="title mb-2 text-lg font-semibold leading-[1.5] text-[#3b4048]">
                    {item.title}
                  </div>
                  <div className="text text-sm leading-[1.6] text-[#5f5f6a]">
                    {item.text}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CryptoWalletsTailored;
