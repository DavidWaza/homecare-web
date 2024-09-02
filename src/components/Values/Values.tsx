import React from "react";

const valuesData = [
  {
    title: "Empathy",
    desc: `Empathy is at the heart of our homecare services. We deeply understand and connect with the unique needs of each individual we serve, ensuring that our care is not only effective but also compassionate. By embracing empathy, we create a nurturing environment where our clients feel valued, understood, and genuinely cared for.`,
  },
  {
    title: "Inclusivity",
    desc: `We are committed to fostering an inclusive homecare environment where every individual, regardless of their background or abilities, feels respected and welcomed. By valuing diverse perspectives, we ensure that each voice is heard and every need is met, making our care more personalized and impactful.`,
  },
  {
    title: "Advocacy",
    desc: `As advocates for our clients, we actively promote their rights and needs, ensuring they receive the care and support they deserve. Through our advocacy, we strive to break down barriers and challenge misconceptions, creating a more inclusive society where everyone can thrive.`,
  },
  {
    title: "Empowerment",
    desc: `We believe in empowering our clients to live as independently as possible, with confidence and dignity. By providing the support they need to overcome challenges, we help them embrace their abilities and achieve their goals, leading to a more fulfilling life.`,
  },
  {
    title: "Collaboration",
    desc: `Collaboration is key to delivering the highest quality of care. By working closely with our clients, their families, and other healthcare professionals, we ensure a comprehensive approach that addresses all aspects of our clients' well-being. Together, we create a network of support that enhances the care experience.`,
  },
  {
    title: "Respect",
    desc: `Respect is the foundation of our care. We honor the dignity and autonomy of each person, involving them in every decision related to their care. By prioritizing their preferences and needs, we create a supportive environment where our clients feel valued and respected, fostering trust and well-being.`,
  },
];
const Values = () => {
  return (
    <div className="bg-[#F2F8E3] py-20 px-10 xl:px-[10rem] lg:px-[15rem]">
      <p className="text-center text-sm uppercase font-semibold text-[#14421A]">
        Our values
      </p>
      <p className="text-center text-lg md:text-xl uppercase font-semibold py-5 text-[#14421A]">
        Reason why you should choose us
      </p>
      <p className="text-lg text-[#14421A] text-center font-medium w-full md:!w-1/2 m-auto">
        We make efforts to change the way that healthcare services are offered
        in order to meet the changing needs of our patients, both for the
        present and future.
      </p>
      <div className=" grid md:grid-cols-2 gap-10 lg:grid-cols-3 py-20">
        {valuesData.map(({ title, desc }, index) => (
          <div key={index}>
            <div className="group">
              <div className="border border-[#14421A] rounded-lg py-10 px-5 group-hover:bg-[#14421A] transistion-all ease-in-out">
                <div className="flex items-center gap-3">
                  <p className="bg-[#1A421B] group-hover:bg-[#F2F8E3] rounded-full flex text-center text-[#F2F8E3] group-hover:text-[#1A421B] justify-center h-7 w-7">
                    {index + 1}
                  </p>
                  <p className="text-lg font-semibold text-[#14421A] uppercase group-hover:text-[#F2F8E3]">
                    {title}
                  </p>
                </div>
                <p className="text-sm font-medium text-[#14421A] py-5 group-hover:text-[#F2F8E3]">
                  {desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Values;
