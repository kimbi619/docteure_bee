import React, {useState} from 'react';
import { useTranslation } from 'react-i18next';
import pollen from '../../img/pollen.jpg'
import propolis from '../../img/propolis.jpg'

const OtherMainProduct = (props) => {
 const { t } = useTranslation(); 
  const [mainProducts, setMainProducts] = useState(
    [
      {
        route: "royal-jelly",
        name: t("other_products.royal_jelly.title"),
        price: 534,
        img: pollen,
        desc: "It is the glandular brood food adult worker bee secrete from head glands. Royal jelly is a pasty, creamy-white substance with a slightly pungent odor and a somewhat bitter taste. It is rich in vitamins and contains substantial amounts of sugars, proteins and certain organic acids."
      },
      {
        route: "propolis",
        name: t("other_products.propolis.title"),
        price: 483,
        img: propolis,
        desc: "Propolis: is a sticky, resinous gum gathered from pine trees, flower buds and other sources for use as a sealant in the hive. Propolis has antibacterial, antifungal and antimicrobial properties and is key to keeping the bee nest a healthy place to live."
      },
      {
        route: "pollen",
        name: t("other_products.pollen.title"),
        price: 483,
        img: pollen,
        desc: "IT Is a source of protein for the bee diet since nectar offers little nourishment other than carbohydrates. It is consumed by humans as a food and dietary supplement (a protein source). Based on varying amounts of research, pollen has been advocated as a treatment for sterility, for prostate gland disorders, cancer and in allergy relief. Athletes have advocated pollen use, particularly for stamina, weight gain and body conditioning."
      },
      {
        route: "hydromel",
        name: t("other_products.hydromel.title"),
        price: 483,
        img: pollen,
        desc: "It is a mixture of Honey and water that becomes mead when fermented. In English, Hydromel is generally assumed to be 10% alcohol or below, but Hydromels made and sold in Quebec can be as high as 15% alcohol. Fermented Hydromel is called “hydromel vineux” in French.A place where Hydromel is made is called a “hydromellerie” in French."
      },
      {
        route: "immune-booster",
        name: t("other_products.immune_booster.title"),
        price: 483,
        img: pollen,
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio, reprehenderit quasi unde minima labore quod vero eaque dicta fuga magnam iusto molestiae, atque sint neque eos qui at nihil natus hic libero ut nobis inventore ullam nam! Nulla provident similique maxime beatae non ipsam minus aliquam, eligendi ratione, porro nisi."
      },
    ]
  );

  const path = props.match.path
  const route =  path.replace('/', '')
  const item = mainProducts.filter(mainProduct=>mainProduct.route === route)
  return (
  <div>
    <div className="container">
    <div className="descCap titleLeft descTitle">{item[0].name}</div>
        <div className="featuredProductTopGrid">
            <div className="imgSection">
                <div className="imgWrapper">
                    <img className='gridImage' src={item[0].img} alt="Honey" />
                </div>
            </div>
            <div className="featuredProductTopDesc">
                <div className="descTitle titleLeft">Description</div>
                <div className="descText">
                    {item[0].desc}
                </div>
                <div className="place-oder controlLinkWrapper ">
                  <a className='controlLinks' href='#featuredHoneyProduct'><p className="addToCart callToAction">{ t("other_products.add_to_cart") }</p></a>
                  <a className='controlLinks' href='#featuredHoneyProduct'><p className="callToAction">{ t("other_products.buy") }</p></a>
                </div>
            </div>
        </div>
        </div>
  </div>
  )
};

export default OtherMainProduct;
