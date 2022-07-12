import "./AnitoPrice.css";

const AnitoPrice = props => {
  return (
    <div className={"anito-details-price " + "nocolor-" + props.nocolor}>
      <div className="anito-details-price-symbol">
        <img
          src={
            process.env.PUBLIC_URL + "/images/" + props.currency + ".png"
          }
          alt={props.currency.toUpperCase()}
        />
      </div>
      <div className="anito-details-price-display">
        <div className="anito-details-price-amount">{props.price}</div>
        <div className="anito-details-price-unit">
          {props.currency.toUpperCase()}
        </div>
      </div>
    </div>
  )
}

export default AnitoPrice;