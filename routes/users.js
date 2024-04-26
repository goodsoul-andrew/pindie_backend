const getAllUsers = require('../middlewares/getAllUsers');

function sendAllUsers(req, res) {
	res.setHeader('Content-Type', 'application/json');
	res.end(JSON.stringify(req.users));
}

const usersRoute = require('express').Router();
usersRoute.get('/users', getAllUsers, sendAllUsers);

module.exports = usersRoute;
