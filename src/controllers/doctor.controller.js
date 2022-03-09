const express = require("express");

const Doctor = require("../models/doctor.model");
const crudController = require("./crud.controller");

const router = express.Router();

router.post("/", crudController.post(Doctor));
router.get("/", crudController.getAll(Doctor));
router.get("/:id", crudController.getOne(Doctor));
// router.patch("/:id", crudController.updateOne(Product));
// router.delete("/:id", crudController.deleteOne(Product));

module.exports = router;
