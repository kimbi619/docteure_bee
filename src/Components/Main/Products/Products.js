import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Product from './Product'

const Products = ({ products }) => {
    
    // const [starRating, setStarRating] = useState(4);
    // const [hoverRating, setHoverRating] = useState(undefined);

    // const handleStarRating = (value)=>{
    //     setStarRating(value)
    // }
    // const handlehoverRating = (value)=>{
    //     setHoverRating(value)
    // }
    // const handleMouseLeaveRating = ()=>{
    //     setHoverRating(undefined);
    // }


    return (
        <div>
            {
                products.map((product, index)=>(
                    // <Product product={product} key={product.sys.id} />
                    <div  key={product.sys.id}>
                        <Link to={`/product/${product.sys.id}`}> 
                            <Product product={product} />
                        </Link>
                    </div>
                    ))  
                }
        </div>
    )
}

export default Products
