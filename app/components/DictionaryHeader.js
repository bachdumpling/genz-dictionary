"use client";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { chosenWordState } from "../../atoms/wordAtom";
import Search from "./Search";

function DictionaryHeader() {
  const [input, setInput] = useState("");
  const [word, setWord] = useRecoilState(chosenWordState);
  const [words, setWords] = useState([]);
  const [wordThatIsClickedOn, setWordThatIsClickedOn] = useState(
    useRecoilValue(chosenWordState)
  );

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
    <div className="flex justify-between item p-6 items-center">
      {/* Header + Search bar + User Icon */}

      {/* Header */}
      <div>
        <p className="font-bold text-2xl">
          Definition for: "
          <span className="capitalize text-[#047AFF]">
            {wordThatIsClickedOn.word}
          </span>
          "
        </p>
      </div>

      <div className="flex space-x-4">
        {/* Search Bar */}
        <div className="relative w-[400px] shadow-md rounded-[16px]">
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
        <div className="h-[48px] w-[48px] bg-white flex justify-center items-center rounded-[10px] shadow-md ">
          <UserCircleIcon className="h-6 w-6 text-[#AAAAAA]" />
        </div>
      </div>
    </div>
  );
}

export default DictionaryHeader;
