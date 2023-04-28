// fetchData.server.js

const { OpenAIApi, Configuration } = require("openai");

const key =  process.env.REACT_APP_OPENAI_API_KEY
console.log(key, "hello")

async function fetchData(word) {
  const openai = new OpenAIApi(
    new Configuration({
      apiKey: key,
    })
  );

  try {
    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: `Return a javascript object with the 3 slang synonyms and 3 slang antonyms of the slang ${word} in this format: "Boujee": {
            "synonyms": ["fancy", "upscale", "high-class"],
            "antonyms": ["low-class", "basic", "unrefined"]
          }`,
        },
      ],
    });

    const slangSynonymsAndAntonyms = response.data.choices[0].message.content;

    return slangSynonymsAndAntonyms;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export default fetchData;
