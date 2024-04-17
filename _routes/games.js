const express = require("express");
const path = require('path');
const {writeData, readData} = require("../app-modules/utils")


const gamesFilePath = path.resolve("dataset/games.json")


const getAllGames = async (req, res) => {
	const games = await readData(gamesFilePath);
	if (!games) {
		res.status(400);
		res.send({
			status: 'error',
			message: 'Нет игр в базе данных. Добавьте игру.'
		});
		return;
	}
	req.games = games;
	res.send(req.games);
};


const deleteGame = async (req, res) => {
	const games = await readData(gamesFilePath);
	if (!games) {
		res.status(400);
		res.send({
			status: 'error',
			message: 'Нет игр в базе данных. Добавьте игру.'
		});
		return;
	}
	req.games = games;
	const id = Number(req.params.id);
	req.game = req.games.find((item) => item.id === id);
	const index = req.games.findIndex((item) => item.id === req.game.id);
	req.games.splice(index, 1);
	await writeData(gamesFilePath, req.games);
	res.send({
		games: req.games,
		updated: req.game
	});
};

const addGame = async (req, res) => {
	const games = 
}


const gamesRoute = express.Router();
gamesRoute.get("/games", getAllGames)
gamesRoute.delete("/games/:id", deleteGame)

module.exports = gamesRoute;