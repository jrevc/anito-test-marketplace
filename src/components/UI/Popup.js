import {
  NavLink,
  useParams,
} from "react-router-dom";
import { getGacha } from "../../data-anitos";
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
            <NavLink to="/gacha" className="button btn-ok">{gacha.price + " " + gacha.currency}</NavLink>
            <NavLink to="/gacha" className="button btn-back">Back</NavLink>
          </div>
        </div>
      </div>
    )
  }

  return content;
}

export default Popup;