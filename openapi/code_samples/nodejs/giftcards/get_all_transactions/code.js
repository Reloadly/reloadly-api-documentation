var request = require('request');
var options = {
  'method': 'GET',
  'url': 'https://giftcards.reloadly.com/reports/transactions?startDate=2021-06-01 00:00:00&endDate=2021-06-18 23:17:02',
  'headers': {
    'Authorization': 'Bearer eyJraXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
    'Content-Type': 'application/json',
    'Accept': 'application/com.reloadly.giftcards-v1+json'
  }
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});