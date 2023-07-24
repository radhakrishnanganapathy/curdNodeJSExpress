const express = require("express");
const router = express.Router();

userdata = {
  user: [],
};

router.post("/add-static-data", (req, res) => {
  const userData = req.body;
  userdata.user.push(userData);
  res.json(userData);
});

router.get("/get-static-data", (req, res) => {
  res.json(userdata);
});

// router.get("/get-id", (req, res) => {
//   const { id } = req.params;
//   const user = userdata.find((user) => user.id === id);
//   res.json(user);
// });

module.exports = router;
