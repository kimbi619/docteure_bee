import pollen from '../../img/pollen.jpg'
import honey from '../../img/honey.jpg'
import './featuredItems.css'
import HoneyGridItem from './HoneyGridItem';
import { useState } from 'react'
import { useTranslation } from 'react-i18next';

const Honey = () => {
    const { t } = useTranslation();
    const [honeyTypes, setHoneyTypes] = useState([
        {
            id: 1,
            name: t("honey.variety.spring.title"),
            price: 13,
            img: pollen,
            desc: t("honey.variety.spring.text")
        },
        {
            id: 2,
            name: t("honey.variety.summer.title"),
            price: 20,
            img: honey,
            desc:t("honey.variety.summer.text")
        },
        {
            id: 3,
            name: t("honey.variety.churned.title"),
            price: 20,
            img: honey,
            desc: t("honey.variety.churned.text")
        },
        {
            id: 4,
            name: t("honey.variety.fall.title"),
            price: 17,
            img: pollen,
            desc: t("honey.variety.fall.text")
        },
        {
            id: 5,
            name: t("honey.variety.comb.title"),
            price: 13,
            img: honey,
            desc: t("honey.variety.comb.text")
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
                <div className="descTitle titleLeft">{ t("honey.main.title") }</div>
                <div className="descText">{ t("honey.main.text") }</div>
                <a href='#featuredHoneyProduct'><p className="callToAction">{ t("honey.main.call_to_action") }</p></a>
            </div>
        </div>
        <div id= "featuredHoneyProduct">
            <div className="descTitle"> Featured Honey</div>
            <div className="featuredProducts">
                <div className="container">
                    <div className="gridWrapper">
                        {
                            honeyTypes.map(honeyType=>(
                                <HoneyGridItem key={honeyType.id} att={honeyType} />
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
