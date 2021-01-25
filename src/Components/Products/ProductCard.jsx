import React, {useEffect, useState} from 'react';
import "./ProductCard.scss";
import {useStateValue} from "../../Redux/StateProvider";

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Il max è escluso e il min è incluso
}

function ProductCard(props) {
    const [{basket}, dispatch] = useStateValue();
    const [data, setData] = useState({})

    const getData = () => {
        return fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => json[getRandomInt(0, json.length - 1)])
    };

    useEffect(() => {
        getData().then((data) => setData(data))
    }, []);

    //   console.log("this is the basket >>> ", basket);
    const addToBasket = () => {
        //dispatch the item(action) into the data layer
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: item.id,
                title: item.title,
                image: item.image,
                price: item.price,
                rating: item.rating,
                hideButton: item.hideButton
            },
        });
    };
    const item = data;
    return (
        <div className="product_card">
            <div className="product_info">
                <p>{item.title}</p>
                <p className="product_price">
                    <small>€</small>
                    <strong>{item.price}</strong>
                </p>
                <div className="product_rating">
                    {Array(item.rating)
                        .fill()
                        .map((_, i) => (
                            <p>⭐️</p>
                        ))}
                </div>
            </div>
            <img src={item.image} alt=""/>
            <button onClick={addToBasket}>Add to Basket</button>
        </div>);
}

export default ProductCard;
