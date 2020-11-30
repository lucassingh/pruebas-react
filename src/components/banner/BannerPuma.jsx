import React from 'react'
import { BannerDataPuma } from './BannerData';

function BannerPuma() {
    return (
        <>
            <div className="container-title-section">
                <h2 className="title-section">Related</h2>
            </div>            
            <div className="banner-container">
                { BannerDataPuma.map((item, index) => {
                    return(
                        <div key={ index } className="banner">
                            <img className="banner-img" src={item.urlImg} alt="shoe"/>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default BannerPuma