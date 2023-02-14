import React from "react";

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

  return (
    <div className="border rounded-[16px] my-4 bg-white">
      <div className="px-[32px] py-[32px]">
        <h1 className="text-4xl font-bold pb-[32px] capitalize">
          {word?.word}
        </h1>

        <p className="pb-[32px] font-semibold">
          {DisplayTextWithLineBreaks(removeSpecialCharacters(word?.definition))}
        </p>
        {/* <div className="pb-[32px] font-semibold">{word?.definition}</div> */}

        <h2 className="pb-[16px] font-bold">Example:</h2>
        {/* <p className="text-sm">{word?.example}</p> */}
        <p className="text-sm">
          {DisplayTextWithLineBreaks(removeSpecialCharacters(word?.example))}
        </p>
      </div>
    </div>
  );
}

export default WordCard;
