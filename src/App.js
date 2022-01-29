import './App.css';
import { useRef, useEffect } from 'react';
import { Client } from './Client';
import Main from './Components/Main/Main';
import Nav from './Components/Nav/Nav';
import { Route, Switch } from 'react-router';
import useLocalStorage from './UseLocalStorage';
import HomePage from './Components/HomePage';
import Contact from './Components/Contact';
import About from './Components/About';
import Footer from './Components/Footer/Footer';
import Honey from './Components/FeaturedProducts/Honey';
import OtherMainProduct from './Components/FeaturedProducts/OtherMainProduct';
import Winery from './Components/Winery';



import { useTranslation } from "react-i18next";


function App() {


  const [products, setProducts] = useLocalStorage('products', [])
  useEffect(() => {  
    Client.getEntries()
    .then(res=>{
      setProducts(res.items);
    })
    .catch(err=>console.log(err))

  }, []);

  const handleFilter = (category)=>{
    console.log(category.target);
  }



  const { t } = useTranslation();
  const appWrap = useRef('appWrap');
  return (
    <div className="App">
      {/* <h1>{t("welcome_text")}</h1> */}
      <Nav products={products} />
      {/* <Route path="/products" exact><CategoryCarousel onFilter={handleFilter} products={products} /></Route> */}
      
      <Main products={products} />
      
      <Switch>
      
        <Route path="/contact-us" component={Contact}  />
        <Route path="/about" component={About} />
        <Route path="/winery" component={Winery} />
        <Route path="/pollen" component={OtherMainProduct} />
        <Route path="/hydromel" component={OtherMainProduct} />
        <Route path="/propolis" component={OtherMainProduct} />
        <Route path="/royal-jelly" component={OtherMainProduct} />
        <Route path="/immune-booster" component={OtherMainProduct} />
        <Route path="/honey" exact component={Honey} />
        <Route path="/" exact component={HomePage} />
        {/* <Route path="/" exact component={HomePage} /> */}
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
