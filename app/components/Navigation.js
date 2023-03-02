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
import { motion } from "framer-motion";
import NavigationMenu from "./NavigationMenu";
import { XMarkIcon } from "@heroicons/react/24/outline";

function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="hidden md:inline-block h-full md:w-[100px] lg:w-[200px] bg-[#FDFDFD] drop-shadow-sm">
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

      <motion.button
        onClick={() => {
          setIsOpen(true);
        }}
        className="absolute md:hidden w-6 h-6 top-8 left-6 cursor-pointer z-50"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <Bars2Icon className="" />
      </motion.button>

      {isOpen && (
        <NavigationMenu
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          pathname={pathname}
        >
          <div className="absolute top-4 right-4">
            <button
              type="button"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              <XMarkIcon className="w-4 h-4 text-[#AAAAAA]" />
            </button>
          </div>

          <div className="mt-2 flex flex-col justify-start space-y-[24px] text-sm">
            <Link href="/">
              <div className={`flex ${pathname === "/" ? "" : ""}`}>
                <HomeIcon className="h-6 w-6 mr-4" />
                <p className="">Home</p>
              </div>
            </Link>

            <Link href="/dictionary">
              <div className={`flex ${pathname === "/" ? "" : ""}`}>
                <BookOpenIcon className="h-6 w-6 mr-4" />
                <p className="">Dictionary</p>
              </div>
            </Link>

            <Link href="/authentication">
              <div className={`flex ${pathname === "/" ? "" : ""}`}>
                <ArrowRightOnRectangleIcon className="h-6 w-6 mr-4" />
                <p className="">Sign In</p>
              </div>
            </Link>
          </div>
        </NavigationMenu>
      )}
    </>
  );
}

export default Navigation;
