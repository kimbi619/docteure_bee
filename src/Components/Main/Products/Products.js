import React, { useState } from 'react'
import Product from './Product'

const Products = ({ products }) => {
    
    const [starRating, setStarRating] = useState(4);
    const [hoverRating, setHoverRating] = useState(undefined);

    const handleStarRating = (value)=>{
        setStarRating(value)
    }
    const handlehoverRating = (value)=>{
        setHoverRating(value)
    }
    const handleMouseLeaveRating = ()=>{
        setHoverRating(undefined);
    }


    return (
        <div>
            {
                products.map((product, index)=>(
                    <Product product={product} key={product.sys.id} />
                    ))  
                }
        </div>
    )
}

export default Products
