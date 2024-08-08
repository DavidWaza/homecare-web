import ContactSection from "@/components/ContactSection/ContactSection";
import React from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <section className="py-20 md:px-20">
      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <Image
            src={"/contact.webp"}
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto object-contain object-center"
          />
        </div>
        <div className="flex flex-col justify-center gap-10">
          <div>
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
      </div>
    </section>
  );
}
