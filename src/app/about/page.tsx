import PageWrapper from "@/components/PageWrapper/PageWrapper";
import { CircleCheckBig } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "About Us",
};

const homecareMedicalList = [
  `Compassionate Care:Treating each client with dignity, kindness, and 
understanding.`,
  ` Professional Excellence:Maintaining the highest standards in training, 
service delivery, and client care.`,
  `Client-Centered Approach:Tailoring our services to the individual needs of 
each client, ensuring their comfort, safety, and independence.`,
];

export default function About() {
  return (
    <PageWrapper>
      <section className="py-10 lg:py-[10rem] px-10 md:px-[10rem] lg:pl-[15rem]">
        <div className="py-10 space-y-3">
          <h1 className="xl:text-3xl lg:text-3xl md:text-2xl sm:text-2xl text-xl font-semibold text-[#008732] py-2">
            Our Story
          </h1>
          <p className="xl:text-lg lg:text-lg md:text-lg sm:text-base text-sm">
            At{" "}
            <span className="text-[#008732] font-semibold uppercase">
              OstatAid
            </span>
            , we understand the importance of feeling safe, comfortable, and
            cared for at home. our mission is to provide top-quality,
            personalized home care services that make a positive difference in
            our client&apos;s lives. Inspired by our passion for caring for
            others, we are dedicated to offering support with compassion,
            respect, and professionalism.
          </p>
        </div>
        <div className="grid xl:grid-cols-2 md:gap-10">
          <div className="py-5">
            <Image
              src={"/black-mirror-man.jpg"}
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto object-contain object-center"
              alt=""
            />
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <h1 className="xl:text-3xl lg:text-3xl md:text-2xl sm:text-2xl text-xl font-semibold text-[#008732]">
              Our Passion
            </h1>
            <p className="xl:text-lg lg:text-lg md:text-lg sm:text-base text-sm">
              At Harmony, our passion for providing exceptional homecare
              services to the elderly is at the heart of everything we do. We
              believe that every senior deserves to live a life of dignity,
              comfort, and joy. Our dedicated team is inspired by the stories
              and experiences of the elderly, and we are driven to make a
              positive impact on their lives. We understand the unique needs and
              challenges that come with aging, and our mission is to offer
              compassionate care that enhances the quality of life for our
              clients.
            </p>
          </div>
        </div>
        <div className="grid xl:grid-cols-2 md:gap-10 py-10">
          <div className=" block lg:hidden">
            <Image
              src={"/caregiver.jpg"}
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto object-contain object-center"
              alt=""
            />
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <h1 className="xl:text-3xl lg:text-3xl md:text-2xl sm:text-2xl text-xl font-semibold text-[#008732] lg:py-5 pt-5">
              Our Expertise
            </h1>
            <p className="xl:text-lg lg:text-lg md:text-lg sm:text-base text-sm">
              Commitment to excellence is our promise to you. We are unwavering
              in our dedication to providing the highest standard of care and
              support. Our commitment extends beyond just meeting the basic
              needs of our clients; we strive to exceed expectations by offering
              personalized, holistic care plans that address the physical,
              emotional, and social aspects of well-being. We are here for you
              and your loved ones, 24/7, ensuring that you receive the attention
              and care you deserve. Our commitment is reflected in our
              continuous efforts to improve our services and stay updated with
              the latest advancements in elderly care.
            </p>
          </div>
          <div className="hidden lg:block ">
            <Image
              src={"/caregiver.jpg"}
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto object-contain object-center"
              alt=""
            />
          </div>
        </div>
        <div className="grid xl:grid-cols-2 md:gap-10">
          <div>
            <Image
              src={"/commitment.jpg"}
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto object-contain object-center"
              alt=""
            />
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <h1 className="xl:text-3xl lg:text-3xl md:text-2xl sm:text-2xl text-xl font-semibold text-[#008732] lg:py-5 md:py-5 pt-5">
              Our Commitments
            </h1>
            <p className="xl:text-lg lg:text-lg md:text-lg sm:text-base text-sm">
              With years of experience in the homecare industry, our team of
              professionals brings a wealth of knowledge and expertise to the
              table. Our staff includes licensed nurses, experienced caregivers,
              and homecare specialists who are trained to handle a wide range of
              medical conditions and needs. We employ evidence-based practices
              and state-of-the-art technology to deliver effective and efficient
              care. Our expertise is not just limited to medical care; we also
              offer support in daily living activities, companionship, and
              recreational activities to promote a holistic approach to health
              and happiness.
            </p>
          </div>
        </div>
        <div className="py-10">
          <div className="service-bg p-10">
            <div className="content">
              <h1 className="xl:text-3xl lg:text-3xl md:text-2xl sm:text-2xl text-xl font-semibold text-white">
                Our Mission and Values
              </h1>
              <p className=" text-lg font-medium text-[#F2F8E3] lg:py-5 md:py-5 pt-5">
                Our mission is to enhance the quality of life for every client
                by providing exceptional care that meets their unique needs. We
                are committed to:
              </p>
              <div>
                <div className="py-10 space-y-4">
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
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
