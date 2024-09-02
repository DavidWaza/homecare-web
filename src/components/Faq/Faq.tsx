import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const Faq = () => {
  return (
    <div className="py-20 px-10 xl:px-[10rem] lg:px-[15rem] lg:w-[1300px] m-auto w-full">
      <p className="text-center text-xl font-semibold uppercase py-10">
        frequently asked questions
      </p>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>What services do you provide?</AccordionTrigger>
          <AccordionContent>
            We offer a range of home care services, including elderly care,
            disability support, post-operative care, and personal services such
            as housekeeping and meal preparation.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>How do you customize care plans?</AccordionTrigger>
          <AccordionContent>
            Our care plans are tailored to each client&apos;s specific needs and
            preferences. We begin with a thorough assessment to understand your
            unique situation, and then we design a personalized plan to ensure
            the best possible care.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            {" "}
            Are your caregivers qualified and experienced?
          </AccordionTrigger>
          <AccordionContent>
            Yes, our caregivers are thoroughly vetted, trained, and experienced
            in providing professional home care. We ensure that all staff
            members have the necessary qualifications and a genuine passion for
            caring for others.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>
            {" "}
            How do I get started with your services?{" "}
          </AccordionTrigger>
          <AccordionContent>
            You can start by contacting us for a free consultation. We&apos;ll
            discuss your needs, answer any questions, and help you understand
            how our services can benefit you or your loved one.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>What areas do you serve?</AccordionTrigger>
          <AccordionContent>
            We proudly serve the Mississauga, Canada, area, providing in-home
            care services to clients in the surrounding communities.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Faq;
