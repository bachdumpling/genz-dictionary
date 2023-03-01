"use client";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import React from "react";
import { useEffect, useState } from "react";
import WordCard from "./WordCard";
import { usePathname, useRouter } from "next/navigation";
import { useRecoilValue } from "recoil";
import { chosenWordState } from "../../atoms/wordAtom";

function Search({ setInput, input, word, setWord, words, setWords }) {
  const router = useRouter();
  const pathname = usePathname();

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "9b38cabe85mshb282f035a7bb13cp1fce86jsnc1693aca1d59",
      "X-RapidAPI-Host": "mashape-community-urban-dictionary.p.rapidapi.com",
    },
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(
      `https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=${input}`,
      options
    );
    const data = await response.json();
    if (data.list) {
      setWord(data.list[0]);
      router.push(`/dictionary/${data.list[0]?.word}`);
    } else {
      setWord("No definition found.");
      // router.push(`/dictionary/${data.list[0]?.word}`);
    }
  };

  const handleWordChange = async (e) => {
    setInput(e.target.value);
    const response = await fetch(
      `https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=${e.target.value}`,
      options
    );
    const data = await response.json();
    setWords(data?.list);
    // console.log(data?.list);
  };

  function removeSpecialCharacters(str) {
    const sentencePunctuations = /[\.\?\!\:\"\'\:\(\)\,]/;
    return str
      .split("")
      .filter((char) => {
        return char.match(/[a-zA-Z0-9\s]/) || char.match(sentencePunctuations);
      })
      .join("");
  }

  return (
    <>
      <form
        className="flex justify-center items-center"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          className="h-[48px] w-full py-2 px-4 bg-white rounded-[10px] outline-none focus:border focus:border-gray-400 shadow-sm pl-8"
          placeholder="Search"
          value={input}
          onChange={handleWordChange}
        />
        <button className="top-1.5 right-1.5 absolute bg-[#D9D9D9] bg-opacity-70 p-2 w-[36px] h-[36px] rounded-[8px]">
          <MagnifyingGlassIcon className="text-white w-5 h-5" />
          {/* <MagnifyingGlassIcon className="absolute top-0 left-0 mt-3 ml-4 h-6 w-6 text-[#AAAAAA]" /> */}
        </button>
      </form>
      {input && words.length > 0 ? (
        <div className="p-4 rounded-[10px] shadow-lg flex flex-col w-full absolute bg-white translate-y-2">
          {words.map((chosenWord) => (
            <button
              className="mb-2 ml-4 text-start text-ellipsis truncate"
              onClick={() => {
                setWord(chosenWord);
                // console.log(chosenWord);
              }}
              key={chosenWord.defid}
            >
              <Link
                prefetch={true}
                href={`/dictionary/${encodeURIComponent(chosenWord.word)}`}
              >
                <span className="font-semibold capitalize mr-4">
                  {chosenWord.word}
                </span>
                <span>{removeSpecialCharacters(chosenWord.definition)} </span>
              </Link>
            </button>
          ))}
        </div>
      ) : null}
    </>
  );
}

export default Search;
