const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");

const App = express();

const Routes = require("./Routes/index");

// parse application/json
App.use(json());

//allow all origin
App.use(cors());

App.use(Routes);

module.exports = App;
