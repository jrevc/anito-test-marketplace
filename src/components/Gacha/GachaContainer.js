import "./GachaContainer.css";

const GachaContainer = (props) => {
  return (
    <div className="gacha-container">
      <img className="gacha-glow" src={process.env.PUBLIC_URL + "/images/glow.png"} />
      <div className="gacha-heading">
        <h4>Blind Box</h4>
        <h4>{props.rarity}</h4>
      </div>
      <div className="gacha-image">
        <img src={process.env.PUBLIC_URL + "/images/boxes/" + props.image} />
      </div>
      <div className="gacha-details">
        <div className="gacha-price">
          <div className="gacha-price-symbol">
            <img src={process.env.PUBLIC_URL + "/images/" + props.currency + ".png"} />
          </div>
          <div className="gacha-price-display">
            <div className="gacha-price-amount">{props.price}</div>
            <div className="gacha-price-unit">{props.currency}</div>
          </div>
        </div>
        <div className="gacha-remaining">
          <div className="gacha-remaining-current">{parseInt(props.quantity).toLocaleString("en-US")}</div>
          <div className="gacha-remaining-label">Remaining</div>
        </div>
      </div>
    </div>
  );
}

export default GachaContainer;