"use client";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { chosenWordState } from "../../atoms/wordAtom";
import Search from "./Search";

function DictionaryHeader() {
  const pathname = usePathname();
  const [input, setInput] = useState("");
  const [word, setWord] = useRecoilState(chosenWordState);
  const [words, setWords] = useState([]);
  const [wordThatIsClickedOn, setWordThatIsClickedOn] =
    useRecoilState(chosenWordState);

  // Save "wordThatIsClickedOn" to localStorage
  function saveWordToStorage(word) {
    localStorage.setItem("chosenWord", JSON.stringify(word));
  }

  useEffect(() => {
    if (!wordThatIsClickedOn) {
      const localStorageData = localStorage.getItem("chosenWord");
      setWordThatIsClickedOn(JSON.parse(localStorageData));
    } else {
      saveWordToStorage(wordThatIsClickedOn);
    }
  }, [wordThatIsClickedOn]);

  return (
    <div className="flex justify-between p-6 items-center">
      {/* Header + Search bar + User Icon */}

      {/* Header */}
      {pathname === "/dictionary" ? (
        <div>
          <p className="font-bold text-2xl">Welcome to our dictionary</p>
        </div>
      ) : (
        <div className="hidden md:inline-block w-full">
          <p className="font-bold text-2xl">
            Definition for: "
            <span className="capitalize text-[#047AFF]">
              {wordThatIsClickedOn?.word}
            </span>
            "
          </p>
        </div>
      )}

      <div className="flex space-x-2 w-full ml-10">
        {/* Search Bar */}
        <div
          className="relative w-full
            drop-shadow-md rounded-[16px]"
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

        {/* User */}
        <div className="h-[40px] w-[44px] md:h-[48px] md:w-[52px] bg-white flex justify-center items-center rounded-[8px] md:rounded-[10px] drop-shadow-md">
          <UserCircleIcon className="h-6 w-6 md:w-8 md:h-8 text-[#AAAAAA]" />
        </div>
      </div>
    </div>
  );
}

export default DictionaryHeader;
