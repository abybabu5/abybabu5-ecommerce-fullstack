import React, {forwardRef} from 'react';
import "./Checkout.scss";
import Subtotal from "../Subtotal/Subtotal"
import ShoppingBasketProducts from "../ShoppingBasketProducts/ShoppingBasketProducts";
import {useStateValue} from "../../../Redux/StateProvider";
import FlipMove from 'react-flip-move';

const FunctionalArticle = forwardRef((item, ref) => (
    <div ref={ref}>
        <ShoppingBasketProducts
            key={item.cartId}
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
            {...item}/>

    </div>
));

function Checkout() {
    const [{basket, user}] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout_left">
                <img className="checkout_ad"
                     src="https://connect-assets.prosple.com/cdn/ff/3UVJ1GrRQln_OqzTdYq_8JbYmNY-pDZDNO4lW5M62Kg/1578558221/public/styles/scale_and_crop_center_890x320/public/2020-01/Banner-Amazon-893x321-2020.jpg?itok=Wn-QOqJ4"
                     alt=""/>
                <div>
                    <h3>Hello, {user?.email}</h3>
                    <h2 className="checkout_title">
                        Your shopping Basket
                    </h2>
                    <FlipMove>
                        {basket.map(item => (
                            <FunctionalArticle {...item} />
                        ))}
                    </FlipMove>
                </div>
            </div>
            <div className="checkout_right">
                <h2>The subtotal </h2>
                <Subtotal/>
            </div>

        </div>
    );
}

export default Checkout;
