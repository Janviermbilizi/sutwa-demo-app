const App = require("./App");
const port = process.env.PORT || 3000;

App.listen(port, () => {
  console.log(`Listen on port ${port}`);
});
