import React, {useEffect, useState } from 'react'
import * as contentful from 'contentful';
import './OpenProduct.css';
import UseLocalStorage from '../../../../UseLocalStorage'
import { Client } from '../../../../Client';

const OpenedProduct = ({ match }) => {
    const [product, setProduct] = UseLocalStorage('product',{})
    useEffect(() => {
        console.log(match.params.id);
        Client.getEntry(match.params.id)
        .then(res=>{
            setProduct(res)
        })
    }, [])
    let img = [];
    const productImage = product.fields.productImage;
    productImage.forEach(elt => {
        img.push(elt.fields.file.url);
    });
    console.log(img);
    return (
        <div>
            
            <div className="productFlexWrapper">
                <div className="flexItem">
                    <div className="imgWrapper">
                        <img src={img[0]} alt={product.fields.name} />
                        {console.log(product)}
                    </div>
                </div>
                {console.log(product)}
                <div className="flexItem">
                    <h2>{product.fields.name}</h2>
                </div>
            </div>
        </div>
    )
}

export default OpenedProduct
