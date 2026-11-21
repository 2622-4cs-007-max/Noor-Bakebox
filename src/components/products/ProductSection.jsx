import BrownieCard from "./BrownieCard";
import NankhataiCard from "./NankhataiCard";
import RollCard from "./RollCard";
import ScrollReveal from "../ScrollReveal";

function ProductSection() {
  return (
    <section className="product-section" >
     <ScrollReveal><h1 className="section-title" id="menu">Our Delicious Treats</h1></ScrollReveal>
      <p>Freshly baked with love!</p>

      {/* Scroll animation for product cards */}
      <div className="product-container">

        <ScrollReveal>
          <BrownieCard />
        </ScrollReveal>

        <ScrollReveal>
          <NankhataiCard />
        </ScrollReveal>

        <ScrollReveal>
          <RollCard />
        </ScrollReveal>

      </div>
    </section>
  );
}

export default ProductSection;