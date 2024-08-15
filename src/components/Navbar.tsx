"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Tally2, X } from "lucide-react";

import logo from "../../public/5b2be16ff3f1bfe045e22d14_The Charlee Logo v1.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="w-full relative h-full">
      <div className="md:hidden py-9">
        <Image src={logo} alt="logo" width={150} className="mx-auto" />
        <Tally2
          size="2em"
          className="absolute top-8 right-5 rotate-90 cursor-pointer"
          onClick={toggleMenu}
        />
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-screen w-full duration-700 bg-white shadow-lg transform transition-transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } z-50 md:hidden`}
      >
        <div className="flex justify-between items-center p-5">
          <Image src={logo} alt="logo" width={120} />
          <X
            size="2em"
            className="cursor-pointer rotate-90"
            onClick={toggleMenu}
          />
        </div>
        <div className="flex items-center gap-6 justify-center flex-col mt-10 space-y-4 p-5">
          <Link
            href="/"
            className="link text-4xl uppercase"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="link text-4xl uppercase"
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link
            href="/services"
            className="link text-4xl uppercase"
            onClick={toggleMenu}
          >
            Services
          </Link>
          <Link
            href="/policies"
            className="link text-4xl uppercase"
            onClick={toggleMenu}
          >
            Policies
          </Link>
          <Link
            href=""
            className="link text-4xl uppercase"
            onClick={toggleMenu}
          >
            Book Now
          </Link>
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="hidden regular uppercase py-10 md:flex justify-center items-center gap-10">
        <Link href="/about" className="link">
          About
        </Link>
        <Link href="/services" className="link">
          Services
        </Link>
        <Link href="/">
          {" "}
          <Image src={logo} alt="logo" width={200} className="mx-5" />
        </Link>
        <Link href="/policies" className="link">
          Policies
        </Link>
        <Link href="" className="link">
          Book Now
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
