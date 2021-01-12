import React from 'react';
import "./ShoppingBasketProducts.scss";
import {useStateValue} from "../../../Redux/StateProvider";

function ShoppingBasketProducts(props) {
    const [{basket}, dispatch] = useStateValue();
    const removeFromBasket = () => {
        //remove the item from the basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: props.id,
        })
    }
    return (
        <div className="shoppingBasketProd" key={props.id}>
            <img className="shoppingBasketProd_image" src={props.image} alt=""/>
            <div className="shoppingBasketProd_info">
                <p className="shoppingBasketProd_title">{props.title}</p>
                <p className="shoppingBasketProd_price">
                    <small>$</small>
                    <strong>{props.price}</strong>
                </p>
                <div className="shoppingBasketProd_rating">
                    {Array(props.rating).fill()
                        .map((_, i) => (<p>🌟</p>))}
                </div>
                {!props.hideButton && (
                    <button onClick={removeFromBasket} className="shoppingBasketProd_button">Remove from Basket</button>
                )}
            </div>
        </div>
    );

}

export default ShoppingBasketProducts;
