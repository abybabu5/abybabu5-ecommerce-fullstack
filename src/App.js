import './App.css';
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Checkout from "./Components/Basket/Checkout/Checkout";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from "./Features/Login/Login";
import {useEffect} from "react";
import {useStateValue} from "./Redux/StateProvider";
import {auth} from "./firebase";
import Payment from "./Features/Payment/Payment";
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";
import Orders from "./Components/Orders/Orders";
import Footer from "./Components/Footer/Footer";

const promise = loadStripe('pk_test_51I3kunFu9JpJ9qGKbRJvBd6hHiQ7HuTTBvDZ1QTa8ag9HAMt2SICmqF5cFaqnP0BVk5TDzhQlPVFwtkmisqWBzlB00Z5fW8Nnk')

function App() {
    const [{}, dispatch] = useStateValue();

    useEffect(() => {
// this will only run when the app component loads
        auth.onAuthStateChanged(authUser => {
            console.log('THE USER IS ', authUser);
            if (authUser) {
                // the user just logged in/the was logged in
                dispatch({
                    type: 'SET_USER',
                    user: authUser
                })
            } else {
                // the user is logged out
                dispatch({
                    type: 'SET_USER',
                    user: null
                })
            }
        })
    }, [])
    return (
        <Router>
            <div className="app">
                <Switch>
                    <Route exact path="/">
                        <Header/>
                        <Home/>
                        <Footer/>
                    </Route>
                    <Route path="/orders">
                        <Header/>
                        <Orders/>
                        <Footer/>
                    </Route>
                    <Route path="/checkout">
                        <Header/>
                        <Checkout/>
                        <Footer/>
                    </Route>
                    <Route path="/payment">
                        <Header/>
                        <Elements stripe={promise}>
                            <Payment/>
                        </Elements>
                    </Route>
                    <Route path="/login">
                        <Login/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
