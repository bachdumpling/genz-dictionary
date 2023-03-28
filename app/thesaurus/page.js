import React from "react";

const slangSynonymsAndAntonyms = {
  Boujee: {
    synonyms: ["fancy", "upscale", "high-class"],
    antonyms: ["low-class", "basic", "unrefined"],
  },
  "Bussin'": {
    synonyms: ["poppin'", "lit", "crackin'"],
    antonyms: ["dead", "boring", "quiet"],
  },
  Drip: {
    synonyms: ["swag", "style", "finesse"],
    antonyms: ["no style", "out of fashion", "uncool"],
  },
  Extra: {
    synonyms: ["over-the-top", "dramatic", "excessive"],
    antonyms: ["understated", "reserved", "moderate"],
  },
  "Rent-free": {
    synonyms: ["unbothered", "carefree", "nonchalant"],
    antonyms: ["worried", "stressed", "preoccupied"],
  },
  Salty: {
    synonyms: ["bitter", "angry", "upset"],
    antonyms: ["happy", "content", "pleased"],
  },
  Shook: {
    synonyms: ["shocked", "surprised", "astonished"],
    antonyms: ["unfazed", "unimpressed", "calm"],
  },
  "Vibe check": {
    synonyms: ["energy check", "mood check", "atmosphere check"],
    antonyms: ["vibe kill", "mood killer", "atmosphere killer"],
  },
  Woke: {
    synonyms: ["aware", "conscious", "enlightened"],
    antonyms: ["ignorant", "unaware", "unenlightened"],
  },
};

const SlangList = () => {
  return (
    <div className="">
      {Object.entries(slangSynonymsAndAntonyms).map(([slang, data]) => (
        <div key={slang} className="mb-10">
          <div className="flex w-full mb-4 mt-4 justify-center">
            <h3 className="font-bold p-2 w-3/6 bg-white shadow-md text-center rounded-[10px]">{slang}</h3>
          </div>
          <div className="flex flex-row justify-center gap-4">
            <div className="p-4 rounded-[16px] border bg-[#2C5EF1] w-[300px] h-fit text-white">
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
            <div className="p-4 rounded-[16px] border bg-[#57AAA7] w-[300px] h-fit text-white">
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
};

function Thesaurus() {
  // console.log(slangSynonymsAndAntonyms.Boujee.synonyms);
  console.log(Object.entries(slangSynonymsAndAntonyms)[0][1].synonyms);

  return (
    <div className="max-w-2xl mx-auto mb-10">
      <SlangList />
    </div>
  );
}

export default Thesaurus;
