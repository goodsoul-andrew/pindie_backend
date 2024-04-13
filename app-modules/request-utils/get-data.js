async function getData(url) {
	try {
		const res = await fetch(url);
		const data = res.json();
		return data;
	} catch (err) {
		//console.log(err);
	}
}

module.exports = getData;
