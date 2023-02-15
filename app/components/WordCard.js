import { ShareIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React, { useState } from "react";
import udlogo from "./Assets/udlogo.svg";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
} from "react-share";
import Modal from "./Modal";

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

  const url = `https://www.urbandictionary.com/define.php?term=${word.word}`;
  const title = `Check out the word "${word.word}"!`;

  function handleDefinitionClick() {
    setShowMore(!showMore);
  }

  // Share Button
  function handleShareClick() {
    showSharePopup();
  }
  const [showShare, setShowShare] = useState(true);

  const handleShowShare = () => {
    setShowShare(!showShare);
  };

  return (
    <div
      className={`border rounded-[16px] mb-4 bg-white w-[700px] h-[350px] ${
        showMore ? "h-auto" : "h-[350px] overflow-hidden"
      }`}
    >
      <div className="px-[32px] py-[32px]">
        <div className="flex justify-between">
          <h1 className="text-4xl font-bold pb-[32px] capitalize">
            {word?.word}
          </h1>
          <div className="space-x-4">
            <>
              <button
                onClick={handleShowShare}
                className="rounded-[10px] p-2 bg-white shadow-md"
              >
                <ShareIcon className="w-6 h-6" />
              </button>

              {/* <Modal isOpen={showPopup} onRequestClose={hideSharePopup}>
                <FacebookShareButton url={url} quote={title}>
                  <FacebookIcon size={32} round={true} />
                </FacebookShareButton>
                <TwitterShareButton url={url} title={title}>
                  <TwitterIcon size={32} round={true} />
                </TwitterShareButton>
                <LinkedinShareButton url={url} title={title}>
                  <LinkedinIcon size={32} round={true} />
                </LinkedinShareButton>

                <button onClick={hideSharePopup}>Close</button>
              </Modal> */}
            </>

            <button className="rounded-[10px] p-2 bg-black shadow-md">
              <a href={word.permalink} target="_blank">
                <Image src={udlogo} className="w-6 h-6" />
              </a>
            </button>
          </div>
        </div>

        {/* <p className="pb-[32px] font-semibold border h-[60px]">
          {DisplayTextWithLineBreaks(removeSpecialCharacters(word?.definition))}
        </p> */}
        {/* <div className="pb-[32px] font-semibold">{word?.definition}</div> */}

        <p
          className={`pb-[32px] font-semibold ${
            showMore ? "h-auto" : "h-[70px] truncate overflow-hidden"
          }`}
        >
          {DisplayTextWithLineBreaks(removeSpecialCharacters(word?.definition))}
        </p>
        <div className="w-full text-right">
          {!showMore ? (
            <button
              onClick={handleDefinitionClick}
              className="text-blue-500 cursor-pointer ml-2"
            >
              ... see more
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

        <h2 className="pb-[16px] font-bold">Example:</h2>
        {/* <p className="text-sm">{word?.example}</p> */}
        <p className="text-sm">
          {DisplayTextWithLineBreaks(removeSpecialCharacters(word?.example))}
        </p>
      </div>

      {/* <Modal showShare={showShare} handleShowShare={handleShowShare}>
        <h1 className="text-2xl font-bold mb-4">Modal Title</h1>
        <p className="mb-4">Modal content goes here.</p>
        <button className="bg-blue-500 text-white py-2 px-4 rounded">
          Close Modal
        </button>
      </Modal> */}
    </div>
  );
}

export default WordCard;
