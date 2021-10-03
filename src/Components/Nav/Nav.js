import React, { useState } from 'react'
import { FcMenu } from 'react-icons/fc'
import './Nav.css';
import { FaSearch } from 'react-icons/fa';
import CategoryCarousel from './CategoryCarousel';
import { Link } from 'react-router-dom';

const breakPoints = [
    {width:1, itemsToShow: 1}
]
const Nav = ({ products }) => {

    const [searchItems, setSearchItems] = useState([])
    // toggle navigation for mobile view 
    const toggleNav = (e)=>{
        const navigation = e.target.parentElement.parentElement.nextElementSibling.nextElementSibling;
       navigation.classList.toggle('showNav');
    }


    // search function to find particular item using regular expressions
    const searchProducts=(e)=>{
        const searchValue = e.target.value.toLowerCase();
        // setSearchItems(products=>{
        //     return products.filter(product=>product)
        //     // return products
        // });
        e.target.parentElement.parentElement.parentElement.parentElement.nextElementSibling.style.display="block";
        function filteredProducts(){
            return products.filter(product=>{
                let {description, attributes} = product.fields
                description = description.toLowerCase();
                if(description.includes(searchValue)){
                    return product.fields;
                }

            })
        }
        // console.log(filteredProducts())
        setSearchItems(filteredProducts())
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
                                <input onChange={event=>searchProducts(event)} type="text" className="searchInput" placeholder="search" />
                                <button type="submit" className="icon searchIcon"><FaSearch /></button>
                            </form>
                        </div>

                        <div className="burgerMenu" onClick={toggleNav}>
                            <div className="menu"><FcMenu /></div>
                        </div>
                    </div> 
                </div>
            
                {/* Search form to filter user input and route to product page */}
                <div className="searchFilter">
                    <ul>
                        {
                            searchItems.map((item, index)=>(
                                <Link key={index} to={`/product/${item.sys.id}`}> 
                                    <li className="searchLinks">{ item.fields.description }</li>
                                </Link>
                            ))
                        }
                    </ul>
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
        </div>
    )
}

export default Nav
