
const Product = ({ product, onAdd }) => {

    const {name,price, productRatings} = product.fields;
    const stars = Array(5).fill(0);
    const colors={
        blue: "blue",
        gray: "#a9a9a9"
    }
    const addProductToCart = (product,e)=>{
        onAdd(product, e)
    }
    const showDropDown = (e)=>{
        const dropDownList = e.target.parentElement.parentElement.nextElementSibling;
        if(dropDownList === null){
            return
        }
        dropDownList.classList.toggle('toggleDropDown');
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
                            <span onClick={(e)=>addProductToCart(product, e)}>Buy</span>
                        </button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Product
