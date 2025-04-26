import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function BookingPage() {
  const locationState = useLocation().state;
  const navigate = useNavigate();

  // 🔐 Get logged-in user (stored from login)
  const user = JSON.parse(localStorage.getItem("user"));

  if (!locationState) {
    return <p style={{ textAlign: "center", color: "red" }}>No destination selected.</p>;
  }

  const { location, rating, name, state, price, image, category } = locationState;
  const formattedPrice = new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR" }).format(price);

  const [packageType, setPackageType] = useState("Standard");
  const [date, setDate] = useState("");
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [services, setServices] = useState({ insurance: false, guide: false, meal: false });

  const getPackageOptions = () => {
    if (category === "religious") {
      return [
        { value: "Standard", label: "Standard (Hotel + Transport)" },
        { value: "Deluxe", label: "Deluxe (Hotel + VIP Darshan)" },
        { value: "Premium", label: "Premium (Luxury + Guide + VIP Darshan)" },
      ];
    } else {
      return [
        { value: "Standard", label: "Standard (Hotel + Transport)" },
        { value: "Deluxe", label: "Deluxe (Hotel + Sightseeing)" },
        { value: "Premium", label: "Premium (Luxury + Guide + Exclusive Access)" },
      ];
    }
  };

  const handleProceedToPayment = () => {
    if (!user || !user.email) {
      alert("You need to be logged in to book a tour.");
      return;
    }
  
    // Add the selected date to the state being passed to the PaymentPage
    navigate("/payment", {
      state: {
        location,
        rating,
        name,
        state,
        price,
        image,
        packageType,
        date,  // Pass the selected date here
        adults,
        children,
        services,
        userId: user.email, // Pass email as ID
      },
    });
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
      <Card sx={{ maxWidth: 600, width: "100%", padding: 3, borderRadius: 2, boxShadow: 3 }}>
        <CardMedia component="img" height="300" image={image} alt={name} sx={{ borderRadius: 2 }} />
        <CardContent>
          <Typography variant="h5" fontWeight="bold">{`Book Your Trip to ${name}`}</Typography>
          <Typography variant="body1"><strong>Location:</strong> {location}, {state}</Typography>
          <Typography variant="body1"><strong>Rating:</strong> ⭐ {rating}</Typography>
          <Typography variant="h6" color="primary"><strong>Price:</strong> {formattedPrice}</Typography>

          <FormControl fullWidth sx={{ mt: 3 }}>
            <InputLabel id="package-label" sx={{ backgroundColor: "white", px: 1 }}>
              Package Type
            </InputLabel>
            <Select
              labelId="package-label"
              value={packageType}
              onChange={(e) => setPackageType(e.target.value)}
              sx={{ pt: 2, pb: 2 }}
            >
              {getPackageOptions().map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
  fullWidth
  type="date"
  label="Choose Date"
  InputLabelProps={{ shrink: true }}
  value={date}
  onChange={(e) => setDate(e.target.value)}
  sx={{ mt: 2 }}
  inputProps={{
    min: new Date().toISOString().split("T")[0], // Get today's date in YYYY-MM-DD format
  }}
/>

<Box display="flex" gap={2} mt={2}>
  <TextField
    type="number"
    label="Adults"
    value={adults}
    onChange={(e) => {
      // Ensure adults cannot be less than 0
      const value = Math.max(0, e.target.value);
      setAdults(value);
    }}
    fullWidth
  />
  <TextField
    type="number"
    label="Children"
    value={children}
    onChange={(e) => {
      // Ensure children cannot be less than 0
      const value = Math.max(0, e.target.value);
      setChildren(value);
    }}
    fullWidth
  />
</Box>


          <Box mt={2}>
  <Typography variant="body1" fontWeight="bold">Additional Services</Typography>

  {/* Travel Insurance */}
  <FormControlLabel
    control={
      <Checkbox
        checked={services.insurance}
        onChange={(e) => setServices({ ...services, insurance: e.target.checked })}
      />
    }
    label="Travel Insurance"
  />

  {/* Special Guide */}
  <FormControlLabel
    control={
      <Checkbox
        checked={services.guide}
        onChange={(e) => setServices({ ...services, guide: e.target.checked })}
      />
    }
    label="Special Guide"
  />

  {/* Meal Preferences */}
  <FormControlLabel
    control={
      <Checkbox
        checked={services.meal}
        onChange={(e) => setServices({ ...services, meal: e.target.checked })}
      />
    }
    label="Meal Preferences"
  />

  {/* Veg / Non-Veg options - appear below Meal Preferences, right-aligned */}
  {services.meal && (
    <Box display="flex" flexDirection="column" alignItems="flex-end" mt={1}>
      <Box display="flex" flexDirection="column" width="150px">
        <FormControlLabel
          control={
            <Checkbox
              checked={services.veg}
              onChange={(e) => setServices({ ...services, veg: e.target.checked })}
            />
          }
          label="Veg"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={services.nonVeg}
              onChange={(e) => setServices({ ...services, nonVeg: e.target.checked })}
            />
          }
          label="Non-Veg"
        />
      </Box>
    </Box>
  )}
</Box>


          <Button
            fullWidth
            variant="contained"
            sx={{ mt: 3, bgcolor: "orange", color: "white" }}
            onClick={handleProceedToPayment}
          >
            Proceed to Payment
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}
