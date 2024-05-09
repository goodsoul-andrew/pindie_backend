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
	checkAdmin
} = require('../../middlewares');
//const removeProperty = require('../app-modules/utils/removeProperty');

function sendAllUsers(req, res) {
	res.setHeader('Content-Type', 'application/json');
	req.users;
	res.end(JSON.stringify(req.users));
}

const sendUser = (req, res) => {
	res.setHeader('Content-Type', 'application/json');
	res.end(JSON.stringify(req.user));
};

function sendUpdateStatus(req, res) {
	res.send({ message: 'Пользователь обновлён' });
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
usersRoute.delete('/users/:id', checkAuth, checkAdmin, deleteUser, sendUser);

module.exports = usersRoute;
