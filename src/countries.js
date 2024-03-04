/**
 * @module @abdullahwins/countries
 * @author AbdullahWins
 * @description This npm package provides comprehensive data about countries around the world.
 * With detailed information such as international dialing codes, currency details including code, symbol, and name, capital cities,
 * continents, and official languages, it's a valuable resource for developers working on projects involving internationalization,
 * data visualization, or geographical analysis.
 */

// Import country data from JSON file
const countryData = require("./countries.json");

/**
 * Get all countries
 * @returns {Array} Array of country objects
 */
const countries = () => {
  return countryData;
};

/**
 * Get a sorted list of country names
 * @returns {Array} Array of country names
 */
const sortName = () => {
  return countries()
    .map((country) => country?.name)
    .sort();
};

/**
 * Get a sorted list of unique currency codes
 * @returns {Array} Array of unique currency codes
 */
const sortCurrency = () => {
  const uniqueCurrencyCodes = new Set();
  countries().forEach(({ currencyCode }) => {
    uniqueCurrencyCodes.add(currencyCode);
  });
  return [...uniqueCurrencyCodes].sort();
};

/**
 * Get all countries sorted by international dialing code (countrycode)
 * @returns {Array} Array of country objects sorted by international dialing code
 */
const sortCode = () => {
  return countries().sort((a, b) => a.countrycode.localeCompare(b.countrycode));
};

/**
 * Get country by international dialing code (countrycode)
 * @param {string} countrycode - International dialing code to retrieve country
 * @returns {Object|null} Country object if found, otherwise null
 */
const code = (countrycode) => {
  return countries().find((country) => country.countrycode === countrycode);
};

/**
 * Get countries by continent
 * @param {string} continentName - Name of the continent to filter countries
 * @returns {Array} Array of country objects belonging to the specified continent
 */
const continent = (continentName) => {
  return countries().filter(
    (country) =>
      country?.continent?.toLowerCase() === continentName?.toLowerCase()
  );
};

/**
 * Get country by name
 * @param {string} countryName - Name of the country to retrieve
 * @returns {Object|null} Country object if found, otherwise null
 */
const name = (countryName) => {
  return countries().find(
    (country) => country.name.toLowerCase() === countryName.toLowerCase()
  );
};

/**
 * Get country by capital city
 * @param {string} capitalName - Name of the capital city to retrieve country
 * @returns {Object|null} Country object if found, otherwise null
 */
const capital = (capitalName) => {
  return countries().find(
    (country) => country.capital.toLowerCase() === capitalName.toLowerCase()
  );
};

/**
 * Get country by currency code
 * @param {string} currencyCode - Currency code to retrieve country
 * @returns {Object|null} Country object if found, otherwise null
 */
const currency = (currencyCode) => {
  return countries().find(
    (country) =>
      country.currencyCode.toLowerCase() === currencyCode.toLowerCase()
  );
};

// Export module functions
module.exports = {
  countries,
  sortName,
  sortCurrency,
  sortCode,
  code,
  continent,
  name,
  capital,
  currency,
};
