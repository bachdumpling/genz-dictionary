import React from "react";

function ThesaurusComponent({ slangSynonymsAndAntonyms}) {
  console.log(slangSynonymsAndAntonyms);
  return (
    <div className="">
      {Object.entries(slangSynonymsAndAntonyms).map(([slang, data]) => (
        <div key={slang} className="w-full mb-10 bg-white rounded-[16px]">
          <p className="font-bold text-3xl px-8 pt-6 pb-2">{slang}</p>
          <div className="flex flex-row justify-center gap-4 p-6">
            <div className="p-4 rounded-[16px] border bg-[#2C5EF1] w-1/2 h-fit text-white">
              <p className="font-bold">Synonyms</p>
              <ul>
                {Object.entries(data.synonyms).map((word, index) => {
                  return (
                    <div className="bg-[#FDFDFD] bg-opacity-50 text-sm p-3 rounded-[10px] flex shadow-md h-[48px] w-full my-2">
                      <p className="font-semibold pl-2 pr-4 text-[#2C5EF1]">
                        {index + 1}
                      </p>
                      <p className="font-semibold text-base"> {word[1]}</p>
                    </div>
                  );
                })}
              </ul>
            </div>
            <div className="p-4 rounded-[16px] border bg-[#57AAA7] w-1/2 h-fit text-white">
              <p className="font-bold">Antonyms</p>
              <ul>
                {Object.entries(data.antonyms).map((word, index) => {
                  return (
                    <div className="bg-[#FDFDFD] bg-opacity-50 text-sm p-3 rounded-[10px] flex shadow-md h-[48px] w-full my-2">
                      <p className="font-semibold pl-2 pr-4 text-[#57AAA7]">
                        {index + 1}
                      </p>
                      <p className="font-semibold text-base"> {word[1]}</p>
                    </div>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ThesaurusComponent;
