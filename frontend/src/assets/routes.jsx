import React from "react";
import { Routes, Route } from "react-router-dom";
import ReligiousPage from "../pages/religiouspage";
import WildlifePage from "../pages/wildlifePage";
import AdventurePage from "../pages/adventurePage";
import BeachPage from "../pages/beachPage";
import DesertPage from "../pages/desertPage";
import MountainPage from "../pages/mounatinPage";
import CulturalPage from "../pages/culturalPage";
import HistoricalPage from "../pages/historicalPage";
import Gallery from "../pages/gallery";
import BookingPage from "../pages/bookingpage";
import PaymentPage from "../pages/paymentpage";
import BookingConfirmation from "../pages/bookingconfirmation";
import Dashboard from "../pages/dashboard";
import Profile from "../pages/profile";
import MyBookings from "../pages/mybookings";
import BookingDetails from "../pages/BookingDetails";
function AppRoutes() {

  return (
    <Routes>
      <Route path="/tour/religious" element={<ReligiousPage />} />
      <Route path="/tour/wildlife" element={<WildlifePage />} />
      <Route path="/tour/adventure" element={<AdventurePage />} />
      <Route path="/tour/beach" element={<BeachPage />} />
      <Route path="/tour/desert" element={<DesertPage />} />
      <Route path="/tour/mountains" element={<MountainPage />} />
      <Route path="/tour/cultural" element={<CulturalPage />} />
      <Route path="/tour/historical" element={<HistoricalPage />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/payment" element={<PaymentPage />} />
      <Route path="/bookingconfirmation" element={<BookingConfirmation />}/>
      <Route path="/profile" element={<Profile />}/>
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/mybookings" element={<MyBookings/>} />
      <Route path="/booking/:name" element={<BookingPage />} />
      <Route path="/mybookings/:id" element={<BookingDetails />} />


  
      
      {/* Add the dynamic route for BookingPage */}
     
    </Routes>
  );
}

export default AppRoutes;
