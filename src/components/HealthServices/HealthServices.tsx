import {
  Accessibility,
  CircleCheckBig,
  HeartHandshake,
  HousePlus,
  PersonStanding,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const homecareMedicalList = [
  "Routine & medical Care",
  "Healtcare Services",
  "Save the children",
  "State of the act facilities",
  "Expertise in healthcare dynamics",
  "Proven track records of success",
];
const HealthServices = () => {
  return (
    <div className="bg-[#228634] service-bg py-10 ">
      <div className="content py-[7rem] px-10 xl:px-[10rem] lg:px-[15rem]">
        <div className="grid lg:grid-cols-2 gap-5">
          <div>
            <p className="text-white uppercase font-semibold text-sm py-2">
              Homecare medical
            </p>
            <p className="md:text-[3rem] text-[1.5rem] text-white font-semibold w-full md:w-[80%] md:leading-[60px]">
              Comprehensive & Customized patient care restore health.
            </p>
            <div className="grid md:grid-cols-2 py-10 md:space-y-2 space-y-4">
              {homecareMedicalList.map((item, index) => (
                <>
                  <div className="flex item-center gap-2">
                    <CircleCheckBig className="text-[#F2F8E3]" />
                    <p className="text-[#F2F8E3]">{item}</p>
                  </div>
                </>
              ))}
            </div>
          </div>
          <div>
            <p className="text-white uppercase font-semibold text-sm py-2">
              Services
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 py-10">
              <div className="group space-y-5 hover:bg-[#F2F8E3] p-6 rounded-lg">
                <Link href={"#"}>
                  <Accessibility
                    size={40}
                    className="text-[#F2F8E3] group-hover:text-black animate-pulse"
                  />
                  <p className="text-sm md:text-lg font-semibold text-[#F2F8E3] group-hover:text-black">
                    Suportive independent living(SIL)
                  </p>
                </Link>
              </div>
              <div className="group space-y-5 hover:bg-[#F2F8E3] p-6 rounded-lg">
                <Link href={"#"}>
                  <PersonStanding
                    size={40}
                    className="text-[#F2F8E3] group-hover:text-black animate-pulse"
                  />
                  <p className="text-sm md:text-lg font-semibold text-[#F2F8E3] group-hover:text-black">
                    Community Access
                  </p>
                </Link>
              </div>
              <div className="group space-y-5 hover:bg-[#F2F8E3] p-6 rounded-lg">
                <Link href={"#"}>
                  <HousePlus
                    size={30}
                    className="text-[#F2F8E3] group-hover:text-black animate-pulse"
                  />

                  <p className="text-sm md:text-lg font-semibold text-[#F2F8E3] group-hover:text-black">
                    Short term Accomodation
                  </p>
                </Link>
              </div>
              <div className="group space-y-5 hover:bg-[#F2F8E3] p-6 rounded-lg">
                <Link href={"#"}>
                  <HeartHandshake
                    size={30}
                    className="text-[#F2F8E3] group-hover:text-black animate-pulse"
                  />

                  <p className="text-sm md:text-lg font-semibold text-[#F2F8E3] group-hover:text-black">
                    In-home support
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthServices;
