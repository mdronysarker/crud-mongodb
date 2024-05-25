const express = require("express");
const route = express.Router();
const apiRoute = require("./api");
require("dotenv").config();

const api = process.env.API_URL;

route.use(api, apiRoute);

module.exports = route;
