package main

import (
	"fmt"
	"io/ioutil"
	"net/http"
)

func main() {

	url := "https://topups.reloadly.com/accounts/balance"
	method := "GET"

	client := &http.Client{}
	req, err := http.NewRequest(method, url, nil)

	if err != nil {
		fmt.Println(err)
		return
	}
	req.Header.Add("Accept", "application/com.reloadly.topups-v1+json")
	req.Header.Add("Authorization", "Bearer eyJraXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")
	req.Header.Add("Content-Type", "application/json")

	res, err := client.Do(req)
	if err != nil {
		fmt.Println(err)
		return
	}
	defer res.Body.Close()

	body, err := ioutil.ReadAll(res.Body)
	if err != nil {
		fmt.Println(err)
		return
	}
	fmt.Println(string(body))
}
