import React, {useEffect, useState} from 'react';
import {useStateValue} from "../../Redux/StateProvider";
import ShoppingBasketProducts from "../../Components/Basket/ShoppingBasketProducts/ShoppingBasketProducts";
import {Link, useHistory} from "react-router-dom";
import {CardElement, useElements, useStripe} from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import {getBasketTotal} from "../../Redux/reducer";
import axios from "../../Helpers/axios";
import {db} from "../../firebase";

import "./Payment.scss";

function Payment() {
    const [{basket, user}, dispatch] = useStateValue();

    const history = useHistory();
    const stripe = useStripe();
    const elements = useElements();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {
        // it generates the special stripe secret which will allow us to charge a user
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            });
            setClientSecret(response.data.clientSecret)
        }
        getClientSecret();
    }, [basket]);
    //console.log('The secret is==> ', clientSecret);

    const handleSubmit = async (e) => {
        //stripe
        e.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({paymentIntent}) => {
            //Payment intent = payment confirmation
            db.collection('users')
                .doc(user?.uid)
                .collection('orders')
                .doc(paymentIntent.id)
                .set({
                    basket: basket,
                    amount: paymentIntent.amount,
                    created: paymentIntent.created
                })
            setSucceeded(true);
            setError(null);
            setProcessing(false);

            dispatch({
                type: 'EMPTY_BASKET'
            })
            history.replace('/orders')
        })
    }

    const handleChange = e => {
        // listen for changes in the cardElement
        // and display any errors as the customer types their card details
        setDisabled(e.empty);
        setError(e.error ? e.error.message : "");
    }

    return (
        <div className="payment">
            <div className="payment_container">
                <h1>Checkout (<Link to='/checkout'>{basket?.length}</Link> items) </h1>
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment_address">
                        <p>{user?.email}</p>
                        <p>Via Padova 204</p>
                        <p>Milan, Italy</p>
                        <p>20132</p>
                    </div>
                </div>
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className="payment_items">
                        {basket.map(item => (<ShoppingBasketProducts
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}/>)
                        )}
                    </div>
                </div>
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment_details">
                        <form onSubmit={handleSubmit} action="">
                            <CardElement onChange={handleChange}/>
                            <div className="payment_price_container">
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <h4>Order Total: {value}</h4>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}/>
                                <button disabled={processing || disabled || succeeded}>
                                    <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                                </button>
                            </div>
                            {/*error*/}
                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Payment;
