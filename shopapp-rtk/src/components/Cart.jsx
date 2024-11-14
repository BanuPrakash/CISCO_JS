import React, { useContext } from 'react'

import { Button } from 'react-bootstrap';
import CartList from './CartList';

export default function Cart() {
  
  return (
    <div className='container'>
      
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
