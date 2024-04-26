const cors = require('./cors');
const checkIsIdInArray = require("./checkIsIdInArray");
const getAllGames = require("./getAllgames");
const updateGamesArray = require("./updateGamesArray");
const updateGamesFile = require("./updateGamesFile");
const findGameById = require("./findGameById");
const deleteGame = require("./deleteGame");
const getAllCategories = require("./getAllCategories")
const getAllUsers = require("./getAllUsers")


module.exports = {
	cors,
	checkIsIdInArray,
	getAllGames,
	updateGamesArray,
	updateGamesFile,
	findGameById,
	deleteGame,
	getAllUsers,
	getAllCategories
};