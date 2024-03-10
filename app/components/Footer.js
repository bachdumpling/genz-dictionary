import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo.svg";

function Footer() {
  return (
    <footer className="bg-[#FDFDFD] text-black h-full py-8">
      <div className="container mx-auto">
        <div className=" flex flex-col justify-center items-center w-full h-full md:my-6">
          <Link href="/">
            <Image
              src={logo}
              className="w-10 h-10 mb-8"
            />
          </Link>

          <h2 className="font-semibold text-sm">z-define © 2024. All Rights Reserved.</h2>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
