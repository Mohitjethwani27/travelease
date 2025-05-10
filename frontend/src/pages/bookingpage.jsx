import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  TextField,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Card,
  CardMedia,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  Checkbox,
  Box,
  Button,
  CardContent,
  FormLabel,
} from "@mui/material";
import "./bookingpage.css";

export default function BookingPage() {
  const locationState = useLocation().state;
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  if (!locationState) {
    return <p style={{ textAlign: "center", color: "red" }}>No destination selected.</p>;
  }

  const { location, rating, name, state, price, image, category } = locationState;

  const [packageType, setPackageType] = useState("Standard");
  const [date, setDate] = useState("");
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [services, setServices] = useState({ insurance: false, guide: false, mealSelected: false, mealType: "" });
  const [adultDetails, setAdultDetails] = useState([{ name: "", age: "" }]);
  const [childrenDetails, setChildrenDetails] = useState([]);

  const SERVICE_COST_PER_PERSON = 1000;

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

  const getAdjustedPrice = () => {
    if (packageType === "Deluxe") return price * 1.5;
    if (packageType === "Premium") return price * 2;
    return price;
  };

  const calculateBaseTourPrice = () => {
    const basePrice = getAdjustedPrice();
    const adultTotal = basePrice * adults;
    const childTotal = (basePrice / 2) * children;
    return adultTotal + childTotal;
  };

  const calculateServicesPrice = () => {
    const activeServices = Object.values({
      insurance: services.insurance,
      guide: services.guide,
      meal: services.mealSelected,
    }).filter(Boolean).length;

    const totalPersons = adults + children;
    return activeServices * SERVICE_COST_PER_PERSON * totalPersons;
  };

  const calculateTotalPrice = () => {
    return calculateBaseTourPrice() + calculateServicesPrice();
  };

  const formattedBasePrice = new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR" }).format(calculateBaseTourPrice());
  const formattedServicesPrice = new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR" }).format(calculateServicesPrice());
  const formattedTotalPrice = new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR" }).format(calculateTotalPrice());

  const formattedPricePerAdult = new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR" }).format(getAdjustedPrice());
  const formattedPricePerChild = new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR" }).format(getAdjustedPrice() / 2);

  const handleMealCheckboxChange = (e) => {
    const checked = e.target.checked;
    setServices((prev) => ({
      ...prev,
      mealSelected: checked,
      mealType: "",
    }));
  };

  const handleMealTypeChange = (e) => {
    setServices((prev) => ({
      ...prev,
      mealType: e.target.value,
    }));
  };

  const handleAdultDetailChange = (index, field, value) => {
    const updated = [...adultDetails];
    updated[index][field] = value;
    setAdultDetails(updated);
  };

  const handleChildDetailChange = (index, field, value) => {
    const updated = [...childrenDetails];
    updated[index][field] = value;
    setChildrenDetails(updated);
  };

  const handleProceedToPayment = () => {
    if (!user || !user.email) {
      alert("You need to be logged in to book a tour.");
      return;
    }
  
    // Check if the date is selected
    if (!date) {
      alert("Please select a travel date.");
      return;
    }
  
    // Check number of adults and children
    if (adults < 1) {
      alert("At least one adult must be included.");
      return;
    }
  
    // Check all adult details
    const incompleteAdult = adultDetails.some((a) => !a.name.trim() || !a.age);
    if (incompleteAdult) {
      alert("Please fill all adult traveler details (name and age).");
      return;
    }
  
    // Check all children details if children exist
    if (children > 0) {
      const incompleteChild = childrenDetails.some((c) => !c.name.trim() || !c.age);
      if (incompleteChild) {
        alert("Please fill all child traveler details (name and age).");
        return;
      }
    }
  
    // All validations passed, proceed
    navigate("/payment", {
      state: {
        location,
        rating,
        name,
        state,
        price: calculateTotalPrice(),
        image,
        packageType,
        date,
        adults,
        children,
        services,
        userId: user.email,
        adultDetails,
        childrenDetails,
      },
    });
  };

  return (
    <div className="Bookingpage">
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        <Card sx={{ maxWidth: 600, width: "100%", padding: 3, borderRadius: 2, boxShadow: 3 }}>
          <CardMedia component="img" height="300" image={image} alt={name} sx={{ borderRadius: 2 }} />
          <CardContent>
            <Typography variant="h5" fontWeight="bold">{`Book Your Trip to ${name}`}</Typography>
            <Typography variant="body1"><strong>Location:</strong> {location}, {state}</Typography>
            <Typography variant="body1"><strong>Rating:</strong> ⭐ {rating}</Typography>

            <Box mt={2}>
              <Typography variant="h6" color="primary"><strong>Base Tour Price:</strong> {formattedBasePrice}</Typography>
              <Typography variant="h6" color="secondary"><strong>Services Price:</strong> {formattedServicesPrice}</Typography>
              <Typography variant="h5" color="primary" fontWeight="bold"><strong>Total Price:</strong> {formattedTotalPrice}</Typography>

              <Typography variant="body2" sx={{ mt: 1 }}>
                Price per Adult: <strong>{formattedPricePerAdult}</strong> | Price per Child: <strong>{formattedPricePerChild}</strong>
              </Typography>

              <Typography variant="caption" display="block" sx={{ mt: 0.5 }}>
                (for {adults} adult{adults > 1 ? "s" : ""}{children > 0 ? ` and ${children} child${children > 1 ? "ren" : ""}` : ""})
              </Typography>
            </Box>

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
                min: new Date().toISOString().split("T")[0],
              }}
            />

            <Box display="flex" gap={2} mt={2}>
              <TextField
                type="number"
                label="Adults"
                value={adults}
                onChange={(e) => {
                  const value = Math.max(1, parseInt(e.target.value) || 1);
                  setAdults(value);
                  setAdultDetails(Array.from({ length: value }, () => ({ name: "", age: "" })));

                }}
                fullWidth
              />
              <TextField
                type="number"
                label="Children"
                value={children}
                onChange={(e) => {
                  const value = Math.max(0, parseInt(e.target.value) || 0);
                  setChildren(value);
                  setChildrenDetails(Array.from({ length: value }, () => ({ name: "", age: "" })));

                }}
                fullWidth
              />
            </Box>

            {/* Additional Services */}
            <Box mt={2}>
              <Typography variant="body1" fontWeight="bold">Additional Services</Typography>

              <FormControlLabel
                control={
                  <Checkbox
                    checked={services.insurance}
                    onChange={(e) => setServices({ ...services, insurance: e.target.checked })}
                  />
                }
                label="Travel Insurance"
              />

              <FormControlLabel
                control={
                  <Checkbox
                    checked={services.guide}
                    onChange={(e) => setServices({ ...services, guide: e.target.checked })}
                  />
                }
                label="Special Guide"
              />

              <FormControlLabel
                control={
                  <Checkbox
                    checked={services.mealSelected}
                    onChange={handleMealCheckboxChange}
                  />
                }
                label="Meal Preference"
              />

              {services.mealSelected && (
                <FormControl component="fieldset" sx={{ mt: 1 }}>
                  <FormLabel component="legend">Select Meal Type</FormLabel>
                  <RadioGroup value={services.mealType} onChange={handleMealTypeChange}>
                    <FormControlLabel value="veg" control={<Radio />} label="Veg" />
                    <FormControlLabel value="non-veg" control={<Radio />} label="Non-Veg" />
                  </RadioGroup>
                </FormControl>
              )}
            </Box>

            {/* Traveler Details */}
            <Box mt={3}>
              <Typography variant="h6" fontWeight="bold">Traveler Details</Typography>

              {adultDetails.map((adult, index) => (
                <Box key={index} display="flex" gap={2} mt={1}>
                  <TextField
                    label={`Adult ${index + 1} Name`}
                    value={adult.name}
                    onChange={(e) => handleAdultDetailChange(index, "name", e.target.value)}
                    fullWidth
                  />
                  <TextField
                    label="Age"
                    type="number"
                    value={adult.age}
                    onChange={(e) => handleAdultDetailChange(index, "age", e.target.value)}
                    fullWidth
                  />
                </Box>
              ))}

              {childrenDetails.map((child, index) => (
                <Box key={index} display="flex" gap={2} mt={1}>
                  <TextField
                    label={`Child ${index + 1} Name`}
                    value={child.name}
                    onChange={(e) => handleChildDetailChange(index, "name", e.target.value)}
                    fullWidth
                  />
                  <TextField
                    label="Age"
                    type="number"
                    value={child.age}
                    onChange={(e) => handleChildDetailChange(index, "age", e.target.value)}
                    fullWidth
                  />
                </Box>
              ))}
            </Box>

            {/* Proceed to Payment Button */}
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
    </div>
  );
}
