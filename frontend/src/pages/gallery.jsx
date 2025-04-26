import React from "react";


export default function Gallery() {
  const imageUrls = [
    "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0", // Mountains
    "https://images.unsplash.com/photo-1526772662000-3f88f10405ff", // Beach
    "https://images.unsplash.com/photo-1546410531-bb4caa6b424d", // City skyline
    "https://images.unsplash.com/photo-1516483638261-f4dbaf036963", // Hiking
    "https://images.unsplash.com/photo-1541417904950-b855846fe074", // Forest
    "https://housing.com/news/wp-content/uploads/2022/11/Famous-tourist-places-in-India-state-compressed.jpg", // Desert
    "https://plus.unsplash.com/premium_photo-1664910158533-c3581f660a3f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dHJhdmVsJTIwaW5kaWFufGVufDB8fDB8fHww", // Snowy mountains
    "https://media.istockphoto.com/id/1141907276/photo/kanchenjunga.jpg?s=612x612&w=0&k=20&c=dOh2XGqWRvmq-mmX8uz1EsGTCOJu1p2gWiDwFfjywxI=", // Temple
    "https://media.istockphoto.com/id/1477517854/photo/group-of-friends-exploring-forest-during-vacation.webp?a=1&b=1&s=612x612&w=0&k=20&c=meDY-QsPxwCnkNiN0MjIgFSQbVEdYaFiCrXK-DFl2l4=", // Desert sunset
    "https://media.istockphoto.com/id/1416018492/photo/teenager-indian-girl-hiking-on-mountain-with-backpack-in-manali-himachal-pradesh-india-female.webp?a=1&b=1&s=612x612&w=0&k=20&c=mzLVftJ6cgcpbfH9u_fbfj3n-8Gtju43wzSyyV2SxMs=", // Coastal cliffs
    "https://media.istockphoto.com/id/154973930/photo/snowboarder.jpg?s=612x612&w=0&k=20&c=r75AXke4nHDt8DdSBU8aEkDtEmTx8QYOYxMmY1Dqfx8=", // Japanese temple
    "https://media.istockphoto.com/id/533453030/photo/jodhpur-market.jpg?s=612x612&w=0&k=20&c=5SXm2PC35EpIPXJSBDTOudWp1fCro9MDpBYW1_IV5YM=", // Ocean waves
    "https://media.istockphoto.com/id/533194649/photo/indian-friends-dancing-covered-on-holi-colorful-powder-in-india.jpg?s=612x612&w=0&k=20&c=pvMXeDZzpUTQtj_VWXN_s7k0OlBA_aW1BXNjHKaKVXo=", // Buddhist monastery
    "https://media.istockphoto.com/id/1476751868/photo/couple-spending-leisure-time-at-ancient-site.jpg?s=612x612&w=0&k=20&c=8bWYXObw6Foza81Yod3jKHNtOk32y3m6VK1nuHMkeow=", // Lantern festival
    "https://media.istockphoto.com/id/533327527/photo/indian-women-throwing-colored-holi-powder.jpg?s=612x612&w=0&k=20&c=qLn_vL0gEUsDKvg_cKhFZp-mBlfbsPuGiAQ9GqcX3ao=", // Indian festival
    "https://media.istockphoto.com/id/665366534/photo/gandola-cable-car-in-gulmarg.jpg?s=612x612&w=0&k=20&c=15HVHYGv3e0AVTLI5B1W1RzIVAOsiAXvqFgfsbVsJYg=", // Northern lights
    "https://media.istockphoto.com/id/1372104701/photo/tourist-in-agra-india.jpg?s=612x612&w=0&k=20&c=he9pHg6hmdU5XsBkNnmzd4Q7PBXDMTCZ4n_pO5eaXKs=", // Sunset beach
    "https://media.istockphoto.com/id/1085852132/photo/follow-me-to-the-taj-mahal-india-female-tourist-leading-boyfriend-to-there-magnificent-famous.jpg?s=612x612&w=0&k=20&c=cnMQ_v7LmqiQKPQNuQYWLsbepIKjm7VP8deVxdXTNLk=", // Open road
    "https://media.istockphoto.com/id/930852852/photo/dhankar-gompa-india-spiti-valley.jpg?s=612x612&w=0&k=20&c=F4zopbUYwgi56-fhSrjfzgscV8Jac4UYWvCB0vl8gN0=", // Snowfall
    "https://media.istockphoto.com/id/1145064928/photo/tourist-riding-camel-in-desert.jpg?s=612x612&w=0&k=20&c=zZpS5SxgBNFhI5kb-oBnf2CL4RyBcRKgCGrImtKs7dw=", // Travel books
  ];
  

  return (
    <div className="gallery-container">
      <h2 className="gallery-title">"Travel is the only thing you buy that makes you richer."</h2>
      <div className="image-grid">
        {imageUrls.map((url, index) => (
          <div key={index} className="image-container">
            <img src={url} alt={`Gallery ${index + 1}`} className="image-item" />
          </div>
        ))}
      </div>
    </div>
  );
}
