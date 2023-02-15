"use client";
import React from "react";
import {
  ArrowRightOnRectangleIcon,
  BookOpenIcon,
  HomeIcon,
  MoonIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Navigation() {
  const pathname = usePathname();
  // console.log(pathname);

  return (
    <header className="w-[200px] bg-[#FDFDFD] h-full ">
      <h1 className="p-6 text-center font-extrabold"> LOGO </h1>
      {/* navigation */}

      {/* Home */}
      <div className="space-y-2 text-sm">
        <div
          className={`flex p-2 mx-4 rounded-[10px] items-center ${
            pathname === "/" ? "text-white bg-black" : ""
          }`}
        >
          <HomeIcon className="h-6 w-6 ml-2 mr-4" />
          <Link href="/">Home</Link>
        </div>

        {/* Dictionary */}
        <div
          className={`flex p-2 mx-4 rounded-[10px] items-center ${
            pathname.includes("/dictionary") ? "text-white bg-black" : ""
          }`}
        >
          {/* <Image src={search} /> */}
          <BookOpenIcon className="h-6 w-6 ml-2 mr-4" />
          <Link href="/dictionary">Dictionary</Link>
        </div>

        {/* Thesaurus */}
        <div className="flex p-2 mx-4 rounded-[10px] border">
          {/* <Image src={search} /> */}
          <BookOpenIcon className="h-6 w-6 ml-2 mr-4" />
          <p>Thesaurus</p>
        </div>

        {/* Dark Mode */}
        <div className="flex p-2 mx-4 rounded-[10px] border">
          {/* <Image src={search} /> */}
          <MoonIcon className="h-6 w-6 ml-2 mr-4" />
          <p>Dark Mode</p>
        </div>

        {/* Login */}
        <div
          className={`flex p-2 mx-4 rounded-[10px] items-center ${
            pathname.includes("/authentication") ? "text-white bg-black" : ""
          }`}
        >
          {/* <Image src={search} /> */}
          <ArrowRightOnRectangleIcon className="h-6 w-6 ml-2 mr-4" />
          <Link href="/authentication">Log In</Link>
        </div>
      </div>
    </header>
  );
}

export default Navigation;
