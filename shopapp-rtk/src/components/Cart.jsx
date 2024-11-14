import React, { useContext } from 'react'

import { Button } from 'react-bootstrap';
import CartList from './CartList';
import { useSelector } from 'react-redux';

export default function Cart() {
  let {cartItems} = useSelector(state => state.cart)
  return (
    <div className='container'>
      {
        cartItems.map(item => <CartList key={item.id} product={item}/>)
      }
      <div className='row'>
        <div className='col-md-8'> &nbsp;</div>
        <div className='col-md-4'>Total: {0}</div>
      </div>
      <div className='row'>
        <div className='col-md-8'> &nbsp;</div>
        <div className='col-md-4'><Button >Checkout</Button></div>
      </div>
    </div>
  )
}
