import './App.css';
import { useEffect } from 'react';
import { Client } from './Client';
import Main from './Components/Main/Main';
import Nav from './Components/Nav/Nav';
import { Route, Switch } from 'react-router';
import useLocalStorage from './UseLocalStorage';
import HomePage from './Components/Home/HomePage';
import Contact from './Components/Contact';
import About from './Components/About';
import Footer from './Components/Footer/Footer';
import Honey from './Components/FeaturedProducts/Honey';
import OtherMainProduct from './Components/FeaturedProducts/OtherMainProduct';
import Winery from './Components/Winery';



import i18next from 'i18next';


function App() {



  const changeLanguage = (lang)=>{
    i18next.changeLanguage(lang)
    console.log('success')
  }
  const [products, setProducts] = useLocalStorage('products', [])
  useEffect(() => {  
    let currentLang = i18next.language
    Client.getEntries({locale: currentLang === 'fr' ? 'fr': 'en-US'})
    .then(res=>{
      setProducts(res.items);
    })
    .catch(err=>console.log(err))
    
  }, [changeLanguage]);
  
  


  return (
    <div className="App">
      <Nav handleChangeLanguage = {changeLanguage} products={products} />
      <div className='mainAppWrapper'>
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
        <Route path="/honey" component={Honey} />
        <Route path="/" exact component={HomePage} />
      </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
