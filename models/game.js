const mongoose = require('mongoose');
const categoryModel = require('./category');
const userModel = require("./user")


const gameSchema = new mongoose.Schema({
	title: {
		// Поле со строковым значением
		type: String,
		// Явно указываем, что поле обязательно при записи в базу нового документа
		required: true
	},
	description: {
		type: String,
		required: false
	},
	developer: {
		type: String,
		required: false
	},
	image: {
		type: String,
		required: true
	},
	link: {
		type: String,
		required: true
	},
	rating: {
		type: Number,
		default: 0,
		required: false
	},
	categories: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: categoryModel
		}
	],
	users: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: userModel
		}
	]
});

gameSchema.statics.findGamesByCategory = function (category) {
	return this.find({}) // Выполним поиск всех игр
		.populate({
			path: 'categories',
			match: { name: category }
		})
		.populate({
			path: 'users',
			select: '-password'
		})
		.then((games) => {
			// Отфильтруем по наличию искомой категории
			return games.filter((game) => game.categories.length > 0);
		});
}; 

gameSchema.statics.findGameByTitle = function (title) {
	return this.findOne({title: title}) // Выполним поиск всех игр
		.populate({
			path: 'categories',
		})
		.populate({
			path: 'users',
			select: '-password'
		})
		.then((game) => {
			return game;
		});
}; 

module.exports = mongoose.model('game', gameSchema);
