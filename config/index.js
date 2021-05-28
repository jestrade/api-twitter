const dotenv = require("dotenv");

dotenv.config();

const config = {
  http: {
    host: process.env.HTTP_HOST || "0.0.0.0",
    port: process.env.PORT || process.env.HTTP_PORT,
  },
  log: {
    access: "../logs/" + process.env.LOG_ACCESS,
  },
  jwtKey: process.env.JWTKEY,
  apiWeatherKey: process.env.APIWEATHERKEY,
  database: {
    connectionString: process.env.DB_CONNECTION_STRING,
  },
  saltRounds: parseInt(process.env.SALT_ROUNDS, 10),
  mailer: {
    host: process.env.MAILER_HOST,
    port: process.env.MAILER_PORT,
    user: process.env.MAILER_USER,
    password: process.env.MAILER_PASSWORD,
  },
  mail: process.env.MAIL_FROM,
  twitter: {
    consumerKey: process.env.TWITTER_CONSUMER_KEY,
    consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
    accessTokenKey: process.env.TWITTER_TOKEN_KEY,
    accessTokenSecret: process.env.TWITTER_TOKEN_SECRET,
  },
};

module.exports = { config };
