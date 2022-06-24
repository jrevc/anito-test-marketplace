import { NavLink } from "react-router-dom";
import AnitoContainer from "./AnitoContainer"
import "./AnitoGallery.css"

const AnitoGallery = (props) => {
  return (
    <div className="anito-gallery">
      <div className="anito-gallery-container">
        {
          props.anitos.map(anito => (
            <NavLink
              className="anito-link"
              to={"/" + anito.index}
              key={anito.index}
            >
              <AnitoContainer
                name={anito.name}
                index={anito.index}
                dna={anito.dna}
                price={anito.price}
                currency={anito.currency}
                atk={anito.atk}
                hp={anito.hp}
                def={anito.def}
                key={anito.index}
              />
            </NavLink>
          ))
        }
      </div>
    </div>
  );
}

export default AnitoGallery;