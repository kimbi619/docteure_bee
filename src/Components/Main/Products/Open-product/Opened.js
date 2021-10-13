import Carousel from 'react-elastic-carousel';
import OpenProductItem from './OpenProductItem';
import { IoStarSharp } from 'react-icons/io5'

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 320, itemsToShow: 1, itemsToScroll: 1 },
    { width: 500, itemsToShow: 1 },
    { width: 650, itemsToShow: 1 },
    { width: 768, itemsToShow: 1 },
    { width: 1200, itemsToShow: 1 }
  ];


  const Opened = ({ isLoading, product }) => {
      
    
    
      if (isLoading){
          return <div className="preloader"></div>
        }
        
        const {name, description, price, productRatings} = product;
        let medias = [];
        if(product.productImage){
            product.productImage.forEach(elt => {
                medias.push(elt.fields.file.url);
            });
        }
          const stars = Array(5).fill(0);
              const colors={
                  blue: "blue",
                  gray: "#a9a9a9"
              }
          
    

    return (
        <div>
            <div className="productFlexWrapper">
            <div className="flexItem">
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
                                    <img src={media} alt={name} />
                                </div>
                                </OpenProductItem>
                            ))
                        }
                    </Carousel>
                </div>
                        
                <div className="productDesc">
                    <div className="price-rate">
                        <div className="name">{name}</div>
                        <p className="price">${price}</p> 
                        <div className="rating">
                            {stars.map((_, index)=>(
                                <IoStarSharp 
                                    key = {index} 
                                    color={(productRatings) > index ? colors.blue: colors.gray}
                                />
                            ))}

                        </div>
                    </div>
                    
                </div>
           
                    <div className="itemDescription">
                        <h4 className="title">Description</h4>
                        <p>{description} </p>
                    </div>

                </div>
                <div className="flexItem">
                    <h2 className="desktopTitle">{name}</h2>
                    <button className="buyBtn addToCart">Add to cart</button>
                    <button className="buyBtn productPlaceOrder">Place order</button>
                </div>
            </div>
            
        </div>
    )
}

export default Opened
