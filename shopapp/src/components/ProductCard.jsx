import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function ProductCard({ product }) {
    return (
        <div className='col-md-4'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={product.image} />
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>
                        {product.description}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    Rs. {product.price} &nbsp;
                    <Button variant="primary">Add to Cart</Button>
                </Card.Footer>
            </Card>
        </div>
    )
}
