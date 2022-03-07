var request = require('request');
var options = {
  'method': 'POST',
  'url': 'https://topups.reloadly.com/operators/fx-rate',
  'headers': {
    'Authorization': 'Bearer eyJraXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
    'Accept': 'application/com.reloadly.topups-v1+json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    "operatorId": "341",
    "amount": "10"
  })

};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});