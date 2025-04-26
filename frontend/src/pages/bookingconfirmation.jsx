import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import { useUser } from "../assets/userstate"; // Importing from UserContext

export default function BookingConfirmation() {
  const navigate = useNavigate();
  const location = useLocation();
  const bookingDetails = location.state; // Get booking details from location state

  // Function to convert DD-MM-YYYY to ISO format
  const convertToISO = (dateStr) => {
    const [day, month, year] = dateStr.split("-");
    return `${year}-${month}-${day}T00:00:00Z`;
  };

  // Function to format ISO date to local date string
  const formatDate = (dateStr) => {
    const isoDate = convertToISO(dateStr);
    return new Date(isoDate).toLocaleDateString("en-IN", {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  // If booking details are not found, return an error message
  if (!bookingDetails) {
    return <Typography textAlign="center" color="red">No booking details found.</Typography>;
  }

  const { name, image, price, packageType, date, adults, children, services } = bookingDetails;
  const formattedPrice = new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR" }).format(price);
  const formattedBookingDate = formatDate(date);

  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh" bgcolor="#f5f5f5">
      <Card sx={{ maxWidth: 500, width: "100%", p: 4, textAlign: "center", boxShadow: 3, borderRadius: 3 }}>
        <CheckCircleIcon sx={{ fontSize: 80, color: "green" }} />
        <Typography variant="h4" fontWeight="bold" mt={2}>
          Booking Confirmed!
        </Typography>
        <Typography variant="body1" mt={1}>
          Your trip to <strong>{name}</strong> has been successfully booked.
        </Typography>

        <CardMedia component="img" height="200" image={image} alt={name} sx={{ borderRadius: 2, mt: 2 }} />

        <CardContent sx={{ textAlign: "left" }}>
          <Typography variant="h6" fontWeight="bold">Booking Details:</Typography>
          <Typography variant="body1"><strong>Destination:</strong> {name}</Typography>
          <Typography variant="body1"><strong>Package Type:</strong> {packageType}</Typography>
          <Typography variant="body1"><strong>Price:</strong> {formattedPrice}</Typography>
          <Typography variant="body1"><strong>Travel Date:</strong> {formattedBookingDate}</Typography>
          <Typography variant="body1"><strong>Adults:</strong> {adults}</Typography>
          <Typography variant="body1"><strong>Children:</strong> {children}</Typography>

          <Typography variant="body1" fontWeight="bold" mt={2}>Additional Services:</Typography>
          {services && Object.entries(services).map(([key, value]) =>
            value ? <Typography key={key} variant="body2">✅ {key.replace("_", " ")}</Typography> : null
          )}

          <Typography variant="body2" color="gray" mt={2}>
            We have received your payment of <strong>{formattedPrice}</strong>.  
            Check your email for confirmation details.
          </Typography>
        </CardContent>

        <Button 
          variant="contained" 
          sx={{ mt: 3, bgcolor: "orange", color: "white" }} 
          onClick={() => navigate("/")}
        >
          Back to Home
        </Button>
      </Card>
    </Box>
  );
}
