const fetch = require('node-fetch');
const { config } = require('../../config');

const get = (req, res) => {
  const { city } = req.params;
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${config.apiWeatherKey}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((json) => res.status(200).json(json.main.temp));
};

module.exports = { get };
