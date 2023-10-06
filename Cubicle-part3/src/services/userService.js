const User = require("../models/User");

// 3 - Layer architecture
// Controller -> Service -> Domain Model
// if (rpass === pass)

exports.register = (userData) => {
  return User.create(userData);
};
