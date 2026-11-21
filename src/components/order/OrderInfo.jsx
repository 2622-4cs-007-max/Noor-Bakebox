import ScrollReveal from "../ScrollReveal";
function OrderInfo() {
  const deliveryFee = 100;
  const minimumOrder = 300;
  // Bonus task variables
  const quantity = 5;
  const price = 450;
  const delivery = 100;

  // Calculate total
  const total = quantity * price + delivery;
  return (
    <section className="order-section" id="order">
     <ScrollReveal><h1 className="section-title">How to Order</h1>
</ScrollReveal> 
      <p>Place your order and enjoy our freshly baked treats!</p>

      <div className="order-container">

  <ScrollReveal>
    <div className="order-card">
      <span className="material-symbols-rounded">shopping_bag</span>
      <h3>Choose Your Treats</h3>
      <p>Select your favourite bakery items.</p>
    </div>
  </ScrollReveal>

  <ScrollReveal>
    <div className="order-card">
      <span className="material-symbols-rounded">call</span>
      <h3>Contact Us</h3>
      <p>Call us to place your order.</p>
    </div>
  </ScrollReveal>
<ScrollReveal>
  <div className="order-card">
    <span className="material-symbols-rounded">
      delivery_dining
    </span>
    <h3>Get Your Delivery</h3>
    <p>Enjoy freshly baked treats delivered to your doorstep.</p>
  </div>
</ScrollReveal>

</div>

    <ScrollReveal>
  <div className="order-details">
    <p>Delivery Fee: Rs {deliveryFee}</p>
    <p>Minimum Order: Rs {minimumOrder}</p>
    
  </div>

</ScrollReveal>

<ScrollReveal>
  <div className="total-box">
    <h3>Order Summary</h3>
    <p>Quantity: {quantity} Brownies</p>
    <p>Price: Rs {price}</p>
    <p>Delivery: Rs {delivery}</p>
    <h2>Total: Rs {total}</h2>
  </div>
</ScrollReveal>


    </section>
  );
}

export default OrderInfo;