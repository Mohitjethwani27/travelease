import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/navbar";
import Frontpage from "./pages/front";
import About from "./pages/about";
import Tour from "./pages/tour"; 
import { UserProvider } from "./assets/userstate";
import ScrollToTop from "./components/scrolltotop";
import "./App.css";
import Login from "./pages/login";
import Register from "./pages/register";
import AppRoutes from "./assets/routes";
import { ScrollRestoration } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
function App() {
  
  return (
    <UserProvider>
  <Router>
    <ScrollToTop />
    <Navbar />

    <Routes>
      <Route path="/" element={<Frontpage />} />
      <Route path="/about" element={<About />} />
      <Route path="/tour" element={<Tour />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
     
    </Routes>
    <AppRoutes></AppRoutes>

    {/* ToastContainer should be outside Routes but still inside Router */}
    <ToastContainer position="top-right" autoClose={1500} />
  </Router>
</UserProvider>


  );
}

export default App;
