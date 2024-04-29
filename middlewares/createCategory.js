const categories = require('../models/category');

async function createCategory(req, res, next) {
	console.log('POST /category');
	try {
		console.log(req.body);
		req.category = await category.create(req.body);
		next();
	} catch (error) {
		res.status(400).send('Error creating category');
	}
}

module.exports = createCategory;
