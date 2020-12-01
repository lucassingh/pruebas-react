import React from 'react'
import { FooterHeader, 
    FooterLinks, 
    FooterCustomerCare, 
    FooterSocialMedia
} from './FooterData';

function Footer() {
    return (
    <>
        <div className="footer-container">            
            { FooterHeader.map((item, index) => {
                return(
                    <div key={ index } className="footer-header">
                        <img src={ item.logoUrl } alt="logo" width="60%"/>
                        <p className="footer-text">{ item.textHeader }</p>
                    </div>                    
                )
            })}
            { FooterLinks.map((item, index)  => {
                return(
                    <div key={ index } className="footer-links">
                        <h5 className="footer-Link-title">{ item.linksTitle }</h5>
                        <span className="footer-link-text">{ item.link }</span>
                    </div>
                )
            })}
            { FooterCustomerCare.map((item, index)  => {
                return(
                    <div key={ index } className="footer-links">
                        <h5 className="footer-Link-title">{ item.linksTitle }</h5>
                        <span className="footer-link-text">{ item.link }</span>
                    </div>
                )
            })}
            { FooterSocialMedia.map((item, index)  => {
                return(
                    <div key={ index } className="footer-links">
                        <h5 className="footer-Link-title">{ item.linksTitle }</h5>
                        <span className="footer-link-text">{ item.link }</span>
                    </div>
                )
            })}
        </div>
        <div className="footer-copy">
            <p className="footer-copy-text">E-shoes - All right reserved - &#169;</p>
        </div>
    </>
    )
}

export default Footer