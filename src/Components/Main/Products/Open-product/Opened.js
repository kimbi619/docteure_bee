import Carousel from 'react-elastic-carousel';
import OpenProductItem from './OpenProductItem';
import { IoStarSharp } from 'react-icons/io5'
import React, { useContext } from 'react'
import { CartContext } from '../../CartContext';

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 320, itemsToShow: 1, itemsToScroll: 1 },
    { width: 500, itemsToShow: 1 },
    { width: 650, itemsToShow: 1 },
    { width: 768, itemsToShow: 1 },
    { width: 1200, itemsToShow: 1 }
  ];


  const Opened = ({ isLoading, product }) => {
    const [cart, setCart] = useContext(CartContext)
    
    const addToCart = (product, e)=>{
        setCart([...cart, {product:product}]);
        // ==============display popup when add to chart is clicked=============
        // popupRef.current.style.display="block";
    }
    
      if (isLoading){
          return <div className="preloader"></div>
        }
        
        const {name, description, price, productRatings} = product.fields;
        let medias = [];
        if(product.fields.productImage){
            product.fields.productImage.forEach(elt => {
                medias.push(elt.fields.file.url);
            });
        }
          const stars = Array(5).fill(0);
              const colors={
                  blue: "blue",
                  gray: "#a9a9a9"
              }
          
    

    return (

    <div className='openProductPage'>
    <div className="descCap titleLeft descTitle">{name}</div>
            <div className="featuredProductTopGrid">
                <div className="imgSection">
                    <div className="imgWrapper">
                            <Carousel 
                            enableAutoPlay autoPlaySpeed={2500} 
                            breakPoints={breakPoints} 
                            alternate
                            renderPagination={({ pages, activePage, onClick }) => {
                                return (
                                    <>
                                    </>
                                )
                            }}
                            className="carouselWrapper"
                            >
                            {
                                medias.map(media=>(
                                    <OpenProductItem>
                                    <div className="productPageImgWrapper">
                                        <img className='gridImage' src={media} alt={name} />
                                    </div>
                                    </OpenProductItem>
                                ))
                            }
                        </Carousel>
                    </div>
                </div>
                <div className="featuredProductTopDesc">
                    <div className="descTitle titleLeft">Description</div>
                    <div className="descText">
                        {description}
                    </div>
                    <div className="place-oder controlLinkWrapper ">
                        <p onClick={(e)=>{addToCart(product,e)}} className="controlLinks addToCart callToAction">add to cart</p>
                        <p className="controlLinks callToAction">Buy</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Opened
