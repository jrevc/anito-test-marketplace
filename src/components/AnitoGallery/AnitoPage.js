import {
  useParams,
  NavLink,
} from "react-router-dom";
import { getAnito } from "../../data-anitos";
import AnitoClassLabel from "./AnitoClassLabel";
import "./AnitoPage.css";

const AnitoPage = () => {
  let data = useParams();
  let anito = getAnito(data.anitoKey);
  const dna = {
    rarity: Number(anito.dna.substring(0, 2)),
    class: Number(anito.dna.substring(2, 4)),
    body: Number(anito.dna.substring(5, 8)),
    hair: Number(anito.dna.substring(8, 11)),
    tail: Number(anito.dna.substring(11, 14)),
    eyes: Number(anito.dna.substring(14)),
  };
  let className;
  let rarity;
  // let id = "id-" + props.index;

  switch (dna.rarity) {
    case 1:
      rarity = "Common";
      break;
    case 2:
      rarity = "Epic";
      break;
    case 3:
      rarity = "Legendary";
      break;
    default:
      rarity = "Common";
  }

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

  const ToProper = text => {
    return text[0].toUpperCase() + text.slice(1).toLowerCase();
  }

  let atkBar1 = anito.atk > 5 ? 100 : (anito.atk / 5) * 100;
  let atkBar2 = anito.atk > 10 ? 100 : ((anito.atk - 5) / 5) * 100;
  let atkBar3 = anito.atk > 15 ? 100 : ((anito.atk - 10) / 5) * 100;
  let atkBar4 = anito.atk > 20 ? 100 : ((anito.atk - 15) / 5) * 100;
  let atkBar5 = anito.atk > 25 ? 100 : ((anito.atk - 20) / 5) * 100;

  let hpBar1 = anito.hp > 5 ? 100 : (anito.hp / 5) * 100;
  let hpBar2 = anito.hp > 10 ? 100 : ((anito.hp - 5) / 5) * 100;
  let hpBar3 = anito.hp > 15 ? 100 : ((anito.hp - 10) / 5) * 100;
  let hpBar4 = anito.hp > 20 ? 100 : ((anito.hp - 15) / 5) * 100;
  let hpBar5 = anito.hp > 25 ? 100 : ((anito.hp - 20) / 5) * 100;

  let defBar1 = anito.def > 5 ? 100 : (anito.def / 5) * 100;
  let defBar2 = anito.def > 10 ? 100 : ((anito.def - 5) / 5) * 100;
  let defBar3 = anito.def > 15 ? 100 : ((anito.def - 10) / 5) * 100;
  let defBar4 = anito.def > 20 ? 100 : ((anito.def - 15) / 5) * 100;
  let defBar5 = anito.def > 25 ? 100 : ((anito.def - 20) / 5) * 100;

  return (
    <div className={"anito-page anito-rarity-" + dna.rarity}>
      <div className="anito-page-left">
        <NavLink to="/" className="back-link">&#11207; Back</NavLink>
        <div className="anito-image-container">

        </div>
      </div>
      <div className="anito-page-right">
        <div className="anito-page-id">
          {"#" + anito.index}
        </div>
        <div className="anito-page-details">
          <div className="anito-page-details-left">
            <h1>{anito.name}</h1>
            <AnitoClassLabel className="anito-page-class" anitoClass={className}>{rarity + " " + ToProper(className)}</AnitoClassLabel>
            <h4>Owned by <span>{anito.owner}</span></h4>
          </div>
          <div className="anito-page-details-right">
            <div className="anitos-summoned">
              <h4>Anitos summoned</h4>
              <span>0/3</span>
            </div>
          </div>
        </div>
        <div className="anito-page-stats">
          <h4>Stats</h4>
          <div className="stat-display">
            <div className="stat-display-value">
              {anito.atk}
            </div>
            <div className="stat-display-graphics">
              <div className="stat-number">
                <img src={process.env.PUBLIC_URL + "/images/sword_gray.png"} alt="Sword icon" />Attack
              </div>
              <div className="stat-display-graph">
                <div className="stat-bar">
                  <div className="stat-bar-fill" style={{width: atkBar1 + "%"}}></div>
                </div>
                <div className="stat-bar">
                  <div className="stat-bar-fill" style={{width: atkBar2 + "%"}}></div>
                </div>
                <div className="stat-bar">
                  <div className="stat-bar-fill" style={{width: atkBar3 + "%"}}></div>
                </div>
                <div className="stat-bar">
                  <div className="stat-bar-fill" style={{width: atkBar4 + "%"}}></div>
                </div>
                <div className="stat-bar">
                  <div className="stat-bar-fill" style={{width: atkBar5 + "%"}}></div>
                </div>
              </div>
            </div>
          </div>
          <div className="stat-display">
            <div className="stat-display-value">
              {anito.hp}
            </div>
            <div className="stat-display-graphics">
              <div className="stat-number">
                <img src={process.env.PUBLIC_URL + "/images/heart_gray.png"} alt="Heart icon" />Hit Points
              </div>
              <div className="stat-display-graph">
                <div className="stat-bar">
                  <div className="stat-bar-fill" style={{width: hpBar1 + "%"}}></div>
                </div>
                <div className="stat-bar">
                  <div className="stat-bar-fill" style={{width: hpBar2 + "%"}}></div>
                </div>
                <div className="stat-bar">
                  <div className="stat-bar-fill" style={{width: hpBar3 + "%"}}></div>
                </div>
                <div className="stat-bar">
                  <div className="stat-bar-fill" style={{width: hpBar4 + "%"}}></div>
                </div>
                <div className="stat-bar">
                  <div className="stat-bar-fill" style={{width: hpBar5 + "%"}}></div>
                </div>
              </div>
            </div>
          </div>
          <div className="stat-display">
            <div className="stat-display-value">
              {anito.def}
            </div>
            <div className="stat-display-graphics">
              <div className="stat-number">
                <img src={process.env.PUBLIC_URL + "/images/shield_gray.png"} alt="Shield icon" />Defense
              </div>
              <div className="stat-display-graph">
                <div className="stat-bar">
                  <div className="stat-bar-fill" style={{width: defBar1 + "%"}}></div>
                </div>
                <div className="stat-bar">
                  <div className="stat-bar-fill" style={{width: defBar2 + "%"}}></div>
                </div>
                <div className="stat-bar">
                  <div className="stat-bar-fill" style={{width: defBar3 + "%"}}></div>
                </div>
                <div className="stat-bar">
                  <div className="stat-bar-fill" style={{width: defBar4 + "%"}}></div>
                </div>
                <div className="stat-bar">
                  <div className="stat-bar-fill" style={{width: defBar5 + "%"}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AnitoPage;