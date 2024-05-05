const {
	getAllCategories,
	createCategory,
	findCategoryById,
	updateCategory,
	findCategories,
	deleteCategory,
	checkEmptyCategory,
	checkIfCategoryExists
} = require('../middlewares');

function sendAllCategories(req, res) {
	res.setHeader('Content-Type', 'application/json');
	res.end(JSON.stringify(req.categories));
}

const sendCategory = (req, res) => {
	res.setHeader('Content-Type', 'application/json');
	res.end(JSON.stringify(req.category));
};

function sendUpdateStatus(req, res) {
	res.send({ message: 'Категория обновлена' });
}

const categoriesRoute = require('express').Router();
categoriesRoute.get('/categories', findCategories, sendAllCategories);
categoriesRoute.post(
	'/categories',
	findCategories,
	checkEmptyCategory,
	checkIfCategoryExists,
	createCategory,
	sendCategory
);
categoriesRoute.get('/categories/:id', findCategoryById, sendCategory);
categoriesRoute.put(
	'/categories/:id',
	findCategories,
	checkEmptyCategory,
	checkIfCategoryExists,
	updateCategory,
	sendUpdateStatus
);
categoriesRoute.delete('/categories/:id', deleteCategory, sendCategory);

module.exports = categoriesRoute;
