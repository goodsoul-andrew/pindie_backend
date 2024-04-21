const cors = require('./cors');
const checkIsIdInArray = require("./checkIsIdInArray");
const getGamesData = require("./getGamesData");
const updateGamesArray = require("./updateGamesArray");
const updateGamesFile = require("./updateGamesFile");
const findGameById = require("./findGameById");
const deleteGame = require("./deleteGame")


module.exports = { cors, checkIsIdInArray, getGamesData, updateGamesArray, updateGamesFile, findGameById, deleteGame };