function logReq(req, res, next) {
  console.log(req);
  next()
}

module.exports = logReq;