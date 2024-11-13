import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavbarComponent() {
    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#home">ACME Shop</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Products</Nav.Link>
                    <Nav.Link href="#features">Cart</Nav.Link>
                    <Nav.Link href="#pricing">New Product</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}
