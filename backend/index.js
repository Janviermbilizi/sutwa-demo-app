const App = require("./App");
const port = process.env.PORT || 8080;

App.listen(port, () => {
  console.log(`Listen on port ${port}`);
});
