const { verifyIfUserIsOwnsTweet } = require("../services/tweetService");
const {
  isUserAdmin,
  verifyIfUserExistById,
} = require("../services/userService");
const { locale } = require("../../locale");

const usersAuthorization = async (req, res, next) => {
  const id = req.params.id || req.body.id;
  const { userId } = req.body;

  const isAdmin = await isUserAdmin(userId);

  if (id === userId || isAdmin) {
    next();
  } else {
    res.status(403).json({
      message: locale.translate("errors.operationNotAllowed"),
    });
  }
};

/**
 * Method tweetsAuthorization
 * check if the user is the owner of the tweet or is an administrator user.
 * @param {*} req - request
 * @param {*} res - response
 * @param {*} next - callback
 * @returns mixed
 */
const tweetsAuthorization = async (req, res, next) => {
  const { userId, tweetId } = req.body;
  const result = await verifyIfUserIsOwnsTweet(userId, tweetId);
  const isAdmin = await isUserAdmin(userId);

  if (result || isAdmin) {
    next();
  } else {
    res.status(403).json({
      message: locale.translate("errors.operationNotAllowed"),
    });
  }
};

module.exports = { usersAuthorization, tweetsAuthorization };
