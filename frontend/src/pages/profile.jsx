import React, { useState, useEffect } from "react";
import { Box, TextField, Button, Typography, Paper, Snackbar } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useUser } from "../assets/userstate"; // Import the useUser hook

function Profile() {
  const { user, loginUser } = useUser(); // Access user and login from context
  const [formData, setFormData] = useState({
    firstName: user?.firstName || '',
    lastName: user?.lastName || '',
    phone: user?.phone || '',
    email: user?.email || '',
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate(); // Used for navigation if needed

  // Handle profile update form submission
  const handleProfileUpdate = async (e) => {
    e.preventDefault();

    // Validate form data
    const { firstName, lastName, phone } = formData;
    if (!firstName || !lastName || !phone) {
      setMessage("All fields except email are required.");
      return;
    }

    setLoading(true);
    try {
      const res = await axios.put(`http://localhost:3000/api/user/${user.email}`, formData);

      if (res.data.status === "success") {
        setMessage("Profile updated successfully!");

        // Fetch the updated user data
        const updatedUserResponse = await axios.get(`http://localhost:3000/api/user/${user.email}`);
        
        // Update the global state using login from context
        loginUser(updatedUserResponse.data.user); // ✅ correct usage
        // Correct usage of login function
      } else {
        setMessage(res.data.message || "An error occurred while updating the profile.");
      }
    } catch (err) {
      console.error("Error updating profile:", err);
      setMessage("Failed to update profile.");
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    // If the user is not logged in or doesn't exist, navigate to login page
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  return (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh" }}>
      <Paper elevation={3} sx={{ padding: 4, width: "350px", textAlign: "center" }}>
        <Typography variant="h5" fontWeight="bold" mb={2}>
          Update Profile
        </Typography>

        <TextField
          fullWidth
          label="First Name"
          margin="normal"
          variant="outlined"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />

        <TextField
          fullWidth
          label="Last Name"
          margin="normal"
          variant="outlined"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />

        <TextField
          fullWidth
          label="Phone"
          margin="normal"
          variant="outlined"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />

        <TextField
          fullWidth
          label="Email"
          margin="normal"
          variant="outlined"
          name="email"
          value={formData.email}
          disabled // Email should not be changed for now (based on current logic)
        />

        <Button
          fullWidth
          variant="contained"
          sx={{ backgroundColor: "orange", mt: 2 }}
          onClick={handleProfileUpdate}
          disabled={loading} // Disable button while loading
        >
          {loading ? "Updating..." : "Update Profile"}
        </Button>

        {message && (
          <Typography color={message.includes("successfully") ? "green" : "red"} mt={2}>
            {message}
          </Typography>
        )}
      </Paper>

      {/* Snackbar for success or error messages */}
      <Snackbar
        open={!!message}
        autoHideDuration={4000}
        onClose={() => setMessage("")}
        message={message}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      />
    </Box>
  );
}

export default Profile;
