const express = require("express");
const path = require('path');
const {
	cors,
	checkIsIdInArray,
	getAllGames,
	updateGamesArray,
	updateGamesFile,
	findGameById,
	deleteGame
} = require('../middlewares');


function sendGames(req, res) {
	res.send(req.games);
}
function sendGame (req, res) {
	res.send(req.game);
}

function sendUpdatedGames (req, res) {
	res.send({
		games: req.games,
		updated: req.updatedObject
	});
}


function sendDeletedGames(req, res) {
	res.send({
		games: req.games,
		deleted: req.game
	});
}

const gamesRoute = express.Router();
gamesRoute.get('/games', getAllGames, sendGames);
gamesRoute.get('/games/:id', getAllGames, findGameById, sendGame);
gamesRoute.delete(
	'/games/:id',
	getAllGames,
	checkIsIdInArray,
	findGameById,
	deleteGame,
	updateGamesFile,
	sendDeletedGames
);
gamesRoute.post('/games', getAllGames, checkIsIdInArray, updateGamesArray, updateGamesFile, sendUpdatedGames);

module.exports = gamesRoute;