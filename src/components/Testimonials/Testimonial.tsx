import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Card, CardContent } from "../ui/card";

const Testimonial = () => {
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
              className="md:w-full w-[100x] "
            >
              <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem
                    key={index}
                    // className="md:basis-1/2 lg:basis-1/3"
                  >
                    <div className="p-1">
                      <Card>
                        <CardContent className=" items-center  justify-center p-6">
                          Testimonial<p>{index + 1}</p>
                        </CardContent>
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
