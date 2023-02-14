"use client";
import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { chosenWordState } from "../../../atoms/wordAtom.js.js.js.js.js.js.js.js";
import WordCard from "../../components/WordCard";

type PageProps = {
  params: {
    word: string;
  };
};

const fetchWords = async (word: string) => {
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

function WordPage({ params: { word } }: PageProps) {
  const [words, setWords] = useState([]);
  const wordThatIsClickedOn = useRecoilValue(chosenWordState);

  console.log(wordThatIsClickedOn);

  useEffect(() => {
    async function fetchData() {
      const words = await fetchWords(word);
      setWords(words);
    }

    fetchData();
  }, [word]);

  console.log(words);

  return (
    <div>
      Word: {word}
      {/* {word && <WordCard word={wordThatIsClickedOn} />} */}
      {/* {words
        .filter((item) => {
          return item !== word;
        })
        .sort((a, b) => {
          return b.thumbs_up - a.thumbs_up;
        })
        .map((word) => {
          return <WordCard word={word} key={word.id} />;
        })} */}
    </div>
  );
}

export default WordPage;
