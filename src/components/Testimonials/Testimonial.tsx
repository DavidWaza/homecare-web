import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Card, CardContent, CardFooter } from "../ui/card";

const TestimonialData = [
  {
    desc: `At Ostat Aid, we take pride in providing compassionate and professional home care services that truly make a difference in the lives of our clients. Here’s what some of our clients and their families have to say about their experiences with us:`,
    name: "David Waza",
    title: "CEO, BINARY GROUPS.",
  },
  {
    desc: `"A Lifeline for Our Family"
"The care and attention provided by OstatAid have been a true lifeline for our family. The team is incredibly compassionate, reliable, and professional. They’ve helped my mother feel more comfortable and secure at home, and we couldn’t be happier with the support they provide."`,
    name: "Emily W.",
    title: "Daughter of a Client",
  },
  {
    desc: `"Exceptional Post-Operative Care"
"After my surgery, I needed help with daily tasks. The caregivers from OstatAid were wonderful—they made my recovery process smooth and stress-free. They were attentive, knowledgeable, and always available to assist with any of my needs. I highly recommend them."`,
    name: `John P.`,
    title: "Client",
  },
  {
    desc: `"Kind and Caring Professionals"
"We are so grateful for the wonderful care OstatAid has provided for my father. The caregivers are always punctual, respectful, and genuinely caring. They have made such a positive impact on his well-being and happiness. Thank you for your dedication to quality care!"`,
    name: "Sarah M.",
    title: `Daughter of a Client`,
  },
  {
    desc: `"Support Beyond Expectations”
"I never realized how much we needed help until we found OstatAid . Their disability support services have been invaluable in helping my son with his
daily routines. The staff is always friendly, patient, and accommodating. They have truly become like family to us."`,
    name: "Michael L",
    title: "Father of Client",
  },
];

const Testimonial = () => {
  const trimDesc = (desc: string) => {
    return desc.length > 50 ? `${desc.slice(0, 150)}...` : desc;
  };
  return (
    <div className="bg-[#1E421C] py-[7rem] px-10 xl:px-[10rem] lg:px-[15rem] testimonial">
      <div className="content">
        <div className="grid md:grid-cols-2">
          <div>
            <p className="text-sm uppercase font-semibold text-[#F2F8E3]">
              Testimonial
            </p>
            <p className="text-lg md:text-xl uppercase font-semibold py-5 text-[#F2F8E3]">
              Reviews from our patients
            </p>
          </div>
          <div>
            <Carousel
              opts={{
                align: "start",
              }}
              className="w-full"
            >
              <CarouselContent>
                {TestimonialData.map((testimonial, index) => (
                  <CarouselItem
                    key={index}
                    className="md:basis-1/2 lg:basis-1/3"
                  >
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex aspect-square p-6">
                          <span className="text-sm font-semibold ">
                            {trimDesc(testimonial.desc)}
                          </span>
                        </CardContent>
                        <CardFooter className="flex justify-between items-center">
                          <div className="h-10 w-10 p-2 rounded-full bg-slate-200"></div>
                          <div>
                            <h1 className="font-semibold">
                              {testimonial.name}
                            </h1>
                            <p className="text-sm font-medium">
                              {testimonial.title}
                            </p>
                          </div>
                        </CardFooter>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
