import React from 'react';
import AmazonBanner from "../../Assets/Images/amazon-prime-day-2018-page-2082x1388.jpg";
import ProductCard from "../Products/ProductCard";


import "./Home.scss"

function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img className="home_image" src={AmazonBanner} alt=""/>
                <div className="home_row">
                    <ProductCard/>
                    <ProductCard/>
                </div>
                <div className="home_row">
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                </div>
                <div className="home_row">
                    <ProductCard/>
                </div>
            </div>
        </div>
    );
}

export default Home;
