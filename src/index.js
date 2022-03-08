const express = require("express");
const cors = require("cors");
const app = express();

// ------------------------------- Controllers -------------------------------
const clinicController = require("./controllers/clinic.controller");

app.use(cors({ origin: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/clinics", clinicController);

module.exports = app;
