"use client";
import ContactSection from "@/components/ContactSection/ContactSection";
import React from "react";

import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useForm, ValidationError } from "@formspree/react";

export default function Contact() {
  const [state, handleSubmit] = useForm("mjkbzrrg");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
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
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-10">
                  <Input
                    type="firstname"
                    placeholder="First Name"
                    name="firstName"
                    id="firstName"
                  />
                  <Input
                    type="lastname"
                    placeholder="Last Name"
                    name="lastName"
                    id="lastName"
                  />
                </div>
                <div className="space-y-5">
                  <Input
                    type="email"
                    placeholder="Email"
                    className="mt-5"
                    id="email"
                    name="email"
                  />
                  <Textarea placeholder="Message" id="message" name="message" />
                </div>
                <div className="py-5">
                  <Button type="submit" disabled={state.submitting}>
                    Submit
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
