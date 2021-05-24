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
const JIRS_DB = ["Janvier", "Randy", "Silver", "Ivan", "Eric", "Bruce"];

const LeftPlay = [];

const RightPlay = [];

router.get("/", (req, res) => {
  const JIRS_PICK = JIRS_DB[Math.floor(Math.random() * JIRS_DB.length)];
  res.json({ Winner: JIRS_PICK });
});

router.get("/participants", (req, res) => {
  res.status(200).json(JIRS_DB);
});

//add participant route at /addparticipant that push the participant into the above array JIRS_DB





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
