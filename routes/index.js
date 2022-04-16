var express = require("express");
var router = express.Router();

router.get("/", async function (_, res) {
  res.send("<h1>Morocco new covid deaths and cases</h1>");
});

module.exports = router;
