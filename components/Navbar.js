import Image from "next/image";
import React from "react";

import logo from "../public/logo.webp";
import Link from "next/link";

function Navbar() {
  return (
    <div className="flex bg-amber-500 justify-between p-4 md:px-12 items-center">
      <Image src={logo} alt="logo" width={200} height={200} />

      <div>
        <ul className="flex gap-4 items-center">
          <li className="hover:cursor-pointer text-white">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:cursor-pointer text-white">
            <Link href="/products">Products</Link>
          </li>
          <li className="hover:cursor-pointer text-white">
            <Link href="/team">Team</Link>
          </li>
          <li className="hover:cursor-pointer text-white">
            <Link href="/journey">Journey</Link>
          </li>
          <li className="hover:cursor-pointer text-white bg-amber-800 py-3 px-4 rounded-3xl">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
