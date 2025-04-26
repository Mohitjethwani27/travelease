import React from "react";
import { Link } from "react-router-dom";
import "./images.css"; // Import the CSS file

export default function Images() {
  const imageUrls = [
    "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0", // Mountains
    "https://images.unsplash.com/photo-1526772662000-3f88f10405ff", // Beach
    "https://images.unsplash.com/photo-1546410531-bb4caa6b424d", // City skyline
    "https://images.unsplash.com/photo-1516483638261-f4dbaf036963", // Scenic view
    "https://images.unsplash.com/photo-1541417904950-b855846fe074", // Forest
    "https://housing.com/news/wp-content/uploads/2022/11/Famous-tourist-places-in-India-state-compressed.jpg", // Desert
    "https://images.unsplash.com/photo-1516483638261-f4dbaf036963", // Snowy mountains
    "https://www.justahotels.com/wp-content/uploads/2023/09/Murudeshwar.jpg", // Temple
  ];

  return (
    <div className="image-section">
      <div className="image-grid">
        {imageUrls.map((url, index) => (
          <div key={index} className="image-container">
            <img src={url} alt={`Image ${index + 1}`} className="image-item" />
          </div>
        ))}
      </div>

      {/* "View More" Button - Centered & Styled */}
      <div className="view-more-container">
        <Link to="/gallery" className="view-more-button">
          View More →
        </Link>
      </div>
    </div>
  );
}
