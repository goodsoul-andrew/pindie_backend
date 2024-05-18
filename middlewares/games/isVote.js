function isVote(req, res, next) {
  req.vote = false;
  if (req.headers.Vote && req.headers.Vote === "Vote") {
    req.vote = true;
  }
  next();
}