import React from "react";
import Image from "next/image";
import TabComponent from "../Tabs/Tabs";

const AboutSection = () => {
  return (
    <div className="py-[10rem] px-10 md:px-[10rem] lg:pl-[15rem]">
      <div className="grid xl:grid-cols-2 md:gap-10">
        <div className="flex gap-10">
          <Image
            src={"/black-mirror-man.jpg"}
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto object-contain object-center rounded-se-[90px]"
            alt=""
          />
        </div>
        <div className="pt-20">
          <p className="text-sm uppercase font-semibold text-[#008732]">
            Find out about us
          </p>
          <p className="text-[1rem] xl:leading-[35px] lg:text-[2rem] font-bold text-[#0C4219] oswald">
            Learn about our journey
          </p>
          <p className="text-[1rem] xl:leading-[35px] lg:text-[2rem] font-bold text-[#0C4219] oswald">
            we make in healthcare consultancy
          </p>
          <div className="pt-5">
            <TabComponent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
