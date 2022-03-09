const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema(
	{
		name: { type: String, required: true, unique: true },
		speciality: { type: String, required: true },
		clinic: { type: mongoose.SchemaTypes.ObjectId, required: true },
		slots: [{ type: String, required: true }],
		available_slots: [{ type: Boolean, required: true }],
		appointment_cost: { type: Number, required: true },
	},
	{
		versionKey: false,
		timestamps: true,
	}
);

const Doctors = mongoose.model("doctor", doctorSchema);
module.exports = Doctors;
