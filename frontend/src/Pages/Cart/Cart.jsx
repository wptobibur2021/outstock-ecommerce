import React from 'react'
import { Container, Col, Row, Button } from 'react-bootstrap'
import CartTable from '../../Components/Cart/CartTable'
import { Link } from 'react-router-dom'
const Cart = () => {
    return (
        <Container fluid>
            <div className="pageBanner" style={{
                backgroundImage: "url('/assets/img/slider/slider-2.jpg')",
                padding: '150px',
                /* margin: 0 auto; */
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                <h2>Your Cart</h2>
                <p><Link to="/">Home</Link> / Shop</p>
            </div>
            <Container className="section-padding">
                <Row>
                    <Col sm={12} md={9} lg={9}>
                        <CartTable></CartTable>
                    </Col>
                    <Col sm={12} md={3} lg={3}>
                        <div className="cartTotal">
                            <h2>Cart Totals</h2>
                            <ul className="cartTotalItems">
                                <li className="cartTotalItem">Subtotal: <span>$250.00</span></li>
                                <li className="cartTotalItem">Total: <span>$250.00</span></li>
                            </ul>
                            <Button className="btnOutStock">Checkout</Button>
                        </div>
                    </Col>
                </Row>

            </Container>
        </Container>
    )
}

export default Cart