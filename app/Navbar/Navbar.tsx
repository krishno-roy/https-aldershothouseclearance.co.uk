"use client"; // Mark this component as a Client Component

import React, { useState } from "react";
import { FaPhoneAlt, FaBars, FaTimes, FaPhoneSquareAlt } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Use next/navigation instead of next/router
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname(); // Get the current route path
  const phoneNumber = "07969868115"; // Define the phone number here

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to check if a link is active
  const isActive = (path: string) => pathname === path;

  return (
    <div className="bg-white py-4 px-4 sm:px-8 md:px-12 lg:px-16">
      <div className="flex justify-between items-center">
        {/* Logo - Links to Home Page */}
        <Link href="/">
          <Image
            src="/manandvan.png"
            alt="Logo"
            className="h-12 w-auto"
            width={300}
            height={300}
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-6 text-lg font-bold">
            <li>
              <Link
                href="/"
                className={`hover:text-[#A4DC54] hover:scale-105 transition-transform ${
                  isActive("/") ? "text-[#A4DC54]" : ""
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`hover:text-[#A4DC54] hover:scale-105 transition-transform ${
                  isActive("/about") ? "text-[#A4DC54]" : ""
                }`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={`hover:text-[#A4DC54] hover:scale-105 transition-transform ${
                  isActive("/contact") ? "text-[#A4DC54]" : ""
                }`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Phone Icon */}
        <a
          href={`tel:${phoneNumber}`}
          target="_blank" // Opens the link in a new tab
          rel="noopener noreferrer" // Recommended for security when using target="_blank"
        >
          <div className="bg-[#A4DC54] p-2 rounded cursor-pointer   hidden md:block">
            <FaPhoneSquareAlt className="text-xl text-white rounded" />
          </div>
        </a>

        {/* Hamburger Menu Icon (Mobile) */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white bg-[#A4DC54] p-2 rounded-md text-2xl focus:outline-none"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-64 bg-green-50 transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out shadow-lg p-6 z-50`}
      >
        {/* Close Button */}
        <div className="flex justify-end">
          <button onClick={toggleMenu} className="text-2xl text-gray-700">
            <FaTimes />
          </button>
        </div>

        {/* Menu Links */}
        <ul className="flex flex-col gap-6 mt-6 text-lg font-semibold">
          <li>
            <Link
              href="/"
              className={`hover:text-gray-600 ${
                isActive("/") ? "text-[#A4DC54]" : ""
              }`}
              onClick={toggleMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={`hover:text-gray-600 ${
                isActive("/about") ? "text-[#A4DC54]" : ""
              }`}
              onClick={toggleMenu}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={`hover:text-gray-600 ${
                isActive("/contact") ? "text-[#A4DC54]" : ""
              }`}
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Phone Contact */}
        <div className="flex items-center gap-2 mt-6 text-lg font-semibold">
          <div className="bg-[#A4DC54] p-3 rounded-md">
            <FaPhoneAlt className="text-white" />
          </div>
          <span>
            <a
              href={`tel:${phoneNumber}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {phoneNumber}
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
