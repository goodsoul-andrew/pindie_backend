async function checkRepeatingEmail(req, res, next) {
	if (
		req.users.find((usr) => {
			return usr.email === req.body.email;
		})
	) {
		res.setHeader('Content-Type', 'application/json');
		res.status(400).send(JSON.stringify({ message: 'There is already an user with this email' }));
	} else {
		next();
	}
}

module.exports = checkRepeatingEmail;