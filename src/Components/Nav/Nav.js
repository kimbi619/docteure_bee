import React, { useState, useRef } from 'react'
import { FcMenu } from 'react-icons/fc'
import './Nav.css';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { IoIosArrowDown } from 'react-icons/io'


const Nav = ({ products }) => {

    const [searchItems, setSearchItems] = useState([])
    // toggle navigation for mobile view 
    const toggleNav = (e)=>{
        const navigation = e.target.parentElement.parentElement.nextElementSibling.nextElementSibling;
       navigation.classList.toggle('showNav');
    }

    const removeNav = (e)=>{
        if(e.target.className === 'navLink'){
            e.target.parentElement.parentElement.parentElement.classList.remove('showNav')
        }
    }
    const background = useRef('')
    const searchItemList = useRef('')
    const searchField = useRef('');
    // search function to find particular item using regular expressions
    const searchProducts=(e)=>{
        const searchValue = e.target.value.toLowerCase();
        background.current.style.display="block";
        
        searchItemList.current.style.display="block";
        function filteredProducts(){
            return products.filter(product=>{
                let {description} = product.fields
                description = description.toLowerCase();
                if(description.includes(searchValue)){
                    return product.fields;
                }
                return "";

            })
        }
        // console.log(filteredProducts())
        setSearchItems(filteredProducts())
    }


    // remove filtered list on link select 
    const removeList = (e)=>{
        // background.current.style.display="none";
    }
    const removeSearch = (e)=>{
        background.current.style.display="none";
        searchItemList.current.style.display="none";
        searchField.current.value=""
    }

    const showDropDown = (e)=>{
        const dropDownList = e.target.nextElementSibling;
        if(dropDownList === null){
            return
        }
        dropDownList.classList.toggle('toggleDropDown');
    }

    return (
        <div className='headerWrapper'>
            <div onClick={removeSearch} ref={background} className="searchBackground"></div>
            <div className="nav">
                <div className="container">
                    <div className="mobile navHeader">
                        <Link to="/" exact ><div className="logo">
                            <h2>Logo</ h2>
                        </div></Link>
                        <div className="search">
                            <form>
                                <input ref={searchField} onChange={event=>searchProducts(event)} type="text" className="searchInput" placeholder="search" />
                                <button type="submit" className="icon searchIcon"><FaSearch /></button>
                            </form>
                        </div>
                       

                        <div className="burgerMenu" onClick={toggleNav}>
                            <div className="menu"><FcMenu /></div>
                        </div>
                    </div> 
                </div>
            
                {/* Search form to filter user input and route to product page */}
                <div ref={searchItemList} className="searchFilter">
                    <ul>
                        {
                            searchItems.map((item, index)=>(
                                <Link key={index} to={`/product/${item.sys.id}`}> 
                                    <li onClick={removeSearch} className="searchLinks">{ item.fields.description }</li>
                                </Link>
                            ))
                        }
                    </ul>
                </div>
                <nav onClick={removeNav}>
                    <div className="push"></div>
                    <div className="logoCaption">
                        <Link to= "/" exact><div className="logo">logo</div></Link>
                    </div>
                    <ul className="navList">
                        {/* <Link to="/" exact><li className="navLink">Home</li></Link> */}
                        <Link to="/products" exact><li className="navLink">Products</li></Link>
                        <Link to="/winery" exact><li className="navLink">Winery</li></Link>
                        <Link to="/contact-us"><li className="navLink">Contact</li></Link>
                        <Link to="/about"><li className="navLink">About</li></Link>
                    </ul>
                    <div className="desktopSearch search">
                        <form>
                            <input ref={searchField} onChange={event=>searchProducts(event)} type="text" className="searchInput" placeholder="search" />
                            <button type="submit" className="icon searchIcon"><FaSearch /></button>
                        </form>
                    </div>
                    <ul className="shiftRight">
                        <Link to="/cart"><li className="navLink">Cart</li></Link>
                        <div className="lang" id='lang'>
                            <div onClick={showDropDown}  className="cont">
                                <div className="dropDown">
                                    <p>lang</p>
                                    <span className="dropDownIndicator"><IoIosArrowDown  /></span>
                                </div>
                            </div>
                            <div className="dropDownList">
                                <p className="dropDownItem english">
                                    <span>English</span>
                                </p>
                                <p className="dropDownItem french">
                                    <span>Francais</span>
                                </p>
                            </div>
                        </div>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Nav
