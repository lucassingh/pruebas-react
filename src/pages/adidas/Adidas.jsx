import React from 'react'
import CardAdidas from '../../components/card/CardAdidas'
import BannerAdidas from './../../components/banner/BannerAdidas';

function Adidas() {
    return (
        <>
            <div className="adidas-container">
                <div className="adidas-sneaker">
                    <div className="adidas-circle">
                        <img src="assets/adidas.png" alt="adidas-shoes"></img>
                    </div>
                </div>
                <div className="adidas-container-info">
                    <h1 className="adidas-title">Adidas booster</h1>
                    <p className="adidas-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                    </p>
                    <button className="adidas-button-shop">Add to cart</button>
                </div>
            </div>
            <CardAdidas/>
            <BannerAdidas />
        </>
    )
}

export default Adidas
