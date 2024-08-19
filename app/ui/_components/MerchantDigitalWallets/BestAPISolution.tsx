import Image from 'next/image';

const BestAPISolution = () => {
  return (
    <section className="block_scheme white_section pb-[150px]">
      <div className="container mx-auto w-full max-w-[1356px] p-0">
        <div className="section_top_parth mb-[90px] w-full max-w-[580px]">
          <h2 className="mb-[32px] text-[36px] font-bold leading-[48px]">
            The Best API Solution
          </h2>
          <p className="section_top_parth_description text-base font-normal leading-[26px] text-gray-700">
            Fast integration with ease via Rest API. Our state-of-the-art
            technology enables you to integrate invoicing and handle acquiring
            and transfers the exact way you need it.
          </p>
        </div>
      </div>
      <div className="container mx-auto w-full max-w-[1356px] p-0">
        <div className="svg_scheme flex justify-center">
          <div className="svg_scheme_container resize-v2-wrapper">
            <Image
              className="lazy resize-v2 w-full max-w-full"
              decoding="async"
              loading="lazy"
              src="/svg/Frame-48095742.svg"
              alt="API Solution"
              title="API Solution"
              width={0}
              height={0}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestAPISolution;
