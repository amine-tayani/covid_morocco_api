let express = require("express");
let path = require("path");

let indexRouter = require("./routes/index");
let deathsRouter = require("./routes/deaths");
let casesRouter = require("./routes/cases");

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));

app.use("/", indexRouter);
app.use("/deaths", deathsRouter);
app.use("/cases", casesRouter);

app.listen((port = 3000), () => {
  console.log("localhost Server started at " + port);
});
module.exports = app;
