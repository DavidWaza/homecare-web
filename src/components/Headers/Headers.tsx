"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const navlinks = [
  {
    link: "/about",
    label: "About",
  },
  {
    link: "/services",
    label: "Services",
  },
  // {
  //   link: "/career",
  //   label: "Career",
  // },
  {
    link: "/contact",
    label: "Contact",
  },
];

const Headers = () => {
  const pathname = usePathname();
  return (
    <div className="py-5 px-10 md:px-[10rem]">
      <div className="xl:flex xl:justify-between xl:items-center lg:flex lg:justify-between lg:items-center hidden">
        <div>
          <Link
            href="/"
            className="text-[#008732] text-[1rem] lg:text-[2rem] font-bold"
          >
            Ostat Aid
          </Link>
        </div>
        <div className="flex gap-5">
          {navlinks.map(({ label, link }, index) => (
            <>
              <Link
                href={link}
                className={`text-[#008732] font-semibold hover:bg-[#F2F8E3] hover:font-bold transition-all ease-in-out py-3 px-10 rounded-full ${
                  pathname === link ? "bg-[#F2F8E3]" : ""
                }`}
              >
                {label}
              </Link>
            </>
          ))}
        </div>
        <div>
          <button className="py-3 px-10 rounded-full text-white text-center bg-[#008732] hover:bg-[#F2F8E3] border hover:border-[#008732] hover:text-[#008732] transition-all ease-in-out">
            Booking
          </button>
        </div>
      </div>
    </div>
  );
};

export default Headers;
