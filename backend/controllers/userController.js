const bcrypt = require("bcryptjs");
const User = require("../models/user");

// Register user
exports.register = async (req, res) => {
  const { firstName, lastName, email, phone, password } = req.body;

  if (!firstName || !lastName || !email || !phone || !password) {
    return res.status(400).json({ status: 'error', message: 'All fields are required.' });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ status: 'error', message: 'Email is already registered.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      firstName,
      lastName,
      email,
      phone,
      password: hashedPassword,
    });

    await newUser.save();
    res.status(200).json({ status: 'success', message: 'User registered successfully!' });
  } catch (err) {
    console.error('Registration error:', err);
    res.status(500).json({ status: 'error', message: 'Failed to register user.' });
  }
};

// Login user
exports.login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ status: 'error', message: 'Email and password are required.' });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ status: 'error', message: 'User not found.' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ status: 'error', message: 'Invalid credentials.' });
    }

    res.status(200).json({ status: 'success', message: 'Login successful!', user });
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ status: 'error', message: 'Internal server error.' });
  }
};

// Get user profile by email
exports.getUser = async (req, res) => {
  const { email } = req.params;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ status: 'error', message: 'User not found.' });
    }

    res.status(200).json({ status: 'success', user });
  } catch (err) {
    console.error('Profile fetch error:', err);
    res.status(500).json({ status: 'error', message: 'Failed to fetch user profile.' });
  }
};

// Update user profile by email
exports.updateUser = async (req, res) => {
  const { email } = req.params;
  const { firstName, lastName, phone } = req.body;

  try {
    const updates = {};
    if (firstName) updates.firstName = firstName;
    if (lastName) updates.lastName = lastName;
    if (phone) updates.phone = phone;

    const updatedUser = await User.findOneAndUpdate({ email }, updates, { new: true });

    if (!updatedUser) {
      return res.status(404).json({ status: 'error', message: 'User not found for update.' });
    }

    res.status(200).json({ status: 'success', message: 'Profile updated successfully!', user: updatedUser });
  } catch (err) {
    console.error('Profile update error:', err);
    res.status(500).json({ status: 'error', message: 'Failed to update profile.' });
  }
};
