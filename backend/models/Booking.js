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

  services: {
    type: [String],
    default: [],
  },

  transactionID: String,
  userId:        String,

  // 🧑‍🤝‍🧑 New: Adult Details
  adultDetails: [
    {
      name: { type: String, required: true },
      age:  { type: Number, required: true }
    }
  ],

  // 🧒 New: Children Details
  childrenDetails: [
    {
      name: { type: String, required: true },
      age:  { type: Number, required: true }
    }
  ]
});

module.exports = mongoose.model("Booking", bookingSchema);
