const express = require('express');
const router = express.Router();
const request = require('request-promise');

router.get('/', function (req, res, next) {
  const options = {
    method: "GET",
    uri: "https://public.api.cryptokitties.co/v1/kitties",
    qs: {
      mewtations: "diamond,gilded,amethyst",
      offset: 0,
      limit: 200
    },
    headers: {
      "User-Agent": "Request-Promise",
      "X-Api-Token": process.env.API_KEY
    },
    json: true
  }

  request(options)
    .then(function (response) {
      console.log("Cryptokitties has %d jewelled cats", response.total);
    })
    .catch(function (err) {
      console.log("API call has failed");
    });
});

module.exports = router;
