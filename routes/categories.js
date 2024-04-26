const getAllCategories = require("../middlewares/getAllCategories")


function sendAllCategories (req, res) {
	res.setHeader('Content-Type', 'application/json');
	res.end(JSON.stringify(req.categories));
};


 const categoriesRoute = require('express').Router();
categoriesRoute.get('/categories', getAllCategories, sendAllCategories);


module.exports = categoriesRoute;