const express = require('express');
const path = require('path');
const {
	getAllGames,
	findGameById,
	deleteGame,
	createGame,
	findGames,
	updateGame,
	checkEmptyFieldsGame,
	checkUsersSafe,
	checkCategoriesAvailable,
	checkAuth,
	checkAdmin,
	checkJWTCookie,
	logReq,
	updateGameUsers,
	checkGameTitleForPut,
	checkGameTitleForPost
} = require('../../middlewares');
const { prettyJSON } = require('../../app-modules');

function sendGames(req, res) {
	res.setHeader('Content-Type', 'application/json');
	//res.send(JSON.stringify(req.games, null, 2));
	res.send(prettyJSON(req.games));
}

function sendGame(req, res) {
	res.setHeader('Content-Type', 'application/json');
	res.send(prettyJSON(req.game));
}

function sendUpdateStatus(req, res) {
	res.send({ message: 'Игра обновлена', game: req.game });
	//console.log(req.game);
}

const gamesRoute = express.Router();
gamesRoute.get('/games', findGames, sendGames);
gamesRoute.get('/games/:id', findGameById, sendGame);
gamesRoute.post('/games',checkJWTCookie, checkAuth, checkAdmin, checkEmptyFieldsGame, checkGameTitleForPost, checkCategoriesAvailable, createGame, sendGame);
gamesRoute.put(
	'/games/:id',
	checkJWTCookie,
	checkAuth,
	checkAdmin,
	checkEmptyFieldsGame,
	findGameById,
	checkGameTitleForPut,
	checkCategoriesAvailable,
	updateGame,
	findGameById,
	sendUpdateStatus
);
gamesRoute.put(
	'/games/vote/:id',
	//	logReq,
	checkJWTCookie,
	checkAuth,
	findGameById,
	checkUsersSafe,
	updateGameUsers,
	sendUpdateStatus
);
gamesRoute.delete('/games/:id',checkJWTCookie, checkAuth, checkAdmin, deleteGame, sendGame);

module.exports = gamesRoute;
