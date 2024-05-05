const getAllCategories = require('./getAllCategories');
const findCategoryById = require('./findCategoryById');
const updateCategory = require('./updateCategory');
const findCategories = require('./findCategories');
const createCategory = require('./createCategory');
const deleteCategory = require("./deleteCategory");
const {checkEmptyCategory, checkIfCategoryExists} = require("./checkCategory")


module.exports = {
	getAllCategories,
	findCategories,
	findCategoryById,
	updateCategory,
	createCategory,
	deleteCategory,
	checkEmptyCategory,
	checkIfCategoryExists
};