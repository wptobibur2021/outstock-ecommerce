import React, { useState } from 'react'
import { Image, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { MdClear } from "react-icons/md";
import { useDispatch } from 'react-redux'
import { removeCart } from '../../redux/cartSlice'
import './Cart.css'
const CartTable = ({ cart }) => {
    //const quantity = cart.qty
    const dispatch = useDispatch()
    const [qty, setQty] = useState('1')
    const qtyPlus = () => {
        setQty(Number(qty) + 1)
    }
    const qtyMinus = () => {
        if (qty > 1) {
            setQty(qty - 1)
        }
    }
    const handleChange = (e) => {
        setQty(e.target.value)
    }


    return (
        <>
            <div className="cartCaontainer">
                <h5>Cart Products</h5>
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
                    {
                        cart.carts?.map((cart, id) => (
                            <tr className="cartTableTr" key={id}>
                                <td className="cartTableTd"><Image className="cartImg" src={cart.image} alt='Bakix Furniture' /></td>
                                <td className="cartTableTd"><Link to="">{cart.name}</Link></td>
                                <td className="cartTableTd">${cart.price}</td>
                                <td className="cartTableTd">
                                    <div className="productQty">
                                        <div className="qtyMinus" onClick={qtyMinus}>-</div>
                                        <input onChange={handleChange} className="qty" type="text" value={cart.qty}></input>
                                        <div className="qtyPlus" onClick={qtyPlus}>+</div>
                                    </div>
                                </td>
                                <td className="cartTableTd">${cart.qty * cart.price}</td>
                                <td className="cartTableTd" onClick={() => dispatch(removeCart(cart))}><MdClear style={{ cursor: "pointer" }} /></td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </>
    )
}

export default CartTable