// routes/index.js

const express = require('express');
const authRoutes = require('./auth'); // Authentication routes
const userRoutes = require('./user'); // User routes
const bookingRoutes = require('./Booking'); // Booking routes

const router = express.Router();

// Mounting the routes for /auth, /user, and /bookings
router.use('/auth', authRoutes); // Handles /api/auth/...
router.use('/user', userRoutes); // Handles /api/user/...
router.use('/bookings', bookingRoutes); // Handles /api/bookings/... (corrected)

module.exports = router;
