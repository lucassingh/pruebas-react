import React from 'react'
import { CardInfoAdidas } from './CardInfo';

function CardAdidas() {
    return (
        <>
            <div className="container-title-section-new">
                <h2 className="title-section-new">New</h2>
            </div>            
            <div className="card-container">
                { CardInfoAdidas.map((item, index) => {
                    return(
                        <div key={ index } className="card">
                            <div className="card-header">
                                <img src={item.urlImg} alt="shoe"/>
                            </div>
                            <div className="card-body">
                                <h3 className="card-title">{ item.title }</h3>
                                <p>{ item.price }</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default CardAdidas
