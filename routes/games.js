const express = require("express");
const path = require('path');
const {
	cors,
	getAllGames,
	findGameById,
	deleteGame,
	createGame,
	findGames,
	updateGame
} = require('../middlewares');


function sendGames(req, res) {
	res.send(req.games);
}

function sendGame (req, res) {
	res.send(req.game);
}

function sendUpdateStatus (req, res) {
	res.send({message: "Игра обновлена"})
}

const gamesRoute = express.Router();
gamesRoute.get('/games', findGames, sendGames);
gamesRoute.get('/games/:id', findGameById, sendGame);
gamesRoute.post('/games', createGame, sendGame);
gamesRoute.put('/games/:id', updateGame, sendUpdateStatus);
gamesRoute.delete("/games/:id", deleteGame, sendGame);

module.exports = gamesRoute;