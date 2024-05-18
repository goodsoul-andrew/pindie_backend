const jwt = require('jsonwebtoken');
const users = require('../../models/user');

async function checkJWTCookie(req, res, next) {
	console.log("checking JWT cookie...")
  if (req.cookies.jwt) {
		req.headers.Authorization = `Bearer ${req.cookies.jwt}`;
	}

	next();
}


module.exports = checkJWTCookie;