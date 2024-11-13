import React, { useContext } from 'react'
import { CartContext } from '../context/CartContextProvider';
import { Button } from 'react-bootstrap';

export default function CartList({ product }) {
    let { id, image, title, price, quantity, amount } = product;
    let { increment } = useContext(CartContext);

    return (
        <div className='row'>
            <div className='col-md-2'>
                <img src={image} style={{ width: '50px' }} />
            </div>
            <div className='col-md-2'>
                {title}
            </div>
            <div className='col-md-4'>
                <Button> - </Button>
                &nbsp;
                {quantity}
                &nbsp;
                <Button onClick={() => increment(id)}> + </Button>
            </div>
            <div className='col-md-2'>
                Price {price}
            </div>
            <div className='col-md-2'>
                Amount {amount}
            </div>
        </div>
    )
}
