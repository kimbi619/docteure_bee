import React, {useEffect, useState } from 'react'
import * as contentful from 'contentful';
import './OpenProduct.css';
import UseLocalStorage from '../../../../UseLocalStorage'
import { Client } from '../../../../Client';
import Opened from './Opened';






  
  const OpenedProduct = ({ match }) => {
      
    const [loading, setLoading] = useState(false)
      const [product, setProduct] = UseLocalStorage('product', {})


      useEffect(() => {

        const fetchPost = async ()=>{
            setLoading(true);
            let data = await Client.getEntry(match.params.id)
            console.log(data);
            setProduct(data.fields);
            setLoading(false);
        }
           
        fetchPost();
        }, [])
        


    



    return (
        <div>
            <Opened isLoading={loading} product={product} />
        </div>
    )
}

export default OpenedProduct
