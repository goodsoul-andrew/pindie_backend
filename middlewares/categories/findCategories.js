const categories = require('../../models/category');

async function findCategories(req, res, next) {
	let criteria = req.query;
	console.log(criteria);
	try {
		req.categories = await categories.find(criteria);
		next();
	} catch (error) {
		console.log(error);
		res.status(404).send({ message: 'Category not found' });
	}
}

module.exports = findCategories;
