const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const api = require("../api");
const { config } = require("../config");

const { host, port } = config.http;

const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use("/api", api);
app.use("/api/v1", api);

const init = () => {
  app.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}`);
  });
};

module.exports = { init };
