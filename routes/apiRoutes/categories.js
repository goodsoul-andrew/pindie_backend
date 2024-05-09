const {
	getAllCategories,
	createCategory,
	findCategoryById,
	updateCategory,
	findCategories,
	deleteCategory,
	checkEmptyCategory,
	checkIfCategoryExists,
	checkAuth, checkAdmin
} = require('../../middlewares');

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
	checkAuth,
	checkAdmin,
	findCategories,
	checkEmptyCategory,
	checkIfCategoryExists,
	updateCategory,
	sendUpdateStatus
);
categoriesRoute.delete('/categories/:id', checkAuth, checkAdmin, deleteCategory, sendCategory);

module.exports = categoriesRoute;
