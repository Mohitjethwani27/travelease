import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./categories.css";

const categoriesData = [
  { name: "Religious", image: "https://thetempleguru.com/wp-content/uploads/2023/03/Kashi-Vishwanath-Jyotirling.jpg", path: "/tour/religious" },
  { name: "Adventure", image: "https://miro.medium.com/v2/resize:fit:900/1*kpSkLZgHa2CMkHRPLI49zQ.jpeg", path: "/tour/adventure" },
  { name: "Beach", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/3e/36/95/baga-sea-beach.jpg?w=1200&h=-1&s=1", path: "/tour/beach" },
  { name: "Desert", image: "https://static.toiimg.com/thumb/68427211/3.jpg?width=1200&height=900", path: "/tour/desert" },
  { name: "Mountain", image: "https://5.imimg.com/data5/WA/PJ/XW/SELLER-6809467/summer-package-shimla-manali-rohtang-pass-tour-package-services.jpg", path: "/tour/mountain" },
  { name: "Wildlife", image: "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWZyaWNhbiUyMHdpbGRsaWZlfGVufDB8fDB8fHww", path: "/tour/wildlife" },
  { name: "Cultural", image: "https://media.licdn.com/dms/image/v2/D4D12AQHCowNfbGXTsg/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1681811705644?e=2147483647&v=beta&t=PcXBlhC0UoNZLsw-LmO872jmjRCFCbm-0AlvnO3sr3k", path: "/tour/cultural" },
  { name: "Historical", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC9664Dc2W_noGpQxTcdaxXa9Qv-eINmFPzA&s", path: "/tour/historical" },
];

export default function Categories() {
  return (
    <div className="categories-container">
      {categoriesData.map((category, index) => (
        <Link to={category.path} key={index} className="category-link">
          <CategoryCard name={category.name} image={category.image} />
        </Link>
      ))}
    </div>
  );
}

function CategoryCard({ name, image }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="category-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={image} alt={name} className="category-image" />
      {isHovered && <div className="category-overlay">{name}</div>}
    </div>
  );
}
``