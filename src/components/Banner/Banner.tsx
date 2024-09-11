"use client";

import React from "react";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <section className="bg-hero">
      <div className="  h-full py-10 w-full ">
        <div className=" px-10 xl:px-[10rem] lg:px-[15rem] ">
          <div className="lg:pt-[5rem] pt-10">
            <div className="content">
              <p className="uppercase text-white font-medium md:font-semibold text-sm">
                Your Trusted Homecare Consulting Partner
              </p>
              <p className="uppercase text-white font-semibold text-[32px] md:leading-[70px] leading-[40px] w-full lg:text-[4rem] lg:w-[80%] oswald">
                We are Dedicated to Empowering Homecare Excellence
              </p>
              <p className="uppercase text-white text-sm font-medium md:w-1/2 leading-[20px] pt-5">
                Providing expert guidance to elevate the quality of care for
                homecare professionals and their patients.
              </p>

              <div className="py-10 flex gap-6 items-center">
                <motion.div whileHover={{ scale: 1.1 }}>
                  <button className="py-3 border px-5 md:px-10 rounded-full border-none text-white text-nowrap text-center bg-[#008732] hover:bg-[#F2F8E3]  hover:border-[#008732] hover:text-[#008732] transition-all ease-in-out">
                    Our services
                  </button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }}>
                  <button className="py-3 border border-[#008732] px-5 md:px-10 text-nowrap text-[#008732] rounded-full text-center bg-[#F2F8E3]  hover:border-[#008732] hover:text-[#008732] transition-all ease-in-out">
                    Learn more
                  </button>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
