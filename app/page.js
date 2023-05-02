"use client";
import { BuildingStorefrontIcon, XMarkIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { chosenWordState } from "../atoms/wordAtom";
import Footer from "./components/Footer";
import Search from "./components/Search";
import { BiUserPin } from "react-icons/bi";
import { BsFillChatLeftTextFill } from "react-icons/bs";
import logo from "../public/logo.svg";
import Image from "next/image";
import WordFrequencyBarChart from "./components/WordFrequencyBarChart";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRightOnRectangleIcon,
  Bars2Icon,
  BookOpenIcon,
  HomeIcon,
} from "@heroicons/react/24/solid";
import NavigationMenu from "./components/NavigationMenu";
import { ImBooks } from "react-icons/im";
import { usePathname } from "next/navigation";

function Home() {
  const pathname = usePathname();
  const [input, setInput] = useState("");
  const [word, setWord] = useRecoilState(chosenWordState);
  const [words, setWords] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="w-full">
        <div className="bg-white pt-[115px] pb-[48px] h-full drop-shadow-sm relative z-10">
          <div className="flex flex-col justify-center items-center max-w-4xl mx-4 md:mx-auto md:px-8">
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
            <div className=" flex flex-col justify-center items-center w-full mb-[32px]">
              <div className="flex mb-[32px]">
                <Link href="/">
                  <Image src={logo} className="w-8 h-10 mr-10" />
                </Link>
                <p className="font-bold text-3xl">z-define</p>
              </div>
              <p className="font-light text-center text-[#AAAAAA] text-xl">
                Decode the lingo, speak Gen Z fluently.
              </p>
            </div>

            <div
              className="relative 
              w-full 
              drop-shadow-lg
            rounded-[16px]"
            >
              <Search
                setInput={setInput}
                input={input}
                word={word}
                setWord={setWord}
                words={words}
                setWords={setWords}
              />
            </div>
          </div>
        </div>

        <div className="grid grid-flow-col grid-rows-2 md:grid-rows-1 grid-cols-1 md:grid-cols-3 max-w-4xl md:mx-auto md:px-8 mx-auto mt-[48px] w-full overflow-x-hidden md:gap-x-4">
          <div className="p-6 col-span-2 bg-white h-96 rounded-[16px] mx-4 md:mx-0 mb-4 relative z-0">
            <h1 className="text-start w-full text-[#AAAAAA] font-bold text-lg mb-4">
              See what&#8216;s popular...
            </h1>
            <div className="relative -z-10">
              <WordFrequencyBarChart />
            </div>

            {/* <h2 className="font-bold text-lg">See What's Popular</h2>
            <ol className="mt-4">
              <div className="bg-white text-sm p-3 rounded-[10px] my-4 flex shadow-md w-full">
                <p className="font-semibold pl-2 pr-4 text-gray-500">1</p>
                <li> Cap</li>
              </div>
              <div className="bg-white text-sm p-3 rounded-[10px] my-4 flex shadow-md w-full">
                <p className="font-semibold pl-2 pr-4 text-gray-500">2</p>
                <li> Slay</li>
              </div>
              <div className="bg-white text-sm p-3 rounded-[10px] my-4 flex shadow-md w-full">
                <p className="font-semibold pl-2 pr-4 text-gray-500">3</p>
                <li> Simp</li>
              </div>
              <div className="bg-white text-sm p-3 rounded-[10px] my-4 flex shadow-md w-full">
                <p className="font-semibold pl-2 pr-4 text-gray-500">4</p>
                <li> Living Rent Free</li>
              </div>
              <div className="bg-white text-sm p-3 rounded-[10px] my-4 flex shadow-md w-full">
                <p className="font-semibold pl-2 pr-4 text-gray-500">5</p>
                <li> I'm Weak</li>
              </div>
            </ol> */}
          </div>

          <div className="md:grid grid-rows-3 grid-flow-row mx-4 md:mx-0 space-y-2 md:space-y-0">
            <div className="bg-[#2A2A2A] rows-span-1 p-4 h-[80px] md:h-[122px] rounded-[16px] flex text-white">
              <div className="bg-white bg-opacity-50 mr-4 rounded-[10px] grid place-content-center w-[52px] h-[52px] md:w-[90px] md:h-[90px]">
                <BuildingStorefrontIcon className="h-6 w-6 text-black" />
              </div>
              <div className="grid place-content-center space-y-2">
                <p className="text-sm font-semibold">Chrome Extension</p>
                <p className="text-xs font-light">Add to Chrome</p>
              </div>
            </div>

            <div className="bg-[#2C5EF1] rows-span-1 p-4 h-[80px] md:h-[122px] rounded-[16px] flex text-white">
              <div className="bg-white bg-opacity-50 mr-4 rounded-[10px] grid place-content-center w-[52px] h-[52px] md:w-[90px] md:h-[90px]">
                <BiUserPin className="h-6 w-6 text-black" />
              </div>
              <div className="grid place-content-center space-y-2">
                <p className="text-sm font-semibold">Create An Account</p>
                <p className="text-xs font-light">Unlock More Features</p>
              </div>
            </div>

            <div className="bg-[#57AAA7] rows-span-1 p-4 h-[80px] md:h-[122px] rounded-[16px] flex text-white">
              <div className="bg-white bg-opacity-50 mr-4 rounded-[10px] grid place-content-center w-[52px] h-[52px] md:w-[90px] md:h-[90px]">
                <BsFillChatLeftTextFill className="h-5 w-5 text-black" />
              </div>
              <div className="grid place-content-center space-y-2">
                <p className="text-sm font-semibold">Suggest Us</p>
                <p className="text-xs font-light">Let's Hear It!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
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

            <Link href="/thesaurus">
              <div className={`flex ${pathname === "/" ? "" : ""}`}>
                <ImBooks className="h-6 w-6 mr-4" />
                <p className="">Thesaurus</p>
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
export default Home;
