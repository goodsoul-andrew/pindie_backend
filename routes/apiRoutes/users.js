const {
	getAllUsers,
	createUser,
	findUserById,
	findUsers,
	updateUser,
	deleteUser,
	checkRepeatingEmail,
	checkEmailValid,
	checkEmptyFieldsUser,
	hashPassword,
	checkAuth,
	checkAdmin,
	checkJWTCookie
} = require('../../middlewares');
const { prettyJSON } = require('../../app-modules');

function sendAllUsers(req, res) {
	res.setHeader('Content-Type', 'application/json');
	res.end(prettyJSON(req.users));
}

const sendUser = (req, res) => {
	console.log(res.headers)
	res.setHeader('Content-Type', 'application/json');
	res.status(200).end(prettyJSON(req.user));
};

const sendOperator = (req, res) => {
	res.setHeader('Content-Type', 'application/json');
	res.status(200).end(prettyJSON(req.operator));
};

function sendUpdateStatus(req, res) {
	res.status(200).send({ message: 'Пользователь обновлён' });
}

const usersRoute = require('express').Router();
usersRoute.get('/users', findUsers, sendAllUsers);
usersRoute.post(
	'/users',
	getAllUsers,
	checkEmptyFieldsUser,
	checkRepeatingEmail,
	checkEmailValid,
	hashPassword,
	createUser,
	sendUser
);
usersRoute.get('/users/:id', findUserById, sendUser);
usersRoute.put(
	'/users/:id',
	checkAuth,
	checkAdmin,
	getAllUsers,
	checkEmptyFieldsUser,
	checkRepeatingEmail,
	checkEmailValid,
	updateUser,
	sendUpdateStatus
);
usersRoute.delete('/users/:id',checkJWTCookie, checkAuth, checkAdmin, deleteUser, sendUser);
usersRoute.get('/me',checkJWTCookie, checkAuth, sendOperator);

module.exports = usersRoute;
