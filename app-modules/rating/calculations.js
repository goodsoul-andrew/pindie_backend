const {WEIGHT} = require("./config")


function updateRating(array, data) {
	const id = data.id;
	console.log(data, WEIGHT);
	const index = array.findIndex((item) => item.id === id);
	console.log(index);
	console.log(array[index].rating)
	console.log(data.gameplay * WEIGHT.gameplay + data.design * WEIGHT.design + data.idea * WEIGHT.idea);
	array[index].rating += data.gameplay * WEIGHT.gameplay + data.design * WEIGHT.design + data.idea * WEIGHT.idea;
	console.log("dsafdafdaf", array[index].rating);
	return array;
}


module.exports = updateRating;