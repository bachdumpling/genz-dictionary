// const OpenAI = require("openai-api");

// Load your key from an environment variable or secret management service
// (do not include your key directly in your code)
// const OPENAI_API_KEY = "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";

// const openai = new OpenAI(OPENAI_API_KEY);

const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY,
  apiKey: "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",
});

const openai = new OpenAIApi(configuration);

async function getSynonyms() {
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `Synonyms and antonyms of "LMAO"`,
    max_tokens: 200,
    temperature: 0,
  });

  console.log(response.data.choices[0].text);
}

getSynonyms();
