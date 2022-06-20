import "./ItemContainer.css";

const ItemContainer = (props) => {
  return (
    <div className={"item-container type-" + props.type}>
      <div className="item-name">
        <h4>{props.name}</h4>
      </div>
      <div className="item-image">
        <img src={process.env.PUBLIC_URL + "/images/items/" + props.image} />
      </div>
      <div className="item-price-container">
        <div className="item-price left">
          <div className="item-price-symbol">
            <img src={process.env.PUBLIC_URL + "/images/" + props.currency1 + ".png"} />
          </div>
          <div className="item-price-display">
            <div className="item-price-amount">{props.price1}</div>
            <div className="item-price-unit">{props.currency1}</div>
          </div>
        </div>
        <div className="item-price right">
          <div className="item-price-symbol">
          <img src={process.env.PUBLIC_URL + "/images/" + props.currency2 + ".png"} />
          </div>
          <div className="item-price-display">
          <div className="item-price-amount">{props.price2}</div>
            <div className="item-price-unit">{props.currency2}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemContainer;