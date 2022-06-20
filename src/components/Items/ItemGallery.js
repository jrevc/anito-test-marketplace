import ItemContainer from "./ItemContainer";
import "./ItemGallery.css";

const ItemGallery = (props) => {
  return (
    <div className="item-gallery">
      {
        props.items.map(item => (
          <ItemContainer
            key={item.key}
            name={item.name}
            image={item.image}
            price1={item.price1}
            currency1={item.currency1}
            price2={item.price2}
            currency2={item.currency2}
            type={item.type}
          />
        ))
      }
    </div>
  )
}

export default ItemGallery;