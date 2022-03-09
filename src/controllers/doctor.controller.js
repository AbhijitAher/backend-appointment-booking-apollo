const express = require("express");

const Doctor = require("../models/doctor.model");
const crudController = require("./crud.controller");

const router = express.Router();

router.post("/", crudController.post(Doctor));
router.get("/", crudController.getAll(Doctor));
router.get("/:id", crudController.getOne(Doctor));
router.get("/clinic/:id", getAllDoctors(Doctor));
// router.patch("/:id", crudController.updateOne(Product));
// router.delete("/:id", crudController.deleteOne(Product));

const getAllDoctors = (model) => async (req, res) => {
	try {
		const item = await model
			.find({ clinic: `${params.id}` })
			.lean()
			.exec();

		return res.status(201).send({ item });
	} catch (e) {
		return res.status(500).json({ status: "failed", message: e.message });
	}
};

module.exports = router;
