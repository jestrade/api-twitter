const express = require('express');
const { get } = require('./controller');
const { logger } = require('../middleware/logger');

const router = express.Router();

router.use(logger);

router
  .route('/:city') //
  .get(get);

module.exports = router;
