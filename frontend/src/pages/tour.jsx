import Religious from "../components/religious/religiouscard";
import Adventure from "../components/adventurecard/adventure";
import Desert from "../components/desert/desert";
import Beach from "../components/beach/beach";
import Cultural from "../components/Cultural/cultural";
import Mountain from "../components/mountain/mountain";
import Historical from "../components/historical/historical";
import Wildlife from "../components/wildlife/wildlife";
import "./tour.css";

export default function Tour() {
  return (
    <div className="tour">
      {/* Religious Section */}
      <div className="category">
        <div className="design">
          <h2>Religious</h2>
        </div>
        <div className="category-container">
          <Religious />
        </div>
      </div>

      {/* Adventure Section */}
      <div className="category">
        <div className="design">
          <h2>Adventure</h2>
        </div>
        <div className="category-container">
          <Adventure />
        </div>
      </div>

      {/* Beach Section */}
      <div className="category">
        <div className="design">
          <h2>Beach</h2>
        </div>
        <div className="category-container">
          <Beach />
        </div>
      </div>

      {/* Desert Section */}
      <div className="category">
        <div className="design">
          <h2>Desert</h2>
        </div>
        <div className="category-container">
          <Desert />
        </div>
      </div>

      {/* Cultural Section */}
      <div className="category">
        <div className="design">
          <h2>Cultural</h2>
        </div>
        <div className="category-container">
          <Cultural />
        </div>
      </div>

      {/* Historical Section */}
      <div className="category">
        <div className="design">
          <h2>Historical</h2>
        </div>
        <div className="category-container">
          <Historical />
        </div>
      </div>

      {/* Mountain Section */}
      <div className="category">
        <div className="design">
          <h2>Mountains</h2>
        </div>
        <div className="category-container">
          <Mountain />
        </div>
      </div>

      {/* Wildlife Section */}
      <div className="category">
        <div className="design">
          <h2>Wildlife</h2>
        </div>
        <div className="category-container">
          <Wildlife />
        </div>
      </div>
    </div>
  );
}
