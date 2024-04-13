function endpointTest(req, res) {
  res.Status = 200;
  res.end("Hello World!");
}


module.exports = endpointTest;