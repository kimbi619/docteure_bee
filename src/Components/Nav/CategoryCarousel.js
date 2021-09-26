import React from 'react'
import Item from './Item'
import Carousel from 'react-elastic-carousel';

const breakPoints = [
    { width: 1, itemsToShow: 3.3 },
    { width: 320, itemsToShow: 4.5, itemsToScroll: 2 },
    { width: 500, itemsToShow: 5.5 },
    { width: 650, itemsToShow: 6.3 },
    { width: 768, itemsToShow: 7 },
    { width: 1200, itemsToShow: 4 }
  ];

const CategoryCarousel = () => {
    return (
        <>
            <Carousel 
                enableAutoPlay autoPlaySpeed={2300} 
                breakPoints={breakPoints} 
                renderPagination={({ pages, activePage, onClick }) => {
                    return (
                        <>
                        </>
                    )
                  }}
                className="carouselWrapper"
                
            >

                <Item>
                    <div className="carosel" draggable={true}>
                        <div className="wrapper">
                            <img className="categoryImage" src="https://source.unsplash.com/kfJkpeI6Lgc" alt="pills" />
                        </div>
                        <p>Pills</p>

                    </div>
                </Item>
                <Item>
                    <div className="carosel">
                        <div className="wrapper">
                            <img className="categoryImage" src="https://source.unsplash.com/41SKIzYcFh0" alt="glocks" />
                        </div>
                        <p>Glocks</p>

                    </div>
                </Item>
                <Item>
                    <div className="carosel" >
                        <div className="wrapper">
                            <img className="categoryImage" src="https://source.unsplash.com/qcCPIhhdgTw" alt="weed" />
                        </div>
                        <p>weed</p>

                    </div>
                </Item>
                <Item>
                    <div className="carosel" draggable="false">
                        <div className="wrapper">
                            <img className="categoryImage" src="https://source.unsplash.com//yWvzlSnSs3g" alt="category" />
                        </div>
                        <p>category</p>

                    </div>
                </Item>
                <Item>
                    <div className="carosel" draggable="false">
                        <div className="wrapper">
                            <img className="categoryImage" src="https://source.unsplash.com/random" alt="sandals" />
                        </div>
                        <p>sandals</p>

                    </div>
                </Item>
                <Item>
                    <div className="carosel viewAll" draggable="false" >
                        <p className="viewAllText">View all</p>
                    </div>
                </Item>
            </Carousel>
        </>
    )
}

export default CategoryCarousel
