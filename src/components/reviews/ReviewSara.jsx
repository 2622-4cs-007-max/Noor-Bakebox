import Avatar from "./Avatar";
import Rating from "./Rating";

function ReviewSara() {
  return (
    <div className="review-card">
      <Avatar />

      <h3>Sara Ahmed</h3>

      <Rating />

      <p>
        "The brownies were absolutely delicious!
        Fresh, soft, and full of chocolate."
      </p>
    </div>
  );
}

export default ReviewSara;