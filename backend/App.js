const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const App = express();

const Routes = require("./Routes/index");

// parse application/json
App.use(bodyParser.json());

//allow all origin
App.use(cors());

App.use(Routes);

module.exports = App;
