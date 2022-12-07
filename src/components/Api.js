const express = require("express");
const app = express();
const path = require("path");

var CLIENT_ID = "";
var CLIENT_SECRET = "";
const filename = __dirname + "../data/example.json";
var fs = require("fs");
app.get("/pose", function (req, res) {
  var request = require("request");
  var api_url = "https://naveropenapi.apigw.ntruss.com/vision-pose/v1/estimate"; // 사람 인식

  var _formData = {
    image: "image",
    image: fs.createReadStream(__dirname + "/../data/example6.jpg"), // FILE 이름
  };
  var _req = request
    .post({
      url: api_url,
      formData: _formData,
      headers: {
        "X-NCP-APIGW-API-KEY-ID": CLIENT_ID,
        "X-NCP-APIGW-API-KEY": CLIENT_SECRET,
      },
    })
    .on("response", function (response) {
      console.log(response.statusCode); // 200
      console.log(response.headers["content-type"]);
    });
  _req.pipe(res); //console 출력
});

app.use(express.static(path.join(__dirname, "../data")));

app.listen(3000, function () {
  console.log("http://localhost:3000/pose app listening on port 3000!");
});
