import {
  NavLink,
  Outlet,
} from "react-router-dom";
import GachaContainer from "./GachaContainer";
import "./GachaGallery.css";

const GachaGallery = (props) => {
  return (
    <div className="gacha-gallery">
      <Outlet />
      <div className="gacha-gallery-container">
        {props.gachas.map(gacha => (
          <NavLink
            className="gacha-link"
            to={"/gacha/" + gacha.rarity.toLowerCase()}
            key={gacha.key}
          >
            <GachaContainer
              key={gacha.key}
              rarity={gacha.rarity}
              image={gacha.image}
              price={gacha.price}
              currency={gacha.currency}
            />
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default GachaGallery;
