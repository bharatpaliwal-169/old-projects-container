import React, { Component } from 'react';
import Product from './Product';
import Title from './Title';
//import {storeProducts} from '../data';
import {ProductConsumer} from '../context';
import Footer from './Footer';

export default class ProductList extends Component {
    // state = {
    //     products: storeProducts
    // };
    render() {
        
        return (
            <React.Fragment>
                <div className='py-2'>
                    <div className='container' >
                        <Title name='Our' title='Products'/>
                        <div className='row'>
                            <ProductConsumer>
                                {value=>{
                                //    console.log(value);
                                    return value.products.map( product => {
                                        return <Product key={product.id} product={product} />
                                    })
                                }}
                            </ProductConsumer>
                        </div>
                    </div>
                </div>
                
                <Footer/>

            </React.Fragment>
            
        );
    }
}
