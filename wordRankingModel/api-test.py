import requests

url = "https://dictionary-plus.p.rapidapi.com/dictionary"

payload = {
	"query_field": "abandon",
	"urban_req": 1,
	"websters_req": 1,
	"synants_req": 1,
	"syns_req": 1,
	"syns_req2": 1
}
headers = {
	"content-type": "application/json",
	"X-RapidAPI-Key": "9b38cabe85mshb282f035a7bb13cp1fce86jsnc1693aca1d59",
	"X-RapidAPI-Host": "dictionary-plus.p.rapidapi.com"
}

response = requests.request("POST", url, json=payload, headers=headers)

print(response.text)