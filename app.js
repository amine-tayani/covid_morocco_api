let express = require("express");

let indexRouter = require("./routes/index");
let deathsRouter = require("./routes/deaths");
let casesRouter = require("./routes/cases");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", indexRouter);
app.use("/deaths", deathsRouter);
app.use("/cases", casesRouter);

app.listen((port = 3000), () => {
  console.log("app started " + port);
});
module.exports = app;
