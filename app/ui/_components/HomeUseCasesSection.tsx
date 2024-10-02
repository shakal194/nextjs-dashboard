import Image from 'next/image';
import useCasesMerchantDigitalWallets from '@/app/ui/_data/MerchantDigitalWallets/CryptoProcessingTailored.json';
import useCasesEnterpriseBlockchainWallets from '@/app/ui/_data/EnterpriseBlockchainWallets/CryptoWalletsTailored.json';

const HomeUseCasesSection = () => {
  return (
    <section className="use-cases py-[72px] lg:py-12">
      <div className="use-cases__container container mx-auto w-full max-w-[1356px]">
        <h2 className="use-cases__title mb-[56px] text-3xl font-semibold leading-[1.35] md:mb-[90px] ">
          Use Cases of Our Products
        </h2>
        {useCasesMerchantDigitalWallets.map((useCase, index) => (
          <div
            key={index}
            className={`use-cases__row row-use-cases flex-start relative mb-8 flex flex-wrap before:absolute before:left-0 before:top-0 before:h-[1px] before:w-full before:bg-[#ddd] before:content-[''] ${index !== useCasesMerchantDigitalWallets.length - 1 ? 'pb-4' : ''}`}
          >
            <div className="row-use-cases__title-col mb-4 flex flex-100 flex-[25%]">
              <div className="row-use-cases__title mt-6 pr-9 text-2xl font-semibold leading-[1.5] text-[#3d3d3d] dark:text-[#d3d3e3]">
                {useCase.title}
              </div>
            </div>
            <div className="row-use-cases__list flex flex-[74.5%] flex-wrap items-start justify-between gap-4">
              {useCase.items.map((item, idx) => (
                <div
                  key={idx}
                  className="row-use-cases__item visible flex scale-100 flex-col gap-[20px] p-4 opacity-100 transition duration-1000 md:flex-50% md:pb-8 md:pt-6 lg:flex-33% lg:flex-wrap lg:items-center"
                >
                  <div className="icon mb-[24px]">
                    <Image
                      className="lazy h-[50px] w-[50px]"
                      decoding="async"
                      loading="lazy"
                      fetchPriority="low"
                      src={item.imgSrc}
                      alt={item.imgAlt}
                      width={0}
                      height={0}
                    />
                  </div>
                  <div className="title mb-2 text-lg font-semibold leading-[1.5] text-[#3b4048] dark:text-[#c8cfdb]">
                    {item.title}
                  </div>
                  <div className="text text-sm leading-[1.6] text-[#3b4048] dark:text-[#c2c2d1]">
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
              <div className="row-use-cases__title mt-6 pr-9 text-2xl font-semibold leading-[1.5] text-[#3d3d3d] dark:text-[#d3d3e3]">
                {useCase.title}
              </div>
            </div>
            <div className="row-use-cases__list flex flex-[74.5%] flex-wrap items-start justify-between gap-4">
              {useCase.items.map((item, idx) => (
                <div
                  key={idx}
                  className="row-use-cases__item visible flex scale-100 flex-col gap-[20px] p-4 opacity-100 transition duration-1000 md:flex-50% md:pb-8 md:pt-6 lg:flex-33% lg:flex-wrap lg:items-center"
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
                  <div className="title mb-2 text-lg font-semibold leading-[1.5] text-[#3b4048] dark:text-[#c8cfdb]">
                    {item.title}
                  </div>
                  <div className="text text-sm leading-[1.6] text-[#3b4048] dark:text-[#c2c2d1]">
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
