import './App.css';
import { useEffect } from 'react';
import { Client } from './Client';
import Main from './Components/Main/Main';
import Nav from './Components/Nav/Nav';
import Register from './Components/Registration/Register';
import { Route, Switch } from 'react-router';
import CategoryCarousel from './Components/Nav/CategoryCarousel';
import useLocalStorage from './UseLocalStorage';
import HomePage from './Components/HomePage';
import Contact from './Components/Contact';
import app from './fire'
import Footer from './Components/Footer/Footer';
import Honey from './Components/FeaturedProducts/Honey';
import OtherMainProduct from './Components/FeaturedProducts/OtherMainProduct';



function App() {
  console.log(app);


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



  return (
    <div className="App">
      <Nav products={products} />
      {/* <Route path="/products" exact><CategoryCarousel onFilter={handleFilter} products={products} /></Route> */}
      
      <Main products={products} />
      
      <Switch>
        
        <Route path="/register/signup" component={Register}  />
        <Route path="/register/login" component={Register}  />
        <Route path="/contact-us" component={Contact}  />
        <Route path="/pollen" component={OtherMainProduct} />
        <Route path="/hydromel" component={OtherMainProduct} />
        <Route path="/propolis" component={OtherMainProduct} />
        <Route path="/royal-jelly" component={OtherMainProduct} />
        <Route path="/immune-booster" component={OtherMainProduct} />
        <Route path="/honey" exact component={Honey} />
        <Route path="/" exact component={HomePage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
