import React from 'react';
import "./ProductCard.scss";
import {useStateValue} from "../../Redux/StateProvider";

function ProductCard(props) {
    const [{ basket }, dispatch] = useStateValue();

 //   console.log("this is the basket >>> ", basket);
    const addToBasket = () => {
        //dispatch the item(action) into the data layer
dispatch({
    type:'ADD_TO_BASKET',
    item: {
        id: props.id,
        title: props.title,
        image: props.image,
        price: props.price,
        rating: props.rating,
        hideButton: props.hideButton
    },
});
    };
    return (
        <div className="product_card">
            <div className="product_info">
                <p>{props.title}</p>
                <p className="product_price">
                    <small>$</small>
                    <strong>{props.price}</strong>
                </p>
                <div className="product_rating">
                    {Array(props.rating)
                        .fill()
                        .map((_, i) => (
                        <p>⭐️</p>
                        ))}
                </div>
            </div>
            <img src={props.image} alt=""/>
            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    );
}

export default ProductCard;
