import Image from "next/image";
import React, { useState } from "react";
import udlogo from "./Assets/udlogo.svg";
import ShareModal from "./ShareModal";

function WordCard({ word }) {
  // console.log(typeof word);
  function removeSpecialCharacters(str) {
    const sentencePunctuations = /[\.\?\!\:\"\'\:\(\)\,]/;
    return str
      .split("")
      .filter((char) => {
        return char.match(/[a-zA-Z0-9\s]/) || char.match(sentencePunctuations);
      })
      .join("");
  }

  function DisplayTextWithLineBreaks(str) {
    return (
      <div
        dangerouslySetInnerHTML={{ __html: str.replace(/\r\n/g, "<br />") }}
      />
    );
  }

  const [showMore, setShowMore] = useState(false);

  function handleDefinitionClick() {
    setShowMore(!showMore);
  }

  return (
    <div
      className={`border rounded-[16px] mb-4 bg-white w-[350px] md:w-[500px] lg:w-[700px] h-[300px] md:h-[350px] ${
        showMore ? "md:h-auto" : "h-[350px] overflow-hidden"
      }`}
    >
      <div className="px-[32px] py-[32px]">
        <div className="flex justify-between mb-[32px]">
          <h1 className="text-4xl font-bold capitalize">{word?.word}</h1>
          <div className="space-x-4 flex">
            <ShareModal word={word} />

            <button className="rounded-[10px] p-2 bg-black shadow-md hover:scale-110 hover:font-semibold transition-all duration-150 ease-out">
              <a href={word.permalink} target="_blank">
                <Image
                  src={udlogo}
                  className="w-6 h-6"
                  alt="urban dictionary link"
                />
              </a>
            </button>
          </div>
        </div>

        {/* <p className="pb-[32px] font-semibold border h-[60px]">
          {DisplayTextWithLineBreaks(removeSpecialCharacters(word?.definition))}
        </p> */}
        {/* <div className="pb-[32px] font-semibold">{word?.definition}</div> */}

        <div
          className={`pb-[32px] font-semibold leading-loose ${
            showMore ? "h-auto" : "h-[70px] text-ellipsis overflow-hidden"
          }`}
        >
          {DisplayTextWithLineBreaks(removeSpecialCharacters(word?.definition))}
        </div>

        <h2 className="pb-[16px] font-bold">Example:</h2>
        <div
          className={`text-[#AAAAAA] font-light leading-loose ${
            showMore ? "h-auto" : "h-[70px] overflow-hidden"
          }`}
        >
          {DisplayTextWithLineBreaks(removeSpecialCharacters(word?.example))}
        </div>

        <div className="w-full text-right pb-[32px]">
          {!showMore ? (
            <button
              onClick={handleDefinitionClick}
              className="text-blue-500 underline cursor-pointer ml-2"
            >
              See More
            </button>
          ) : (
            <button
              onClick={handleDefinitionClick}
              className="text-blue-500 cursor-pointer ml-2"
            >
              ... see less
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default WordCard;
