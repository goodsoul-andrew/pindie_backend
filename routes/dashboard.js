const fs = require('fs').promises;
const {checkJWTCookie, checkAuth} = require("../middlewares")


const dashboardRoute = require('express').Router();

dashboardRoute.get('/admin/**',checkJWTCookie, checkAuth, (req, res) => {
	try {
		fs.readFile('./public/admin/dashboard.html', 'utf-8').then((data) => {
			res.header('Content-Type', 'text/html').send(data);
		});
	} catch (error) {
		res.status(400).send('Ошибка какая-то');
		return;
	}
});

module.exports = dashboardRoute;
