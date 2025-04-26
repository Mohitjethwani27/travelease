// models/Booking.js
const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  name:        String,
  image:       String,
  price:       Number,
  packageType: String,
  date:        Date,
  adults:      Number,
  children:    Number,

  // Was { insurance: Boolean, guide: Boolean, meal: Boolean }
  services:    {
    type: [String],      // now an array of service names
    default: []          // if user selected none, empty array
  },

  transactionID: String,
  userId:        String,
});

module.exports = mongoose.model("Booking", bookingSchema);
