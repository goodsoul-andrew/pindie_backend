const categories = require('../../models/category');

const deleteCategory = async (req, res, next) => {
	try {
		req.category = await categories.findByIdAndDelete(req.params.id);
		next();
	} catch (error) {
		console.log(error);
		res.status(400).send({ message: 'Error deleting category' });
	}
};

module.exports = deleteCategory;
