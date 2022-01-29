
const Product = ({ product, onAdd }) => {

    const {name,price, productRatings} = product.fields;
    const stars = Array(5).fill(0);

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
