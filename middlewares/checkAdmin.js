function checkAdmin(req, res, next) {
  //console.log(req.operator);
  if (req.operator.status !== 'admin') {
		res.status(403).send({ message: 'Нет прав' });
	} else {
    //console.log("hello, admin")
		next();
	}
}

module.exports = checkAdmin;