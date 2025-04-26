const express = require('express');
const User = require('../models/User');


const router = express.Router();

// GET /api/user/:email
router.get('/:email', [
  // Validate email format
  
], async (req, res) => {
  const { email } = req.params;

  // Check if email is valid
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const errorMessage = 'Invalid email format';
    console.error(errorMessage); // Log to console if invalid email
    return res.status(400).json({ status: 'error', message: errorMessage });
  }

  try {
    const user = await User.findOne({ email });

    if (!user) {
      const errorMessage = 'User not found.';
      console.error(errorMessage); // Log to console if user not found
      return res.status(404).json({ status: 'error', message: errorMessage });
    }

    // Log the user data to the console
    console.log('User data fetched:', user);

    res.status(200).json({ status: 'success', user });
  } catch (err) {
    console.error('Profile fetch error:', err);
    res.status(500).json({ status: 'error', message: 'Failed to fetch user profile.' });
  }
});

// PUT /api/user/:email
router.put('/:email', async (req, res) => {
  const { email } = req.params;
  const { firstName, lastName, phone } = req.body;

  try {
    // Check if email exists in the database
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ status: 'error', message: 'User not found for update.' });
    }

    const updates = {};
    if (firstName) updates.firstName = firstName;
    if (lastName) updates.lastName = lastName;
    if (phone) updates.phone = phone;

    // Update the user's profile
    const updatedUser = await User.findOneAndUpdate({ email }, updates, { new: true });

    res.status(200).json({ status: 'success', message: 'Profile updated successfully!', user: updatedUser });
  } catch (err) {
    console.error('Profile update error:', err);
    res.status(500).json({ status: 'error', message: 'Failed to update profile.' });
  }
});

module.exports = router;
