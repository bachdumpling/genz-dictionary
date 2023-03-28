import { Configuration, OpenAIApi } from "openai";

const key = "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";

const configuration = new Configuration({
  apiKey: key,
});

const openai = new OpenAIApi(configuration);

let word = "dope";

const response = await openai.createChatCompletion({
  model: "gpt-3.5-turbo",
  messages: [
    {
      role: "user",
      // content: `just for fun, return a javascript array 3 slang synonyms of the slang ${word}`,
      content: `Get the comment data in "text" by fetching the ids in id_list import requests and create a comments array with the results

      id_list = [7205233664635063594, 7205941414524505387, 7180997355624205614, 7206905041850993963, 7174768208090516778, 7174565510158322987, 7185745477130816811, 7206363628101045547]
      
      url = "https://tiktok-all-in-one.p.rapidapi.com/video/comments"
      
      querystring = {"id":"6961510289061760257","offset":"10"}
      
      headers = {
        "X-RapidAPI-Key": "9b38cabe85mshb282f035a7bb13cp1fce86jsnc1693aca1d59",
        "X-RapidAPI-Host": "tiktok-all-in-one.p.rapidapi.com"
      }
      
      response = requests.request("GET", url, headers=headers, params=querystring)
      
      print(response.text)`,
    },
  ],
});

console.log(response.data.choices[0].message.content);
