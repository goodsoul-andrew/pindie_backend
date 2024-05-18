const checkAuth = require('./checkAuth');
const checkAdmin = require('./checkAdmin');
const checkJWTCookie = require('./checkJWTCookie');


module.exports = { checkAdmin, checkAuth, checkJWTCookie };