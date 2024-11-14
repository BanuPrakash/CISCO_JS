import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from '../redux/cartSlice';

export default function ProductCard({ product }) {
    let { id, image, title, description, price } = product;
    let dispatch = useDispatch(); // hook
    return (
        <div className='col-md-4'>
            <Card style={{ width: '18rem' }}>
                <Link to={`details/${id}`}>
                    <Card.Img variant="top" src={image} />
                </Link>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    Rs. {price} &nbsp;
                    <Button variant="primary" onClick={() => {
                        dispatch(addToCart({
                            id,
                            title,
                            image,
                            price,
                            quantity: 1,
                            amount: price
                        }))
                    }}>Add to Cart</Button>
                </Card.Footer>
            </Card>
        </div>
    )
}
