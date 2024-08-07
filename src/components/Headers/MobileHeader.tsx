"use client";
import React, { useState } from "react";
import Link from "next/link";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white p-4">
      <div className="flex items-center justify-between flex-wrap">
        <div className="flex items-center flex-shrink-0 text-[#228634] px-6">
          <span className="font-semibold text-xl tracking-tight">Ostat Aid</span>
        </div>
        <div className="block lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center px-3 py-2 border rounded text-gray-400 border-gray-400 hover:text-white hover:border-white"
          >
            <svg
              className="fill-current h-5 w-5 text-[#228634]"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${
            isOpen ? "" : "hidden"
          }`}
        >
          <div className="text-sm lg:flex-grow">
            <Link
              href="/about"
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-400 hover:text-white mr-4"
            >
              About Us
            </Link>
            <Link
              href="/services"
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-400 hover:text-white mr-4"
            >
              Services
            </Link>
            <Link
              href="/contacts"
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-400 hover:text-white mr-4"
            >
              Contacts
            </Link>
            <Link
              href="/career"
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-400 hover:text-white"
            >
              Career
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MobileNav;
