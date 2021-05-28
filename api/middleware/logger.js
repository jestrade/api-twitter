const logger = (req, res, next) => {
  const datetime = new Date().toLocaleString();
  const {
    ip = '', method = '', path = '', hostname = '',
  } = req;
  /* eslint-disable no-console */
  console.log(`${datetime} :: ${method} :: ${hostname} :: ${path} :: ${ip}`);
  /* eslint-enable no-console */
  next();
};

module.exports = { logger };
