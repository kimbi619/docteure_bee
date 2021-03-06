import React, { useContext } from 'react'
import { CartContext } from '../CartContext'
import CartItem from './CartItem';

const Cart = () => {
    const [cart, setCart] = useContext(CartContext);

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
    cart.forEach(elt => {
        totalPrice += elt.product.fields.price
    });



    return (
        <div className="cartPageWrapper">
            <div className="carts">
                {
                    
                    cart.length < 1?
                    <h2 className="emptyCart">cart is empty</h2>
                    :cart.map(cartItem=>(
                        // <h3 key={cartItem.product.sys.id}>{cartItem.product.fields.name}</h3>
                        <div key={cartItem.product.sys.id}>
                            <CartItem onRemove = {onRemove} product={cartItem.product} />
                        </div>
                    ))
                }
            </div>
            <div className="cartCheckOutSection">
                <h3 className="cartItemName">Total</h3>
                <h1 className="totalPrice">${totalPrice.toFixed(2)}</h1>
                    <button className={`buyBtn productPlaceOrder checkout ${cart.length < 1?"payDisable": ""}`}>Checkout</button>
            </div>
        </div>
    )
}

export default Cart
