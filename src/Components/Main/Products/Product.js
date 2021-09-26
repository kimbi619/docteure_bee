import React from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import { IoCartOutline } from 'react-icons/io5'
import { FiBookmark } from 'react-icons/fi'
import { IoStarSharp } from 'react-icons/io5'

const Product = ({ product }) => {

    const {name,price, productRatings, productImage} = product.fields;
    const stars = Array(5).fill(0);
    const colors={
        blue: "blue",
        gray: "#a9a9a9"
    }

    const showDropDown = (e)=>{
        const dropDownList = e.target.parentElement.parentElement.nextElementSibling;
        dropDownList.classList.toggle('toggleDropDown');
    }

    return (
        <div>
            <div className="product">
                <div className="productImgWrapper">
                    {productImage &&<img className="productImg skeleton" src={productImage[0].fields.file.url} alt="sdfwe" />}
                </div>
                
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
                                    <a href="#">Add to cart</a>
                                    <span><IoCartOutline /></span>
                                </p>
                                <p className="dropDownItem">
                                    <a href="#">Reserve</a>
                                    <span><FiBookmark /></span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Product
