const axios = require("axios");
const cheerio = require("cheerio");

const url = "https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3";

async function scrapeData() {
  const { data } = await axios.get(url);
  const $ = cheerio.load(data);
  const listItems = $(".plainlist ul li");
  const countries = [];
  listItems.each((_, el) => {
    const country = { name: "", iso3: "" };
    country.name = $(el).children("a").text();
    country.iso3 = $(el).children("span").text();
    countries.push(country);
  });
  return JSON.stringify(countries, null, 2);
}

module.exports = scrapeData;
