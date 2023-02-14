import React from "react";
import {
  ArrowRightOnRectangleIcon,
  BookOpenIcon,
  HomeIcon,
  MoonIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";

function Navigation() {
  return (
    <header className="w-[200px] bg-[#FDFDFD] h-full ">
      <h1 className="p-6 text-center"> LOGO </h1>
      {/* navigation */}

      {/* Home */}
      <div className="space-y-2 text-sm">
        <div className="flex p-2 mx-4 rounded-[10px] border">
          <HomeIcon className="h-6 w-6 ml-2 mr-4" />
          <Link href="/">Home</Link>
        </div>

        {/* Dictionary */}
        <div className="flex p-2 mx-4 rounded-[10px] border">
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
        <div className="flex p-2 mx-4 rounded-[10px] border">
          {/* <Image src={search} /> */}
          <ArrowRightOnRectangleIcon className="h-6 w-6 ml-2 mr-4" />
          <p>Log In</p>
        </div>
      </div>
    </header>
  );
}

export default Navigation;
