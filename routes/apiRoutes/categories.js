const {
	getAllCategories,
	createCategory,
	findCategoryById,
	updateCategory,
	findCategories,
	deleteCategory,
	checkEmptyCategory,
	checkIfCategoryExists,
	checkAuth,
	checkAdmin,
	checkJWTCookie
} = require('../../middlewares');
const {prettyJSON} = require("../../app-modules")

function sendAllCategories(req, res) {
	res.setHeader('Content-Type', 'application/json');
	res.end(prettyJSON(req.categories));
}

const sendCategory = (req, res) => {
	res.setHeader('Content-Type', 'application/json');
	res.end(prettyJSON(req.category));
};

function sendUpdateStatus(req, res) {
	res.send({ message: 'Категория обновлена' });
}

const categoriesRoute = require('express').Router();
categoriesRoute.get('/categories', findCategories, sendAllCategories);
categoriesRoute.post(
	'/categories',
	checkJWTCookie,
	checkAuth, 
	checkAdmin,
	findCategories,
	checkEmptyCategory,
	checkIfCategoryExists,
	createCategory,
	sendCategory
);
categoriesRoute.get('/categories/:id', findCategoryById, sendCategory);
categoriesRoute.put(
	'/categories/:id',
	checkJWTCookie,
	checkAuth,
	checkAdmin,
	findCategories,
	checkEmptyCategory,
	checkIfCategoryExists,
	updateCategory,
	sendUpdateStatus
);
categoriesRoute.delete('/categories/:id',checkJWTCookie, checkAuth, checkAdmin, deleteCategory, sendCategory);

module.exports = categoriesRoute;
