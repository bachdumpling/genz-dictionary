"use client";
import { UserCircleIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { chosenWordState } from "../../atoms/wordAtom";
import Search from "./Search";
import { motion } from "framer-motion";
import {
  ArrowRightOnRectangleIcon,
  Bars2Icon,
  BookOpenIcon,
  HomeIcon,
} from "@heroicons/react/24/solid";
import NavigationMenu from "./NavigationMenu";
import Link from "next/link";
import { ImBooks } from "react-icons/im";

function DictionaryHeader({ children }) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [word, setWord] = useRecoilState(chosenWordState);
  const [words, setWords] = useState([]);
  const [wordThatIsClickedOn, setWordThatIsClickedOn] =
    useRecoilState(chosenWordState);

  // Save "wordThatIsClickedOn" to localStorage
  function saveWordToStorage(word) {
    localStorage.setItem("chosenWord", JSON.stringify(word));
  }

  useEffect(() => {
    if (!wordThatIsClickedOn) {
      const localStorageData = localStorage.getItem("chosenWord");
      setWordThatIsClickedOn(JSON.parse(localStorageData));
    } else {
      saveWordToStorage(wordThatIsClickedOn);
    }
  }, [wordThatIsClickedOn]);

  return (
    <div className="flex justify-between py-6 px-6 md:px-2 items-center p-4">
      {/* Header + Search bar + User Icon */}

      {/* Header */}
      {pathname === `/dictionary/${wordThatIsClickedOn?.word}` ? (
        <div className="hidden md:inline-block w-full">
          <p className="font-bold text-2xl">
            Definition for: "
            <span className="capitalize text-[#047AFF]">
              {wordThatIsClickedOn?.word}
            </span>
            "
          </p>
        </div>
      ) : (
        <>{children}</>
      )}

      <motion.button
        onClick={() => {
          setIsOpen(true);
        }}
        className="absolute md:hidden w-6 h-6 top-8 left-6 cursor-pointer z-50"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <Bars2Icon className="" />
      </motion.button>

      <div className="flex space-x-2 w-full ml-10">
        {/* Search Bar */}
        <div
          className="relative w-full
            drop-shadow-md rounded-[16px]"
        >
          <Search
            setInput={setInput}
            input={input}
            word={word}
            setWord={setWord}
            words={words}
            setWords={setWords}
          />
        </div>

        {/* User */}
        {/* <div className="h-[40px] w-[44px] md:h-[48px] md:w-[52px] bg-white flex justify-center items-center rounded-[8px] md:rounded-[10px] drop-shadow-md">
          <UserCircleIcon className="h-6 w-6 md:w-8 md:h-8 text-[#AAAAAA]" />
        </div> */}
      </div>

      {isOpen && (
        <NavigationMenu
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          pathname={pathname}
        >
          <div className="absolute top-4 right-4">
            <button
              type="button"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              <XMarkIcon className="w-4 h-4 text-[#AAAAAA]" />
            </button>
          </div>

          <div className="mt-2 flex flex-col justify-start space-y-[24px] text-sm">
            <Link href="/">
              <div className={`flex ${pathname === "/" ? "" : ""}`}>
                <HomeIcon className="h-6 w-6 mr-4" />
                <p className="">Home</p>
              </div>
            </Link>

            <Link href="/dictionary">
              <div className={`flex ${pathname === "/" ? "" : ""}`}>
                <BookOpenIcon className="h-6 w-6 mr-4" />
                <p className="">Dictionary</p>
              </div>
            </Link>

            <Link href="/thesaurus">
              <div className={`flex ${pathname === "/" ? "" : ""}`}>
                <ImBooks className="h-6 w-6 mr-4" />
                <p className="">Thesaurus</p>
              </div>
            </Link>

            <Link href="/authentication">
              <div className={`flex ${pathname === "/" ? "" : ""}`}>
                <ArrowRightOnRectangleIcon className="h-6 w-6 mr-4" />
                <p className="">Sign In</p>
              </div>
            </Link>
          </div>
        </NavigationMenu>
      )}
    </div>
  );
}

export default DictionaryHeader;
