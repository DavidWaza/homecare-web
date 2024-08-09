"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeAnimation } from "@/components/Animation/Animation";

export const metadata = {
  title: "Comming Soon",
};

export default function NotFoundPage() {
  useEffect(() => {
    document.title = "Comming Soon";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="padding absolute inset-0 z-[15000] bg-black grid place-items-center text-center">
      <div>
        <motion.h1
          variants={fadeAnimation}
          initial="init"
          whileInView="fade"
          custom={1}
          className="font-errorFont text-[green] text-[6rem] lg:text-[8rem]"
        >
          404
        </motion.h1>
        <motion.h1
          variants={fadeAnimation}
          initial="init"
          whileInView="fade"
          custom={2}
          className="font-errorFont text-[green] text-[1.5rem] lg:text-[2rem] mb-6"
        >
          Comming Soon ...
        </motion.h1>
        <Link href="/">
          <motion.div
            transition={{
              type: "spring",
              bounce: 0.5,
              stiffness: 500,
            }}
            whileHover={{
              scale: 1.15,
            }}
            variants={fadeAnimation}
            initial="init"
            whileInView="fade"
            custom={3}
            className="w-[fit-content] mx-auto border-2 border-primary px-4 py-2 custom-fz font-bold uppercase text-primary rounded-md"
          >
            Back To Home
          </motion.div>
        </Link>
      </div>
    </div>
  );
}
