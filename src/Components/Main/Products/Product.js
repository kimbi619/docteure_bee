import React from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import { IoCartOutline } from 'react-icons/io5'
import { FiBookmark } from 'react-icons/fi'
import { IoStarSharp } from 'react-icons/io5'

const Product = ({ product, onAdd }) => {

    const {name,price, productRatings} = product.fields;
    const stars = Array(5).fill(0);
    const colors={
        blue: "blue",
        gray: "#a9a9a9"
    }
    const addProductToCart = (product,e)=>{
        onAdd(product, e)
    }
    const showDropDown = (e)=>{
        const dropDownList = e.target.parentElement.parentElement.nextElementSibling;
        if(dropDownList === null){
            return
        }
        dropDownList.classList.toggle('toggleDropDown');
    }
    
    return (
        <>
            <div className="product">
                
                <div className="productDesc">
                    <div className="price-rate">
                        <div className="name">{name}</div>
                        <p className="price">${price}</p>
                        <div className="rating">
                            {stars.map((_, index)=>(
                                <IoStarSharp 
                                    key = {index} 
                                    color={(productRatings) > index ? colors.blue: colors.gray}
                                    // color={(hoverRating || starRating) > index ? colors.blue: colors.gray}
                                    // onClick={()=>handleStarRating(index + 1)}
                                    // onMouseOver={()=>handlehoverRating(index + 1)}
                                    // onMouseLeave = {handleMouseLeaveRating}
                                />
                            ))}

                        </div>
                    </div>
                    <div className="dropDownWrapper">
                        <div className="placeOrder">
                            <div className="dropDown">
                                <p>place order</p>
                                <span className="dropDownIndicator"><IoIosArrowDown onClick={showDropDown} /></span>
                            </div>
                            <div className="dropDownList">
                                <p className="dropDownItem">
                                    <span onClick={(e)=>addProductToCart(product, e)}>Add to cart</span>
                                    <span><IoCartOutline /></span>
                                </p>
                                <p className="dropDownItem">
                                    <span>Reserve</span>
                                    <span><FiBookmark /></span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Product
