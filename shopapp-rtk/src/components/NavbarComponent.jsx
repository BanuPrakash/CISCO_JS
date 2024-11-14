import React, { useContext } from 'react'
import { Badge } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


export default function NavbarComponent() {
    let {quantity} = useSelector(state => state.cart)
    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand>ACME Shop</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/">Products</Nav.Link>
                    <Nav.Link as={Link} to="/cart">Cart <Badge>{quantity}</Badge></Nav.Link>
                    <Nav.Link as={Link} to="/new_product">New Product</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}
