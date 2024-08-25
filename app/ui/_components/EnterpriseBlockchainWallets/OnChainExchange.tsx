import Image from 'next/image';

const OnChainExchange = () => {
  return (
    <section className="block_box_with_list white_section pb-[150px]">
      <div className="container mx-auto">
        <div className="block_box_with_list_row flex flex-wrap">
          <div className="block_box_with_list_row_left w-full md:w-1/2">
            <div className="section_top_parth">
              <h2 className="mb-4 text-2xl font-bold">On-chain Exchange</h2>
              <p className="section_top_parth_description text-base font-normal leading-6 text-gray-700">
                <span className="bullet_mode relative mt-8 block pl-12 text-lg font-normal leading-6 text-gray-800 after:absolute after:left-0 after:top-0 after:text-2xl after:font-bold after:leading-8 after:text-blue-600 after:content-['1'] first:mt-24">
                  You create an exchange request. You can see how many coins you
                  will receive after the exchange is completed. Exchange rate is
                  frozen until the transaction is completed.
                </span>
                <span className="bullet_mode relative mt-8 block pl-12 text-lg font-normal leading-6 text-gray-800 after:absolute after:left-0 after:top-0 after:text-2xl after:font-bold after:leading-8 after:text-blue-600 after:content-['2']">
                  Your funds are sent for exchange. The correct amount of
                  cryptocurrency is withdrawn from your wallet.
                </span>
                <span className="bullet_mode relative mt-8 block pl-12 text-lg font-normal leading-6 text-gray-800 after:absolute after:left-0 after:top-0 after:text-2xl after:font-bold after:leading-8 after:text-blue-600 after:content-['3']">
                  Upon successful verification of transaction the amount of
                  funds displayed at step 1 is sent to your wallet.
                </span>
              </p>
            </div>
          </div>
          <div className="block_box_with_list_row_right w-full max-w-[50%]">
            <div className="svg_scheme">
              <div className="svg_scheme_container resize-v2-wrapper relative w-full">
                <Image
                  className="lazy resize-v2 w-full max-w-[full]"
                  decoding="async"
                  loading="lazy"
                  src="/svg/On-chain-Exchange.png"
                  alt="On-chain Exchange"
                  title="On-chain Exchange"
                  width={0}
                  height={0}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OnChainExchange;
