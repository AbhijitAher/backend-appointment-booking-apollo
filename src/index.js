const express = require("express");
const cors = require("cors");
const app = express();

// ------------------------------- Getting Controllers -------------------------------
const clinicController = require("./controllers/clinic.controller");
const doctorController = require("./controllers/doctor.controller");

app.use(cors({ origin: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// --------------------------- Routes ------------------------
app.use("/clinics", clinicController);
app.use("/doctors", doctorController);

module.exports = app;
