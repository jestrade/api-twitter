const Localization = require('localizationjs');
const { dictionaryENUS } = require('./en-US');
const { dictionaryESCO } = require('./es-CO');

const locale = new Localization({ defaultLocale: 'en' });
locale.addDict('en', dictionaryENUS);
locale.addDict('es-CO', dictionaryESCO);

module.exports = { locale };
