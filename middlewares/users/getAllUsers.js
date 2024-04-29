const users = require('../../models/user');


const getAllUsers = async (req, res, next) => {
  req.users = await users.find({}).select("-password");
  next();
}


module.exports = getAllUsers;