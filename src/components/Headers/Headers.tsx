import Link from "next/link";
import React from "react";

const navlinks = [
  {
    link: "/about",
    label: "About Us",
  },
  {
    link: "/services",
    label: "Services",
  },
  {
    link: "/career",
    label: "Career",
  },
  {
    link: "/contact",
    label: "Contact Us",
  },
];

const Headers = () => {
  return (
    <div className="py-5 px-10 md:px-[10rem] lg:px-[15rem]">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-[#008732] text-[1rem] lg:text-[2rem] font-bold">
            H3
          </p>
        </div>
        <div className="flex gap-5">
          {navlinks.map(({ label, link }, index) => (
            <>
              <Link
                href={link}
                className="text-[#008732] font-semibold hover:bg-[#F2F8E3] hover:font-bold transition-all ease-in-out py-3 px-10 rounded-full"
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
