import AnitoGL from "./AnitoGL";
import AnitoClassLabel from "./AnitoClassLabel";
import "./AnitoContainer.css";

const AnitoContainer = (props) => {
  const dna = {
    rarity: Number(props.dna.substring(0, 2)),
    class: Number(props.dna.substring(2, 4)),
    body: Number(props.dna.substring(5, 8)),
    hair: Number(props.dna.substring(8, 11)),
    tail: Number(props.dna.substring(11, 14)),
    eyes: Number(props.dna.substring(14)),
  };
  let className;
  let id = "id-" + props.index;

  switch (dna.class) {
    case 1:
      className = "tikbalang";
      break;
    case 2:
      className = "sarangay";
      break;
    case 3:
      className = "siyokoy";
      break;
    case 4:
      className = "kiwig";
      break;
    default:
      className = "kiwig";
  }

  return (
    <div className={"anito-container anito-rarity-" + dna.rarity}>
      <div className="anito-container-inner">
        <div className="anito-number">
          <span>#{props.index}</span>
        </div>
        <AnitoClassLabel anitoClass={className}>{props.name}</AnitoClassLabel>
      </div>
      <img src={process.env.PUBLIC_URL + "/images/glow.png"} className="anito-glow" alt="Anito glow"></img>
      {/*<AnitoGL
        classname="anito-body"
        id={id}
        name={props.name}
        class={className}
        body={dna.body}
        hair={dna.hair}
        tail={dna.tail}
        eyes={dna.eyes}
        hp={props.hp}
      />*/}
      <div className="anito-container-inner anito-details">
        <div className="anito-details-price">
          <div className="anito-details-price-symbol">
            <img src={process.env.PUBLIC_URL + "/images/" + props.currency + ".png"} alt={props.currency.toUpperCase()} />
          </div>
          <div className="anito-details-price-display">
            <div className="anito-details-price-amount">{props.price}</div>
            <div className="anito-details-price-unit">{props.currency.toUpperCase()}</div>
          </div>
        </div>
        <div className="anito-details-stats">
          <div className="anito-details-stats-row">
            <img src={process.env.PUBLIC_URL + "/images/sword-white.png"} alt="Attack" />
            <span>{props.atk}</span>
          </div>
          <div className="anito-details-stats-row">
            <img src={process.env.PUBLIC_URL + "/images/heart-white.png"} alt="HP" />
            <span>{props.hp}</span>
          </div>
          <div className="anito-details-stats-row">
            <img src={process.env.PUBLIC_URL + "/images/shield-white.png"} alt="Shield" />
            <span>{props.def}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnitoContainer;
