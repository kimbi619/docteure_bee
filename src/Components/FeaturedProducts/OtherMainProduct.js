import React, {useState, useContext} from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import pollen from '../../img/pollen.jpg'
import propolis from '../../img/propolis.jpg'
import useLocalStorage from '../../UseLocalStorage';
import { CartContext } from '../Main/CartContext';

const OtherMainProduct = (props) => {
 const { t } = useTranslation(); 
 const [cart, setCart] = useContext(CartContext)
 const [products, setProducts] = useLocalStorage('products', [])
  const [mainProducts, setMainProducts] = useState(
    [
      {
        route: "royal-jelly",
        name: t("other_products.royal_jelly.title"),
        desc: t("other_products.royal_jelly.text"),
        priceSmall: 7,
        priceSmall: 7,
        img: pollen,
        linkId: '2Bbs4UnyPsbSUkU8cLCFFi',
      },
      {
        route: "propolis",
        name: t("other_products.propolis.title"),
        desc: t("other_products.propolis.text"),
        priceSmall: 7,
        priceSmall: 7,
        img: propolis,
        linkId: '4hGGV1ScnueFpFk2ffzfjn',
      },
      {
        route: "pollen",
        name: t("other_products.pollen.title"),
        desc: t("other_products.pollen.text"),
        priceSmall: 7,
        priceSmall: 7,
        img: pollen,
        linkId: '58aOxkIkoLMePm9hVHj5zr',
      },
      {
        route: "hydromel",
        name: t("other_products.hydromel.title"),
        desc: t("other_products.hydromel.text"),
        priceSmall: 7,
        priceSmall: 7,
        img: pollen,
        linkId: '',
      },
      {
        route: "immune-booster",
        name: t("other_products.immune_booster.title"),
        desc: t("other_products.immune_booster.text"),
        priceSmall: 7,
        priceSmall: 7,
        img: pollen,
        linkId: '7ODTPuCHn1AAAWAYMiWei',
      },
    ]
    );

  const path = props.match.path
  const route =  path.replace('/', '')
  const item = mainProducts.filter(mainProduct=>mainProduct.route === route)


  let thisProduct = products[0];
  thisProduct.fields.description = item[0].desc
  thisProduct.fields.name = item[0].name
  thisProduct.fields.price = 13
  thisProduct.fields.productImage = item[0].img
  const addToCart = (product, e)=>{
    // product.fields.priceSmall = null
    // product.fields.price= product.fields.priceBig
    // ==============display popup when add to chart is clicked=============
    // popupRef.current.style.display="block";
    console.log(products)
    console.log(thisProduct)
    setCart([...cart, {product:thisProduct}]);
    console.log(cart)
}
  return (
  <div>
    <div className="container">
    <div className="descCap titleLeft descTitle">{item[0].name}</div>
        <div className="featuredProductTopGrid">
            <div className="imgSection">
                <div className="imgWrapper">
                    <img className='gridImage' src={item[0].img} alt="Honey" />
                </div>
            </div>
            <div className="featuredProductTopDesc">
                <div className="descTitle titleLeft">Description</div>
                <div className="descText">
                    {item[0].desc}
                </div>
                <div className="place-oder controlLinkWrapper ">
                  <Link className='controlLinks' to={`product/${item[0].linkId}`}><p className="addToCart callToAction">get this product</p></Link>
                </div>
            </div>
        </div>
        </div>
  </div>
  )
};

export default OtherMainProduct;
