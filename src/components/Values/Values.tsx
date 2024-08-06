import React from "react";

const valuesData = [
  {
    title: "empathy",
    desc: `Empathy becomes a powerful tool that not only helps us understand
              but also enables us to deeply connect with the unique needs and
              experiences of individuals with disabilities. As a compassionate
              organisation looking to make a difference, we embracing empathy
              and foster a genuine sense of understanding and support, paving
              the way for meaningful change and empowerment within the
              disability community.`,
  },
  {
    title: "INCLUSIVITY",
    desc: `We believe in the power of diverse perspectives, we recognise that fostering an inclusive environment ensures that each and every voice is not only heard but also thoughtfully considered. By championing inclusivity, we create a space where all individuals, regardless of their background or abilities, can actively participate, contribute their ideas, and together, shape a more inclusive and equitable future for everyone.`,
  },

  {
    title: "ADVOCACY",
    desc: `As passionate advocates for disability rights, we understand that advocacy serves as a driving force behind positive change, igniting awareness and understanding of the rights and needs of individuals with disabilities. By lending our voice to the cause, we play a vital role in breaking barriers, challenging misconceptions, and creating a more inclusive society where every individual's rights are respected and upheld, sparking a ripple effect of transformative change.`,
  },
  {
    title: "EMPOWERMENT",
    desc: `Empowerment plays a pivotal role in helping individuals with disabilities achieve true independence and unwavering confidence. By fostering an environment that nurtures their strengths and capabilities, we intend to empower them to overcome challenges and embrace their unique abilities. Our unwavering support and belief in their potential becomes a guiding light, paving the way for them to navigate life with newfound resilience, self-assurance, and a sense of purpose making a lasting impact on lives and the world around them.`,
  },
  {
    title: "COLLABORATION",
    desc: `By forming partnerships and collaborating with individuals with disabilities and organizations with similar interests, we form a powerful force for positive transformation. Our commitment to collaboration enables us to draw on collective resources, expertise, and experience, to foster a more equitable and compassionate society for all. By working together, we can create an impact that goes beyond what can be achieved on our own, leaving a legacy of harmony and advancement for future generations.`,
  },
  {
    title: "RESPECT",
    desc: `Respect means seeing the inherent dignity and autonomy people possess. We understand the importance of treating people with genuine courtesy, appreciating the uniqueness of their choices, and actively involving them in decisions related to their care and support. By prioritizing our voice and agency, we intend to create an environment where individuals with disabilities feel valued, empowered, and respected, fostering a sense of belonging and ensuring that their needs and preferences are at the heart of every decision made.`,
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
                  <p className="bg-[#1A421B] group-hover:bg-[#F2F8E3] p-2 rounded-full flex text-center text-[#F2F8E3] group-hover:text-[#1A421B] justify-center h-7 w-7">
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
