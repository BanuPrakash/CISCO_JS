import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { CartContext } from '../context/CartContextProvider';

export default function ProductCard({ product }) {
    let { id, image, title, description, price } = product;
    let { addToCart } = useContext(CartContext);
    return (
        <div className='col-md-4'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    Rs. {price} &nbsp;
                    <Button variant="primary" onClick={() => addToCart({
                        id,
                        image,
                        title,
                        description,
                        price,
                        quantity: 1,
                        amount: price 
                    })}>Add to Cart</Button>
                </Card.Footer>
            </Card>
        </div>
    )
}
