import Image from 'next/image';

const HighPerformanceSoftwareInfrastructure = () => {
  return (
    <section className="block_scheme white_section pb-[150px]">
      <div className="container mx-auto w-full max-w-[1356px] p-0">
        <div className="section_top_parth mb-[90px] w-full max-w-[580px]">
          <h2 className="mb-[32px] text-[36px] font-bold leading-[48px]">
            High-Performance Software Infrastructure
          </h2>
          <p className="section_top_parth_description text-base font-normal leading-[26px] text-gray-700">
            Our infrastructure operates on multiple servers across several data
            centres ensuring super-fast data delivery and the lowest possible
            latency. We have redundant hosting and load-balanced environments
            to&nbsp;ensure maximum reliability.
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
              src="/svg/Frame-48095778-1.svg"
              alt="High-Performance Software Infrastructure"
              title="High-Performance Software Infrastructure"
              width={0}
              height={0}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HighPerformanceSoftwareInfrastructure;