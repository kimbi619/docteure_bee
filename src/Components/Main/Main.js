import React from 'react';
import { Route, Switch } from 'react-router';
import Cart from './Cart/Cart';
import './Main.css';
import OpenProduct from './Products/Open-product/OpenProduct';
import Products from './Products/Products'

const Main = ({ products })=> {
    
    return (
        <div>
            <div className="container">
                <Switch>
                    <Route path="/product/:id" component={OpenProduct}/>
                    <Route path="/products">
                        <Products products={products}  />
                    </Route>
                    <Route path="/cart" component={Cart} />
                </Switch>
            </div>
        </div>
    )
}

export default Main;
