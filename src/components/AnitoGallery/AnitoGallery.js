import AnitoContainer from "./AnitoContainer"
import "./AnitoGallery.css"

const AnitoGallery = (props) => {
  return (
    <div className="anito-gallery">
      <div className="anito-gallery-container">
        {
          props.anitos.map(anito => (
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
          ))
        }
      </div>
    </div>
  );
}

export default AnitoGallery;