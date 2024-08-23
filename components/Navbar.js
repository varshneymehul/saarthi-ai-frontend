"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import logo from "../public/logo.webp";
import Link from "next/link";

function Navbar() {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      linkName: "Home",
      link: "/",
    },
    // {
    //   id: 3,
    //   linkName: "Products",
    //   link: "/products",
    // },
    {
      id: 4,
      linkName: "Team",
      link: "/team",
    },
    // {
    //   id: 5,
    //   linkName: "Contact",
    //   link: "/contact",
    // },
  ];
  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-amber-500 fixed nav z-50">
      <div>
        {/* <h1 className="text-5xl font-signature ml-2"><a className="link-underline hover:transition ease-in-out delay-150 hover:underline hover:decoration-solid" href="">Logo</a></h1> */}
        <h1 className="text-5xl font-signature ml-2">
          <Link
            className="link-underline link-underline-black"
            href="/"
            target="_blank"
            rel="noreferrer"
          >
            <Image src={logo} alt="logo" width={200} height={200} />
          </Link>
        </h1>
      </div>

      <ul className="hidden md:flex items-center">
        {links.map(({ id, link, linkName }) => (
          <li
            key={id}
            className="nav-links px-4 cursor-pointer capitalize font-medium  hover:scale-105 duration-200 link-underline"
          >
            <Link href={link}>{linkName}</Link>
          </li>
        ))}
        <li>
          <Link href="/contact">
            <button className="rounded-2xl px-4 py-2 text-white bg-black hover:bg-blue-700 transition-all">
              Contact
            </button>
          </Link>
        </li>
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-white md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-100">
          {links.map(({ id, link, linkName }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link onClick={() => setNav(!nav)} href={link}>
                {linkName}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/contact">
              <button className="rounded-full px-8 py-4 text-4xl text-white bg-black hover:bg-blue-700 transition-all">
                Contact
              </button>
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Navbar;
