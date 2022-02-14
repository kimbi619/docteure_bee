import React from 'react'
import { Link } from 'react-router-dom'
import honey from '../../img/honey.jpg'
import pollen from '../../img/pollen.jpg'
import propolis from '../../img/propolis.jpg'
// import Legend from './Legend'

import { useTranslation } from 'react-i18next'
import YouTube from 'react-youtube';


const HomePage = () => {

    const opts = {
        // height: '390',
        // width: '640',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };

      const { t } = useTranslation();
    return (
        <div className='homepage'>
            <div className="heroSection">
                <div className="container">
                    <h1>We are backyard beekeepers (hobbists) with a 
                    successful honey production and bee-colonies development</h1>
                    <Link to='/products'><p className="callToAction">{t("homepage.heroSection.callToAction")}</p></Link>                 
                </div>
            </div>
            {/* <Legend /> */}
            <div className="siteDesc">
                <h2 className="descTitle">Description</h2>
                <p className="descText">
                We do all different kind of honey (spring, summer, fall, artisanal and churned). Also, our
                 bees produce pollen, propolis and royal jelly. We develop nuclei in early spring to provide other 
                 bee-keepers. Also, we are in urge to develop a new product ''Energyn'' 
                that boost an immune system and fight many diseases including Covid.
                </p>
                <div className="descText">
                    <Link to="/contact-us"><p className='hyperLink'>connect with us to learn more</p></Link>
                </div>
            </div>

            <div className="featuredProducts">
                <h2 className="descTitle">Featured Products</h2>
                <div className="container">
                    <div className="gridWrapper">
                        <div className="gridItem">
                            <Link to="/honey">
                                <div className="imgWrapper">
                                    <img className='gridImage' src={honey} alt="Honey" />
                                </div>
                                <div className="desc descTitle">Honey</div>
                            </Link>
                        </div>
                        <div className="gridItem">
                            <Link to="/pollen">
                                <div className="imgWrapper">
                                    <img className='gridImage' src={pollen} alt="Honey" />
                                </div>
                                <div className="desc descTitle">Pollen</div>
                            </Link>
                        </div>
                        <div className="gridItem">
                            <Link to="/royal-jelly">
                                <div className="imgWrapper">
                                    <img className='gridImage' src={pollen} alt="Honey" />
                                </div>
                                <div className="desc descTitle">royal jelly</div>
                            </Link>
                        </div>
                        <div className="gridItem">
                            <Link to="/propolis">
                                <div className="imgWrapper">
                                    <img className='gridImage' src={propolis} alt="Honey" />
                                </div>
                                <div className="desc descTitle">propolis</div>
                            </Link>
                        </div>
                        <div className="gridItem">
                            <Link to="/immune-booster">
                                <div className="imgWrapper">
                                    <img className='gridImage' src={pollen} alt="Honey" />
                                </div>
                                <div className="desc descTitle">immune booster</div>
                            </Link>
                        </div>
                        <div className="gridItem">
                            <Link to="/hydromel">
                                <div className="imgWrapper">
                                    <img className='gridImage' src={pollen} alt="Honey" />
                                </div>
                                <div className="desc descTitle">hydromel</div>
                            </Link>
                        </div>
                    </div>
                    <Link to="/products"><p className='seeAll hyperLink'>See full product list</p></Link>
                </div>
            </div>

            <div className="container characteristics">
                <div className="descTitle">Our amazing features</div>
            </div>
            <div className="container characteristics">
                <div className="featuredProductTopGrid">
                    <div className="imgSection">
                        <div className="imgWrapper">
                            <YouTube className='youtube' videoId="VyL8QfQBHFw" opts={opts} />
                        </div>
                    </div>
                    <div className="featuredProductTopDesc">
                        <div className="descTitle titleLeft">ABOUT ME</div>
                        <div className="descText">
                            Our bee-keeping farm exists since 2019 and
                            has 18 hives. We are backyard beekeepers (hobbists) with a successful honey
                            production and bee-colonies development. We do all different kind of honey
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage
