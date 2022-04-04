import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useSelector } from "react-redux"
import CartItems from './CartItems'
import NoCarts from './NoCarts'
const Cart = () => {
    const carts = useSelector((state) => state.cart)
    console.log('Carts: ', carts)
    return (
        <Container fluid>
            <div className="pageBanner" style={{
                backgroundImage: "url('/assets/img/slider/slider-2.jpg')",
                padding: '150px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                <h2>Your Cart</h2>
                <p><Link to="/">Home</Link> / Shop</p>
            </div>
            <Container className="section-padding">
                <Row>
                    {
                        carts.carts?.length > 0 ? <CartItems carts={carts}></CartItems> : <NoCarts></NoCarts>
                    }
                </Row>
            </Container>
        </Container >
    )
}

export default Cart