import requests
from itertools import chain, combinations

# Import the json results file from the Google Sheet CSV export
# result = ["such a cutie pie", "such a cutie pie"]

# Loop through the results and create a power set of each sentence

sentence = "such a cutie pie 💀" 
# power_set of sentence
power_set = ["such", "a", "cutie", "pie", "such a", "such cutie", "such pie", "a cutie", "a pie", "cutie pie", "such a cutie", "such a pie", "such cutie pie", "a cutie pie", "such a cutie pie"]

# Split the sentence into an array of single words
words = sentence.split()

# Create a power set array (What if the words appear multiple times in the same sentence?)
power_set = list(chain.from_iterable(combinations(words, r)
                 for r in range(len(words)+1)))

# Concatenate each element in the power set array into strings
output = [' '.join(subset) for subset in power_set]

# Return an array of strings
# print(output)


# Match the strings in the array to the Urban Dictionary API
url = "https://mashape-community-urban-dictionary.p.rapidapi.com/define"
api_key = 'your-api-key'
headers = {
    "X-RapidAPI-Key": "9b38cabe85mshb282f035a7bb13cp1fce86jsnc1693aca1d59",
    "X-RapidAPI-Host": "mashape-community-urban-dictionary.p.rapidapi.com"
}

# querystring = {"term":"cutie pie"}

# response = requests.request("GET", url, headers=headers, params=querystring)

# print(response.json().get('list')[0].get('word'))

accepted_words = []

for string in output:
    querystring = {"term": string}
    # Make the API request with the string and headers
    response = requests.get(url, headers=headers, params=querystring)
    # Check if the response is successful (status code 200)
    if response.status_code == 200:
        # Check if the string exists in the dictionary database
        if response.json().get('list'):
            if response.json().get('list')[0].get('word').lower() == string.lower():
                # print(f"{string} YES")
                accepted_words.append(string)
        #     else:
        #         print(f"{string} NO")
        # else:
        #     print(f"{string} NO")
    else:
        print(f"Error: Failed to connect to the API for string {string}.")

# If the function words in "accepted_words" are single words, remove them from the array
functionWords = [
    "a",
    "an",
    "the",
    "and",
    "but",
    "or",
    "as",
    "if",
    "when",
    "than",
    "because",
    "though",
    "although",
    "while",
    "where",
    "after",
    "before",
    "since",
    "until",
    "by",
    "with",
    "without",
    "under",
    "over",
    "in",
    "on",
    "at",
    "to",
    "from",
    "into",
    "onto",
    "out",
    "off",
    "up",
    "down",
    "through",
    "around",
    "about",
    "above",
    "below",
    "near",
    "far",
    "along",
    "across",
    "behind",
    "beside",
    "between",
    "beyond",
    "inside",
    "outside",
    "throughout",
    "toward",
    "towards",
    "via",
    "among",
    "amongst",
    "within",
    "without",
    "ago",
    "now",
    "just",
    "already",
    "still",
    "even",
    "only",
    "almost",
    "nearly",
    "perhaps",
    "maybe",
    "certainly",
    "surely",
    "really",
    "truly",
    "sincerely",
    "actually",
    "definitely",
    "practically",
    "ultimately",
    "basically",
    "generally",
    "mostly",
    "often",
    "sometimes",
    "rarely",
    "seldom",
    "never",
    "ever",
    "always",
    "together",
    "apart",
    "thus",
    "therefore",
    "hence",
    "so",
    "then",
    "nowadays",
    "meanwhile",
    "forthwith",
    "later",
    "sooner",
    "instead",
    "nevertheless",
    "however",
    "furthermore",
    "moreover",
    "in addition",
    "in contrast",
    "in fact",
    "indeed",
    "that",
    "what",
    "which",
    "who",
    "whom",
    "whose",
    "where",
    "when",
    "why",
    "how",
]
accepted_words = [word for word in accepted_words if word not in functionWords]
accepted_words.append('cutie pie')
print(accepted_words)

wordCounts = {}

for word in accepted_words:
    if word in wordCounts:
        wordCounts[word] += 1
    else:
        wordCounts[word] = 1

for word, count in wordCounts.items():
    print(f"{word}: {count}")
