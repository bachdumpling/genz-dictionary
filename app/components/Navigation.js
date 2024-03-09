"use client";
import React, { useState } from "react";
import { BookOpenIcon, HomeIcon, UserIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ImBooks } from "react-icons/im";
import Image from "next/image";
import logo from "../../public/logo.svg";

function Navigation() {
  const pathname = usePathname();

  return (
    <>
      <header className="hidden md:inline-block h-full md:w-[100px] lg:w-[200px] bg-[#FDFDFD] drop-shadow-sm">
        <div className=" flex flex-col justify-center items-center w-full">
          <Link href="/">
            <Image src={logo} className="w-6 h-8 mt-[32px] mb-[32px]" />
          </Link>
          <div className="border-b-1  md:w-[72px] w-[24px] h-[1px] mb-[32px] border"></div>
        </div>
        {/* navigation */}

        {/* Home */}
        <div className="grid gap-2 text-sm place-content-center">
          <Link href="/">
            <div
              className={`flex p-[10px] mx-10 lg:mx-5 rounded-[10px] items-center ${
                pathname === "/" ? "text-white bg-black" : ""
              }`}
            >
              <HomeIcon className="h-6 w-6 lg:ml-2 lg:mr-4" />
              <p className="hidden lg:flex">Home</p>
            </div>
          </Link>
          {/* Dictionary */}
          <Link href="/dictionary">
            <div
              className={`flex p-[10px] mx-10 lg:mx-5 rounded-[10px] items-center ${
                pathname.includes("/dictionary") ? "text-white bg-black" : ""
              }`}
            >
              {/* <Image src={search} /> */}
              <ImBooks className="h-6 w-6 lg:ml-2.5 lg:mr-3.5" />
              <p className="hidden lg:flex">Dictionary</p>
            </div>
          </Link>
          {/* Thesaurus */}
          <Link href="/thesaurus">
            <div
              className={`flex p-[10px] mx-10 lg:mx-5 rounded-[10px] items-center ${
                pathname.includes("/thesaurus") ? "text-white bg-black" : ""
              }`}
            >
              {/* <Image src={search} /> */}
              <BookOpenIcon className="h-6 w-6 lg:ml-2 lg:mr-4" />
              <p className="hidden lg:flex">Thesaurus</p>
            </div>
          </Link>

          {/* Authentication */}
          <Link href="/authentication">
            <div
              className={`flex p-[10px] mx-10 lg:mx-5 rounded-[10px] items-center ${
                pathname.includes("/authentication") ? "text-white bg-black" : ""
              }`}
            >
              {/* <Image src={search} /> */}
              <UserIcon className="h-6 w-6 lg:ml-2 lg:mr-4" />
              <p className="hidden lg:flex">Sign In</p>
            </div>
          </Link>
        </div>
      </header>
    </>
  );
}

export default Navigation;
