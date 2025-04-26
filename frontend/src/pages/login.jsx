import React, { useState } from "react";
import { Box, TextField, Button, Typography, Paper, Snackbar } from "@mui/material";
import { Link, useNavigate } from "react-router-dom"; // ✅ Correct hook
import axios from 'axios';
import { useUser } from "../assets/userstate";
import { toast } from 'react-toastify';


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate(); // ✅ Call this at the top, not inside a function
  const { loginUser } = useUser(); // Change login to loginUser

  // Handle form submission (Login)
  const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post("http://localhost:3000/api/auth/login", {
        email,
        password,
      });
      if (response.data.status === "success") {
        const user = response.data.user; // Assuming your backend sends user info like { firstName, email, etc. }
        
        loginUser(user); // Correct function to log in the user
        toast.success("Logged in successfully!");
        setSuccessMessage("Login successful!");
        setErrorMessage("");
  
        setTimeout(() => {
          navigate("/"); // Redirect after successful login
        }, 2000);
      }
    } catch (error) {
      console.error("Login Error:", error); // Log the error to debug
      if (error.response) {
        setErrorMessage(error.response.data.message || "An error occurred on the server.");
      } else if (error.request) {
        setErrorMessage("No response from server. Please check your connection.");
      } else {
        setErrorMessage("An error occurred. Please try again.");
      }
  
      setSuccessMessage("");
    }
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh" }}>
      <Paper elevation={3} sx={{ padding: 4, width: "350px", textAlign: "center" }}>
        <Typography variant="h5" fontWeight="bold" mb={2}>Login</Typography>

        <TextField
          fullWidth
          label="Email"
          margin="normal"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextField
          fullWidth
          label="Password"
          type="password"
          margin="normal"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button
          fullWidth
          variant="contained"
          sx={{ backgroundColor: "orange", mt: 2 }}
          onClick={handleLogin}
        >
          Login
        </Button>

        {successMessage && (
          <Typography color="green" mt={2}>{successMessage}</Typography>
        )}
        {errorMessage && (
          <Typography color="red" mt={2}>{errorMessage}</Typography>
        )}

        <Typography mt={2}>
          Don't have an account? <Link to="/register">Register</Link>
        </Typography>
      </Paper>

      <Snackbar
        open={!!errorMessage}
        autoHideDuration={4000}
        onClose={() => setErrorMessage("")}
        message={errorMessage}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      />
      <Snackbar
        open={!!successMessage}
        autoHideDuration={4000}
        onClose={() => setSuccessMessage("")}
        message={successMessage}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      />
    </Box>
  );
}

export default Login;
