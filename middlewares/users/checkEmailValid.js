const {validateEmail} = require("../../app-modules")


async function checkEmailValid (req, res, next) {
  if (! validateEmail(req.body.email)) {
    res.setHeader('Content-Type', 'application/json');
		res.status(400).send(JSON.stringify({ message: 'Invalid email' }));
    return;
  }
  else {
    next();
  }
}

module.exports = checkEmailValid;