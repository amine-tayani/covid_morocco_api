var express = require("express");
var router = express.Router();
const data = require("../json/morocco_covid_new_deaths.json");

router.get("/", async function (_, res) {
  res.header("Content-Type", "application/json");
  res.send(JSON.stringify(data, null, 4));
});

module.exports = router;
