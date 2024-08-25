import Image from 'next/image';
import useCasesMerchantDigitalWallets from '@/app/ui/_data/MerchantDigitalWallets/CryptoProcessingTailored.json';
import useCasesEnterpriseBlockchainWallets from '@/app/ui/_data/EnterpriseBlockchainWallets/CryptoWalletsTailored.json';

const HomeUseCasesSection = () => {
  return (
    <section className="use-cases py-12">
      <div className="use-cases__container container mx-auto w-full max-w-[1356px]">
        <h2 className="use-cases__title mb-[90px] text-3xl font-semibold leading-[1.35] text-[#1d2127]">
          Use Cases of Our Products
        </h2>
        {useCasesMerchantDigitalWallets.map((useCase, index) => (
          <div
            key={index}
            className={`use-cases__row row-use-cases flex-start relative mb-8 flex flex-wrap before:absolute before:left-0 before:top-0 before:h-[1px] before:w-full before:bg-[#ddd] before:content-[''] ${index !== useCasesMerchantDigitalWallets.length - 1 ? 'pb-4' : ''}`}
          >
            <div className="row-use-cases__title-col mb-4 flex flex-[25%]">
              <div className="row-use-cases__title mt-6 pr-9 text-2xl font-semibold leading-[1.5] text-[#3d3d3d]">
                {useCase.title}
              </div>
            </div>
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
        {useCasesEnterpriseBlockchainWallets.map((useCase, index) => (
          <div
            key={index}
            className={`use-cases__row row-use-cases flex-start relative mb-8 flex flex-wrap before:absolute before:left-0 before:top-0 before:h-[1px] before:w-full before:bg-[#ddd] before:content-[''] ${index !== useCasesEnterpriseBlockchainWallets.length - 1 ? 'pb-4' : ''}`}
          >
            <div className="row-use-cases__title-col mb-4 flex flex-[25%]">
              <div className="row-use-cases__title mt-6 pr-9 text-2xl font-semibold leading-[1.5] text-[#3d3d3d]">
                {useCase.title}
              </div>
            </div>
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

export default HomeUseCasesSection;