var express = require("express");
var router = express.Router();
const unirest = require("unirest");

router.get("/", function (req, res, next) {
  const request = unirest(
    "GET",
    "https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR"
  );
  request.headers({
    "x-bing-host": "https://www.bing.com",
  });
  request.end(function (response) {
    if (response.error) throw new Error(response.error);
    res.json(response.body || {});
  });
});

module.exports = router;
