const express = require('express');
const path = require('path');
const {mainRoute, gamesRoute} = require("./_routes");


const app = express();

app.use(mainRoute, gamesRoute);
app.use(express.static(path.join(__dirname, 'public'))); 

const PORT = 3105
app.listen(PORT, () => {
	console.log(`App listening on http://localhost:${PORT}/`);
});


