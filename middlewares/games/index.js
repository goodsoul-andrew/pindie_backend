const getAllGames = require('./getAllgames');
const findGameById = require('./findGameById');
const createGame = require('./createGame');
const findGames = require('./findGames');
const updateGame = require('./updateGame');
const deleteGame = require('./deleteGame');
const checkEmptyFieldsGame = require('./checkEmptyFieldsGame');
const checkCategoriesAvailable = require('./checkCategoriesAvailable');
const checkUsersSafe = require('./checkUsersSafe');
const updateGameUsers = require('./updateGameUsers');


module.exports = {
	getAllGames,
	findGameById,
	findGames,
	createGame,
	updateGame,
	deleteGame,
	checkEmptyFieldsGame,
	checkUsersSafe,
	checkCategoriesAvailable,
	updateGameUsers
};