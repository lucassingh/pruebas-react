import React from 'react'
import  CardNike from '../../components/card/CardNike'
import BannerNike from './../../components/banner/BannerNike';


function Nike() {
    return (
        <>
            <div className="nike-container">
                <div className="nike-sneaker">
                    <div className="nike-circle">
                        <img src="assets/nike.png" alt="adidas-shoes"></img>
                    </div>
                </div>
                <div className="nike-container-info">
                    <h1 className="nike-title">Nike Air Zoom Terre</h1>
                    <p className="nike-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                    </p>
                    <button className="nike-button-shop">Add to cart</button>
                </div>
            </div>
            <CardNike/>
            <BannerNike/>
        </>
    )
}

export default Nike
