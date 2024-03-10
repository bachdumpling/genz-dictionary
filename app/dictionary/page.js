"use client";
import React, { useEffect, useState } from "react";
import WordFrequencyBarChart from "../components/WordFrequencyBarChart.js";
import WordCard from "../components/WordCard.js";
import { data } from "../components/WordFrequencyData.js";
import { usePathname } from "next/navigation.js";

function Dictionary() {
  const [words, setWords] = useState([]);
  const [loadedWords, setLoadedWords] = useState([]);
  const [loadMoreVisible, setLoadMoreVisible] = useState(false);
  const pathname = usePathname();

  // Fetch words from API and set "Words" array
  const fetchWords = async (wordArray) => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "9b38cabe85mshb282f035a7bb13cp1fce86jsnc1693aca1d59",
        "X-RapidAPI-Host": "mashape-community-urban-dictionary.p.rapidapi.com",
      },
    };

    const fetchedWords = await Promise.all(
      wordArray.map(async (wordObj, index) => {
        const res = await fetch(
          `https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=${wordObj.word}`,
          options
        );
        const words = await res.json();
        const firstDefinition = words.list[0];
        return { ...wordObj, definition: firstDefinition };
      })
    );

    return fetchedWords;
  };

  useEffect(() => {
    async function fetchData() {
      try {
        // Check if cache exists in local storage
        const cachedWords = localStorage.getItem("cachedWords");
        if (cachedWords) {
          const parsedWords = JSON.parse(cachedWords);
          setWords(parsedWords);
          setLoadedWords(parsedWords.slice(0, 5));
          setLoadMoreVisible(parsedWords.length > 5);
        } else {
          const fetchedWords = await fetchWords(data);
          setWords(fetchedWords);
          setLoadedWords(fetchedWords.slice(0, 5));
          setLoadMoreVisible(fetchedWords.length > 5);
          // Cache fetched words in local storage
          localStorage.setItem("cachedWords", JSON.stringify(fetchedWords));
        }
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, [pathname]);

  const handleLoadMore = () => {
    const nextWords = words.slice(loadedWords.length, loadedWords.length + 5);
    setLoadedWords((prevLoadedWords) => [...prevLoadedWords, ...nextWords]);
    setLoadMoreVisible(loadedWords.length + 5 < words.length);
  };

  return (
    <>
      <div className="flex justify-center ">
        <div className="flex flex-col mx-4">
          <div className="bg-white rounded-[16px] p-8 flex-1 justify-center items-center mb-8 shadow-md">
            <h1 className="text-start w-full text-[#AAAAAA] font-bold text-base lg:text-lg mb-8">
              People are talking about...
            </h1>
            <WordFrequencyBarChart numberOfWords={10} height={300} />
          </div>
          <div className="flex flex-col justify-center items-center">
            {loadedWords.map((word) => {
              return word.definition ? (
                <WordCard key={word.word} word={word?.definition} />
              ) : null;
            })}

            {loadMoreVisible && (
              <button
                className="bg-blue-500 hover:bg-blue-800  text-white text-sm md:text-base font-semibold py-3 px-6 rounded-[16px] mt-4"
                onClick={handleLoadMore}
              >
                Load More
              </button>
            )}
          </div>
        </div>

        <div className="hidden lg:inline-block bg-white w-full h-full shadow-md rounded-[16px] p-8 ml-4 relative">
          <h2 className="font-semibold text-sm lg:text-lg mb-6">
            {" "}
            Word of the day
          </h2>
          <p className="font-semibold text-2xl md:text-4xl text-[#047AFF] mb-6">
            Cap
          </p>
          <p className="font-extralight text-sm text-gray-500 mb-6">Slang</p>
          <p className="font-semibold text-sm text-black md:mb-4">
            Definition: The word lying but built different
          </p>
          <p className="text-sm text-black">
            Example: "You are capping, be real"
          </p>
        </div>
      </div>
    </>
  );
}

export default Dictionary;
