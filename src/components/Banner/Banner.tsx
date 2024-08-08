import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <section className="set-image pattern">
      <div className=" bg-[#fdfdfc] h-full pb-10 w-full slanted-div">
        <div className=" py-5 px-10 xl:px-[10rem] lg:px-[15rem]">
          <div className="lg:pt-[10rem] py-5">
            <div>
              <p className="uppercase text-[#008732] font-semibold">
                healthcare consulting partner.
              </p>
              <p className="uppercase text-[#0C4219] font-semibold md:leading-[80px] text-[2rem] w-full lg:text-[4rem] lg:w-[80%] oswald">
                We are Dedicated Empowering Healthcare Excellence.
              </p>
              <p className="uppercase text-[#008732] text-sm font-medium md:w-1/2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                amet reiciendis praesentium nesciunt quaerat rerum quos mollitia
                odio
              </p>
              <div className="py-10 flex gap-6 items-center">
                <button className="py-3 border px-5 md:px-10 rounded-full text-white text-nowrap text-center bg-[#008732] hover:bg-[#F2F8E3]  hover:border-[#008732] hover:text-[#008732] transition-all ease-in-out">
                  Our services
                </button>
                <button className="py-3 border border-[#008732] px-5 md:px-10 text-nowrap text-[#008732] rounded-full text-center bg-transparent hover:bg-[#F2F8E3]  hover:border-[#008732] hover:text-[#008732] transition-all ease-in-out">
                  Learn more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
