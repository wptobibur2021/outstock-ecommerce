import React from 'react'
import { Image, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { MdClear } from "react-icons/md";
import './Cart.css'
const CartTable = () => {
    return (
        <>
            <div className="cartCaontainer">
                <h2>Cart Products</h2>
            </div>
            <Table responsive={true} bordered={true}>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Product</th>
                        <th>Unit Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="cartTableTr">
                        <td className="cartTableTd"><Image className="cartImg" src="./assets/img/product/product-4.jpg" alt='Bakix Furniture' /></td>
                        <td className="cartTableTd"><Link to="">Bakix Furniture</Link></td>
                        <td className="cartTableTd">$120</td>
                        <td className="cartTableTd">
                            <div className="productQty">
                                <div className="qtyMinus">-</div>
                                <input className="qty" type="text" value="1"></input>
                                <div className="qtyPlus">+</div>
                            </div>
                        </td>
                        <td className="cartTableTd">$130.00</td>
                        <td className="cartTableTd"><MdClear style={{ cursor: "pointer" }} /></td>
                    </tr>
                    <tr className="cartTableTr">
                        <td className="cartTableTd"><Image className="cartImg" src="./assets/img/product/product-4.jpg" alt='Bakix Furniture' /></td>
                        <td className="cartTableTd"><Link to="">Bakix Furniture</Link></td>
                        <td className="cartTableTd">$120</td>
                        <td className="cartTableTd">
                            <div className="productQty">
                                <div className="qtyMinus">-</div>
                                <input className="qty" type="text" value="1"></input>
                                <div className="qtyPlus">+</div>
                            </div>
                        </td>
                        <td className="cartTableTd">$130.00</td>
                        <td className="cartTableTd"><MdClear style={{ cursor: "pointer" }} /></td>
                    </tr>
                </tbody>
            </Table>
        </>
    )
}

export default CartTable