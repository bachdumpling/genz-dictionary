import Image from "next/image";
import React, { useState } from "react";
import udlogo from "./Assets/udlogo.svg";
import ShareModal from "./ShareModal";
import "../../styles/WordCard.module.css";
import ShowMoreText from "react-show-more-text";

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
    // <div
    //   className={`border rounded-[16px] mb-4 bg-white w-[350px] md:w-[500px] lg:w-[700px] min-h-[300px] md:min-h-[330px] ${
    //     showMore && "overflow-auto"
    //   }`}
    // >
    <div
      className={`rounded-[16px] mb-6 bg-white w-[350px] md:w-[660px] min-h-[300px] md:min-h-[330px] shadow-md ${
        showMore && "overflow-auto"
      }`}
    >
      <div className="px-[32px] py-[32px]">
        <div className="flex justify-between mb-[32px]">
          <h1 className="text-2xl md:text-4xl  font-bold capitalize">{word?.word}</h1>
          <div className="space-x-4 flex">
            <ShareModal word={word} />

            <div className="rounded-[10px] p-2 bg-black shadow-md hover:scale-110 hover:font-semibold transition-all duration-150 ease-out w-10 h-10 cursor-pointer">
              <a href={word.permalink} target="_blank">
                <Image
                  src={udlogo}
                  className="w-6 h-6"
                  alt="urban dictionary link"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="pb-[32px] text-sm md:text-base">
          <ShowMoreText
            lines={2}
            more="More"
            less="Less"
            onClick={handleDefinitionClick}
            expanded={false}
            truncatedEndingComponent={"... "}
            className={`font-semibold leading-loose 
            ${showMore && "h-auto"}`}
            anchorClass="font-light text-[#047AFF] underline cursor-pointer flex justify-end"
          >
            {DisplayTextWithLineBreaks(
              removeSpecialCharacters(word?.definition)
            )}
          </ShowMoreText>
        </div>

        <h2 className="pb-[16px] font-bold text-sm md:text-base">Example:</h2>

        <div className="text-sm md:text-base">
          <ShowMoreText
            lines={2}
            more="More"
            less="Less"
            onClick={handleDefinitionClick}
            expanded={false}
            truncatedEndingComponent={"... "}
            className={`font-light leading-loose
            ${showMore && "h-auto"}`}
            anchorClass="font-light text-[#047AFF] underline transition-all cursor-pointer"
          >
            {DisplayTextWithLineBreaks(removeSpecialCharacters(word?.example))}
          </ShowMoreText>
        </div>
      </div>
    </div>
  );
}

export default WordCard;
