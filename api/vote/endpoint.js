const parseBody = require('../../app-modules/http-utils/parse-body');


async function voteRouteController(req, res) {
	if (req.method !== 'POST') {
		res.statusCode = 404;
		res.end('Not Found');
	}
}


module.exports = voteRouteController;