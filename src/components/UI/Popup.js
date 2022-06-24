import {
  NavLink,
  useParams,
} from "react-router-dom";
import { getGacha } from "../../data-anitos";
import { getItem } from "../../data-anitos";
import "./Popup.css";

const Popup = (props) => {
  let data = useParams();
  let content;
  
  if (props.type == "gacha") {
    let rarity = data.gachaRarity[0].toUpperCase() + data.gachaRarity.slice(1).toLowerCase();
    let gacha = getGacha(rarity);

    content = (
      <div className="popup">
        <div className="popup-box">
          <div className="popup-title">
            <h4>Blind Box: {gacha.rarity}</h4>
          </div>
          <div className="popup-content">
            <div className="popup-content-image">
            <img src={process.env.PUBLIC_URL + "/images/boxes/" + gacha.image} />
            </div>
            <div className="popup-content-description">
              <p>{gacha.description}</p>
            </div>
          </div>
          <div className="popup-buttons">
            <NavLink to="/gacha" className="button btn-ok">{"Purchase (" + gacha.price + " " + gacha.currency.toUpperCase() + ")"}</NavLink>
            <NavLink to="/gacha" className="button btn-back">Back</NavLink>
          </div>
        </div>
      </div>
    )
  }
  else if (props.type == "item") {
    let item = getItem(data.itemName);

    content = (
      <div className="popup">
        <div className="popup-box">
          <div className="popup-title">
            <h4>{item.name}</h4>
          </div>
          <div className="popup-content">
            <div className="popup-content-image">
            <img src={process.env.PUBLIC_URL + "/images/items/" + item.image} />
            </div>
            <div className="popup-content-description">
              <p>{item.description}</p>
            </div>
          </div>
          <div className="popup-buttons">
            <NavLink to="/items" className="button btn-ok">{"Purchase (" + item.price1 + " " + item.currency1.toUpperCase() + " + " + item.price2 + " " + item.currency2.toUpperCase() + ")"}</NavLink>
            <NavLink to="/items" className="button btn-back">Back</NavLink>
          </div>
        </div>
      </div>
    )
  }

  return content;
}

export default Popup;