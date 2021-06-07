const App = require("./App");
const port = process.env.PORT || 5000;

App.listen(port, () => {
  console.log(`Listen on port ${port}`);
});
