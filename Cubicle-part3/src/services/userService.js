const User = require("../models/User");
const bcrypt = require("bcrypt");

// 3 - Layer architecture
// Controller -> Service -> Domain Model
// if (rpass === pass)

exports.register = (userData) => {
  return User.create(userData);
};

exports.login = async (username, password) => {
  const user = await User.findOne({ username });

  //   validate username
  if (!user) {
    // throw new Error("Invalid username or password!");
  }

  //   validate password
  const isValid = await bcrypt.compare(password, user.password);
  console.log(isValid);
  console.log({ password1: isValid });
  console.log({ password2: isValid });

  if (!isValid) {
    // throw new Error("Invalid username or password!");
  }

  return user;
};
