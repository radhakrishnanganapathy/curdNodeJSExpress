const express = require("express");
const schemas = require("../Schemas/Schemas");
const router = express.Router();

router.post("/add-user", async (req, res) => {
  const CreateUser = new schemas.user({
    username: req.body.username,
    age: req.body.age,
  });
  const user = await CreateUser.save();
  res.json(user);
});

module.exports = router;
