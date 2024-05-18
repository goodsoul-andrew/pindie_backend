const choice = require("./choice");
const { readData, writeData } = require('./parse');
const removeProperty = require('./removeProperty');
const validateEmail = require("./validateEmail")
const prettyJSON = require('./prettyJSON');


module.exports = { choice, readData, writeData, removeProperty, validateEmail, prettyJSON };