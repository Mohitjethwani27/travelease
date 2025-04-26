import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import QRCode from "react-qr-code";
import {
  Box,
  Typography,
  Card,
  CardContent,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

export default function PaymentPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const bookingDetails = location.state;
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [isPaid, setIsPaid] = useState(false);
  const [error, setError] = useState("");

  if (!bookingDetails || !bookingDetails.name || !bookingDetails.price) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        <Card sx={{ maxWidth: 400, width: "100%", padding: 3, textAlign: "center" }}>
          <CardContent>
            <Typography variant="h5" color="error">
              Something went wrong! 😢
            </Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
              No payment details found.
            </Typography>
            <button
              style={{
                marginTop: "20px",
                padding: "10px 15px",
                backgroundColor: "blue",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
              onClick={() => navigate("/")}
            >
              Go Back Home
            </button>
          </CardContent>
        </Card>
      </Box>
    );
  }

  const { name, price } = bookingDetails;
  const upiID = "mohitjethwani27@axl";
  const transactionID = `TXN${Date.now()}`;
  const upiLink = `upi://pay?pa=${upiID}&pn=Mohit%20Jethwani&mc=0000&tid=${transactionID}&tr=BOOK1234&tn=Tour%20Booking&am=${price}&cu=INR`;

  const handlePaymentDone = async () => {
    if (!isPaid) {
      setError("⚠️ Please confirm you have paid before proceeding!");
      return;
    }
  
    // 1) Build an array of selected service names
    const svcObj = bookingDetails.services || {};
    const selectedServices = [];
    if (svcObj.insurance) selectedServices.push("Travel Insurance");
    if (svcObj.guide)     selectedServices.push("Special Guide");
    if (svcObj.meal)      selectedServices.push("Meal Preferences");
  
    // 2) POST the booking (with services array) to your backend
    try {
      const resp = await fetch("http://localhost:3000/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...bookingDetails,
          services: selectedServices,
          transactionID,
        }),
      });
      if (!resp.ok) throw new Error("Booking API failed");
  
      // 3) On success, show confirmation and redirect
      setPaymentSuccess(true);
      setTimeout(() => {
        navigate("/bookingconfirmation", {
          state: {
            ...bookingDetails,
            transactionID,
            services: selectedServices
          },
        });
      }, 2000);
    } catch (err) {
      console.error("🚨 Booking POST failed:", err);
      setError("Failed to save your booking. Please try again.");
    }
  };
  
  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
      <Card sx={{ maxWidth: 400, width: "100%", padding: 3, textAlign: "center" }}>
        <CardContent>
          {!paymentSuccess ? (
            <>
              <Typography variant="h5" fontWeight="bold">UPI Payment</Typography>
              <Typography variant="body1" sx={{ mt: 1 }}>Destination: <strong>{name}</strong></Typography>
              <Typography variant="h6" color="primary" sx={{ mt: 1 }}>Amount: ₹{price}</Typography>
              <Box display="flex" justifyContent="center" sx={{ mt: 2 }}>
                <QRCode value={upiLink} size={180} />
              </Box>
              <Typography variant="body2" sx={{ mt: 2 }}>
                Scan with any UPI app or use UPI ID: <strong>{upiID}</strong>
              </Typography>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={isPaid}
                    onChange={() => {
                      setIsPaid(!isPaid);
                      setError("");
                    }}
                    color="primary"
                  />
                }
                label="I have completed the payment"
                sx={{ mt: 2 }}
              />
              {error && (
                <Typography variant="body2" color="error" sx={{ mt: 1 }}>{error}</Typography>
              )}
              <button
                style={{
                  marginTop: "20px",
                  padding: "10px 15px",
                  backgroundColor: isPaid ? "#ff9800" : "#d3d3d3",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: isPaid ? "pointer" : "not-allowed",
                  fontSize: "16px",
                  fontWeight: "bold",
                }}
                onClick={handlePaymentDone}
                disabled={!isPaid}
              >
                I Have Completed Payment
              </button>
            </>
          ) : (
            <>
              <Typography variant="h5" color="green" fontWeight="bold">
                🎉 Tour Booked Successfully! 🎉
              </Typography>
              <Typography variant="body1" sx={{ mt: 2 }}>
                Thank you for booking <strong>{name}</strong>!
              </Typography>
              <Typography variant="body2" sx={{ mt: 2 }}>
                Your Transaction ID: <strong>{transactionID}</strong>
              </Typography>
              <Typography variant="body2" sx={{ mt: 2, fontStyle: "italic" }}>
                Redirecting to booking confirmation in 2 seconds...
              </Typography>
            </>
          )}
        </CardContent>
      </Card>
    </Box>
  );
}
