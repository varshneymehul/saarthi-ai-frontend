import Image from "next/image";
import React from "react";
import logo from "../public/logo.webp";

import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-amber-500 px-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <div className="mx-auto md:mx-0 py-4">
          <Image src={logo} alt="logo" width={200} height={200} />
          <div className="flex">
            <FaFacebook className="text-2xl m-3 hover:cursor-pointer transition-all hover:text-blue-600" />
            <FaLinkedin className="text-2xl m-3 hover:cursor-pointer transition-all hover:text-blue-900 " />
            <FaInstagram className="text-2xl m-3 hover:cursor-pointer transition-all hover:text-pink-500 " />
            <FaWhatsapp className="text-2xl m-3 hover:cursor-pointer transition-all hover:text-green-500 " />
          </div>
        </div>
        <div>
          <h1 className="text-white text-bold text-xl md:mt-6">Company</h1>
          <ul>
            <li className="text-white my-2">About us</li>
            <li className="text-white my-2">Careers</li>
            <li className="text-white my-2">Blogs</li>
            <li className="text-white my-2">Business Tools</li>
          </ul>
        </div>
        <div className="md:mr-24 py-4">
          <p className="ml-1 text-white text-bold text-xl">
            We&apos;d love to work with you!{" "}
          </p>
          <button className="bg-black w-fit mx-auto text-white px-4 py-2 rounded-3xl mt-2 hover:cursor-pointer hover:bg-green-700 transition-all">
            Get in touch
          </button>
        </div>
      </div>

      <div class="border-y border-y-white/20 py-4 items-center justify-between w-full mt-6">
        <div className="flex items-center justify-start gap-x-4">
          <a href="/legal/terms" className="text-white text-sm">
            Terms &amp; Conditions
          </a>
          <a href="/legal/privacy" className="text-white text-sm">
            Privacy Policy
          </a>
        </div>
        <p className="text-white text-sm">
          © Saarthi AI 2024. All Rights Reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
