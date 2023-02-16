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
    } else {
      setWord("No definition found.");
    }
    router.push(`/dictionary/${data.list[0]?.word}`);
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

  // const displayResults(words) => {
  //   return ;
  // }

  return (
    <>
      <form
        className="flex justify-center items-center"
        onSubmit={handleSubmit}
      >
        <MagnifyingGlassIcon className="absolute top-0 left-0 mt-3 ml-4 h-6 w-6 text-[#AAAAAA]" />
        <input
          type="text"
          className="h-[48px] w-full py-2 px-4 bg-white rounded-[10px] outline-none focus:border focus:border-gray-400 shadow-sm pl-14"
          placeholder="Search"
          value={input}
          onChange={handleWordChange}
        />
        <button className="top-1 right-1 absolute bg-[#D9D9D9] bg-opacity-70 p-2 w-[40px] h-[40px] rounded-[8px]">
          <ArrowRightIcon className="text-white w-6 h-6" />
        </button>
      </form>

      <div className="flex flex-col w-full absolute bg-white">
        {words.map((chosenWord) => (
          <>
            <button
              className="border-2 text-start text-ellipsis truncate"
              onClick={() => {
                setWord(chosenWord);
                // console.log(chosenWord);
              }}
              key={chosenWord.defid}
            >
              <Link
                prefetch={true}
                href={`/dictionary/term=${encodeURIComponent(chosenWord.word)}`}
                // href={`/dictionary/`+ chosenWord.word}
              >
                {chosenWord.word}: {chosenWord.definition}{" "}
              </Link>
            </button>
            {/* {pathname == `/` ? (
              <button
                className="border-2 text-start text-ellipsis truncate"
                onClick={() => {
                  setWord(chosenWord);
                }}
                key={chosenWord.defid}
              >
                <Link prefetch={true} href={`/dictionary/${chosenWord.word}`}>
                  {chosenWord.word}: {chosenWord.definition}{" "}
                </Link>
              </button>
            ) : (
              <button
                className="border-2 text-start text-ellipsis truncate"
                onClick={(e) => {
                  setWord(chosenWord);
                }}
                key={chosenWord.defid}
              >
                {chosenWord.word != word.word ? (
                <Link prefetch={true} href={`/dictionary/${chosenWord.word}`}>
                  {chosenWord.word}: {chosenWord.definition}{" "}
                </Link>
                ) : (
                  <p>
                    {chosenWord.word}: {chosenWord.definition}{" "}
                  </p>
                )}
              </button>
            )} */}
          </>
        ))}
      </div>
    </>
  );
}

export default Search;
