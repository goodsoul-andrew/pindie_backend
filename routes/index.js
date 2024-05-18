const mainRoute = require('./main');
const gamesRoute = require('./apiRoutes/games');
const usersRoute = require('./apiRoutes/users');
const categoriesRoute = require('./apiRoutes/categories');
const apiRouter = require("./api")
const dashboardRoute = require("./dashboard")

module.exports = { mainRoute, gamesRoute, usersRoute, categoriesRoute, apiRouter, dashboardRoute };
