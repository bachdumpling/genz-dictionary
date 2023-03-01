"use client";
import { BuildingStorefrontIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { chosenWordState } from "../atoms/wordAtom";
import Footer from "./components/Footer";
import Search from "./components/Search";

function Home() {
  const [input, setInput] = useState("");
  const [word, setWord] = useRecoilState(chosenWordState);
  const [words, setWords] = useState([]);

  // console.log(word);

  return (
    <>
      <div className="w-full mt-20 min-w-fit">
        <div className="flex flex-col justify-center items-center space-y-6 max-w-4xl md:mx-auto mx-4">
          <h1 className="font-bold text-3xl">LOGO</h1>
          <p className="font-light text-[#AAAAAA] md:text-black">
            Decode the lingo, speak Gen Z fluently.
          </p>

          {/* <div className="relative w-[320px] lg:w-[900px] shadow-md rounded-[16px]"> */}
          <div className="relative w-full shadow-md rounded-[16px] z-10">
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

        <div className="grid grid-flow-col grid-rows-2 md:grid-rows-1 grid-cols-1 md:grid-cols-3  max-w-4xl md:mx-auto mx-auto mt-10 w-full overflow-x-hidden md:gap-x-4">
          <div className="p-6 col-span-2 bg-white h-96 rounded-[16px] mx-4 md:mx-0 mb-4">
            <h2 className="font-bold text-lg">See What's Popular</h2>
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
            </ol>
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

            <div className="bg-[#2A2A2A] rows-span-1 p-4 h-[80px] md:h-[122px] rounded-[16px] flex text-white">
              <div className="bg-white bg-opacity-50 mr-4 rounded-[10px] grid place-content-center w-[52px] h-[52px] md:w-[90px] md:h-[90px]">
                <BuildingStorefrontIcon className="h-6 w-6 text-black" />
              </div>
              <div className="grid place-content-center space-y-2">
                <p className="text-sm font-semibold">Chrome Extension</p>
                <p className="text-xs font-light">Add to Chrome</p>
              </div>
            </div>

            <div className="bg-[#2A2A2A] rows-span-1 p-4 h-[80px] md:h-[122px] rounded-[16px] flex text-white">
              <div className="bg-white bg-opacity-50 mr-4 rounded-[10px] grid place-content-center w-[52px] h-[52px] md:w-[90px] md:h-[90px]">
                <BuildingStorefrontIcon className="h-6 w-6 text-black" />
              </div>
              <div className="grid place-content-center space-y-2">
                <p className="text-sm font-semibold">Chrome Extension</p>
                <p className="text-xs font-light">Add to Chrome</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
