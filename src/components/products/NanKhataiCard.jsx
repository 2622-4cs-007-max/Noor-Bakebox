import nankhatai from "../../assets/nankhatai.jpg";
import Badge from "./Badge";

function NankhataiCard() {

    const price = 300;

    return (
        <div className="product-card">

            <img src={nankhatai} alt="Nankhatai Cookies" />

            <Badge />

            <h2>Nankhatai</h2>

            <p>Rs {price}</p>

        </div>
    );
}

export default NankhataiCard;