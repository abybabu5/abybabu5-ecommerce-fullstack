import React, {Component} from 'react';
import {Apple, Shop} from "@material-ui/icons";

import "./Footer.scss";

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="footer__column">
                    <div className="footer__heading">Get to Know Us</div>
                    <div><p>About us</p></div>
                    <div><p>Careers</p></div>
                    <div><p>Press Releases</p></div>
                    <div><p>Amazon Cares</p></div>
                    <div><p>Gift a Smile</p></div>
                </div>
                <div className="footer__column">
                    <div className="footer__heading">Connect with Us</div>
                    <div><p>Facebook</p></div>
                    <div><p>Twitter</p></div>
                    <div><p>Instagram</p></div>
                </div>
                <div className="footer__column">
                    <div className="footer__heading">Make Money with Us</div>
                    <div><p>Sell on Amazon</p></div>
                    <div><p>Sell under Amazon Accelerator</p></div>
                    <div><p>Become an Affiliate</p></div>
                    <div><p>Fulfilment by Amazon</p></div>
                    <div><p>Advertise Your Products</p></div>
                    <div><p>Amazon Pay on Merchants</p></div>

                </div>
                <div className="footer__column">
                    <div className="footer__heading">Let Us Help You</div>
                    <div><p>COVID-19 and Amazon</p></div>
                    <div><p>Returns Centre</p></div>
                    <div><p>100% Purchase Protection</p></div>
                    <div><p>Amazon App Download</p></div>
                    <div><p>Amazon Assistant Download</p></div>
                    <div><p>Help</p></div>
                </div>
                <div className="footer__column">
                    <div className="footer__heading">Download App</div>
                    <button><Shop/><span className="btn__text">Play Store</span></button>
                    <button><Apple/><span className="btn__text">App Store</span></button>
                </div>
            </div>

        );
    }
}

export default Footer;
