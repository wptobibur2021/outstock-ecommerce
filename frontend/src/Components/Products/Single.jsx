import React from 'react'
import './Single.css'
import { Col, Image } from 'react-bootstrap'
import { FaEye, FaHeart, FaSlidersH, FaCartPlus } from "react-icons/fa"
const Single = () => {
    return (
        <Col xm sm={6} md={3} lg={3}>
            <div className="productItem">
                <div className="productImg p-relative">
                    <a href="https://techbd71.com">
                        <Image src="/assets/img/product/product-1.jpg" fluid />
                        <Image fluid className="productImg-2" src="/assets/img/product/product-2.jpg" />
                    </a>
                    <div className="productAction p-absolute">
                        <a className="productIcone" href="https://techbd71.com"><FaEye /></a>
                        <a className="productIcone" href="https://techbd71.com"><FaHeart /></a>
                        <a className="productIcone" href="https://techbd71.com"><FaSlidersH /></a>
                    </div>
                </div>

                <div className="productText">
                    <div className="productInnerText">
                        <div className="productTitle">
                            <h4><a href="https://techbd71.com">Wooden container Bowl</a></h4>
                        </div>
                        <div className="productPrice p-relative">
                            <span>$96.00</span>
                            <span className="oldPrice">$110.00</span>
                        </div>
                        <div className="addToCart p-absolute">
                            <a href="https://techbd71.com" className="addToCartText">Add to cart <FaCartPlus /></a>
                        </div>
                    </div>

                </div>
            </div>
        </Col>
    )
}

export default Single