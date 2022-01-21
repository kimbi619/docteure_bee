import {useState, createContext } from "react"

export const ProductContext = createContext();

export const ProductProvider = (provider) => {
    const [products, setproducts] = useState([
    {
        fields: {
            category: "Honey",
            name: "Fall Honey",
            "price": 50,
            productImage: {
                imageName: "./img"
            }
        }
    }]);
    return(
        <ProductContext.Provider value={[product, setProduct]}>
            {props.children}
        </ProductContext.Provider>
    )
}