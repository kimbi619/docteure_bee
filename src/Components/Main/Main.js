import React from 'react';
import { Route, Switch } from 'react-router';
import Cart from './Cart/Cart';
import './Main.css';
import OpenProduct from './Products/Open-product/OpenProduct';
import Products from './Products/Products'
import { CartContextProvider } from './CartContext';

const Main = ({ products,  handleChangeLanguage })=> {
    
    return (
        <div>
            <CartContextProvider>
            <div className="container">
                <Switch>
                    <Route path="/product/:id" component={OpenProduct}/>
                    <Route path="/products">
                        <Products products={products}  />
                    </Route>
                    <Route path="/cart" component={Cart} />
                </Switch>
            </div>
            </CartContextProvider>
        </div>
    )
}

export default Main;
