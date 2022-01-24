import pollen from '../../img/pollen.jpg'
import honey from '../../img/honey.jpg'
import propolis from '../../img/propolis.jpg'
import './featuredItems.css'
import { Link } from 'react-router-dom';
import HoneyGridItem from './HoneyGridItem';
import { useState } from 'react'

const Honey = () => {
    const [honeyTypes, setHoneyTypes] = useState([
        {
            name: 'Spring honey',
            price: 523400,
            img: pollen,
            desc: 'it is the First harvest of the season in May. Very pale tiny slightly-yellow coloured honey, verydelicate and tender. Available format(s) : 500 g (7 $) and 1 kg (13 $)'
        },
        {
            name: 'Summer honey',
            price: 20,
            img: honey,
            desc: 'it is the First harvest of the season in May. Very pale tiny slightly-yellow coloured honey, verydelicate and tender. Available format(s) : 500 g (7 $) and 1 kg (13 $)'
        },
        {
            name: 'Churned honey',
            price: 20,
            img: honey,
            desc: 'it is the First harvest of the season in May. Very pale tiny slightly-yellow coloured honey, verydelicate and tender. Available format(s) : 500 g (7 $) and 1 kg (13 $)'
        },
        {
            name: 'fall honey',
            price: 17,
            img: pollen,
            desc: 'Liquid Fall honey : last honey of the season, fall honey, rich in minerals and more dense and intensive flavor.Available format(s) : 500 g (7 $) and 1 kg (13 $)'
        },
        {
            name: 'honey comb',
            price: 13,
            img: honey,
            desc: 'Available format(s) : 500 g (7 $) and 1 kg (13 $)'
        },
    ]);
  return (
  <div className='honey'>
      <div className="container">
        <div className="descCap titleLeft descTitle">honey</div>
        <div className="featuredProductTopGrid">
            <div className="imgSection">
                <div className="imgWrapper">
                    <img className='gridImage' src={pollen} alt="Honey" />
                </div>
            </div>
            <div className="featuredProductTopDesc">
                <div className="descTitle titleLeft">Description</div>
                <div className="descText">
                    By definition, honey only comes from honey bees. Honey is basically
                    a sugar solution of two simple sugars, glucose (dextrose) and fructose 
                    (levulose). Honey is produced from nectar, a sugary plant secretion high 
                    in moisture content, collected and converted by bees into honey. Contrary to 
                    what many people believe, honey os not a mixture of nectar and pollen. Both a physical 
                    and a chemical change occur in conversion of nectar to honey.
                </div>
                <a href='#featuredHoneyProduct'><p className="callToAction">Checkout our variety</p></a>
            </div>
        </div>
        <div id="featuredHoneyProduct">
            <div className="descTitle"> Featured Honey</div>
            <div className="featuredProducts">
                <div className="container">
                    <div className="gridWrapper">
                        {
                            honeyTypes.map(honeyType=>(
                                <HoneyGridItem att={honeyType} />
                            ))
                        }
                        {/* <HoneyGridItem att = {honeyType} /> */}
                        {/* <div className="gridItem">
                            <div className="imgWrapper">
                                <img className='gridImage' src={pollen} alt="Honey" />
                            </div>
                            <div className="desc descTitle">Pollen</div>
                        </div>
                        <div className="gridItem">
                            <div className="imgWrapper">
                                <img className='gridImage' src={pollen} alt="Honey" />
                            </div>
                            <div className="desc descTitle">royal jelly</div>
                        </div>
                        <div className="gridItem">
                            <div className="imgWrapper">
                                <img className='gridImage' src={propolis} alt="Honey" />
                            </div>
                            <div className="desc descTitle">propolis</div>
                        </div>
                        <div className="gridItem">
                            <div className="imgWrapper">
                                <img className='gridImage' src={pollen} alt="Honey" />
                            </div>
                            <div className="desc descTitle">immune booster</div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
  );
};

export default Honey;
