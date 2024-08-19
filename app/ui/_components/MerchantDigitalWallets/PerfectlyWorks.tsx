import Image from 'next/image';

const PerfectlyWorks = () => {
  return (
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
    </section>
  );
};

export default PerfectlyWorks;
