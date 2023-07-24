const express = require("express");
const schemas = require("../Schemas/Schemas");

const router = express.Router();

router.post("/create-crud", async (req, res) => {
  const createData = new schemas.curd({
    name: req.body.name,
    age: req.body.age,
    dob: req.body.dob,
    place: req.body.place,
    mobile: req.body.mobile,
  });
  const data = await createData.save();
  res.json(data);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const user = await schemas.curd.findById(id);
  res.json(user);
});

router.get("/", async (req, res) => {
  const allData = await schemas.curd.find();
  res.json(allData);
});

router.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  const deleteData = await schemas.curd.findByIdAndRemove(id);
  res.json({ delete: "Successfully" });
});

router.put("/update/:id", async (req, res) => {
  const { id } = req.params;
  const { name, age, dob, place, mobile } = req.body;
  const dataUpdate = await schemas.curd.findByIdAndUpdate(
    id,
    { name, age, dob, place, mobile },
    { new: true }
  );
  res.json(dataUpdate);
});
module.exports = router;
