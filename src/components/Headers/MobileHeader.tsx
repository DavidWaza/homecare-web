"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white p-4">
      <div className="flex items-center justify-between flex-wrap">
        <div className="flex items-center flex-shrink-0 text-[#228634] px-6">
          <Link href="/" className="font-semibold text-xl tracking-tight">
            Ostat Aid
          </Link>
        </div>
        <div className="block  lg:hidden">
          {isOpen ? (
            <>
              {" "}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center px-3 py-2 border rounded text-gray-400 border-gray-400 hover:text-white hover:border-white transition-all ease-in-out"
              >
                <X color="#228634" />
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center px-3 py-2 border rounded text-gray-400 border-gray-400 hover:text-white hover:border-white transition-all ease-in-out"
              >
                <Menu color="#228634" />
              </button>
            </>
          )}
        </div>
        <div
          className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto px-6 ${
            isOpen ? "" : "hidden"
          }`}
        >
          <div className="text-sm lg:flex-grow ">
            <Link
              href="/about"
              className="block mt-4 lg:inline-block lg:mt-0 font-semibold text-[#228634] hover:text-green-500 mr-4 "
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
            <Link
              href="/career"
              className="block mt-4 lg:inline-block lg:mt-0 font-semibold text-[#228634]  hover:text-green-500 mr-4"
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
