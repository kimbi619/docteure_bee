import React from 'react';
import { Route, Switch } from 'react-router';
import { Client } from '../../Client';
import './Main.css';
import OpenedProduct from './Products/Open-product/OpenedProduct';
import Products from './Products/Products'

const Main = ({ products })=> {
    
    return (
        <div>
            <div className="container">
                <Switch>
                    <Route path="/product/:id" exact component={OpenedProduct} />
                    <Products products={products}  />
                </Switch>
            </div>
        </div>
    )
}

export default Main;
