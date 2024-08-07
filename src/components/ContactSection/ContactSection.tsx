import Image from "next/image";
import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

const ContactSection = () => {
  return (
    <div className="lg:w-[1000px] w-full px-2 m-auto -mt-20 shadow-md border border-[#14421A] bg-white">
      <div className="grid lg:grid-cols-2">
        <Image
          src={"/contact.webp"}
          alt=""
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto object-contain object-center"
        />

        <p className="text-lg text-[#14421A] uppercase p-5 font-semibold">
          Contact us for booking
        </p>
        <div className="px-5">
          <form>
            <div className="grid grid-cols-2 gap-10">
              <Input type="firstname" placeholder="First Name" />
              <Input type="lastname" placeholder="Last Name" />
            </div>
            <div className="space-y-5">
              <Input type="email" placeholder="Email" className="mt-5" />
              <Textarea placeholder="Message" />
            </div>
            <div className="py-5">
              <Button>Submit</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
