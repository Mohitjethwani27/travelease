// routes/index.js
const express = require('express');
const authRoutes = require('./auth'); // Authentication routes
const userRoutes = require('./user'); // User routes
const bookingRoutes = require('./Booking'); // Booking create/list routes
const myBookingRoutes = require('./myBookings'); // 🔥 New route for booking details by ID

const router = express.Router();

// Mounting the routes
router.use('/auth', authRoutes); // /api/auth/...
router.use('/user', userRoutes); // /api/user/...
router.use('/bookings', bookingRoutes); // /api/bookings/...
router.use('/mybookings', myBookingRoutes); // /api/mybookings/...

module.exports = router;
