import roll from "../../assets/roll.jpg";
import Badge from "./Badge";
function RollCard() {

    const price = 250;

    return (
        <div className="product-card">

            <img src={roll} alt="Cinnamon Rolls" />
            <Badge/>

            <h2>Cinnamon Rolls</h2>

            <p>Rs {price}</p>

        </div>
    );
}

export default RollCard;