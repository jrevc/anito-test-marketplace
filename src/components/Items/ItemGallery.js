import { NavLink, Outlet } from 'react-router-dom';
import ItemContainer from './ItemContainer';
import './ItemGallery.css';

const ItemGallery = (props) => {
    return (
        <div className="item-gallery">
            <Outlet />
            {props.items.map((item) => (
                <NavLink className="item-link" to={'/items/' + item.key} key={item.key}>
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
                </NavLink>
            ))}
        </div>
    );
};

export default ItemGallery;
