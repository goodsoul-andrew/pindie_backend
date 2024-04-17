const express = require('express');
const path = require('path');
const {mainRoute, gamesRoute} = require("./routes");
const {cors} = require("./middlewares");
const bodyParser = require('body-parser');


const app = express();
app.use(express.static(path.join(__dirname, 'public'))); 
app.use(cors);
app.use(bodyParser.json());
app.use(mainRoute, gamesRoute);

const PORT = 3105
app.listen(PORT, () => {
	console.log(`App listening on http://localhost:${PORT}/`);
});


