import Badge from "./Badge";

function ProductCard({ image, name, price, description }) {
  return (
    <div className="product-card">

      <img src={image} alt={description} />

      <Badge text="Best Seller" />

      <h2>{name}</h2>

      <p>Rs {price}</p>

    </div>
  );
}

export default ProductCard;