# @abdullahwins/countries

This npm package provides comprehensive data about countries around the world. With detailed information such as international dialing codes, currency details including code, symbol, and name, capital cities, continents, and official languages, it's a valuable resource for developers working on projects involving internationalization, data visualization, or geographical analysis.

## Installation

```bash
npm install @abdullahwins/countries
```

## Usage

```javascript
const countries = require("@abdullahwins/countries");

// Get all countries
const allCountries = countries.countries();

// Get a sorted list of country names
const sortedNames = countries.sortName();

// Get a sorted list of unique currency codes
const sortedCurrencies = countries.sortCurrency();

// Get all countries sorted by international dialing code (countrycode)
const sortedByCode = countries.sortCode();

// Get country by international dialing code
const countryByCode = countries.code("US");

// Get countries by continent
const countriesInAsia = countries.continent("Asia");

// Get country by name
const countryByName = countries.name("united states");

// Get country by capital city
const countryByCapital = countries.capital("Paris");

// Get country by currency code
const countryByCurrency = countries.currency("USD");
```

## API

### countries()

Get all countries.

### sortName()

Get a sorted list of country names.

### sortCurrency()

Get a sorted list of unique currency codes.

### sortCode()

Get all countries sorted by international dialing code (countrycode).

### code(countrycode)

Get country by international dialing code (countrycode).

- `countrycode` (string) - International dialing code to retrieve country.

### continent(continentName)

Get countries by continent.

- `continentName` (string) - Name of the continent to filter countries.

### name(countryName)

Get country by name.

- `countryName` (string) - Name of the country to retrieve.

### capital(capitalName)

Get country by capital city.

- `capitalName` (string) - Name of the capital city to retrieve country.

### currency(currencyCode)

Get country by currency code.

- `currencyCode` (string) - Currency code to retrieve country.

## License

This package is licensed under the MIT License.
