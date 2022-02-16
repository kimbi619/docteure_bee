import React, { useRef, useContext } from 'react'
import { Link } from 'react-router-dom';
import Product from './Product'
import { FaTimes } from 'react-icons/fa'
import { CartContext } from '../CartContext';
import { useTranslation } from 'react-i18next';


const Products = ({ products }) => {
    const [cart, setCart] = useContext(CartContext)
    const popupRef  = useRef()
    const addToCart = (product, e)=>{
        setCart([...cart, {product:product}]);
        // ==============display popup when add to chart is clicked=============
        popupRef.current.style.display="block";
    }

    // remove the popup alert from display
    const removePopup = (e)=>{
        e.target.parentElement.style.display="none";
    }


    const { t } = useTranslation();
    return (
        <div className="productGridWrapper">
            {
                products.map((product, index)=>(
                    // <Product product={product} key={product.sys.id} />
                    <div  key={product.sys.id}>
                            <div className="productItemWrapper">
                                <Link to={`/product/${product.sys.id}`}> 
                                    <div className="productImgWrapper">
                                        {product.fields.productImage &&
                                        <img className="productImg skeleton"
                                        src={product.fields.productImage[0].fields.file.url} alt="sdfwe" />}
                                    </div>
                                 </Link>
                                <Product onAdd={addToCart} product={product} />
                            </div>
                    </div>
                    ))  
                }
                
                <div ref={popupRef} className="popup">{t("product_added")}... 
                    <Link to="/cart"><div> { t("go_to_cart") } </div></Link>
                    <span className="closePopup" onClick={removePopup}><FaTimes /></span>
                </div>
        </div>
    )
}

export default Products
