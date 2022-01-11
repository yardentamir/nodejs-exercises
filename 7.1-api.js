const axios = require("axios");
const request = require("request");
const https = require("https");

const url = "https://cat-fact.herokuapp.com/facts";

const asyncFunc = async () => {
  const { data } = await axios.get(url);
  console.log("from axios: \n" + data[0].text);

  request({ url, json: true }, (error, response) => {
    if (error) {
      console.log("Unable to connect to cat fact");
    } else {
      console.log("from request: \n" + response.body[0].text);
    }
  });

  https
    .get(url, (res) => {
      res.on("end", (dataBuffer) => {
        // res.on("data")
        console.log(
          "from https: \n" + JSON.parse(dataBuffer.toString())[0].text
        );
      });
    })
    .on("error", (err) => {
      console.log("Error: ", err.message);
    });
};

asyncFunc();
