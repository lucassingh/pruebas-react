import React from 'react'
import CardPuma from './../../components/card/CardPuma';
import BannerPuma from './../../components/banner/BannerPuma';

function Puma() {
    return (
        <>
            <div className="puma-container">
                <div className="puma-sneaker">
                    <div className="puma-circle">
                        <img src="assets/puma.png" alt="adidas-shoes"></img>
                    </div>
                </div>
                <div className="puma-container-info">
                    <h1 className="puma-title">Puma Ultraride</h1>
                    <p className="puma-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                    </p>
                    <button className="puma-button-shop">Add to cart</button>
                </div>
            </div>
        <CardPuma/>
        <BannerPuma/>
        </>
    )
}

export default Puma