const users = require("../../models/user");
const jwt = require('jsonwebtoken');


async function login (req, res) {
	const { email, password } = req.body;
	//console.log(email, password)
	try {
		const user = await users.findUserByCredentials(email, password);
		const token = jwt.sign({ _id: user._id }, 'super-secret-key', {expiresIn: 3600});
		res.status(200).send({ _id: user._id, username: user.username, email: user.email, jwt: token });
	} catch (error) {
		res.status(401).send({ message: error.message });
	}
};


const authRouter = require('express').Router();
authRouter.post('/auth/login', login);

module.exports = authRouter;
