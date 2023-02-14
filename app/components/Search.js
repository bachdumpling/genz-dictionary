"use client";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";
import { useEffect, useState } from "react";
import WordCard from "./WordCard";

function Search({ setInput, input, word, setWord, words, setWords }) {
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
    } else {
      setWord("No definition found.");
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
      </form>

      <div className="flex flex-col">
        {words.map((word) => (
          <button
            className="border-2 text-start text-ellipsis truncate"
            onClick={() => {
              setWord(word);
            }}
            key={word.defid}
          >
            <Link href={`/dictionary/${word.word}`}>
              {word.word}: {word.definition}{" "}
            </Link>
          </button>
        ))}
      </div>
      {/* {word && <WordCard word={word} />}
      {words
        .filter((item) => {
          return item !== word;
        })
        .sort((a, b) => {
          return b.thumbs_up - a.thumbs_up;
        })
        .map((word) => {
          return <WordCard word={word} key={word.id} />;
        })} */}
    </>
  );
}

export default Search;
