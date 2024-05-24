const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("this frist route 2");
});

app.listen(3000, () => {
  console.log("Port is runing");
});
