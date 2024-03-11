"use client";
import Image from "next/image";
import React from "react";
import loginSvg from "../components/Assets/loginSvg.svg";
import SignIn from "../components/SignIn";
import Loginbutton from "../components/Loginbutton";

function Authentication() {
  return (
    <>
      <div className="flex md:flex-row flex-col max-w-4xl mx-auto mt-12 gap-4 ">
        <div className="flex justify-center items-center mx-4">
          <div className="w-[200px] md:w-[250px] lg:w-[400px] ">

          <Image src={loginSvg} alt="login" />
          </div>
        </div>
        <SignIn />
      </div>
      <Loginbutton />
    </>
  );
}

export default Authentication;
