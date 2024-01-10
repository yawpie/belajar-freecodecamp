let express = require("express");
let app = express();
const path = require("path");

console.log("Hello World");
const middlewarePath = __dirname + "/public";
app.use("/public", express.static(middlewarePath));

app.get("/", (req, res) => {
  const path = __dirname + "/views/index.html";
  res.sendFile(path);
});
app.get("/json", (req, res) => {
  res.send({ message: "Hello json" });
});
module.exports = app;
