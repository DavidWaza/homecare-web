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
          <AccordionTrigger>How much does it cost for one care?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>What kind of contracts do you offer?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>How do i contact Harmony healtcare?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Faq;
