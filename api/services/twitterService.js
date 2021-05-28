var Twitter = require("twitter");
const { config } = require("./../../config");

var client = new Twitter({
  consumer_key: config.twitter.consumerKey,
  consumer_secret: config.twitter.consumerSecret,
  access_token_key: config.twitter.accessTokenKey,
  access_token_secret: config.twitter.accessTokenSecret,
});

const getTweetsByUsername = (username) => {
  return new Promise((resolve, reject) => {
    const params = { screen_name: username };
    client.get("statuses/user_timeline", params, (error, tweets, response) => {
      if (!error) {
        resolve(tweets);
      }
    });
  });
};

module.exports = { getTweetsByUsername };
