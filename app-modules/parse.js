const fs = require('fs').promises;
const path = require('path');

const readData = async (url) => {
	try {
		const data = await fs.readFile(url, 'utf-8');
		const json = JSON.parse(data);
		return json;
	} catch (error) {
		error;
	}
};

const writeData = async (url, data) => {
	const json = JSON.stringify(data, null, 2);
	await fs.writeFile(url, json);
};

module.exports = { readData, writeData };
