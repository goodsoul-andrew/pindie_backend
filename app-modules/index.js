const choice = require("./choice");
const { readData, writeData } = require('./parse');
const removeProperty = require('./removeProperty');
const validateEmail = require("./validateEmail")


module.exports = { choice, readData, writeData, removeProperty, validateEmail };