const express = require("express");
const bodyParser = require("body-parser");

const App = express();

const Routes = require("./Routes/index");

// parse application/json
App.use(bodyParser.json());

App.use(Routes);

module.exports = App;
