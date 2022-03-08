const mongoose = require("mongoose");
require("dotenv").config();

const connect = () => {
	// console.log(`${process.env.ATLAS_USERNAME}:${process.env.ATLAS_PASSWORD}`);
	return mongoose.connect(
		`mongodb+srv://${process.env.ATLAS_USERNAME}:${process.env.ATLAS_PASSWORD}@apollo-bookings.ywsco.mongodb.net/test`
	);
};

module.exports = connect;
