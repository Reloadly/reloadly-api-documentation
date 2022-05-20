import requests
import json

url = "https://topups.reloadly.com/countries/PK"

payload={}
headers = {
  'Accept': 'application/com.reloadly.topups-v1+json'
}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)
