const express = require('express');
const Booking = require('../models/Booking');
const router = express.Router();

// POST /api/bookings - Save a booking
// POST /api/bookings - Save a booking
router.post('/', async (req, res) => {
  const {
    name,
    image,
    price,
    packageType,
    date,
    adults,
    children,
    services = [],        // default to empty array
    transactionID,
    userId
  } = req.body;

  console.log("📥 Booking data received:", req.body);

  // basic required‐fields check
  if (
    !name ||
    !price ||
    !transactionID ||
    !userId ||
    !packageType ||
    !date ||
    adults == null ||
    children == null
  ) {
    return res.status(400).json({
      status: 'error',
      message: 'All required fields must be provided.',
    });
  }

  // Ensure services is an array of strings
  const servicesArray = Array.isArray(services)
    ? services.filter((s) => typeof s === 'string')
    : [];

  // Check if the booking already exists by userId and name
  const existingBooking = await Booking.findOne({ userId, name });
  if (existingBooking) {
    return res.status(400).json({
      status: 'error',
      message: 'You have already booked this destination.',
    });
  }

  try {
    const newBooking = new Booking({
      name,
      image,
      price,
      packageType,
      date,
      adults,
      children,
      services: servicesArray,   // store names, not booleans
      transactionID,
      userId,
    });

    await newBooking.save();

    res.status(201).json({
      status: 'success',
      message: 'Booking saved successfully!',
      booking: newBooking,
    });
  } catch (error) {
    console.error('❌ Error saving booking:', error);
    res.status(500).json({
      status: 'error',
      message: 'Failed to save booking.',
    });
  }
});

// GET /api/bookings/:email - Retrieve bookings by email
router.get('/:email', async (req, res) => {
  const { email } = req.params;

  try {
    const bookings = await Booking.find({ userId: email }).sort({ date: -1 });

    res.status(200).json({
      status: 'success',
      message: 'Bookings retrieved successfully!',
      bookings,
    });
  } catch (error) {
    console.error('❌ Error retrieving bookings by email:', error);
    res.status(500).json({
      status: 'error',
      message: 'Failed to retrieve bookings.',
    });
  }
});

module.exports = router;
