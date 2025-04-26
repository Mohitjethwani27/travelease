export default function Review({ user, review, img, placeImg }) {
    return (
      <div className="card">
        {/* Place image */}
        <img src={placeImg} alt="Place visited" className="place-img" />
  
        {/* Review text */}
        <p className="review-text">{review}</p>
  
        {/* User info */}
        <div className="user-info">
          <img src={img} alt={`${user}'s profile`} className="user-img" />
          <h3>{user}</h3>
        </div>
      </div>
    );
  }
  