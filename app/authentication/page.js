"use client";
import Image from "next/image";
import React from "react";
import loginSvg from "../components/Assets/loginSvg.svg";
import { FcGoogle } from "react-icons/fc";

function Authentication() {
  return (
    <div className="flex max-w-4xl mx-auto mt-60 gap-4 border-2">
      <div className="flex-1 border-2">
        <Image src={loginSvg} alt="login" />
      </div>
      <div className="flex-1 border-2 px-4">
        <h1 className="text-4xl text-center font-medium pb-[48px]">
          {" "}
          Welcome Back
        </h1>
        <button className="w-full border-2 p-4 flex justify-center items-center rounded-[10px] mb-[24px]">
          <FcGoogle className="h-6 w-6 mr-2" />
          Sign in with Google
        </button>

        <div className="mb-[24px] flex w-full justify-center items-center">
          <hr className=" w-full"></hr>

          <p className="text-[#D9D9D9] text-center mx-2">or</p>

          <hr className=" w-full"></hr>
        </div>

        <form className="">
          <div className="flex flex-col gap-2">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
            />
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <input type="checkbox" name="remember" id="remember" />
              <label htmlFor="remember" className="ml-2">
                Remember me
              </label>
            </div>
            <a href="#" className="text-[#047AFF]">
              Forgot Password?
            </a>
          </div>
          <button className="bg-blue-500 text-white rounded-md p-2 mt-4">
            Sign In
          </button>
        </form>

        <div className="flex justify-center items-center mt-4">
          <p className="text-[#D9D9D9]">Don't have an account?</p>
          <a href="#" className="text-[#047AFF] ml-2">
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
}

export default Authentication;
