const user = require('../models/user');


const getAllUsers = async (req, res, next) => {
  req.users = await user.find({});
  next();
}


module.exports = getAllUsers;