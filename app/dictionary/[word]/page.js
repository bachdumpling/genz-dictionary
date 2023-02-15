"use client";
import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { chosenWordState } from "../../../atoms/wordAtom.js";
import WordCard from "../../components/WordCard";

function WordPage({ params: { word } }) {
  const [words, setWords] = useState([]);
  const [wordThatIsClickedOn, setWordThatIsClickedOn] = useState(
    useRecoilValue(chosenWordState)
  );

  // Save "wordThatIsClickedOn" to localStorage
  function saveWordToStorage(word) {
    localStorage.setItem("chosenWord", JSON.stringify(word));
  }

  // Find and remove "wordThatIsClickedOn" from "words" array
  function findAndRemoveWord(wordId, words) {
    const index = words.findIndex((word) => word.defid === wordId);
    if (index === -1) {
      return words;
    }
    return words.filter((word) => word.defid !== wordId);
  }

  // If "wordThatIsClickedOn" is not null, save it to localStorage and remove it from "words" array
  useEffect(() => {
    if (!wordThatIsClickedOn) {
      const localStorageData = localStorage.getItem("chosenWord");
      setWordThatIsClickedOn(JSON.parse(localStorageData));
    } else {
      saveWordToStorage(wordThatIsClickedOn);
    }
  }, [wordThatIsClickedOn]);

  // Fetch words from API and set "Words" array
  const fetchWords = async (word) => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "9b38cabe85mshb282f035a7bb13cp1fce86jsnc1693aca1d59",
        "X-RapidAPI-Host": "mashape-community-urban-dictionary.p.rapidapi.com",
      },
    };

    const res = await fetch(
      `https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=${word}`,
      options
    );

    const words = await res.json();

    return words.list;
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const words = await fetchWords(word);
        setWords(words);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, [word]);

  // Display words and chosen word
  function displayWords(words) {
    return findAndRemoveWord(wordThatIsClickedOn.defid, words)
      .sort((a, b) => b.thumbs_up - a.thumbs_up)
      .map((word) => <WordCard word={word} key={word.defid} />);
    // return words
    //   .sort((a, b) => b.thumbs_up - a.thumbs_up)
    //   .map((word) => <WordCard word={word} key={word.defid} />);
  }

  function displayChosenWord(word) {
    return <WordCard word={word} />;
  }

  console.log(wordThatIsClickedOn, words);
  // console.log(words);

  return (
    <>
      <div className="flex flex-col justify-center items-center space-y-6 max-w-5xl mx-auto">
        {/* {wordThatIsClickedOn && displayChosenWord(wordThatIsClickedOn)} */}
        <div className="flex flex-row gap-4">
          <div className="">
            {wordThatIsClickedOn && displayChosenWord(wordThatIsClickedOn)}
            {displayWords(words)}
          </div>

          <div className="flex flex-col gap-4">
            <div className="p-4 rounded-[16px] border bg-[#2C5EF1] w-[300px] h-[172px] text-white">
              <p className="font-bold">Synonyms</p>
              <ol>
                <div className="bg-[#FDFDFD] bg-opacity-50 text-sm p-3 rounded-[10px] flex shadow-md h-[48px] w-full my-2">
                  <p className="font-semibold pl-2 pr-4 text-[#2C5EF1]">1</p>
                  <li className="font-semibold text-base"> Pretend</li>
                </div>
                <div className="bg-[#FDFDFD] bg-opacity-50 text-sm p-3 rounded-[10px] flex shadow-md h-[48px] w-full my-2">
                  <p className="font-semibold pl-2 pr-4 text-[#2C5EF1]">1</p>
                  <li className="font-semibold text-base"> Deceive</li>
                </div>
              </ol>
            </div>

            <div className="p-4 rounded-[16px] border bg-[#57AAA7] w-[300px] h-[172px] text-white">
              <p className="font-bold">Antonyms</p>
              <ol>
                <div className="bg-[#FDFDFD] bg-opacity-50 text-sm p-3 rounded-[10px] flex shadow-md h-[48px] w-full my-2">
                  <p className="font-semibold pl-2 pr-4 text-[#57AAA7]">1</p>
                  <li className="font-semibold text-base"> Honesty</li>
                </div>
                <div className="bg-[#FDFDFD] bg-opacity-50 text-sm p-3 rounded-[10px] flex shadow-md h-[48px] w-full my-2">
                  <p className="font-semibold pl-2 pr-4 text-[#57AAA7]">1</p>
                  <li className="font-semibold text-base"> Legitimacy</li>
                </div>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WordPage;
