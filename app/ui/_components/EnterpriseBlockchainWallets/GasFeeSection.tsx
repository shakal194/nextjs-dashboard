import Image from 'next/image';

const GasFeeSection = () => {
  return (
    <section className="block_sticky white_section py-[150px]">
      <div className="container mx-auto w-full max-w-[1356px] p-0">
        <div className="block_box_with_list_row flex flex-wrap">
          <div className="block_box_with_list_row_left w-full md:w-1/2">
            <div className="section_top_parth mb-[90px] w-full max-w-[580px]">
              <h2 className="mb-8 text-[36px] font-bold leading-[48px]">
                – 50% of gas fee
              </h2>
              <p className="section_top_parth_description text-base font-normal leading-6 text-gray-700">
                <span className="uniq_text mb-8 block text-2xl font-normal leading-9 text-gray-700">
                  Smart Token Collection <b>decreases commission</b> and{' '}
                  <b>increases transaction speed</b>. Therefore,{' '}
                  <b>commission is paid only once</b>.
                </span>
              </p>
              <hr className="my-4 border border-solid border-[#204bdb]" />
              <p className="mt-8 text-xl font-normal leading-6 text-gray-700">
                The commission in ETH, BNB (BSC), TRX, ERC20, BEP20 and TRC20
                tokens is debited from the global wallet.
              </p>
            </div>
          </div>
          <div className="block_box_with_list_row_right w-full md:w-1/2">
            <div className="svg_scheme">
              <div className="svg_scheme_container resize-v2-wrapper relative w-full">
                <Image
                  className="lazy resize-v2 w-full"
                  decoding="async"
                  loading="lazy"
                  src="/svg/–-50-of-gas-fee.png"
                  alt="– 50% of gas fee"
                  title="– 50% of gas fee"
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GasFeeSection;
