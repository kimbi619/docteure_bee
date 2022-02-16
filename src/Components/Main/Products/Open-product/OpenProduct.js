import React, {useEffect, useState } from 'react'
import './OpenProduct.css';
import UseLocalStorage from '../../../../UseLocalStorage'
import { Client } from '../../../../Client';
import Opened from './Opened';
import i18next from 'i18next';




  
const OpenedProduct = ({ match }) => {
    useEffect( () => { 
      setLoading(true); 
      let currentLang = i18next.language
      Client.getEntry(match.params.id, {locale: currentLang === 'fr' ? 'fr': 'en-US'})
      .then(res=>{
        setProduct(res);
        setLoading(false);
      })
      .catch(err=>console.log(err))
      
    }, []);
    
    const [loading, setLoading] = useState(false)
    const [product, setProduct] = UseLocalStorage('product', {})
    


    


    return <Opened isLoading={loading} product={product} />
}

export default OpenedProduct
