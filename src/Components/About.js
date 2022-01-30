import beegirl from '../img/beegirl.png'

const About = () => {
  return (
  <div className='about-page'>
    <div className="container">
        <div className="aboutFlexContainer">
            <div className="imgSection">
                <div className="imgWrapper">
                    <img className='gridImage' src={beegirl} alt="Honey" />
                </div>
            </div>
            <div className="aboutTextSection">
                <div className="descTitle titleLeft">ABOUT ME</div>
                <div className="descText">Native of North of Russia, dentist, Victoria Kuzina established 
                in Québec in 1999. Being a dentist, Victoria continued her studies and became a certified 
                dentist in Québec in 2010. Being passionate about beekeeping since her childhood, Victoria 
                started beekeeping with the only 2 beehives in 2019. Now, we raised our little farm up to 18
                 hives. Beekeeping studies, 
                constant education and bee-friendly approach are VERY MUCH APPRECIATED BY OUR CLIENTS.
                </div>
            </div>
        </div>


        <div className="aboutFlexContainer">
            <div className="aboutTextSection">
                <div className="descText">keep a reasonable number of healthy 
                hives, have a bee-friendly approach, develop new products as 
                ''Energyn'' (Immune Booster) and be accessible
                 to our clients are the main goals of having quality beekeeping.
                </div >
                <div className="descText">
                Our bee-keeping farm exists since 2019 and has 18 hives. We are backyard 
                beekeepers (hobbists) with a successful honey 
                production and bee-colonies development. We do all different kind of honey
                </div>
            </div>
            <div className="imgSection">
                <div className="imgWrapper">
                    <img className='gridImage' src={beegirl} alt="Honey" />
                </div>
            </div>
        </div>
        </div>
  </div>
  )
};

export default About;
