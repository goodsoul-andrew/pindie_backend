const express = require("express");
const path = require('path');
const {writeData, readData} = require("../app-modules/utils")


const gamesFilePath = path.resolve("dataset/games_data.json")


async function getGamesData (req, res, next) {
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
	next();
}


async function sendAllGames(req, res) {
	res.send(req.games);
};


async function deleteGame (req, res) {
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

async function addGame (req, res) {
	req.isNew = !Boolean(req.games.find((item) => item.title === req.body.title));
	if (req.isNew) {
		const inArray = req.games.map((item) => Number(item.id));
		let maximalId;
		if (inArray.length > 0) {
			maximalId = Math.max(...inArray);
		} else {
			maximalId = 0;
		}
		req.updatedObject = {
			id: maximalId + 1,
			title: req.body.title,
			image: req.body.image,
			link: req.body.link,
			description: req.body.description
		};
		req.games = [...req.games, req.updatedObject];
	} else {
		res.status(400);
		res.send({ status: 'error', message: 'Игра с таким именем уже есть.' });
		return;
	}
	await writeData(gamesFilePath, req.games);
	res.send({
		games: req.games, // Обновлённый список со всеми играми
		updated: req.updatedObject // Новая добавленная игра
	});
}


const gamesRoute = express.Router();
gamesRoute.get('/games', getGamesData, sendAllGames);
gamesRoute.delete("/games/:id", getGamesData, deleteGame)
gamesRoute.post("/games", getGamesData, addGame)

module.exports = gamesRoute;