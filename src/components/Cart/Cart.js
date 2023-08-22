import React, { Component } from 'react'
import Title from '../Title';
import CartColumns from './CartColumns';
import {ProductConsumer} from '../../context';
import EmptyCart from './EmptyCart';
import CartList from './CartList';
import CartTotals from './CartTotals';
export default class Cart extends Component {
  render() {
    console.log(window.history);
    return (
      <section>
        <ProductConsumer>
          {value => {
            const {cart} = value;
            if(cart.length>0){
              return(
                <React.Fragment>
                <Title name='your' title='cart' />
                <CartColumns />
                <CartList value={value}/>
                <CartTotals value={value} history={window.history}/>
                </React.Fragment>
              );
            }
            else {
              return <EmptyCart/>
            }
          }}
        </ProductConsumer>
      </section>
    )
  }
}
