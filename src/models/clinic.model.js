const mongoose = require("mongoose");

const clinicSchema = new mongoose.Schema(
	{
		name: { type: String, required: true },
	},
	{
		versionKey: false,
		timestamps: true,
	}
);

const Clinics = mongoose.model("clinic", clinicSchema);
module.exports = Clinics;
