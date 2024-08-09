import React from "react";
import Image from "next/image";
import ServicesCard from "@/components/ServicesCard/ServicesCard";
export default function Services() {
  const ServicesProp = [
    {
      id: 1,
      title: "Supportive Independent Living",
      description:
        "Supportive Independent Living is a service designed to help individuals with disabilities live independently while receiving the necessary assistance to thrive",
    },
    {
      id: 2,
      title: "Community Access",
      description:
        "Community Access services are designed to connect individuals with disabilities to enriching social, recreational, and educational opportunities",
    },
    {
      id: 3,
      title: "Short Term Accommodation",
      description:
        "Our Short Term Accommodation services provide a temporary, supportive living environment for individuals needing respite care, post-surgery recovery, or temporary assistance.",
    },
  ];
  return (
    <section className="">
      <h1 className="text-[#228634] xl:text-5xl lg:text-5xl md:text-4xl sm:text-3xl text-2xl text-center font-semibold xl:mt-20 lg:mt-20 md:mt-5 mt-5">
        Our Services
      </h1>
      <div className="hidden xl:flex xl:justify-center xl:flex-wrap xl:mb-40 lg:flex lg:justify-center lg:flex-wrap lg:mb-40 md:flex md:justify-center md:flex-wrap md:mb-40">
        {ServicesProp.map((item) => (
          <div key={item.id}>
            <ServicesCard title={item.title} description={item.description} />
          </div>
        ))}
      </div>

      <div className="grid xl:grid-cols-2 md:gap-10 py-10 xl:mx-40 lg:mx-40 md:mx-20  sm:mx-10 mx-7 md:border-t border-green-400 border-solid mb-10">
        <div className="flex order-2 xl:order-1 lg:order-1 md:order-1 sm:order-1 flex-col justify-center space-y-4 ">
          <h1 className="xl:text-3xl lg:text-3xl md:text-2xl sm:text-2xl text-xl font-semibold text-[#008732]">
            Supportive Independent Living
          </h1>
          <p className="xl:text-lg lg:text-lg md:text-lg sm:text-base text-sm">
            Supportive Independent Living is a service designed to help
            individuals with disabilities live independently while receiving the
            necessary assistance to thrive. This service offers personalized
            support in daily activities such as personal care, meal preparation,
            medication management, and transportation.
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
      </div>
      <div className="grid xl:grid-cols-2 md:gap-10 xl:mx-40 lg:mx-40 md:mx-20 sm:mx-10 mx-7  border-t border-green-400 border-solid mb-10">
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
            Community Access
          </h1>
          <p className="xl:text-lg lg:text-lg md:text-lg sm:text-base text-sm">
            Community Access services are designed to connect individuals with
            disabilities to enriching social, recreational, and educational
            opportunities. Through a variety of programs and activities, such as
            social outings, group classes, and volunteer work, individuals can
            engage with their community and build meaningful relationships.
            Transportation services ensure seamless access to these events,
            removing mobility barriers.
          </p>
          <p className="xl:text-lg lg:text-lg md:text-lg sm:text-base text-sm">
            {" "}
            Our partnerships with local organizations and community centers
            enhance these offerings, creating an inclusive environment where
            everyone can thrive and participate fully in community life.
          </p>
        </div>
      </div>
      <div className="grid xl:grid-cols-2 md:gap-10 py-10 xl:mx-40 lg:mx-40 md:mx-20 sm:mx-10 mx-7 border-t border-green-400 border-solid mb-10">
        <div className="flex order-2 xl:order-1 lg:order-1 md:order-1 sm:order-1 flex-col justify-center space-y-4 mb-10">
          <h1 className="xl:text-3xl lg:text-3xl md:text-2xl sm:text-2xl text-xl font-semibold text-[#008732]">
            Short Term Accommodation
          </h1>
          <p className="xl:text-lg lg:text-lg md:text-lg sm:text-base text-sm">
            Our Short Term Accommodation services provide a temporary,
            supportive living environment for individuals needing respite care,
            post-surgery recovery, or temporary assistance.
          </p>
          <p className="xl:text-lg lg:text-lg md:text-lg sm:text-base text-sm">
            Our facilities feature comfortable rooms, welcoming common areas,
            dining options, and recreational amenities designed to make your
            stay pleasant and stress-free. During your stay, you will have
            access to comprehensive care services, including nursing care,
            physical therapy, and daily living support.
          </p>
          <p className="xl:text-lg lg:text-lg md:text-lg sm:text-base text-sm">
            To book a stay, please contact us for detailed information on
            availability, pricing, and required documentation. We are here to
            ensure your short-term stay is as comfortable and supportive as
            possible.
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
      </div>
    </section>
  );
}
