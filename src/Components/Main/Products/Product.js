
const Product = ({ product, onAdd }) => {

    const {name,price} = product.fields;


    const addProductToCart = (product,e)=>{
        console.log("product")
        onAdd(product, e)
    }

    
    return (
        <>
            <div className="product">
                <div className="productDesc">
                    <div className="price-rate">
                        <div className="name">{name}</div>
                        <p className="price">${price}</p>
                    </div>
                    
                    <div className="dropDownWrapper">
                        <button className="placeOrder">
                            <span className="mainAddToCartButton" onClick={(e)=>addProductToCart(product, e)}>Buy</span>
                        </button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Product
