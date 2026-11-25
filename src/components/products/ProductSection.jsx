import brownie from "../../assets/brownie.jpg";
import nankhatai from "../../assets/nankhatai.jpg";
import roll from "../../assets/roll.jpg";
import biscuits from "../../assets/biscuits.jpg";
import ScrollReveal from "../ScrollReveal";
import ProductCard from "./ProductCard";


function ProductSection() {
  return (
    <section className="product-section" >
     <ScrollReveal><h1 className="section-title" id="menu">Our Delicious Treats</h1></ScrollReveal>
      <p>Freshly baked with love!</p>

      {/* Scroll animation for product cards */}
      <div className="product-container">

        <ScrollReveal>
          <ProductCard
           image={brownie}
           name="Chocolate Brownie"
           price={450}
           description="Chocolate Brownie"
          />

        </ScrollReveal>

        <ScrollReveal>
             <ProductCard
                image={nankhatai}
            name="Nankhatai"
            price={300}
            description="Nankhatai Cookies"
            />
        </ScrollReveal>

        <ScrollReveal>
             <ProductCard
               image={roll}
            name="Cinnamon Roll"
            price={350}
            description="Cinnamon Roll"
            />
        </ScrollReveal>
               <ScrollReveal>
             <ProductCard
               image={biscuits}
            name="Biscuits"
            price={500}
            description="Choco Biscuits"
            />
        </ScrollReveal>

      </div>
    </section>
  );
}

export default ProductSection;