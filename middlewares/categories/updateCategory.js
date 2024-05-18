const categories = require('../../models/category');

const updateCategory = async (req, res, next) => {
	try {
		req.category = await categories.findByIdAndUpdate(req.params.id, req.body);
		next();
	} catch (error) {
		console.log(error);
		res.status(400).send({ message: 'Error updating category' });
		return;
	}
};

module.exports = updateCategory;
