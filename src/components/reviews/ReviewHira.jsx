import Avatar from "./Avatar";
import Rating from "./Rating";

function ReviewHira() {
  return (
    <div className="review-card">
      <Avatar />

      <h3>Hira Khan</h3>

      <Rating />

      <p>
        "Amazing taste and beautiful presentation!
        I will definitely order again."
      </p>
    </div>
  );
}

export default ReviewHira;