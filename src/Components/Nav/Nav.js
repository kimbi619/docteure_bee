import React from 'react'
import { FcMenu } from 'react-icons/fc'
import './Nav.css';
import { FaSearch } from 'react-icons/fa';
import CategoryCarousel from './CategoryCarousel';

const breakPoints = [
    {width:1, itemsToShow: 1}
]
const Nav = () => {
    const toggleNav = (e)=>{
       const navigation = e.target.parentElement.parentElement.nextElementSibling;
       navigation.classList.toggle('showNav');
    }
    return (
        <div>
            <div className="nav">
                <div className="container">
                    <div className="mobile navHeader">
                        <div className="logo">
                            <h2>Logo</ h2>
                        </div>

                        <div className="search">
                            <form>
                                <input type="text" className="searchInput" placeholder="search" />
                                <button type="submit" className="icon searchIcon"><FaSearch /></button>
                            </form>
                        </div>

                        <div className="burgerMenu" onClick={toggleNav}>
                            <div className="menu"><FcMenu /></div>
                        </div>
                    </div> 
                </div>
                <nav>
                    <div className="logoCaption">
                        <div className="logo">logo</div>
                        <div className="caption">Fill with Caption</div>
                    </div>
                    <ul className="navList">
                        <li className="navLink"><a href="#">Products</a></li>
                        <li className="navLink"><a href="#">Contact us</a></li>
                        <li className="navLink"><a href="#">About</a></li>
                        <li className="navLink"><a href="#">Account</a></li>
                        <li className="navLink"><a href="#">Cart</a></li>
                    </ul>
                    <div className="logout">Log out</div>
                </nav>
            </div>
            <CategoryCarousel />
        </div>
    )
}

export default Nav
