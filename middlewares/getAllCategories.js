const category = require('../models/category');


const getAllCategories = async (req, res, next) => {
	req.categories = await category.find({});
	next();
};


module.exports = getAllCategories;