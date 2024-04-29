const cors = require('./cors');
const { getAllGames, findGameById, findGames, createGame, updateGame, deleteGame } = require('./games');
const {
	getAllCategories,
	findCategories,
	findCategoryById,
	updateCategory,
	createCategory,
	deleteCategory
} = require('./categories');
const { getAllUsers, findUserById, findUsers, createUser, updateUser, deleteUser } = require('./users');


module.exports = {
	cors,
	getAllGames,
	findGameById,
	deleteGame,
	getAllUsers,
	getAllCategories,
	createCategory,
	createGame,
	createUser,
	findGames,
	findUserById,
	findCategoryById,
	findUsers,
	updateGame,
	updateCategory,
	findCategories,
	updateUser,
	deleteUser,
	deleteCategory
};
