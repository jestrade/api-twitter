const User = require("../users/model");
const { locale } = require("../../locale");

//Find User By Id
const findUserById = async (userId) => {
  const userFound = await User.findOne({ _id: userId })
    .then((user) => {
      return user;
    })
    .catch((err) => {
      console.error(err);
    });

  return userFound;
};

const isUserAdmin = async (userId) => {
  try {
    const isAdmin = await User.find({
      $and: [{ _id: userId }, { role: "admin" }],
    });

    if (isAdmin.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    //res.send(locale.translate("errors.validate.operationNotAllowed"));
    return false;
  }
};

module.exports = { isUserAdmin, findUserById };
