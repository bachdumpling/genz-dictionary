import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import React from "react";

function DictionaryHeader() {
  return (
    <div className="flex justify-between item p-6 items-center">
      {/* Header + Search bar + User Icon */}

      {/* Header */}
      <div>
        <p className="font-bold text-2xl">Dictionary</p>
      </div>

      <div className="flex space-x-4">
        {/* Search Bar */}
        <form class="relative">
          <button class="absolute top-0 left-0 mt-3 ml-4">
            <MagnifyingGlassIcon className="h-6 w-6 text-[#AAAAAA]" />
          </button>
          <input
            type="text"
            class="w-[400px] h-[48px] py-2 px-4 bg-white rounded-[10px] outline-none focus:border focus:border-gray-400 shadow-sm pl-14"
            placeholder="Search"
          />
        </form>

        {/* User */}
        <div className="h-[48px] w-[48px] bg-white flex justify-center items-center rounded-[10px] shadow-sm">
          <UserCircleIcon className="h-6 w-6 text-[#AAAAAA]" />
        </div>
      </div>
    </div>
  );
}

export default DictionaryHeader;
