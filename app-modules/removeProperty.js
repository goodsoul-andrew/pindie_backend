function removeProperty(obj, forbidden) {
	let res = {};
	for (let key in obj) {
		if (!forbidden.includes(key)) {
			res[key] = obj[key];
			key, res[key];
		}
	}
	'res:', res;
	return res;
}

module.exports = removeProperty;
