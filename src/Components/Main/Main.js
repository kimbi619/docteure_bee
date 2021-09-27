import React from 'react';
import { Client } from '../../Client';
import './Main.css';
import Products from './Products/Products'

const Main = ({ products })=> {
    
    return (
        <div>
            <div className="container">
               <Products products={products}  />
            </div>
        </div>
    )
}

export default Main;
