const express = require("express");

const Clinic = require("../models/clinic.model");
const crudController = require("./crud.controller");

const router = express.Router();

router.post("/", crudController.post(Clinic));
router.get("/", crudController.getAll(Clinic));
router.get("/:id", crudController.getOne(Clinic));
// router.patch("/:id", crudController.updateOne(Product));
// router.delete("/:id", crudController.deleteOne(Product));

module.exports = router;
