const cors = require('./cors');
const logReq = require('./logReq');
const { checkAdmin, checkAuth, checkJWTCookie } = require('./auth');
const {
	getAllGames,
	findGameById,
	findGames,
	createGame,
	updateGame,
	deleteGame,
	checkEmptyFieldsGame,
	checkUsersSafe,
	checkCategoriesAvailable,
	updateGameUsers,
	checkGameTitle
} = require('./games');
const {
	getAllCategories,
	findCategories,
	findCategoryById,
	updateCategory,
	createCategory,
	deleteCategory,
	checkEmptyCategory,
	checkIfCategoryExists
} = require('./categories');
const {
	getAllUsers,
	findUserById,
	findUsers,
	createUser,
	updateUser,
	deleteUser,
	checkRepeatingEmail,
	checkEmailValid,
	checkEmptyFieldsUser,
	hashPassword
} = require('./users');

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
	deleteCategory,
	checkEmptyFieldsGame,
	checkUsersSafe,
	checkCategoriesAvailable,
	checkEmptyCategory,
	checkIfCategoryExists,
	checkRepeatingEmail,
	checkEmailValid,
	checkEmptyFieldsUser,
	hashPassword,
	checkAuth,
	checkAdmin,
	checkJWTCookie,
	logReq,
	updateGameUsers,
	checkGameTitle
};
