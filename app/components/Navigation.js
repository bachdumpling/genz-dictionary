"use client";
import React, { useState } from "react";
import {
  ArrowRightOnRectangleIcon,
  Bars2Icon,
  BookOpenIcon,
  HomeIcon,
  MoonIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GrHomeRounded } from "react-icons/gr";

function Navigation() {
  const pathname = usePathname();
  const [openNav, setOpenNav] = useState(false);
  // console.log(pathname);

  return (
    <>
      <header className="hidden md:inline-block h-full md:w-[100px] lg:w-[200px] bg-[#FDFDFD]">
        <h1 className="lg:m-10 my-6 text-center font-extrabold text-xl lg:text-3xl">
          {" "}
          LOGO{" "}
        </h1>
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
              <BookOpenIcon className="h-6 w-6 lg:ml-2 lg:mr-4" />
              <p className="hidden lg:flex">Dictionary</p>
            </div>
          </Link>

          {/* Thesaurus */}
          {/* <div className="flex p-2 mx-4 rounded-[10px] border">
          <BookOpenIcon className="h-6 w-6 ml-2 mr-4" />
          <p>Thesaurus</p>
        </div> */}

          {/* Dark Mode */}
          {/* <div className="flex p-2 mx-4 rounded-[10px] border">
          <MoonIcon className="h-6 w-6 ml-2 mr-4" />
          <p>Dark Mode</p>
        </div> */}

          {/* Login */}
          {/* <div
          className={`flex p-2 mx-4 rounded-[10px] items-center ${
            pathname.includes("/authentication") ? "text-white bg-black" : ""
          }`}
        >
          <ArrowRightOnRectangleIcon className="h-6 w-6 ml-2 mr-4" />
          <Link href="/authentication">Log In</Link>
        </div> */}
        </div>
      </header>

      <Bars2Icon
        onClick={() => {
          setOpenNav(!openNav);
        }}
        className="absolute md:hidden w-6 h-6 inset-4 cursor-pointer"
      />
    </>
  );
}

export default Navigation;
