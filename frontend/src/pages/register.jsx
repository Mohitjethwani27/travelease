import React, { useState } from "react";
import { Box, TextField, Button, Typography, Paper } from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";

export default function RegisterPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    if (!firstName || !lastName || !email || !phone || !password) {
      alert("Please fill in all fields.");
      return;
    }

    if (!phone.startsWith("+")) {
      alert("Enter phone number with country code (e.g., +919876543210)");
      return;
    }

    setLoading(true);

    const userDetails = {
      firstName,
      lastName,
      email,
      phone,
      password,
    };

    try {
      const response = await axios.post("http://localhost:3000/api/auth/register", userDetails);

      alert("Registration successful! 🎉");
      console.log("User registered:", response.data);
    } catch (error) {
      console.error("Error saving user:", error.response ? error.response.data : error.message);
      alert("Registration failed. Please try again.");
    }finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#ffffff",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          width: "350px",
          textAlign: "center",
          borderRadius: 3,
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Typography variant="h5" fontWeight="bold" mb={2}>
          Register
        </Typography>

        <TextField
          fullWidth
          label="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          margin="normal"
          variant="outlined"
        />

        <TextField
          fullWidth
          label="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          margin="normal"
          variant="outlined"
        />

        <TextField
          fullWidth
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          margin="normal"
          variant="outlined"
        />

        <TextField
          fullWidth
          label="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          margin="normal"
          variant="outlined"
          placeholder="+91XXXXXXXXXX"
        />

        <TextField
          fullWidth
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          margin="normal"
          variant="outlined"
        />

        <Button
          fullWidth
          variant="contained"
          sx={{ mt: 2, backgroundColor: "orange", "&:hover": { backgroundColor: "#e67e22" } }}
          onClick={handleRegister}
          disabled={loading}
        >
          {loading ? "Registering..." : "REGISTER"}
        </Button>

        <Typography mt={2}>
          Already have an account?{" "}
          <Link to="/login" style={{ fontWeight: "bold", textDecoration: "none" }}>
            Login
          </Link>
        </Typography>
      </Paper>
    </Box>
  );
}
