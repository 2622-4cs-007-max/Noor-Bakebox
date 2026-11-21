import brownie from "../../assets/brownie.jpg";
import Badge from "./Badge";

function BrownieCard() {

    const price = 450;

    return (
        <div className="product-card">

            <img src={brownie} alt="Chocolate Brownie" />

            <Badge />

            <h2>Chocolate Brownie</h2>

            <p>Rs {price}</p>

        </div>
    );
}

export default BrownieCard;