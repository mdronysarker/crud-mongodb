const express = require("express");
const app = express();
require("dotenv").config();
const router = require("./routes");
const mongoConfig = require("./config/mongoConfig");
app.use(express.json());
app.use(router);

mongoConfig();

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Port is runing");
});
