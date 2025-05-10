import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/navbar";
import Frontpage from "./pages/front";
import About from "./pages/about";
import Tour from "./pages/tour"; 
import { UserProvider } from "./assets/userstate";
import "./App.css";
import Login from "./pages/login";
import Register from "./pages/register";
import AppRoutes from "./assets/routes";
import { ToastContainer } from 'react-toastify';

function ScrollMemory() {
  const location = useLocation();

  useEffect(() => {
    // Restore scroll position when page loads
    const savedPosition = localStorage.getItem(`scroll-${location.pathname}`);
    if (savedPosition) {
      window.scrollTo(0, parseInt(savedPosition));
    }

    // Save scroll position before navigating away
    return () => {
      localStorage.setItem(`scroll-${location.pathname}`, window.scrollY);
    };
  }, [location.pathname]);

  return null;
}

function App() {
  return (
    <UserProvider>
      <Router>
        <ScrollMemory /> {/* Remember and restore scroll position */}
        <Navbar />

        <Routes>
          <Route path="/" element={<Frontpage />} />
          <Route path="/about" element={<About />} />
          <Route path="/tour" element={<Tour />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>

        <AppRoutes />

        <ToastContainer position="top-right" autoClose={1000} />
      </Router>
    </UserProvider>
  );
}

export default App;
