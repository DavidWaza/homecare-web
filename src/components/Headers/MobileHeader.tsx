"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white p-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center flex-shrink-0 text-[#228634]">
          <Link href="/" className="font-semibold text-xl tracking-tight">
            <Image
              src={"/LOGO RGB.svg"}
              width={0}
              height={0}
              alt="logo"
              sizes="100vw"
              className="w-1/2 h-auto object-center object-contain"
            />
          </Link>
        </div>
        
        {/* Mobile menu button */}
        <div className="block lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center px-3 py-2 border rounded text-gray-400 border-gray-400 hover:text-white hover:border-white transition-all ease-in-out"
          >
            {isOpen ? <X color="#228634" /> : <Menu color="#228634" />}
          </button>
        </div>

        {/* Dropdown for Mobile */}
        <div className={`absolute right-0 z-40 top-20 w-full lg:w-auto bg-white border border-gray-300 rounded-md shadow-md lg:hidden transition-transform duration-300 ease-in-out ${isOpen ? 'block' : 'hidden'}`}>
          <div className="text-sm lg:flex-grow p-4">
            <Link
              href="/about"
              className="block mt-2 font-semibold text-[#228634] hover:text-green-500"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/services"
              className="block mt-2 font-semibold text-[#228634] hover:text-green-500"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="block mt-2 font-semibold text-[#228634] hover:text-green-500"
              onClick={() => setIsOpen(false)}
            >
              Contacts
            </Link>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex lg:items-center lg:w-auto px-6">
          <Link
            href="/about"
            className="block mt-4 lg:inline-block lg:mt-0 font-semibold text-[#228634] hover:text-green-500 mr-4"
          >
            About
          </Link>
          <Link
            href="/services"
            className="block mt-4 lg:inline-block lg:mt-0 font-semibold text-[#228634] hover:text-green-500 mr-4"
          >
            Services
          </Link>
          <Link
            href="/contact"
            className="block mt-4 lg:inline-block lg:mt-0 font-semibold text-[#228634] hover:text-green-500 mr-4"
          >
            Contacts
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default MobileNav;
