const express = require("express");
const { list, create, remove, get } = require("./controller");

const router = express.Router();

router.route("/").get(list).post(create).delete(remove);

module.exports = router;
