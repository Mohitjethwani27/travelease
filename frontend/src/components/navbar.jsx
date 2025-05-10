//handle logout and other navbar conetnt ensure if user logged in then change navbar


import React, { useState } from "react";
import "./navbar.css";
import Logo from "../assets/logo";
import { Link, useLocation, useNavigate } from "react-router-dom"; // ⬅️ added useNavigate
import { useUser } from "../assets/userstate";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { toast } from 'react-toastify';

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate(); // ⬅️ initialize navigate
  const { user, logoutUser } = useUser();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleHomeClick = (e) => {
    if (location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleLogout = () => {
    setDropdownOpen(false);
    toast.success("Logged out successfully!");
  
    setTimeout(() => {
      logoutUser();    // first, clear the user session
      navigate('/');   // then navigate to Home after logout
    }, 1500); // wait 1.5 seconds before actually logging out + navigating
  };

  const closeDropdown = () => setDropdownOpen(false);

  return (
    <div className="navbar">
      <div className="logo">
        <Logo />
      </div>

      <div className="navcontainer">
        <Link to="/" className="nav-link" onClick={handleHomeClick}><h3>Home</h3></Link>
        <Link to="/about" className="nav-link"><h3>About</h3></Link>
        <Link to="/tour" className="nav-link"><h3>Tour</h3></Link>
      </div>

      <div className="button">
        {user ? (
          <div className="profile-dropdown" style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <Link to="/mybookings">
              <button 
                style={{ backgroundColor: "orange", color: "white", border: "none", padding: "8px 16px", borderRadius: "4px", fontWeight: "bold", cursor: "pointer" }}
                onClick={closeDropdown}
              >
                My Bookings
              </button>
            </Link>

            {/* Wrapper for icon + dropdown */}
            <div 
              className="dropdown-wrapper"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
              style={{ position: "relative" }}
            >
              <button
                id="account"
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  marginLeft: "10px",
                }}
              >
                <AccountCircleIcon style={{ fontSize: 30, color: "black" }} />
              </button>

              {dropdownOpen && (
                <div className="dropdown-menu">
                 
                  <Link to="/profile">
                    <button onClick={closeDropdown}>My Profile</button>
                  </Link>
                 
                  <button onClick={handleLogout} style={{ backgroundColor: "red", color: "white" }}>
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        ) : (
          <>
            <Link to="/login"><button>Login</button></Link>
            <Link to="/register"><button style={{ backgroundColor: "orange" }}>Register</button></Link>
          </>
        )}
      </div>
    </div>
  );
}
