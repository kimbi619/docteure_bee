import React from 'react'
import Item from './Item'
import Carousel from 'react-elastic-carousel';
import CarouselItem from './CarouselItem';


const breakPoints = [
    { width: 1, itemsToShow: 3.3 },
    { width: 320, itemsToShow: 4.5, itemsToScroll: 2 },
    { width: 500, itemsToShow: 5.5 },
    { width: 650, itemsToShow: 6.3 },
    { width: 768, itemsToShow: 7 },
    { width: 1200, itemsToShow: 4 }
  ];

const CategoryCarousel = ({products, onFilter}) => {
    const categories = [
        {
            name: "pills",
            img: "https://source.unsplash.com/kfJkpeI6Lgc"
        },
        {
            name: "glocks",
            img: "https://source.unsplash.com/41SKIzYcFh0"
        },
        {
            name: "weed",
            img: "https://source.unsplash.com/qcCPIhhdgTw"
        },
        {
            name: "category",
            img: "https://source.unsplash.com//yWvzlSnSs3g"
        },
        {
            name: "sandals",
            img: "https://source.unsplash.com/random"
        },
    ]
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

            {
                categories.map((cat, index) => (
                    <Item key = {index}>
                        <CarouselItem onFilter={onFilter} name={cat.name} img={cat.img} />
                    </Item>
                ))
            }
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
