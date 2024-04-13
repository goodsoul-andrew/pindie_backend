const {endpoints, getData} = require('../app-modules/request-utils');
const staticFile = require("../app-modules/http-utils/static-file");
const {makeRatingFile} = require("../app-modules/rating");


async function mainRouteController(req, res) {
	const data = await getData(endpoints.games);
  if (data) {
    //console.log(data);
    //makeRatingFile(data);
  }
  staticFile(res, '/index.html');
}


module.exports = mainRouteController;