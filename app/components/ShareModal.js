import React, { useState } from "react";
import { Popover } from "@headlessui/react";
import { ShareIcon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  FacebookShareButton,
  TwitterShareButton,
  FacebookIcon,
  TwitterIcon,
  FacebookMessengerShareButton,
  RedditShareButton,
  RedditIcon,
  EmailShareButton,
  EmailIcon,
} from "react-share";
import Messenger from "./Assets/Messenger.svg";
import Instagram from "./Assets/Instagram.svg";
import Image from "next/image";
import { LinkIcon } from "@heroicons/react/24/solid";

function ShareModal({ word }) {
  const url = `https://www.urbandictionary.com/define.php?term=${word.word}`;
  const title = `Check out the word "${word.word}"!`;
  //   const [link, setLink] = useState(false);
  const [link, setLink] = useState(false);

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(url);
      console.log();
      setLink(true);
      setTimeout(() => {
        setLink(false);
      }, 2000);
    } catch (error) {
      console.error("Failed to copy link: ", error);
    }
  }

  return (
    <Popover className="" >
      {({ open }) => (
        <>
          <Popover.Button className="rounded-[10px] p-2 bg-white shadow-md hover:scale-110 hover:font-semibold transition-all duration-150 ease-out">
            <ShareIcon className="w-6 h-6" />
          </Popover.Button>

          <Popover.Panel className="absolute rounded-[16px] w-[220px] -translate-x-28 bg-white translate-y-2 shadow-md">
            <div className="flex my-[24px]">
              <h2 className="w-full text-center text-sm font-semibold">Share</h2>
              {/* <XMarkIcon
                  onClick={() => {
                    close = true;
                  }}
                  className="w-4 h-4 -translate-x-5 absolute"
                /> */}
            </div>
            <div className="grid grid-cols-3 place-items-center gap-y-[16px] gap-x-[10px] mb-[24px] mx-2">
              <FacebookShareButton
                className="flex flex-col justify-center items-center space-y-2"
                url={url}
                quote={title}
              >
                <FacebookIcon
                  bgStyle={{ fill: "#337FFF" }}
                  size={32}
                  round={false}
                  className="rounded-[8px] cursor-pointer hover:scale-125 hover:font-semibold transition-all duration-150 ease-out"
                />
                <p className="text-xs font-light">Facebook</p>
              </FacebookShareButton>

              <FacebookMessengerShareButton
                className="flex flex-col justify-center items-center space-y-2"
                url={url}
                quote={title}
              >
                {/* <FacebookMessengerIcon
                bgStyle={{ fill: "#0099FF" }}
                size={32}
                round={false}
                className="rounded-[8px]"
              /> */}
                <Image
                  src={Messenger}
                  width={32}
                  height={32}
                  className="rounded-[8px] hover:scale-125 hover:font-semibold transition-all duration-150 ease-out"
                />
                <p className="text-xs font-light">Messenger</p>
              </FacebookMessengerShareButton>

              <TwitterShareButton
                className="flex flex-col justify-center items-center space-y-2"
                url={url}
                title={title}
              >
                <TwitterIcon
                  bgStyle={{ fill: "#33CCFF" }}
                  size={32}
                  round={false}
                  className="rounded-[8px] hover:scale-125 hover:font-semibold transition-all duration-150 ease-out"
                />
                <p className="text-xs font-light">Twitter</p>
              </TwitterShareButton>

              <RedditShareButton
                className="flex flex-col justify-center items-center space-y-2"
                url={url}
                quote={title}
              >
                <RedditIcon
                  bgStyle={{ fill: "#FF4500" }}
                  size={32}
                  round={false}
                  className="rounded-[8px] hover:scale-125 hover:font-semibold transition-all duration-150 ease-out"
                />
                <p className="text-xs font-light">Reddit</p>
              </RedditShareButton>

              <EmailShareButton
                className="flex flex-col justify-center items-center space-y-2"
                url={url}
                quote={title}
              >
                <EmailIcon
                  iconFillColor="black"
                  bgStyle={{ fill: "#F6F6F6" }}
                  size={32}
                  round={false}
                  className="rounded-[8px] hover:scale-125 transition-all duration-150 ease-out"
                />
                <p className="text-xs font-light">Email</p>
              </EmailShareButton>

              <div className="flex flex-col justify-center items-center space-y-2">
                <button
                  onClick={() => {
                    copyLink();
                  }}
                  className="rounded-[8px] bg-[#F6F6F6] w-[32px] h-[32px] grid place-items-center hover:scale-125 hover:font-semibold transition-all duration-150 ease-out"
                >
                  <LinkIcon className="w-4 h-4" />
                </button>
                {link ? (
                  <p className="text-xs font-light">Copied</p>
                ) : (
                  <p className="text-xs font-light">Copy Link</p>
                )}
              </div>
            </div>
          </Popover.Panel>
        </>
      )}
    </Popover>
  );
}

export default ShareModal;
