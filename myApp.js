let express = require("express");
let app = express();

console.log("Hello World");

app.get("/", (req, res) => {
  let path = __dirname + "/views/index.html";
  res.sendFile(path);
});

module.exports = app;
