import React from 'react'

const CarouselItem = ({ name, img, onFilter }) => {
    // const changeCat = e=>{
    //     console.log(e.target);
    // }
    return (
        <>
           <div onClick={cat =>onFilter(cat)} data-cat={name} className="carosel" draggable={true}>
                <div className="wrapper">
                    <img className="categoryImage" src={img} alt={name} />
                </div>
                <p>{name}</p>

            </div> 
        </>
    )
}

export default CarouselItem
