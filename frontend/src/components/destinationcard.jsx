import * as React from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../assets/userstate"; // make sure path is correct
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import StarIcon from "@mui/icons-material/Star";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import "./destination.css";

export default function DestinationCard({ location, rating, name, state, price, image }) {
  const { user, loading } = useUser(); // 👈 check user state and loading state
  const navigate = useNavigate(); // 👈 for redirection

  const formattedPrice = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format(price);

  const handleBookNow = () => {
    if (!user) {
      navigate("/login");
    } else {
      navigate(`/booking/${encodeURIComponent(name)}`, {
        state: { location, rating, name, state, price, image },
      });
    }
  };

  if (loading) {
    return <CircularProgress sx={{ display: "block", margin: "auto" }} />;
  }

  return (
    <Card
      sx={{
        width: 300,
        height: 400,
        borderRadius: 3,
        boxShadow: 3,
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Destination Image */}
      <CardMedia component="img" alt={name} height="180" image={image} />

      {/* Content Section */}
      <CardContent
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "160px",
          overflow: "hidden",
        }}
      >
        {/* Location & Rating */}
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="body2" sx={{ fontWeight: "bold", color: "gray" }} noWrap>
            {location}, {state}
          </Typography>
          <Box display="flex" alignItems="center">
            <StarIcon sx={{ color: "gold", fontSize: 18 }} />
            <Typography variant="body2" sx={{ fontWeight: "bold", ml: 0.5 }}>
              {rating}
            </Typography>
          </Box>
        </Box>

        {/* Destination Name */}
        <Typography
          variant="h6"
          sx={{
            mt: 1,
            fontWeight: "bold",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {name}
        </Typography>

        {/* Country */}
        <Typography variant="body2" sx={{ color: "gray" }} noWrap>
          {state}
        </Typography>

        {/* Price in INR */}
        <Typography variant="h6" color="primary" sx={{ mt: 1, fontWeight: "bold" }}>
  {formattedPrice} <Typography variant="caption" sx={{ color: "text.secondary", ml: 0.5 }}>(per person)</Typography>
</Typography>

      </CardContent>

      {/* Book Now Button */}
      <CardActions sx={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Button
          variant="contained"
          color="primary"
          sx={{ borderRadius: 20 }}
          onClick={handleBookNow}
        >
          Book Now
        </Button>
      </CardActions>
    </Card>
  );
}
