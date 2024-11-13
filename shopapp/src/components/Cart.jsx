import React, { useContext } from 'react'
import { CartContext } from '../context/CartContextProvider'
import { Button } from 'react-bootstrap';
import CartList from './CartList';

export default function Cart() {
  let {total, cartItems, clearCart} = useContext(CartContext);
  return (
    <div className='container'>
      {
        cartItems.map(item => <CartList key={item.id} product={item} />)
      }
      <div className='row'>
        <div className='col-md-8'> &nbsp;</div>
        <div className='col-md-4'>Total: {total}</div>
      </div>
      <div className='row'>
        <div className='col-md-8'> &nbsp;</div>
        <div className='col-md-4'><Button onClick={clearCart}>Checkout</Button></div>
      </div>
    </div>
  )
}
