import React, { useState } from 'react'
import './Single.css'
import { Image } from 'react-bootstrap'
import { FaEye, FaHeart, FaSlidersH, FaCartPlus } from "react-icons/fa"
import Modals from './Modals'
const Carousel = ({ product }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { name, price, image, image2 } = product;
    return (
        <div className="discountItem">
            <div className="discountImg p-relative">
                <a href="https://techbd71.com">
                    <Image src={image} fluid />
                    <Image fluid className="discountImg-2" src={image2} />
                </a>
                <div className="discountAction p-absolute">
                    <li className="productIcone" onClick={handleShow}><FaEye /></li>
                    <li className="productIcone"><FaHeart /></li>
                    <li className="productIcone"><FaSlidersH /></li>
                </div>
            </div>

            <div className="discountText">
                <div className="discountInnerText">
                    <div className="discountTitle">
                        <h4><a href="https://techbd71.com">{name}</a></h4>
                    </div>
                    <div className="discountPrice p-relative">
                        <span>${price}</span>
                        <span className="oldPrice">$110.00</span>
                    </div>
                    <div className="addToCart p-absolute">
                        <li onClick={handleShow} className="addToCartText">Add to cart <FaCartPlus /></li>
                    </div>
                </div>
            </div>
            <Modals product={product} show={show} close={handleClose}></Modals>
        </div>
    )
}

export default Carousel