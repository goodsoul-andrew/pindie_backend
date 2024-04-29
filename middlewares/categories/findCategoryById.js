const categories = require('../../models/category');

const findCategoryById = async (req, res, next) => {
	try {
		req.category = await categories.findById(req.params.id);
		next();
	} catch (error) {
		res.status(404).send({ message: 'Category not found' });
	}
};

module.exports = findCategoryById;
