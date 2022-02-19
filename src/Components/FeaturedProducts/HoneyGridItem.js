import React from 'react';
import { useTranslation } from 'react-i18next';
// import pollen from '../../img/pollen.jpg'
// import honey from '../../img/honey.jpg'
// import propolis from '../../img/propolis.jpg'

const HoneyGridItem = ({ att }) => {
    const { t } = useTranslation(); 
    console.log(att)
  return (
    <div className="gridItem">
        <div className="featuredHoneyItem">
            <div className="imgWrapper">
                <img className='gridImage' src={att.img} alt="Honey" />
            </div>
            <div className="name-title">
                <div className="honey-name descText">{att.name}</div>
                <div className="honey-price descText">${att.priceBig}</div>
            </div>
        </div>
        <div className="desc">
            <div className="descText">{att.desc}</div>
            <a href={`/product/${att.linkedId}`}>
                <p className="honeyItemLink callToAction">{ t("honey.place_order") }</p>
            </a>
        </div>
    </div>
  )
};

export default HoneyGridItem;
