const express = require('express');
const Booking = require('../models/Booking');
const router = express.Router();

// POST /api/bookings - Save a new booking
router.post('/', async (req, res) => {
  const {
    name,
    image,
    price,
    packageType,
    date,
    adults,
    children,
    services = [],
    transactionID,
    userId,
    adultDetails = [],
    childrenDetails = [],
  } = req.body;

  console.log("📥 Booking data received:", req.body);

  // Basic required fields check
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

  try {
    // Check if the user has already booked this destination
    const existingBooking = await Booking.findOne({ userId, name });
    if (existingBooking) {
      return res.status(400).json({
        status: 'error',
        message: 'You have already booked this destination.',
      });
    }

    // Create and save the booking
    const newBooking = new Booking({
      name,
      image,
      price,
      packageType,
      date,
      adults,
      children,
      services: Array.isArray(services) ? services : [],
      transactionID,
      userId,
      adultDetails: Array.isArray(adultDetails) ? adultDetails : [],
      childrenDetails: Array.isArray(childrenDetails) ? childrenDetails : [],
    });

    await newBooking.save();

    res.status(201).json({
      status: 'success',
      message: 'Booking saved successfully!',
      booking: newBooking,
    });

  } catch (error) {
    console.error('❌ Error saving booking:', error.message);
    res.status(500).json({
      status: 'error',
      message: error.message || 'Failed to save booking.',
    });
  }
});

// GET /api/bookings/:email - Retrieve bookings by user email
router.get('/:email', async (req, res) => {
  const { email } = req.params;

  try {
    const bookings = await Booking.find({ userId: email }).sort({ date: -1 });

    // Handle old bookings (if adultDetails or childrenDetails are missing)
    const updatedBookings = bookings.map((booking) => ({
      ...booking.toObject(),
      adultDetails: booking.adultDetails || [],
      childrenDetails: booking.childrenDetails || [],
    }));

    res.status(200).json({
      status: 'success',
      message: 'Bookings retrieved successfully!',
      bookings: updatedBookings,
    });

  } catch (error) {
    console.error('❌ Error retrieving bookings by email:', error.message);
    res.status(500).json({
      status: 'error',
      message: 'Failed to retrieve bookings.',
    });
  }
});

module.exports = router;
