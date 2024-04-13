const {PATH_TO_RATING_FILE, WEIGHT} = require("./config")
const makeRatingFile = require("./rating-file")
const updateRating = require("./calculations")


module.exports = {makeRatingFile, PATH_TO_RATING_FILE, updateRating, WEIGHT};