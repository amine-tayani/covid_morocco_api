var express = require("express");
var router = express.Router();

router.get("/", async function (_, res) {
  res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
  res.render("index.html");
});

module.exports = router;
