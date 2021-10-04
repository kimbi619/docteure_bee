import './App.css';
import { useEffect } from 'react';
import { Client } from './Client';
import Main from './Components/Main/Main';
import Nav from './Components/Nav/Nav';
import Register from './Components/Registration/Register';
import { Route, Switch } from 'react-router';
import CategoryCarousel from './Components/Nav/CategoryCarousel';
import useLocalStorage from './UseLocalStorage';



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



  return (
    <div className="App">
      <Nav products={products} />
      <Route path="/" exact><CategoryCarousel onFilter={handleFilter} products={products} /></Route>
      <Main products={products} />
      
      <Switch>
        {/* <Route path="/products" component={Main } /> */}
        <Route path="/register/signup" component={Register}  />
        <Route path="/register/login" component={Register}  />
      </Switch>
    </div>
  );
}

export default App;
