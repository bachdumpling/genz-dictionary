const { Configuration, OpenAIApi } = require("openai");

const key = process.env.REACT_APP_OPENAI_API_KEY;
console.log(process.env.REACT_APP_OPENAI_API_KEY, "hello");

const configuration = new Configuration({
  apiKey: key,
});

const openai = new OpenAIApi(configuration);

let word = "dope";

const response = openai.createChatCompletion({
  model: "gpt-3.5-turbo",
  messages: [
    {
      role: "user",
      content: `Return a javascript object with the 3 slang synonyms and 3 slang antonyms of the slang ${word} in this format:"Boujee": {
        "synonyms": ["fancy", "upscale", "high-class"],
        "antonyms": ["low-class", "basic", "unrefined"]
      }`,
    },
  ],
});

console.log(response.data.choices[0].message.content);
