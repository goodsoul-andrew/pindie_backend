const express = require('express');
const path = require('path');
const { mainRoute, apiRouter, dashboardRoute } = require('./routes');
const {cors} = require("./middlewares");
const bodyParser = require('body-parser');
const connectToDatabase = require("./database/connect");
const cookieParser = require('cookie-parser');


const app = express();
app.use(cors);
app.use(cookieParser());
app.use(mainRoute);
app.use(express.static(path.join(__dirname, 'public'))); 
app.use(bodyParser.json());
app.use(dashboardRoute, apiRouter);


// sudo systemctl start mongod
connectToDatabase();

const PORT = 3105
app.listen(PORT, () => {
	console.log(`App listening on http://localhost:${PORT}/`);
});
