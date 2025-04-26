import Logo from "../assets/logo";
import "./footer.css";
import { Link } from "react-router-dom";
import { FaInstagram, FaXTwitter, FaLinkedin } from "react-icons/fa6"; // Import FaLinkedin

export default function Footer() {
    return (
        <div className="footer">
            <div className="logo">
                <p><Logo /></p>
                <p>Your trust, our commitment.</p>
            </div>
            
            <div className="discover">
                <h3>Discover</h3>
                <div><Link to="/">Home</Link></div>
                <div><Link to="/about">About</Link></div>
                <div><Link to="/tour">Tour</Link></div>
            </div>
            
            <div className="quick-links">
                <h3>Quick Links</h3>
                <div><Link to="/gallery">Gallery</Link></div>
                <div><Link to="/login">Login</Link></div>
                <div><Link to="/register">Register</Link></div>
            </div>

            <div className="contact">
                <h3>Contact</h3>
                <p>123 MG Road, Bengaluru, Karnataka, India</p>
                <p>Email: <a href="mailto:mohitjethwani27@gmail.com">contact@travelease.com</a></p>
                <p>Phone: +91 98765 43210</p>
            </div>
    
            {/* Social Media Links */}
            <div className="social">
                <h3>Social Links</h3>
                <div className="social-links">
                    <a href="https://www.instagram.com/mohitjethwani1234/" target="_blank" rel="noopener noreferrer">
                        <FaInstagram size={28} className="social-icon insta" />
                    </a> &nbsp;
                    <a href="https://www.linkedin.com/in/mohit-jethwani-91771a280/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin size={28} className="social-icon linkedin" />
                    </a> &nbsp;
                    <a href="https://x.com/mohitjethwani10" target="_blank" rel="noopener noreferrer">
                        <FaXTwitter size={28} className="social-icon x" />
                    </a>
                </div>
            </div>
        </div>
    );
}
