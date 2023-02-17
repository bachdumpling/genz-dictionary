"use client";
import Image from "next/image";
import React from "react";
import loginSvg from "../components/Assets/loginSvg.svg";
import SignIn from "../components/SignIn";
import Loginbutton from "../components/Loginbutton";

function Authentication() {
  return (
    <>
      <div className="flex max-w-4xl mx-auto mt-32 gap-4 ">
        <div className="flex justify-center items-center mx-4">
          <Image src={loginSvg} alt="login" />
        </div>
        <SignIn />
      </div>
      <Loginbutton />
    </>
  );
}

export default Authentication;
