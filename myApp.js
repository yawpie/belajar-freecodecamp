let express = require("express");
let app = express();
require("dotenv").config();
const bodyParser = require("body-parser");

console.log("Hello World");
const middlewarePath = __dirname + "/public";
app.use("/public", express.static(middlewarePath));
app.use("/", (req, res, next) => {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
});
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  const path = __dirname + "/views/index.html";
  res.sendFile(path);
});
app.get("/json", (req, res) => {
  let pesan = "Hello json";
  if (process.env.MESSAGE_STYLE == "uppercase") {
    pesan = pesan.toUpperCase();
  }
  res.send({ message: `${pesan}` });
});
app.get(
  "/now",
  (req, res, next) => {
    req.time = new Date().toString();
    next();
  },
  (req, res) => {
    res.send({ time: `${req.time}` });
  }
);
app.get("/:word/echo", (req, res) => {
  res.send({ echo: `${req.params.word}` });
});
app
  .route("/name")
  .post((req, res) => {
    res.send({ name: `${req.body.first} ${req.body.last}` });
  })
  .get((req, res) => {
    res.send({ name: `${req.query.first} ${req.query.last}` });
  });
module.exports = app;
