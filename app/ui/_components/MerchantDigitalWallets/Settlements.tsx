import Image from 'next/image';

const Settlements = () => {
  return (
    <section className="block_scheme white_section pb-[150px]">
      <div className="container mx-auto w-full w-full max-w-[1356px] p-0">
        <div className="section_top_parth mb-[90px] w-full max-w-[580px]">
          <h2 className="mb-8 text-[36px] font-bold leading-[48px]">
            Settlements
          </h2>
          <p className="section_top_parth_description text-[16px] font-normal leading-[26px] text-[#3b4048] dark:text-white">
            We provide secure settlement options and statements in all the main
            cryptocurrencies and stablecoins.
          </p>
        </div>
      </div>
      <div className="container mx-auto w-full w-full max-w-[1356px] p-0">
        <div className="svg_scheme">
          <div className="svg_scheme_container resize-v2-wrapper">
            <Image
              className="lazy resize-v2 w-full max-w-full"
              decoding="async"
              loading="lazy"
              width={0}
              height={0}
              src="/svg/Avaliable-Settlements.svg"
              alt="Avaliable Settlements"
              title="Avaliable Settlements"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Settlements;
