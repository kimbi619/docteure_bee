import React from 'react';
import { Client } from '../../Client';
import './Main.css';
import Products from './Products/Products'

export default class Main extends React.Component {
    
    state = {
        products: []
    }

    componentDidMount(){
        Client.getEntries()
        .then(res=>{{
            this.setState({
                products: res.items
            })}
        })
        .catch(err=>console.log(err))
    }
    render(){
        return (
            <div>
                <div className="container">
                   <Products products={this.state.products} />
                </div>
            </div>
        )
    }
}

