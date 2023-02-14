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

  console.log(word);

  return (
    <>
      <div className="h-full w-full mt-20">
        <div className="flex flex-col justify-center items-center space-y-6 max-w-4xl mx-auto">
          <h1 className="font-bold text-3xl">LOGO</h1>
          <p className="font-light">Decode the lingo, speak Gen Z fluently.</p>

          <div className="relative w-[900px]">
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

        <div className="grid grid-flow-col grid-rows-1 grid-cols-3  max-w-4xl mx-auto mt-10 gap-4">
          <div className="p-6 col-span-2 bg-white h-96 rounded-[16px]">
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

          <div className=" flex flex-col gap-2">
            <div className="bg-[#2A2A2A] p-4 h-1/3 rounded-[16px] flex text-white">
              <div className="bg-white bg-opacity-50 mr-4 rounded-[10px] grid place-content-center w-[38%]">
                <BuildingStorefrontIcon className="h-6 w-6 text-black" />
              </div>
              <div className="grid place-content-center space-y-2">
                <p className="text-sm font-semibold">Chrome Extension</p>
                <p className="text-xs font-light">Add to Chrome</p>
              </div>
            </div>

            <div className="bg-[#2c5ef1] p-4 h-1/3 rounded-[16px] flex text-white">
              <div className="bg-white bg-opacity-50 mr-4 rounded-[10px] grid place-content-center w-[38%]">
                <BuildingStorefrontIcon className="h-6 w-6 text-black" />
              </div>
              <div className="grid place-content-center space-y-2">
                <p className="text-sm font-semibold">Chrome Extension</p>
                <p className="text-xs font-light">Add to Chrome</p>
              </div>
            </div>

            <div className="bg-[#57AAA7] p-4 h-1/3 rounded-[16px] flex text-white">
              <div className="bg-white bg-opacity-50 mr-4 rounded-[10px] grid place-content-center w-[38%]">
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
