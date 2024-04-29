const getAllCategories = require('./getAllCategories');
const findCategoryById = require('./findCategoryById');
const updateCategory = require('./updateCategory');
const findCategories = require('./findCategories');
const createCategory = require('./createCategory');
const deleteCategory = require("./deleteCategory")


module.exports = { getAllCategories, findCategories, findCategoryById, updateCategory, createCategory, deleteCategory };