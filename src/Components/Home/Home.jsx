import React from 'react';
import AmazonBanner from "../../Assets/Images/amazon-prime-day-2018-page-2082x1388.jpg"
import "./Home.scss"
import ProductCard from "../Products/ProductCard";
import {Link} from "react-router-dom";

function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img className="home_image" src={AmazonBanner} alt=""/>
                <div className="home_row">
                    <ProductCard
                        id="235645"
                        title='Logitech Wireless Combo MK220 Tastiera e Mouse, Nero [Italia]'
                        price={29.99}
                        image="https://m.media-amazon.com/images/I/41E0UhFdoKL._AC_SY200_.jpg"
                        rating={4}
                        hideButton={false}
                    />
                    <ProductCard
                        id="578468"
                        title='JIUHUFH Cuffie Bluetooth 4.2 senza Fili con Microfono
                        Incorporato Auricolare Pieghevoli Cuffia Wireless per Telefoni Cellulari/PC/TV/Mac - Nero Blu'
                        price={19.99}
                        image="https://m.media-amazon.com/images/I/41YESh7BuJL._AC_SR160,160_.jpg"
                        rating={3}
                        hideButton={false}

                    />
                </div>
                <div className="home_row">
                    <ProductCard
                        id="578441"
                        title='HOTERB Sveglia Digitale da Comodino,Sveglia da Comodino con 40 Suonerie Opzionali,
                        Temperatura e Data,LED Grande Display Orologio Digitale da Tavolo per Camera da Letto,Studio,Ufficio'
                        price={89.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/618UAYScFCL._AC_SL1500_.jpg"
                        rating={4}
                        hideButton={false}
                    />
                    <ProductCard
                        id="578435"
                        title='VASAGLE Libreria di Legno con Cubi e Ripiani, Scaffale Autoportante da Esposizione,
                        per Soggiorno, Camera da Letto, Cameretta e Ufficio, 97,5 x 30 x 100 cm (L x P x A),
                        Marrone Vintage LBC52BX'
                        price={199.99}
                        image="https://m.media-amazon.com/images/I/41Q9T94qTLL._AC_SY200_.jpg"
                        rating={5}
                        hideButton={false}
                    />
                    <ProductCard
                        id="582468"
                        title='Acer XF250QEbmiiprx Monitor Gaming FreeSync, 24,5", Display
                        Full HD, 144 Hz, 1 ms, 16:9, HDMI 1.4, DP 1.2, Lum 400 cd/m2,
                        ZeroFrame, Audio out, Speaker Integrati, Cavo DP Incluso'
                        price={299.99}
                        image="https://m.media-amazon.com/images/I/51BzILNza5L.jpg"
                        rating={5}
                        hideButton={false}
                    />
                </div>
                <div className="home_row">
                    <ProductCard
                        id="896528"
                        title='Netac 128G Scheda Micro SD, Scheda di
                        Memoria A1, U3, C10, V30, 4K, 667X, UHS-I velocità Fino a 100/30
                        MB/Sec(R/W) Micro SD Card per Telefono, Videocamera, Switch, Gopro, Tablet'
                        price={1499.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/71AxbYOJ8pL._AC_SL1500_.jpg"
                        rating={5}
                        hideButton={false}
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;
