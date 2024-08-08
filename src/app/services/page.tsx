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
      <h1 className="text-[#228634] text-5xl text-center font-semibold xl:mt-20 lg:mt-20 md:mt-5 mt-5">
        Our Services
      </h1>
      <div className="flex justify-center flex-wrap">
        {ServicesProp.map((item) => (
          <div key={item.id}>
            <ServicesCard title={item.title} description={item.description} />
          </div>
        ))}
      </div>

      <div className="grid xl:grid-cols-2 md:gap-10 py-10 mx-40 border-t border-green-400 border-solid mb-10">
        <div className=" block lg:hidden">
          <Image
            src={"/caregiver.jpg"}
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto object-contain object-center rounded-lg"
            alt=""
          />
        </div>
        <div className="flex flex-col justify-center space-y-4">
          <h1 className="text-3xl font-semibold text-[#008732] py-5">
            Supportive Independent Living
          </h1>
          <p className="text-lg">
            Supportive Independent Living is a service designed to help
            individuals with disabilities live independently while receiving the
            necessary assistance to thrive. This service offers personalized
            support in daily activities such as personal care, meal preparation,
            medication management, and transportation.
          </p>
          <p>
            {" "}
            It aims to enhance the quality of life, promote autonomy, and foster
            a sense of community. Beneficiaries include individuals with
            physical, intellectual, or developmental disabilities who seek to
            maintain independence while having access to tailored support that
            empowers them to achieve their fullest potential.
          </p>
        </div>
        <div className="hidden lg:block ">
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
      <div className="grid xl:grid-cols-2 md:gap-10 mx-40 border-t border-green-400 border-solid mb-10">
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
          <h1 className="text-3xl font-semibold text-[#008732]">
            Community Access
          </h1>
          <p className="text-lg">
            Community Access services are designed to connect individuals with
            disabilities to enriching social, recreational, and educational
            opportunities. Through a variety of programs and activities, such as
            social outings, group classes, and volunteer work, individuals can
            engage with their community and build meaningful relationships.
            Transportation services ensure seamless access to these events,
            removing mobility barriers.
          </p>
          <p>
            {" "}
            Our partnerships with local organizations and community centers
            enhance these offerings, creating an inclusive environment where
            everyone can thrive and participate fully in community life.
          </p>
        </div>
      </div>
      <div className="grid xl:grid-cols-2 md:gap-10 py-10 mx-40 border-t border-green-400 border-solid mb-10">
        <div className=" block lg:hidden">
          <Image
            src={"/caregiver.jpg"}
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto object-contain object-center rounded-lg"
            alt=""
          />
        </div>
        <div className="flex flex-col justify-center space-y-4">
          <h1 className="text-3xl font-semibold text-[#008732] py-5">
            Short Term Accommodation
          </h1>
          <p className="text-lg">
            Our Short Term Accommodation services provide a temporary,
            supportive living environment for individuals needing respite care,
            post-surgery recovery, or temporary assistance.
          </p>
          <p>
            Our facilities feature comfortable rooms, welcoming common areas,
            dining options, and recreational amenities designed to make your
            stay pleasant and stress-free. During your stay, you will have
            access to comprehensive care services, including nursing care,
            physical therapy, and daily living support.
          </p>
          <p>
            To book a stay, please contact us for detailed information on
            availability, pricing, and required documentation. We are here to
            ensure your short-term stay is as comfortable and supportive as
            possible.
          </p>
        </div>
        <div className="hidden lg:block ">
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
