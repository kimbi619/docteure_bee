import React from 'react';
import pollen from '../../img/pollen.jpg'
import honey from '../../img/honey.jpg'
import propolis from '../../img/propolis.jpg'

const HoneyGridItem = ({ att }) => {
    console.log(att)
  return (
    <div className="gridItem">
        <div className="featuredHoneyItem">
            <div className="imgWrapper">
                <img className='gridImage' src={att.img} alt="Honey" />
            </div>
            <div className="name-title">
                <div className="honey-name descText">{att.name}</div>
                <div className="honey-price descText">${att.price}</div>
            </div>
        </div>
        <div className="desc">
            <div className="descText">{att.desc}</div>
            <a href='#featuredHoneyProduct'>
                <p className="honeyItemLink callToAction">Place an order</p>
            </a>
        </div>
    </div>
  )
};

export default HoneyGridItem;
