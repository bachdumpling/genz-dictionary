"use client";
import React, { useEffect, useState } from "react";
import ThesaurusComponent from "../components/ThesaurusComponent";
// const { OpenAIApi, Configuration } = require("openai");
import { OpenAIApi, Configuration } from "openai";

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
};

// const key = process.env.REACT_APP_OPENAI_API_KEY;

// const configuration = new Configuration({
//   apiKey: process.env.REACT_APP_OPENAI_API_KEY,
// });

// const openai = new OpenAIApi(configuration);

// async function fetchData(word) {
//   const response = await openai.createChatCompletion({
//     model: "text-davinci-003",
//     messages: [
//       {
//         role: "user",
//         content: `Return a javascript object with the 3 slang synonyms and 3 slang antonyms of the slang ${word} in this format: "Boujee": {
//             "synonyms": ["fancy", "upscale", "high-class"],
//             "antonyms": ["low-class", "basic", "unrefined"]
//           }`,
//       },
//     ],
//   });

//   const slangSynonymsAndAntonyms = response.data.choices[0].message.content;

//   return slangSynonymsAndAntonyms;
// }

function Thesaurus() {
  //   console.log(key);
  //   const [slangSynonymsAndAntonyms, setSlangSynonymsAndAntonyms] =
  //     useState(null);
  //   const [word, setWord] = useState("dope"); // You can replace this with a dynamic value

  //   useEffect(() => {
  //     async function fetchAndSetData() {
  //       const data = await fetchData(word);
  //       setSlangSynonymsAndAntonyms(data);
  //     }

  //     fetchAndSetData();
  //   }, [word]);

  // console.log(slangSynonymsAndAntonyms)

  return (
    <div className="mb-10">
      {/* {slangSynonymsAndAntonyms && (
        <ThesaurusComponent
          slangSynonymsAndAntonyms={slangSynonymsAndAntonyms}
        />
      )} */}
      <SlangList />
    </div>
  );
}

export default Thesaurus;
