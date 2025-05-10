// routes/myBookings.js
// serve get request when i click on any card in booking section of website
const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');

// GET /api/mybookings/:id - fetch a specific booking by ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const booking = await Booking.findById(id);

    if (!booking) {
      return res.status(404).json({
        status: 'error',
        message: 'Booking not found',
      });
    }

    res.status(200).json({
      status: 'success',
      message: 'Booking fetched successfully',
      booking,
    });
  } catch (error) {
    console.error('❌ Error fetching booking:', error.message);
    res.status(500).json({
      status: 'error',
      message: 'Failed to fetch booking',
    });
  }
});

module.exports = router;
