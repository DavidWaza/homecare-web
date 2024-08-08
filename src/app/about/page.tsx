import Image from "next/image";

export default function About() {
  return (
    <section className="py-10 lg:py-[10rem] px-10 md:px-[10rem] lg:pl-[15rem]">
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
          <h1 className="text-3xl font-semibold text-[#008732]">
            Our Passion
          </h1>
          <p className="text-lg">
            At Harmony, our passion for providing exceptional healthcare
            services to the elderly is at the heart of everything we do. We
            believe that every senior deserves to live a life of dignity,
            comfort, and joy. Our dedicated team is inspired by the stories and
            experiences of the older generation, and we are driven to make a
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
          <h1 className="text-3xl font-semibold text-[#008732] py-5">
            Our Expertise
          </h1>
          <p className="text-lg">
            Commitment to excellence is our promise to you. We are unwavering in
            our dedication to providing the highest standard of care and
            support. Our commitment extends beyond just meeting the basic needs
            of our clients; we strive to exceed expectations by offering
            personalized, holistic care plans that address the physical,
            emotional, and social aspects of well-being. We are here for you and
            your loved ones, 24/7, ensuring that you receive the attention and
            care you deserve. Our commitment is reflected in our continuous
            efforts to improve our services and stay updated with the latest
            advancements in elderly care.
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
          <h1 className="text-3xl font-semibold text-[#008732] py-5">
            Our Commitments
          </h1>
          <p className="text-lg">
            With years of experience in the healthcare industry, our team of
            professionals brings a wealth of knowledge and expertise to the
            table. Our staff includes licensed nurses, experienced caregivers,
            and healthcare specialists who are trained to handle a wide range of
            medical conditions and needs. We employ evidence-based practices and
            state-of-the-art technology to deliver effective and efficient care.
            Our expertise is not just limited to medical care; we also offer
            support in daily living activities, companionship, and recreational
            activities to promote a holistic approach to health and happiness.
          </p>
        </div>
      </div>
    </section>
  );
}
