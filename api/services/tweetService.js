const Tweet = require("../tweets/model");

const verifyIfUserIsOwnsTweet = async (userId, tweetId) => {
  const validateUser = await Tweet.find({
    $and: [{ _id: { $eq: tweetId } }, { user: { $eq: userId } }],
  });

  if (validateUser.length > 0) {
    return true;
  } else {
    return false;
  }
};

module.exports = { verifyIfUserIsOwnsTweet };
