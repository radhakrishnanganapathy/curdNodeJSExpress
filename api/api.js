const express = require("express");
const User = require("../models/User");
const StaticData = require("../StaticModels/static");
const Crud = require("../Crud/Crud");
const router = express.Router();

router.use("/new-user", User);
router.use("/static", StaticData);
router.use("/curd", Crud);
module.exports = router;
