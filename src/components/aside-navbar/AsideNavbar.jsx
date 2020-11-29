import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";
import { asideNavbarData } from './AsideNavbarData';
import { IconContext } from 'react-icons'

function AsideNavbar() {
    const [sideBar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sideBar)
    return (
        <>
            <IconContext.Provider value={{color: '#fff'}}>
                <div className="navbar">
                    <Link to="#" className='menu-bars'>
                        <FaIcons.FaBars onClick={showSidebar}/>
                    </Link>
                </div>
                <nav className={sideBar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className="nav-menu-items" onClick={showSidebar}>
                        <li className="nav-bar-toggle">
                            <Link to="#" className='menu-bars'>
                                <AiIcons.AiOutlineClose/>
                            </Link>
                        </li>
                        {asideNavbarData.map((item, index) =>{
                            return (
                                <li key={ index } className={ item.cname }>
                                    <Link to={ item.path }>
                                        { item.icon }
                                        <span>{ item.title }</span>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    );
}

export default AsideNavbar
