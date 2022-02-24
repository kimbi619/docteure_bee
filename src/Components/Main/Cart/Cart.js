import React, { useContext } from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import uuid from 'react-uuid'
import { tabTitle } from '../../..';


import { CartContext } from '../CartContext'
import CartItem from './CartItem';

const Cart = () => {
    const [cart, setCart] = useContext(CartContext);
    // const [itemCount, setItemCount] = useState(1)

    const onRemove=(id)=>{
        function filteredCart(){
            return cart.filter(cartI=>{
                let pid = cartI.product.sys.id;
                if(pid !== id){
                    return cartI;
                }
                return null;
    
            })
        }
        
        setCart(filteredCart())
    }
    
    let totalPrice = 0;
    const handleCartChange = (id, count) => {
        // cart.map(cartI =>{
        //     if(cartI.product.sys.id === id){
        //         cartI.product.count = count;
        //     }
        // })
    }
    
    cart.forEach(elt => {
        totalPrice += elt.product.fields.price 
    });
    const { t } = useTranslation();
    tabTitle(`${t("titleBar.cart")} - docteure bee`)
    return (
        <div className="cartPageWrapper">
            <div className="carts">
                {
                    
                    cart.length < 1?
                    <div className='notAvailable'>
                        <h1>{ t("cart.cart_empty") }</h1>
                    </div>
                    :cart.map(cartItem=>(
                        // <h3 key={cartItem.product.sys.id}>{cartItem.product.fields.name}</h3>
                        <div className='cartItemAvailable' key={uuid()}>
                            <CartItem onCartChange={handleCartChange} onRemove = {onRemove} product={cartItem.product} />
                        </div>
                    ))
                }
            </div>
            <div className="cartCheckOutSection">
                <div className="totalWrapper">
                    <h3 className="cartItemName">{ t("cart.total") }</h3>
                    <h1 className="totalPrice">${totalPrice.toFixed(2)}</h1>
                </div>
                <Link to={`${cart.length < 1? "/cart" :"/cart/checkout"}`}  className={`buyBtn productPlaceOrder checkout ${cart.length < 1?"payDisable": ""}`}>{ t("cart.checkout") }</Link>
            </div>
        </div>
    )
}

export default Cart
