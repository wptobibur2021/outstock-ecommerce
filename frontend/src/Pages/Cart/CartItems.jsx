import React from 'react'
import { Col, Button } from 'react-bootstrap'
import CartTable from '../../Components/Cart/CartTable'
const CartItems = ({ carts }) => {
    return (
        <>
            <Col sm={12} md={9} lg={9}>
                <CartTable cart={carts}></CartTable>
            </Col>
            <Col sm={12} md={3} lg={3}>
                <div className="cartTotal">
                    <h5>Cart Totals</h5>
                    <ul className="cartTotalItems">
                        <li className="cartTotalItem">Subtotal: <span>${carts.total}.00</span></li>
                        <li className="cartTotalItem">Total: <span>${carts.total}.00</span></li>
                    </ul>
                    <Button className="btnOutStock">Checkout</Button>
                </div>
            </Col>
        </>
    )
}

export default CartItems