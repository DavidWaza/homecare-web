import React from "react";
import Image from "next/image";
import ServicesCard from "@/components/ServicesCard/ServicesCard";
import Link from "next/link";
import { link } from "fs";

export const metadata = {
  title: "Our Services",
};

export default function Services() {
  const ServicesProp = [
    {
      id: 1,
      title: "Elderly Care",
      link: "#elder",
    },
    {
      id: 2,
      title: "Disability Support",
      link: "#support",
    },
    {
      id: 3,
      title: "Post-Operative Care",
      link: "#care",
    },
    {
      id: 4,
      title: "Personal Services",
      link: "#service",
    },
  ];
  return (
    <section className="">
      <h1 className="text-[#228634] xl:text-5xl lg:text-5xl md:text-4xl sm:text-3xl text-2xl text-center font-semibold xl:mt-20 lg:mt-20 md:mt-5 mt-5">
        Our Services
      </h1>
      <div className="py-5 space-x-5 hidden xl:flex xl:justify-center xl:flex-wrap xl:mb-40 lg:flex lg:justify-center lg:flex-wrap lg:mb-40 md:flex md:justify-center md:flex-wrap md:mb-40">
        {ServicesProp.map((item) => (
          <div
            key={item.id}
            className="bg-[#008732] py-2 px-5 rounded-full hover:bg-[#F2F8E3] transition-all ease-in-out"
          >
            <Link href={item.link}>
              <p className="text-white hover:text-[#008732]">{item.title}</p>
            </Link>
          </div>
        ))}
      </div>

      <section
        id="elder"
        className="grid xl:grid-cols-2 md:gap-10 py-10 xl:mx-40 lg:mx-40 md:mx-20  sm:mx-10 mx-7 md:border-t border-green-400 border-solid mb-10"
      >
        <div className="flex order-2 xl:order-1 lg:order-1 md:order-1 sm:order-1 flex-col justify-center space-y-4 ">
          <h1 className="xl:text-3xl lg:text-3xl md:text-2xl sm:text-2xl text-xl font-semibold text-[#008732]">
            Elder care
          </h1>
          <p className="xl:text-lg lg:text-lg md:text-lg sm:text-base text-sm">
            Our elderly care services are designed to support seniors in
            maintaining their independence and quality of life. Our trained care
            givers provide assistance with daily activities, such as bathing,
            dressing, and meal preparation, as well as companionship to help
            prevent loneliness and promote mental well-being and peace of mind
            for both clients and their families.
          </p>
          <p className="xl:text-lg lg:text-lg md:text-lg sm:text-base text-sm">
            {" "}
            It aims to enhance the quality of life, promote autonomy, and foster
            a sense of community. Beneficiaries include individuals with
            physical, intellectual, or developmental disabilities who seek to
            maintain independence while having access to tailored support that
            empowers them to achieve their fullest potential.
          </p>
        </div>
        <div className="sm:order-1 order-1 xl:block lg:block md:block mb-10">
          <Image
            src={"/commitment.jpg"}
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto object-contain object-center rounded-lg"
            alt=""
          />
        </div>
      </section>
      <section
        id="support"
        className="grid xl:grid-cols-2 md:gap-10 xl:mx-40 lg:mx-40 md:mx-20 sm:mx-10 mx-7  border-t border-green-400 border-solid mb-10"
      >
        <div className="py-5">
          <Image
            src={"/communityService.jpg"}
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto max-h-[30rem] object-cover object-center rounded-lg"
            alt=""
          />
        </div>
        <div className="flex flex-col justify-center space-y-4">
          <h1 className="xl:text-3xl lg:text-3xl md:text-2xl sm:text-2xl text-xl font-semibold text-[#008732] mt-10">
            Disability Support
          </h1>
          <p className="xl:text-lg lg:text-lg md:text-lg sm:text-base text-sm">
            We understand the unique challenges faced by individuals with
            disabilities. Our disability support services are customized to each
            client&apos;s needs, focusing on promoting independence, mobility,
            and safety. From help with personal care and daily routines to
            specialized support with mobility and communication, we are here to
            assist with respect and sensitivity.
          </p>
          <p className="xl:text-lg lg:text-lg md:text-lg sm:text-base text-sm">
            {" "}
            Our partnerships with local organizations and community centers
            enhance these offerings, creating an inclusive environment where
            everyone can thrive and participate fully in community life.
          </p>
        </div>
      </section>
      <section
        id="care"
        className="grid xl:grid-cols-2 md:gap-10 py-10 xl:mx-40 lg:mx-40 md:mx-20 sm:mx-10 mx-7 border-t border-green-400 border-solid mb-10"
      >
        <div className="flex order-2 xl:order-1 lg:order-1 md:order-1 sm:order-1 flex-col justify-center space-y-4 mb-10">
          <h1 className="xl:text-3xl lg:text-3xl md:text-2xl sm:text-2xl text-xl font-semibold text-[#008732]">
            Post-Operative Care
          </h1>
          <p className="xl:text-lg lg:text-lg md:text-lg sm:text-base text-sm">
            Recovering from surgery can be challenging, but you don&apos;t have
            to do it alone. Our goal is to ensure a smooth recovery process by
            providing professional, compassionate care in the comfort of your
            home.
          </p>
        </div>
        <div className="sm:order-1 order-1 xl:block lg:block md:block mb-10 ">
          <Image
            src={"/ShortTermAccomodation.jpg"}
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto object-contain object-center rounded-lg"
            alt=""
          />
        </div>
      </section>
      <section
        id="service"
        className="grid xl:grid-cols-2 md:gap-10 py-10 xl:mx-40 lg:mx-40 md:mx-20 sm:mx-10 mx-7 border-t border-green-400 border-solid mb-10"
      >
        <div className="sm:order-1 order-1 xl:block lg:block md:block mb-10 ">
          <Image
            src={"/ShortTermAccomodation.jpg"}
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto object-contain object-center rounded-lg"
            alt=""
          />
        </div>
        <div className="flex order-2 xl:order-1 lg:order-1 md:order-1 sm:order-1 flex-col justify-center space-y-4 mb-10">
          <h1 className="xl:text-3xl lg:text-3xl md:text-2xl sm:text-2xl text-xl font-semibold text-[#008732]">
            Personal Services
          </h1>
          <p className="xl:text-lg lg:text-lg md:text-lg sm:text-base text-sm">
            Our personal services are designed to make daily life easier and
            more enjoyable. From housekeeping and laundry to meal preparation
            and grooming, we help maintain a clean, safe, and comfortable living
            environment. Let us take care of the daily tasks so you can focus on
            what truly matters.
          </p>
        </div>
      </section>
    </section>
  );
}
