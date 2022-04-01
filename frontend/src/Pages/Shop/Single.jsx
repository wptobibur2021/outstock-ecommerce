import React, { useState } from 'react'
import './Single.css'
import { Col, Image } from 'react-bootstrap'
import { FaEye, FaHeart, FaSlidersH, FaCartPlus } from "react-icons/fa"
import Modals from './../../Components/Products/Modals'
const Single = ({ product }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { name, price, image, image2 } = product;
    return (
        <Col xm sm={6} md={4} lg={4}>
            <div className="productItem">
                <div className="productImg p-relative" onClick={handleShow} style={{ cursor: 'pointer' }}>
                    <Image src={image} fluid />
                    <Image fluid className="productImg-2" src={image2} />
                    <div className="productAction p-absolute">
                        <li className="productIcone" onClick={handleShow}><FaEye /></li>
                        <li className="productIcone"><FaHeart /></li>
                        <li className="productIcone"><FaSlidersH /></li>
                    </div>
                </div>
                <div className="productText">
                    <div className="productInnerText">
                        <div className="productTitle">
                            <h4 style={{ cursor: 'pointer' }} onClick={handleShow}>{name}</h4>
                        </div>
                        <div className="productPrice p-relative">
                            <span>${price}.00</span>
                            <span className="oldPrice">$110.00</span>
                        </div>
                        <div className="addToCart p-absolute">
                            <li onClick={handleShow} className="addToCartText">Add to cart <FaCartPlus /></li>
                        </div>
                    </div>
                </div>
            </div>
            <Modals product={product} show={show} close={handleClose}></Modals>
        </Col>
    )
}

export default Single