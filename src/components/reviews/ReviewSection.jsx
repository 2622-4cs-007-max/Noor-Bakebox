import ReviewSara from "./ReviewSara";
import ReviewHira from "./ReviewHira";
import ScrollReveal from "../ScrollReveal";

function ReviewSection() {
  return (
    <section className="review-section" >
<h1 className="section-title" id="reviews">What Our Customers Say</h1>
      <p>Sweet words from our happy customers!</p>

      <div className="review-container">
        <ScrollReveal>
          <ReviewSara />
        </ScrollReveal>

        <ScrollReveal>
          <ReviewHira />
        </ScrollReveal>
      </div>
    </section>
  );
}

export default ReviewSection;