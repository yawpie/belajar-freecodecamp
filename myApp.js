let express = require("express");
let app = express();
const dotenv = require("dotenv").config();

console.log("Hello World");
const middlewarePath = __dirname + "/public";
app.use("/public", express.static(middlewarePath));

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
module.exports = app;
