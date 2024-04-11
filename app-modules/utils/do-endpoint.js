const fs = require("fs");
const path = require("path");


function doEndpoint (req, res) {
  const url = req.url;
  try {
    endpoint = require(`./api${url}/endpoint.js`);
    endpoint(req, res);
  }
  catch (err) {
    res.statusCode = 400;
    console.log(err);
    res.end();
  }
}

module.exports = doEndpoint;