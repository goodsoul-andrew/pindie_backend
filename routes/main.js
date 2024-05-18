const fs = require("fs").promises;
const path = require('path');
const jwt = require('jsonwebtoken');

const sendIndex = (req, res) => {
	if (req.cookies.jwt) {
		try {
			jwt.verify(req.cookies.jwt, 'super-secret-key');
			//console.log("user verified")
			res.redirect("admin/dashboard");
			return;
		} catch (err) {
			//console.log("бида")
			//console.log(err)
			res.sendFile(path.join(__dirname, '../public/index.html'));
			return;
		}
	}
	//console.log("no jwt")
	res.sendFile(path.join(__dirname, '../public/index.html'));
}; 


const mainRoute = require('express').Router();

mainRoute.get('/', sendIndex);

module.exports = mainRoute;
