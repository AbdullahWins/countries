const countries = require("./countries");

describe("@abdullahwins/countries", () => {
  test("returns all countries", () => {
    const allCountries = countries.countries();
    expect(Array.isArray(allCountries)).toBe(true);
  });

  test("sorts country names", () => {
    const sortedNames = countries.sortName();
    expect(sortedNames).toEqual(sortedNames.slice().sort());
  });

  test("returns unique currency codes", () => {
    const uniqueCodes = countries.sortCurrency();
    expect(new Set(uniqueCodes).size).toBe(uniqueCodes.length);
  });

  test("sorts countries by international dialing code", () => {
    const sortedByCode = countries.sortCode();
    expect(sortedByCode).toEqual(
      sortedByCode
        .slice()
        .sort((a, b) => a.countrycode.localeCompare(b.countrycode))
    );
  });

  test("returns country by international dialing code", () => {
    const countryCode = "+93";
    const country = countries.code(countryCode);
    expect(country).toBeDefined();
    expect(country.countrycode).toBe(countryCode);
  });

  test("filters countries by continent", () => {
    const continentName = "Europe";
    const countriesInEurope = countries.continent(continentName);
    expect(
      countriesInEurope.every(
        (country) =>
          country.continent.toLowerCase() === continentName.toLowerCase()
      )
    ).toBe(true);
  });

  test("returns country by name", () => {
    const countryName = "Afghanistan";
    const country = countries.name(countryName);
    expect(country).toBeDefined();
    expect(country.name).toBe(countryName);
  });

  test("returns country by capital city", () => {
    const capitalName = "Kabul";
    const country = countries.capital(capitalName);
    expect(country).toBeDefined();
    expect(country.capital).toBe(capitalName);
  });

  test("returns country by currency code", () => {
    const currencyCode = "AFN";
    const country = countries.currency(currencyCode);
    expect(country).toBeDefined();
    expect(country.currencyCode).toBe(currencyCode);
  });
});
