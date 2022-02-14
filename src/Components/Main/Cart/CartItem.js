import React from 'react'
import './Cart.css'
import { IoStarSharp } from 'react-icons/io5'
import { useTranslation } from 'react-i18next';

const CartItem = ({ product, onRemove }) => {
    let medias = [];
    const stars = Array(5).fill(0);
    const colors={
        blue: "#F7C700",
        gray: "#a9a9a9"
    }

    if(product.fields.productImage){
        product.fields.productImage.forEach(elt => {
            medias.push(elt.fields.file.url);
        });
    }


    const {name, productRatings, price} = product.fields
    const id = product.sys.id;
    const removeItem = (e)=>{
        onRemove(id)
    }
    

    const { t } = useTranslation();
    return (
        <div>
            <div className="cartItemWrapper">
                <div className="cartFlexItem cartImageWrapper">
                    <img src={medias[0]} alt={name} />
                </div>
                <div className="cartFlexItem cartDescription">
                    <h3 className="cartItemName">{name}</h3>
                    <div className="rating remove">
                        {stars.map((_, index)=>(
                            <IoStarSharp key = {index} color={(productRatings) > index ? colors.blue: colors.gray}/>
                        ))}
                        <div className="cartNumbers remove">2123 sold . All Levels</div>
                    </div>
                    <div className="cartMobilePrice">${price}</div>
                </div>
                <div className="cartFlexItem cartControl">
                    <div className="cartPrice">${price}</div>
                    <div className="cartBtnControl">
                        <span onClick={removeItem} className="cartBtn">{ t("cart.remove") }</span>
                        <span className="cartBtn cartSaveToLater remove">{ t("cart.save") }</span>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default CartItem
