import React, {useState} from 'react';
import "./Login.scss"
import {Link, useHistory} from "react-router-dom";
import { auth } from "../../firebase";


function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const signIn = e => {
        e.preventDefault();
        //firebase login
        auth.signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))
    }
    //firebase register
    const register = e => {
        e.preventDefault();
        //creating the user with email and password
        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                console.log(auth);
                if (auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
    }
    return (
        <div className="login">
            <Link to="/">
                <img className="login_logo"
                     src="https://thumbs.dreamstime.com/b/amazon-company-vector-editable-logo-white-background-ready-to-print-182823873.jpg"
                     alt=""/>
            </Link>
            <div className="login_container">
                <h1>Sign-in</h1>
                <form action="">
                    <h5>E-mail</h5>
                    {/*{JSON.stringify(email)}*/}
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                    <button type="submit" onClick={signIn} className="login_signIn_btn">Sign In</button>
                </form>
                <p>
                    By continuing, you agree to Amazon fake clone's Conditions of Use and Privacy Notice.
                </p>
                <button onClick={register} className="login_register_btn">
                    create your Amazon Account
                </button>
            </div>
        </div>
    );
}

export default Login;
