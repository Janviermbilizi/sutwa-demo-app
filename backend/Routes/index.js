const router = require("express").Router();
//Randy idea
// const JIRS_1 = {
//   randy: "Randy",
//   ivan: "Ivan",
//   silver: "Silver",
//   janvier: "Janvier",
// };
//Silver idea
//const JIRS_2 = "Silver Ivan Janvier Randy";

//ivan idea
const JIRS_DB = ["Janvier", "Randy", "Silver", "Ivan"];

const LeftPlay = [];

const RightPlay = [];

router.get("/", (req, res) => {
  const JIRS_PICK = JIRS_DB[Math.floor(Math.random() * JIRS_DB.length)];
  res.json({ Winner: JIRS_PICK });
});

router.get("/main", (req, res) => {
  res.status(200).send("Sutwa Test Demo");
});

router.get("/ivan", (req, res) => {
  res.status(200).send("Ivan Private Route");
});

router.post("/createuser", (req, res) => {
  const { username, password } = req.body;
  res.status(201).send({ username, password });
});

module.exports = router;
