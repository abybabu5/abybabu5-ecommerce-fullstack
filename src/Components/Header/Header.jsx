import React from 'react';
import AmazonLogo from "../../Assets/Logos/294695-512 (1).png";
import SearchIcon from '@material-ui/icons/Search';
import "./Header.scss";
import {ShoppingBasket} from "@material-ui/icons";
import {Link} from "react-router-dom";
import {useStateValue} from "../../Redux/StateProvider";
import {auth} from "../../firebase";

function Header() {
    const [{basket, user}] = useStateValue();

    const handleAuth = () => {
        if (user) {
            auth.signOut();
        }
    }
    return (
        <div className="header">
            <Link to="/">
                <img className="header_logo" src={AmazonLogo} alt=""/>
            </Link>
            <div className="header_search">
                <input type="text" className="header_searchInput"/>
                <SearchIcon className="header_icon"/>
            </div>
            <div className="header_nav">
                <Link to={!user && '/login'}>
                    <div onClick={handleAuth} className="header_option">
                <span className="header_optionLineOne">
                    Hello {user ?
                    user.email : 'Guest'}
                </span>
                        <span className="header_optionLineTwo">
                        {user ?
                            'Sign out' : 'Sign In'}
                    </span>
                    </div>
                </Link>
                <Link to='/orders'>
                    <div className="header_option">
                 <span className="header_optionLineOne">
                    Returns
                </span>
                        <span className="header_optionLineTwo">
                 &Orders
                    </span>
                    </div>
                </Link>
                <div className="header_option">
                    <span className="header_optionLineOne">
                   Your
                </span>
                    <span className="header_optionLineTwo">
                   Prime
                    </span>
                </div>
                <Link to="/checkout">
                    <div className="header_optionBasket">
                        <ShoppingBasket/>
                        <span className="header_optionLineTwo header_basketCount">
                        {basket?.length}
                    </span>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Header;
