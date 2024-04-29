const categories = require('../../models/category');

async function createCategory(req, res, next) {
	('POST /category');
	try {
		req.body;
		req.category = await categories.create(req.body);
		next();
	} catch (error) {
		console.log(error);
		res.status(400).send('Error creating category');
	}
}

module.exports = createCategory;
