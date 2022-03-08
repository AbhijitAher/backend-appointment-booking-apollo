const express = require("express");
const app = express();

const clinicController = require("./controllers/clinic.controller");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/clinics", clinicController);

module.exports = app;
