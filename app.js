const express = require('express');
const path = require('path');
const {mainRoute, gamesRoute, usersRoute, categoriesRoute} = require("./routes");
const {cors} = require("./middlewares");
const bodyParser = require('body-parser');
const connectToDatabase = require("./database/connect");


const app = express();
app.use(express.static(path.join(__dirname, 'public'))); 
app.use(cors);
app.use(bodyParser.json());
app.use(mainRoute, gamesRoute, usersRoute, categoriesRoute);

connectToDatabase();

const PORT = 3105
app.listen(PORT, () => {
	console.log(`App listening on http://localhost:${PORT}/`);
});


