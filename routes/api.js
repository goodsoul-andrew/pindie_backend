const { authRouter, categoriesRouter, gamesRouter, usersRouter } = require("./apiRoutes");

const apiRouter = require('express').Router();

apiRouter.use('/api', usersRouter);
apiRouter.use('/api', gamesRouter);
apiRouter.use('/api', categoriesRouter);
apiRouter.use('/api', authRouter);

module.exports = apiRouter;