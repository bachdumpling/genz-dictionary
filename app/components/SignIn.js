import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import {
  EnvelopeIcon,
  EyeIcon,
  EyeSlashIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";
import { signIn } from "next-auth/react";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex flex-col flex-1 px-6 justify-center items-center w-full">
      <h1 className="text-xl md:text-2xl lg:text-4xl text-center font-medium pb-[48px] pt-10">
        {" "}
        Welcome Back
      </h1>
      {/* <div className="border w-full"> */}
      <button
        onClick={() => signIn("google")}
        className="w-full border-2 p-4 flex justify-center items-center rounded-[10px] mb-[24px] text-xs md:text-sm lg:text-base"
      >
        <FcGoogle className="h-6 w-6 mr-2" />
        Sign in with Google
      </button>
      {/* </div> */}

      <div className="mb-[24px] flex w-full justify-center items-center">
        <hr className=" w-full"></hr>

        <p className="text-[#D9D9D9] text-center mx-2">or</p>

        <hr className=" w-full"></hr>
      </div>

      <form className="w-full pb-[32px]">
        <div className="text-sm relative pb-[8px]">
          <div className="absolute py-4 px-4 text-[#22272E]">
            <EnvelopeIcon className="w-6" />
          </div>
          <input
            type="text"
            id="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="lowercase placeholder:capitalize rounded-[10px] border text-black focus:border-[#22272E] focus:outline-none w-full h-14 placeholder:text-[#AAAAAA] px-4 pl-14"
          />
        </div>
        <div className="text-sm relative pb-[32px]">
          <div className="absolute py-4 px-4 text-[#22272E] ">
            <LockClosedIcon className="w-6" />
          </div>
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="lowercase placeholder:capitalize rounded-[10px] border text-black focus:border-[#22272E] focus:outline-none w-full h-14 placeholder:text-[#AAAAAA] px-4 pl-14"
          />
          <a className="absolute top-0 right-0 translate-y-4 -translate-x-4 text-[#22272E] ">
            <EyeSlashIcon className="w-6" />
          </a>
        </div>

        <button className="border w-full bg-[#2B2B2B] p-4 text-white rounded-[10px]">
          Sign In
        </button>
      </form>

      <div className="flex justify-center items-center text-sm">
        <p className="text-[#AAAAAA] mr-2 font-light">Don't have an account?</p>
        <a className="text-[#047AFF] font-medium">Sign Up Now</a>
      </div>
    </div>
  );
}

export default SignIn;
